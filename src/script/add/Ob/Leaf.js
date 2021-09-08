import MapMgr from "../Mgr/MapMgr";
import Tools from "../UIFrame/Tools";
export default class Leaf extends Laya.Script {
    constructor() {
        super();
        this.targetPos = new Laya.Vector3();
        this.startPos = new Laya.Vector3();

        this.node = null;
        this.a = -15;
        this.leafName = null;

        this.jumpTween = null;
        this.jumpTempVec = new Laya.Vector3();
        this.moveSpeed = 0.1;
        this.moveTemp = new Laya.Vector3();
        this.curMoveTime = 0;
        this.moveTime = 500;

        this.targetFlower = null;

        this.curState = -1;
    }

    init(leafName) {
        this.leafName = leafName;
        this.node = Tools.getIns().returnSprite3D(this.owner);
    }

    setPos(pos) {
        pos.transform.localPosition.cloneTo(this.owner.transform.localPosition)
        this.owner.transform.localPosition=this.owner.transform.localPosition;
        pos.transform.localRotationEuler.cloneTo(this.owner.transform.localRotationEuler);
        this.owner.transform.localRotationEuler=this.owner.transform.localRotationEuler;
    }

    changeState(state) {
        if (state == this.curState) {
            return;
        }

        this.curState = state;

        if (state == 1) {

        } else if (state == 2) {
            this.curMoveTime = 0;
        } else if (state == 3) {
            this.curMoveTime = 0;
            G_SoundMgr.playSound(GG_SoundName.SN_Mp3.format("collect"));
        } else if (state == 4) {
            this.curMoveTime = 0;
        }
    }

    /**
     * 飞到目标位置
     * @param {*} pos 
     */
    toTarget(pos, targetFlower) {
        this.targetFlower = targetFlower;
        Laya.Vector3.subtract(pos, this.node.transform.position, this.moveTemp);
        Laya.Vector3.normalize(this.moveTemp, this.moveTemp);
        Laya.Vector3.scale(this.moveTemp, this.moveSpeed, this.moveTemp);

        let jumpY = this.node.transform.position.y * 0.5 + this.node.transform.position.y;
        this.jumpTween = Laya.Tween.to(this.jumpTempVec, { y: jumpY }, 200, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
            this.clearJumpTween();
            this.jumpTween = Laya.Tween.to(this.jumpTempVec, { y: pos.y }, 500, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
                this.clearJumpTween();
                this.jumpEnd();
            }), 0, true, false);
        }), 0, true, false);

        this.changeState(1);
    }

    clearJumpTween() {
        if (this.jumpTween) {
            this.jumpTween.clear();
            this.jumpTween.recover();
            this.jumpTween = null;
        }
    }

    onUpdate() {

        
        switch (this.curState) {
            case 1://飞出去
                this.node.transform.translate(this.moveTemp, false);
                let pos = this.node.transform.position;
                pos.y = this.jumpTempVec.y;
                this.node.transform.position = pos;
                break;
            case 2://停顿一段时间再执行
                this.curMoveTime += Laya.timer.delta;
                if (this.curMoveTime > 500) {
                    this.changeState(3);
                }
                break;
            case 3://飞向玩家
                this.curMoveTime += Laya.timer.delta;
                let val = this.curMoveTime / this.moveTime;
                val = val > 1 ? 1 : val;
                let pos1 = this.node.transform.position;
                Laya.Vector3.lerp(pos1, MapMgr.getIns().playerMgr.getPos(), val, pos1);
                this.node.transform.position = pos1;

                if (val == 1) {
                    this.isMoveToPlayer = false;
                    this.movePlayerEnd();
                }
                break;
            case 4://自动回收
                this.curMoveTime += Laya.timer.delta;
                if (this.curMoveTime >= 3000) {
                    this.recycle();
                    this.isToRecycle = false;
                }
                break;
        }

    }

    jumpEnd() {
        if (MapMgr.getIns().playerMgr.isHoneyFull()) {
            this.changeState(4);

        } else {

            this.changeState(2);


        }
    }

    movePlayerEnd() {
        MapMgr.getIns().playerMgr.addHoney(this.targetFlower.flowerData.fallHoney);
        this.recycle();
    }

    recycle() {
        this.changeState(-1);

        MapMgr.getIns().recycleMgr.recycle(this.leafName, this.owner);
    }
}