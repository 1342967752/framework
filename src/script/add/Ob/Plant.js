import Flower from "./Flower";
import ColBase from "./ColBase";
import Tools from "../UIFrame/Tools";
import FlowerBig from "./FlowerBig";
import FlowerSmall from "./FlowerSmall";
/**
 * 植物块
 */
export default class Plant extends ColBase {

    constructor() {
        super();
        this.flowers = [];


        this.curCheckFlowerIndex = 0;
        this.checkFlowerCountInFrame = 5;

        //记录固定帧数的玩家位置
        this.playerPoss = [];

        this.checkFlowerFrame = 10;
        this.curCheckFrame = 0;

        this.findArray = [];

        /**
        * 花块类型
        */
        this.plantType = 0;
    }

    init() {
        super.init();

        let temp = this.owner.name.split('_');
        this.plantType = parseInt(temp[1]);

        let flowers = [];
        Tools.getIns().getChildBySginInFirstChild(this.owner, "Flower_", flowers);
        let flowerData = null;
        for (let i = 0; i < flowers.length; i++) {

            let temp = flowers[i].name.split('_');
            let id = parseInt(temp[1]);
            let mgr;
            if (id == 5 || id == 7 || id == 8) {
                mgr = flowers[i].addComponent(FlowerBig);
            } else if (id == 6) {
                mgr = flowers[i].addComponent(FlowerSmall);
            }
            else {
                mgr = flowers[i].addComponent(Flower);
            }
            mgr.init();
            mgr.ownerPlane=this;
            flowerData = G_GameDB.getFlowerByID(id);
            mgr.setPlantType(this.plantType, flowerData);
            this.flowers.push(mgr);
        }

        this.checkFlowerCountInFrame = Math.ceil(flowers.length / this.checkFlowerFrame);


    }

    getFlowers() {
        return this.flowers;
    }

    unResgistFlower(flower){
        let index=this.flowers.indexOf(flower);
        if(index>=0){
            this.flowers.splice(index,1);
        }
    }

    resgistFlower(flower){
        if(this.flowers.indexOf(flower)<0){
            this.flowers.push(flower);
        }
    }

    /**
     * 判断是否有碰撞的物体
     * @param {*} node 
     * @param {*} dis 距离的平方
     */
    checkCol(node, dis, disSqrt, mgr) {

        let temp = null;


        if (this.curCheckFlowerIndex >= this.flowers.length) {
            this.curCheckFlowerIndex = 0;
        }



        //检查花朵
        let starIndex = this.curCheckFlowerIndex;
        for (let i = this.curCheckFlowerIndex; i < this.flowers.length; i++) {

            
            //分针计算
            if (this.curCheckFlowerIndex - starIndex > this.checkFlowerCountInFrame) {
                break;
            }
            this.curCheckFlowerIndex++;
            temp = this.flowers[i];


            //已经死亡
            if (temp.isDeath()) {
                //判断是否移出
                if (temp.isInLastArray) {
                    temp.isInLastArray = false;
                    temp.removeCols(mgr);
                }

                continue;
            }

            temp.toPlayerDis = Tools.getVecSquared(node.transform.position, temp.getPos(), temp.buildRang, disSqrt);
            if (temp.toPlayerDis < 0) {
                if (!temp.isInLastArray) {
                    temp.isInLastArray = true;
                    temp.addCols(mgr);
                }
            } else {
                if (temp.isInLastArray) {
                    temp.isInLastArray = false;
                    temp.removeCols(mgr);
                }
            }




        }
    }

    getAllItemArrays() {

        return this.flowers.concat(this.stores);
    }

    /**
     * 把再距离内的碰撞体加到新的数组
     * @param {*} dis 
     * @param {*} inArray 
     * @param {*} newArray 
     */
    addColInNewRang(dis, inArray, newArray) {
        for (let i = inArray.length - 1; i >= 0; i--) {
            if (inArray[i].toPlayerDis < dis) {
                newArray.push(inArray[i]);
            }
        }
    }

    /**
     * 切换地域的时候清除数据
     */
    closePlane() {

    }

    openPlane() {

    }
}