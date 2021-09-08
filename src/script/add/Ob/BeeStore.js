import BeeMgr from "../gameMgr/BeeMgr";
import GrowUp from "../gameMgr/GrowUp";
import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";
import Store from "./Store";
/**
 * 蜜蜂商店
 */
export default class BeeStore extends Store {
    constructor() {
        super();
        this.storeType = 2;
        this.buildRang = 2.5;
    }


    /**
     * 增加蜜蜂
     */
    buyBee(btn,callback) {

        if(!BeeMgr.getIns().checkCanAddBee()){
            return ;
        }


        let gold = GrowUp.getIns().getBeeBuyTimesGold(GameMgr.getPlayerInfo().getBuyBeeTimes());

        let endFun = () => {
            GameMgr.getPlayerInfo().buyBee();
            //先不计算消耗
            BeeMgr.getIns().createBee(1);
            Tools.getIns().handlerFun(callback);
        }


        if (!Tools.getIns().canUseItemNotTips(gold, 3)) {
            Tools.getIns().shareOrAd(btn, () => {
                endFun();
            })

        } else {
            endFun();
            Tools.getIns().useItem(gold, 3);
        }

    }

  


    beeSpeedUp(btn,callBack){
        let gold = GrowUp.getIns().getBeeSpeedGold(GameMgr.getPlayerInfo().getBeeSpeedLv());

        let endFun=()=>{
            GameMgr.getPlayerInfo().upBeeSpeedLv();
            Tools.getIns().handlerFun(callBack);
        }

        if (!Tools.getIns().canUseItemNotTips(gold, 3)) {
            Tools.getIns().shareOrAd(btn,()=>{
                endFun();
            })
        }else{
            Tools.getIns().useItem(gold, 3);
            endFun();
        }
    }
}