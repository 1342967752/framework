import GrowUp from "../gameMgr/GrowUp";
import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";
import Store from "./Store";
/**
 * 容量商店
 */
export default class CapacityStore extends Store{
    constructor(){
        super();
        this.storeType=3;
        this.buildRang=3.5;
    }

   
    capacityAdd(btn,callBack){
        let gold = GrowUp.getIns().getCapacityGold(GameMgr.getPlayerInfo().getContainLv());

        let endFun=()=>{
            GameMgr.getPlayerInfo().upContainLv();
            Tools.getIns().handlerFun(callBack);
        }

        if (!Tools.getIns().canUseItem(gold, 3)) {
            Tools.getIns().shareOrAd(btn,()=>{
                endFun();
            })
        }else{
            Tools.getIns().useItem(gold, 3);
            endFun();
        }

        
        
        
    }

    upHurt(btn,callBack){
        let gold = GrowUp.getIns().getHurtGold(GameMgr.getPlayerInfo().getHurtLv());

        let endFun=()=>{
            GameMgr.getPlayerInfo().upHurtLv();
            Tools.getIns().handlerFun(callBack);
        }

        if (!Tools.getIns().canUseItem(gold, 3)) {
            Tools.getIns().shareOrAd(btn,()=>{
                endFun();
            })
        }else{
            Tools.getIns().useItem(gold, 3);
            endFun();
        }

        
       
    }
}