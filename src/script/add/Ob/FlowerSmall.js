import DrawLine from "../gameMgr/DrawLine";
import GameMgr from "../Mgr/GameMgr";
import MapMgr from "../Mgr/MapMgr";
import Tools from "../UIFrame/Tools";
import FlowerBase from "./FlowerBase";

export default class FlowerSmall extends FlowerBase {

    constructor() {
        super();
        this.buildRang=0.6;
        this.dead = false;
    }

    init() {
        super.init();
    }

    /**
    * 向两边倒
    * @param {*} vec 
    */
    toBorder(vecs) {
        //先默认用第一个
        let vec = vecs[0].vec;
        let speedVal = vecs[0].speedVal;

        Laya.timer.clear(this, this.setDownRotEnd);
        Laya.Vector3.subtract(this.getPos(), vec, this.tempV1);
        this.tempV1.y = 20;
        Laya.Vector3.cross(this.tempV1, Tools.getIns().upVec, this.tempV1);
        Laya.Vector3.normalize(this.tempV1, this.tempV1);
        //算出最大的旋转角
        Laya.Vector3.scale(this.tempV1, -this.maxRotAngle, this.tempV1);



        let speed = this.rotSpeed * speedVal;
        //算出差值
        Laya.Vector3.subtract(this.tempV1, this.owner.transform.localRotationEuler, this.tempV1);
        //时间
        let time = Laya.Vector3.scalarLength(this.tempV1) / (speed * 60) * 1000;

        Laya.Vector3.normalize(this.tempV1, this.tempV1);
        Laya.Vector3.scale(this.tempV1, speed, this.tempV1);
        this.curTime = 0;
        this.rotTime = time;
        this.isRot = 1;
    }

    onUpdate() {
        if (this.isInReborn) {
            this.curTime += Laya.timer.delta;
            if (this.curTime >= this.flowerData.reBornTime) {
                this.toReborn();
            }
        } else {
            if (this.isRot == 1) {
                this.curTime += Laya.timer.delta;
                this.node.transform.rotate(this.tempV1, false, false);
                if (this.curTime > this.rotTime) {
                    this.setDownRotEnd();
                }
            } else if (this.isRot == 2) {
                this.toRot.cloneTo(this.node.transform.localRotationEuler);
                this.node.transform.localRotationEuler = this.node.transform.localRotationEuler;
            }

            if (this.isScale) {
                let scale = this.node.transform.localScale;
                this.scaleTemp.cloneTo(scale);
                this.node.transform.localScale = scale;
            }
        }
    }

    /**
   * 复活
   * @returns 
   */
    reborn() {

        if (this.isInReborn) {
            return;
        }
        
        this.isInReborn = true;
        this.childNode.active = false;
        this.curTime = 0;
    }


    toReborn() {
        this.resginst();
        this.dead = false;
        this.isInReborn = false;
        this.childNode.active = true;
    }

    beeEndColloct(bee) {
        super.beeEndColloct(bee);



        if (this.isDeath()) {
            return;
        }

        Tools.getIns().createEf("Fx_BeeSuccess", this.huaFengPos.transform.position, MapMgr.getIns().owner, 1.5, true);

    }

    createLeaf() {
        return null;
    }

    isDeath() {
        return this.dead;
    }

    fallLeafs(isTween, callback) {
        this.dead = true;
        if (this.dead) {
            this.unResgist();
            this.reborn();
        }
        MapMgr.getIns().playerMgr.addHoney(this.flowerData.fallHoney);
        Tools.getIns().handlerFun(callback);
    }
}