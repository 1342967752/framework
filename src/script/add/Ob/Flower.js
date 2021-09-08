import DrawLine from "../gameMgr/DrawLine";
import Tools from "../UIFrame/Tools";
import ContinuousTweenMgr from "../Mgr/ContinuousTweenMgr";
import MapMgr from "../Mgr/MapMgr";
import Leaf from "./Leaf";
import FlowerBase from "./FlowerBase";
import GameMgr from "../Mgr/GameMgr";
/**
 * 花
 */
export default class Flower extends FlowerBase {

    constructor() {
        super();
        this.buildRang = 0.8;
        /**
         * 叶子
         */
        this.leafs = [];
        /**
         * 影藏叶子的index
         */
        this.hideLeafIndex = 0;
        this.posTemp = new Laya.Vector3();
    }




    init() {
        super.init();

        //记录开始的旋转
        Tools.getIns().getChildBySgin(this.owner, "leaf_", this.leafs);

        //打乱叶子的顺序
        this.leafs.sort((x, y) => {
            return -0.5 + Math.random();
        })
        this.flowerData.leafs = this.leafs;


      
    }


    /**
     * 向两边倒
     * @param {*} vec 
     */
    toBorder(vecs) {
        //先默认用第一个
        let vec = vecs[0].vec;
        let speedVal = vecs[0].speedVal;
        
        Laya.Vector3.subtract(this.getPos(), vec, this.tempV1);
        if(this.tempV1.x==0&&this.tempV1.z==0){
            return;
        }
        Laya.timer.clear(this, this.setDownRotEnd);
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


    isDeath() {
        return this.hideLeafIndex >= this.leafs.length;
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
        this.startLocalRot.cloneTo(this.owner.transform.rotationEuler);
        this.owner.transform.rotationEuler = this.owner.transform.rotationEuler;
        this.hideLeafIndex = 0;
        this.isInReborn = false;
        this.childNode.active = true;
        for (let i = 0; i < this.leafs.length; i++) {
            this.leafs[i].active = true;
        }
        this.resginst();
    }

    beeEndColloct(bee) {
        super.beeEndColloct(bee);



        if (this.isDeath()) {
            return;
        }

        Tools.getIns().createEf("Fx_BeeSuccess", this.huaFengPos.transform.position, MapMgr.getIns().owner, 1.5, true);
        //掉叶子(2躲)
        this.fallLeafs();
        
    }



    createLeaf(index, par) {
        let leaf = MapMgr.getIns().recycleMgr.getGo(this.flowerName);
        let leafMgr = null;
        if (!leaf) {
            leaf = Laya.Sprite3D.instantiate(this.leafs[index], par);
            leafMgr = leaf.addComponent(Leaf);
            leafMgr.init(this.flowerName);

        } else {
            leafMgr = leaf.getComponent(Leaf);
            par.addChild(leaf);
        }

        leaf.active = true;
        return leafMgr;
    }

    createFallLeafs(flowerName, par, callBack) {
        let leaf = MapMgr.getIns().recycleMgr.getGo(flowerName);
        let leafMgr = null;
        if (!leaf) {
            let path = G_ResPath.resPath.format(flowerName);
            G_NodePoolMgr.preload([path], () => {
                leaf = G_NodePoolMgr.getNode(path);
                par.addChild(leaf);
                leafMgr = leaf.addComponent(Leaf);
                leafMgr.init(flowerName);
                Tools.getIns().handlerFun(callBack, leafMgr);
            })


        } else {
            leafMgr = leaf.getComponent(Leaf);
            par.addChild(leaf);
            leaf.active = true;
            Tools.getIns().handlerFun(callBack, leafMgr);
        }
    }



    /**
     * 掉落叶子
     */
    fallLeafs(isTween, callBack) {

        if (this.isDeath()) {
            return;
        }

        if (isTween) {

            let flowerName = "bian_{0}_1".format(this.flowerData.id);

            this.createFallLeafs(flowerName, MapMgr.getIns().owner, (leafMgr) => {
                let pos = this.posTemp;
                //算出偏移
                pos.x = (-0.5 + Math.random()) * 10;
                pos.z = (-0.5 + Math.random()) * 10;
                let startPos = this.leafs[this.hideLeafIndex].transform.position;
                startPos.cloneTo(leafMgr.owner.transform.position);
                leafMgr.owner.transform.position = leafMgr.owner.transform.position;

                let rot = this.tempV1;
                rot.setValue(Math.random() * 180, Math.random() * 180, Math.random() * 180);

                rot.cloneTo(leafMgr.owner.transform.rotationEuler);
                leafMgr.owner.transform.rotationEuler = leafMgr.owner.transform.rotationEuler;


                Laya.Vector3.add(startPos, pos, pos);
                pos.y = 0.84;
                leafMgr.toTarget(pos, this);
            })
        }

        this.leafs[this.hideLeafIndex].active = false;
        this.hideLeafIndex++;


        //判断是否重生
        if (this.isDeath()) {
            this.toDeath();
            this.unResgist();
            this.reborn();
        }
    }

    toDeath(){

    }
    
}

