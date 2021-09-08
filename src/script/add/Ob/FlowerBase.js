import DrawLine from "../gameMgr/DrawLine";
import ContinuousTweenMgr from "../Mgr/ContinuousTweenMgr";
import GameMgr from "../Mgr/GameMgr";
import LevelMgr from "../Mgr/LevelMgr";
import MapMgr from "../Mgr/MapMgr";
import Tools from "../UIFrame/Tools";
import ColBase from "./ColBase";

export default class FlowerBase extends ColBase {
    constructor() {
        super();
        this.ownerPlane = null;//所属的plane
        this.colType = 2;
        this.colloctPos = [];
        this.curTime = 0;
        this.huaFengPos = null;
        this.isInReborn = false;
        this.startLocalRot = new Laya.Vector3();
        //是否被占领
        this.isBeingStand = false;
        this.flowerData = new FlowerData();
        this.scaleTemp = new Laya.Vector3();
        this.scaleTween = new ContinuousTweenMgr();

        let vals = [];
        vals.push({ time: 200, prop: { x: 1, y: 1, z: 1 }, ease: Laya.Ease.linearOut });
        vals.push({ time: 200, prop: { x: 1.2, y: 1.2, z: 1.2 }, ease: Laya.Ease.linearOut });
        vals.push({ time: 200, prop: { x: 1, y: 1, z: 1 }, ease: Laya.Ease.linearIn });
        this.scaleTween.setTarget(this.scaleTemp);
        this.scaleTween.setTweenVals(vals);
        this.scaleTween.setEndCallBack(() => {
            this.isScale = false;
        })
        this.isScale = false;
        this.flowerName = null;
        this.beeCarryPos = null;

        this.tempV1 = new Laya.Vector3();
        this.tempV2 = new Laya.Vector3();
        this.tempRot = new Laya.Quaternion();
        this.rotTween = null;
        this.toRot = new Laya.Vector3();
        this.isRot = 0;
        this.rotSpeed = 4;

        this.state = 0;//0默认的静止状态 1向两边倾斜 

        this.rotTime = 0;

        this.maxRotAngle = 45;

    }

    init() {
        super.init();
        this.huaFengPos = Tools.getIns().findSprite3D(this.owner, "huaFengPos");
        this.owner.transform.rotationEuler.cloneTo(this.startLocalRot);
        this.childNode = this.owner.getChildByName("Model");
        this.beeCarryPos = this.owner.getChildByName("beeCarryPos");
        Tools.getIns().getChildBySgin(this.owner, "colloctPos_", this.colloctPos);
    }

    /**
     * 根据这个类型生成花的数据
     * @param {*} plantType 
     */
    setPlantType(plantType, flowerData) {
        this.flowerName = "Flower_" + flowerData.id;

        let growData = G_GameDB.getGrowUpByID(LevelMgr.getIns().hurtPoint[plantType]);
        this.flowerData.id = flowerData.id;
        this.flowerData.hurtPoint = growData.pHurt;
        this.flowerData.fallHoney = LevelMgr.getIns().fallHoney[plantType];
        this.flowerData.reBornTime = flowerData.reBornTime * 1000;

    }


    toReborn() {

    }

    toBorder(vecs) {

    }

    getCollectPos() {
        let index = Tools.getIns().randomNum(0, this.colloctPos.length - 1);
        return this.colloctPos[index];
    }

    /**
     * 显示特效和动画
     */
    showHoneyAnim() {
        Tools.getIns().createEf("Fx_hufen", this.huaFengPos.transform.position, MapMgr.getIns().owner, 1.5, true);
    }


    beeStartCollect(bee) {
        this.isBeingStand = true;
    }

    beeEndColloct(bee) {

        this.isBeingStand = false;
    }

    canBeingCollect() {
        return !this.isBeingStand && !this.isDeath();
    }

    isDeath() {
        return false;
    }


    /**
     * 刀进入
     * @param {*} mgr 
     */
    daoEnter(mgr) {
        this.beKang(mgr);
    }

    /**
     * 倒推出
     * @param {*} mgr 
     */
    daoExit(mgr) {

    }

    /**
     * 被砍击
     * @param {*} mgr 
     */
    beKang(mgr) {
        G_PlatHelper.vibratePhone(false);
        this.scaleTween.end();
        this.scaleTween.play();
        this.isScale = true;
        this.showHoneyAnim();
        //判断是否掉花蜜
        if (!mgr.canHurtFlower(this.flowerData.hurtPoint)) {
            return;
        }

        if (this.isDeath()) {
            return;
        }

        //掉落花蜜
        this.fallLeafs(true);
        this.fallLeafs(true);
    }

    fallLeafs(isTween, callBack) {
        Tools.getIns().handlerFun(callBack);
    }

    setDownRotEnd() {
        this.isRot = 2;
        this.node.transform.rotationEuler.cloneTo(this.toRot);
        this.rotTween = Laya.Tween.to(this.toRot, { x: this.startLocalRot.x, y: this.startLocalRot.y, z: this.startLocalRot.z }, 2000, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
            this.isRot = 0;
            if (this.rotTween) {
                this.rotTween.clear();
                this.rotTween.recover();
                this.rotTween = null;
            }
        }), 0, true, false);
    }


    addCols(mgr) {
        super.addCols(mgr);
        this.toBorder(MapMgr.getIns().playerMgr.playerPoss);
    }

    unResgist() {
        this.removeCols(MapMgr.getIns().playerMgr);//直接回车掉
        this.ownerPlane.unResgistFlower(this);
    }

    resginst() {
        this.ownerPlane.resgistFlower(this);
    }
}


export class FlowerData {
    constructor() {
        this.id = 0;
        //能产生花蜜的最小攻击力
        this.hurtPoint = 20;
        //一次掉落的花蜜
        this.fallHoney = 20
        this.curHoney = this.honeyMax;
        /**
         * 重生时间
         */
        this.reBornTime = 10000;

        /**
         * 是否在重生
         */
        this.isInReborn = false;
    }





}
