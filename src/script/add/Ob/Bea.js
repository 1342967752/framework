import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";
import PlayerActor from "../ctrol/PlayerActor";
import PlayerCtrol from "../ctrol/PlayerCtrol";
import AnimName from "../gameMgr/AnimName";
import MapMgr from "../Mgr/MapMgr";
import GrowUp from "../gameMgr/GrowUp";
export default class Bea extends PlayerActor {

    constructor() {
        super();
        this.rotTemp_pos = null;
        this.playerMgr = null;
        this.moveRang = 6;
        this.targetPos = new Laya.Vector3();
        //当前移动是否移动完成
        this.isMoveEnd = true;
        this.moveSpeed = 0.2;//移动速度
        this.collectSpeed = 0.5;//移动到花朵的速度
        this.moveTemp = new Laya.Vector3(0, 0, this.moveSpeed);
        this.tempV1 = new Laya.Vector3();
        this.tempV3 = new Laya.Vector3();
        this.tempRot = new Laya.Quaternion();

        //算出当前运动的时间
        this.moveTime = 0;
        this.curMoveTime = 0;
        this.tempV2 = new Laya.Vector3();
        this.lastMoveTime = -1;

        //蜜蜂数据
        this.beaData;

        //当前的花朵
        this.targetFlower = null;
        this.tarMovePos = null;
        this.curCollectTimer = 0;
        this.curAllTime = 0;

        this.fowerCarrayPos = null;
        this.carrayLeaf = null;

        this.roadCount=3;
        this.curRoadCount=0;
    }



    init() {
        super.init();
        this.roadCount=2+Math.floor(3*Math.random());
        this.rotTemp_pos = Tools.getIns().returnSprite3D(G_UIHelper.seekNodeByName(this.owner, "rotTemp_pos"));
        this.changeState(0);
        this.fowerCarrayPos = Tools.getIns().findSprite3D(this.owner, "flower_pos");
        G_Event.addEventListerner(G_EventName.EN_BEESPEEDUP, this.speedUpCallBack, this);
    }

    onDestroy() {
        super.onDestroy();
        G_Event.removeEventListerner(G_EventName.EN_BEESPEEDUP, this.speedUpCallBack, this);
    }

    /**
     * 速度升级回调
     */
    speedUpCallBack() {
        this.setSpeedTime();
    }

    /**
     * 设置蜜蜂的成长数据
     * @param {*} id 
     */
    setBeeData(beeData) {
        //蜜蜂数据
        this.beaData = new BeeData();
        this.beaData.beeId = beeData.id;
        let beeConfig = G_GameDB.getBeeByID(beeData.id);
        this.beaData.initColloctTime = beeConfig.collectSpeed * 1000;

        this.setSpeedTime();

    }

    setSpeedTime() {

        let speedLv = GameMgr.getPlayerInfo().getBeeSpeedLv();
        let group;
        if (speedLv > GrowUp.getIns().maxId) {
            group = G_GameDB.getGrowUpByID(GrowUp.getIns().maxId);
        } else {
            group = G_GameDB.getGrowUpByID(speedLv);
        }

        this.beaData.collectAllTime = this.beaData.initColloctTime - this.beaData.initColloctTime * group.beeSpeedCut;

        //不能小于0.3
        let min = this.beaData.initColloctTime * 0.3;
        if (this.beaData.collectAllTime < min) {
            this.beaData.collectAllTime = min;
        }

    }

    setPlayer(mgr) {
        if (mgr instanceof PlayerCtrol) {
            this.playerMgr = mgr;
        }
    }

    /**
     * 是否可以查找下一个位置点
     */
    canFindNextTarget() {
        if (this.lastMoveTime == -1) {
            return true;
        }

        this.curRoadCount++;
        if(this.curRoadCount<this.roadCount){
            return true;
        }
        this.curRoadCount=0;
        return Laya.timer.currTimer - this.lastMoveTime > 300;
    }

    changeStateAction(state) {
        if (state == 0) {//idle状态
            this.playAnim(AnimName.getIns().Idle);
            //切回idle时清除目标位置
            this.isMoveEnd = true;
            this.lastMoveTime = -1;
        } else if (state == 1) {//飞向采蜜的途中
            this.isMoveEnd = true;
            this.lastMoveTime = -1;
        } else if (state == 2) {//到达采蜜的地点
            this.playAnim(AnimName.getIns().Cast_Spell);
            this.startColloct();
        } else if (state == 3) {//飞向售出的地方

        }else if(state==4){

        }
    }

    /**
     * 是否空闲
     * @returns 
     */
    isSpace() {
        return this.state == 0 && !this.beaData.isCollectFull();
    }

    onUpdate() {
        if (!GameMgr.getIns().isGameStart()) {
            return;
        }

        switch (this.state) {
            case 0://idle状态
                this.idleState();
                break;
            case 1:
                if (this.moveToPos(this.tarMovePos)) {
                    //位置调整
                    this.changeState(2);
                }
                break;
            case 2:
                this.inColloct();
                break;
            case 3:
                //卖完回到idle
                if (this.moveToPos(this.tarMovePos)) {
                    this.endSell();
                }
                break;
            case 4://将收集的蜂蜜放到玩家这里
                if (this.moveToPos(MapMgr.getIns().playerMgr.contain_pos,this.moveSpeed)) {
                    //位置调整
                    this.changeState(0);
                }
                break;


        }
    }

    /**
     * 开始采集
     */
    startColloct() {
        this.curCollectTimer = 0;
        this.curAllTime = 0;
    }

    /**
     * 收集花蜜中
     */
    inColloct() {
        this.curCollectTimer += Laya.timer.delta;
        this.curAllTime += Laya.timer.delta;
        if (this.curCollectTimer >= this.beaData.collectTime) {
            this.curCollectTimer = 0;
            this.collectOnce();
        }


    }

    collectOnce() {
        //对象不再 直接回车
        if (!this.targetFlower || this.targetFlower.isDeath()) {
            this.endColloct();
            return;
        }
        //显示特效
        this.targetFlower.showHoneyAnim();


        //大于总时长结束采集
        if (this.curAllTime >= this.beaData.collectAllTime) {
            this.endColloct();
        }

    }

    /**
     * 结束采集
     */
    endColloct() {
        this.endFlower();
        this.checkHasFlower();
    }

    //检查是否还有花朵
    checkHasFlower() {
        if (!MapMgr.getIns().playerMgr.isStand()) {
            return;
        }

        if (!MapMgr.getIns().curMap) {
            return;
        }
        MapMgr.getIns().playerMgr.checkHasBeeToCollect(this, MapMgr.getIns().curMap.getLastFlowers());

    }

    //移动到花的位置
    moveToPos(pos,speed=this.moveSpeed) {
        if (this.isMoveEnd) {

            Laya.Vector3.subtract(pos.transform.position, this.node.transform.position, this.tempV1);
            //算出运动时间
            this.moveTime = Laya.Vector3.scalarLength(this.tempV1) / (60 * speed) * 1000;

            //算出运动方向
            Laya.Vector3.normalize(this.tempV1, this.moveTemp);
            Laya.Vector3.scale(this.moveTemp, speed, this.moveTemp);
            this.curMoveTime = 0;
            this.getRotByTarget(pos.transform.position, this.tempRot);
            this.isMoveEnd = false;
        }

        this.curMoveTime += Laya.timer.delta;
        Laya.Quaternion.lerp(this.node.transform.rotation, this.tempRot, this.curMoveTime / this.moveTime, this.node.transform.rotation);
        this.node.transform.rotation = this.node.transform.rotation;

        this.node.transform.translate(this.moveTemp, false);

        if (this.curMoveTime >= this.moveTime) {

            pos.transform.position.cloneTo(this.node.transform.position);
            this.node.transform.position = this.node.transform.position;

            pos.transform.rotation.cloneTo(this.node.transform.rotation);
            this.node.transform.rotation = this.node.transform.rotation;
            this.isMoveEnd = true;
            return true;

        }

        return false;
    }

    /**
     * 去采蜜
     */
    toFlower(flower) {
        this.changeState(1);
        this.curMoveTime = 0;
        this.isMoveEnd = true;
        this.targetFlower = flower;
        this.tarMovePos = this.targetFlower.getCollectPos();
        flower.beeStartCollect(this);
    }

    /**
     * 去售出
     * @param {*} storeMgr 
     */
    toSell(store) {
        this.curMoveTime = 0;
        this.isMoveEnd = true;
        this.storeMgr = store;
        this.tarMovePos = store.getBeeSellPos();
        this.changeState(3);
    }

    /**
     * 结束sell
     */
    endSell() {
        let honey = this.beaData.getHoney();
        this.beaData.clearHoney();
        this.storeMgr.sellOne(honey);
        this.clearLeaf();
        this.changeState(0);
    }

    toCarrayLeaf(leaf,pos) {
        this.carrayLeaf = leaf;
        this.carrayLeaf.setPos(pos);
    }

    clearLeaf() {
        if (this.carrayLeaf) {
            this.carrayLeaf.recycle();
            this.carrayLeaf = null;
        }
    }


    /**
     * 结束采蜜
     */
    endFlower() {
        //回到idle状态
        if (this.targetFlower) {
            //花蜜已满
            if (MapMgr.getIns().playerMgr.isHoneyFull()) {
                //直接拿着叶子
                this.beaData.setHoney(this.targetFlower.flowerData.fallHoney);
                let leaf = this.targetFlower.createLeaf(0, this.fowerCarrayPos);
                if (leaf) {
                    this.toCarrayLeaf(leaf,this.targetFlower.beeCarryPos);
                }
                this.changeState(0);
            } else {
                this.changeState(4);
                //天机蜂蜜
                MapMgr.getIns().playerMgr.addHoney(this.targetFlower.flowerData.fallHoney);
            }
            this.targetFlower.beeEndColloct(this);
            this.targetFlower = null;
        } else {
            this.changeState(0);
        }


    }

    /**
     * 根据目标位置拿到四元数
     */
    getRotByTarget(targetPos, rot) {
        //旋转角度
        Laya.Vector3.subtract(targetPos, this.node.transform.position, this.tempV1);
        Tools.getIns().resetTransform(this.rotTemp_pos);
        //计算出四元数
        this.rotTemp_pos.transform.getUp(this.tempV2);
        Laya.Vector3.subtract(this.rotTemp_pos.transform.position, this.tempV1, this.tempV3);
        this.rotTemp_pos.transform.lookAt(this.tempV3, this.tempV2, false);
        this.rotTemp_pos.transform.rotation.cloneTo(rot);
    }

    /**
     * 跟随玩家的头顶
     */
    idleState() {
        if (this.isMoveEnd && this.canFindNextTarget()) {
            this.lastMoveTime = Laya.timer.currTimer;
            this.curMoveTime = 0;
            this.randomPos(this.targetPos);
            //旋转角度
            Laya.Vector3.subtract(this.targetPos, this.node.transform.position, this.tempV1);
            //算出运动时间
            this.moveTime = Laya.Vector3.scalarLength(this.tempV1) / (60 * this.moveSpeed) * 1000;
            this.getRotByTarget(this.targetPos, this.tempRot);
            this.moveTemp.setValue(0, 0, this.moveSpeed)
            this.isMoveEnd = false;
        }

        if (this.isMoveEnd) {
            return;
        }

        this.curMoveTime += Laya.timer.delta;
        Laya.Quaternion.lerp(this.node.transform.rotation, this.tempRot, this.curMoveTime / this.moveTime, this.node.transform.rotation);
        this.node.transform.rotation = this.node.transform.rotation;
        this.node.transform.translate(this.moveTemp, true);

        if (this.curMoveTime >= this.moveTime) {
            this.isMoveEnd = true;
        }
    }



    /**
     * 随机一个移动位置
     */
    randomPos(pos) {
        let center = this.playerMgr.bea_center.transform.position;
        pos.x = center.x - this.moveRang * (0.5 - Math.random());
        pos.y = center.y - this.moveRang * (0.5 - Math.random());
        pos.z = center.z - this.moveRang * (0.5 - Math.random());
    }

    /**
     * 重新设置
     */
    beePosRestart() {
        let pos = new Laya.Vector3();
        this.randomPos(pos);
        this.setStartPos(pos, new Laya.Vector3(0, 0, 0));
        this.lastMoveTime = -1;
        this.changeState(0);
    }

    desBee() {
        Laya.timer.clearAll(this);
        this.endFlower();
        this.clearLeaf();
        this.owner.destroy();
    }
}

/**
 * 蜜蜂的数据
 */
export class BeeData {
    constructor() {
        this.beeId = 0;
        this.collectTime = 1000;//一次采集的时间(多久采集一次)
        this.collectAllTime = 10000;//采集的总时长

        //如果叼了叶子就满了
        this.honey = 0;

        this.initColloctTime = 1000;
    }

    /**
     * 是否已经收满
     * @returns 
     */
    isCollectFull() {
        return this.honey > 0;
    }


    hasHoney() {
        return this.honey > 0;
    }

    setHoney(val) {
        this.honey = val;
    }

    clearHoney() {
        this.honey = 0;
    }

    getHoney() {
        return this.honey;
    }
}