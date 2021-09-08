import GameMgr from "../Mgr/GameMgr";
import MapMgr from "../Mgr/MapMgr";
import Tools from "../UIFrame/Tools";

export default class BeeMgr {
    constructor() {
        this.ownerBeas = [];
        this.isInAddBee = false;
        //蜜蜂最大的数量
        this.beeMaxNum = 20;

        this.curMaxBeeId = 1;//当前最大的蜜蜂id
    }


    static getIns() {
        if (!this._ins) {
            this._ins = new BeeMgr();
            if (G_PlatHelper.isWINPlatform()) {
                window.G_BeaMgr = this._ins;
            }
        }

        return this._ins;
    }

    /**
       * 获得合成的蜜蜂id
       */
    getConbineBeeId() {
        let conbineData = { beeId: 0, bees: [] };
        let maxConbineId = BeeMgr.getIns().curMaxBeeId;
        let bees = BeeMgr.getIns().ownerBeas;
        for (let i = 1; i <= maxConbineId; i++) {
            for (let j = 0; j < bees.length; j++) {
                if (i == bees[j].beaData.beeId) {
                    conbineData.bees.push(bees[j]);
                }

            }

            if (conbineData.bees.length >= 3) {
                conbineData.beeId = i;
                break;
            } else {
                conbineData.bees.splice(0, bees.length);
            }
        }

        return conbineData;
    }

    /**
     * 初始化蜜蜂
     * @param {*} bees 
     */
    initBee(callBack) {
        let beeDatas = this.getAllBeeData();

        // if(beeDatas.length==0){
        //     for(let i=0;i<30;i++){
        //         beeDatas.push({id:1});
        //     }
        // }

        if (beeDatas.length == 0) {
            Tools.getIns().handlerFun(callBack);
            return;
        }
        this.isInAddBee = true;
        let index = 0;
        let loadEnd = () => {
            index++;
            if (index == beeDatas.length) {
                this.isInAddBee = false;
                Tools.getIns().handlerFun(callBack);
            }
        }

        for (let i = 0; i < beeDatas.length; i++) {

            let beeConfig = G_GameDB.getBeeByID(beeDatas[i].id);
            let index = i;
            MapMgr.getIns().loadBee(beeConfig.model, (mgr) => {
                this.addBee(mgr, beeDatas[index]);
                loadEnd();
            })
        }
    }

    canOpreateBee() {
        return !this.isInAddBee;
    }

    /**
     * 判断蜜蜂是否达最大值
     * @returns 
     */
    checkIsBeeMax() {
        return this.beeMaxNum <= this.ownerBeas.length;
    }

    createBee(beeId) {
        this.isInAddBee = true;
        let beeData = GameMgr.getPlayerInfo().addBee(beeId);
        let beeConfig = G_GameDB.getBeeByID(beeData.id);
        this.isInAddBee = true;
        MapMgr.getIns().loadBee(beeConfig.model, (mgr) => {
            this.addBee(mgr, beeData);
            this.isInAddBee = false;
        })
    }

    /**
     * 增加一支蜜蜂
     * @param {*} bee 
     * @param {*} beeConfig 
     */
    addBee(bee, beeConfig) {
        if (this.ownerBeas.indexOf(bee) < 0) {

            //记录最大的id
            if (this.curMaxBeeId < beeConfig.id) {
                this.curMaxBeeId = beeConfig.id;
            }
            bee.setBeeData(beeConfig);
            bee.setPlayer(MapMgr.getIns().playerMgr);
            bee.beePosRestart();
            this.ownerBeas.push(bee);
        }

    }


    checkCanAddBee(){
        if (!BeeMgr.getIns().canOpreateBee()) {
            G_PlatHelper.showToast("蜜蜂正在创建!");
            return false;
        }

        //蜜蜂已经到达最大值
        if (BeeMgr.getIns().checkIsBeeMax()) {
            G_PlatHelper.showToast("蜜蜂已经数量已经到达上限,请合成蜜蜂!");
            return false;
        }

        return true;
    }

    //移除蜜蜂
    removeBees(bees, beeId) {
        for (let i = 0; i < bees.length; i++) {
            let index = this.ownerBeas.indexOf(bees[i]);
            if (index >= 0) {
                this.ownerBeas.splice(index, 1);
                bees[i].desBee();
            }
        }

        GameMgr.getPlayerInfo().upBee(beeId, bees);
    }

    getAllBeeData() {
        return GameMgr.getPlayerInfo().getAllBeeDatas();
    }

    getBeeDataBtId(id) {
        return GameMgr.getPlayerInfo().getBeeDataById(id);
    }



    /**
   * 获得空闲的蜜蜂
   */
    getSpaceBee() {
        for (let i = 0; i < this.ownerBeas.length; i++) {
            if (this.ownerBeas[i].isSpace()) {
                return this.ownerBeas[i];
            }
        }

        return null;
    }

    /**
     * 结束所有蜜蜂采蜜
     */
    endAllBeeCollectFlower() {
        for (let i = 0; i < this.ownerBeas.length; i++) {
            this.ownerBeas[i].endFlower();
        }
    }

    /**
     * 结束蜜蜂的所有的行动
     */
    endAllBeeAction() {
        for (let i = 0; i < this.ownerBeas.length; i++) {
            this.ownerBeas[i].endFlower();
            this.ownerBeas[i].beePosRestart();
        }
    }

    forceEndColloct() {
        for (let i = 0; i < this.ownerBeas.length; i++) {
            this.ownerBeas[i].endFlower();
        }
    }

    getAllBees() {
        return this.ownerBeas;
    }
}