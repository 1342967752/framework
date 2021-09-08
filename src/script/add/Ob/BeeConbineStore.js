import BeeMgr from "../gameMgr/BeeMgr";
import Tools from "../UIFrame/Tools";
import Store from "./Store";
/**
 * 蜜蜂合成商店
 */
export default class BeeConbineStore extends Store {
    constructor() {
        super();
        this.storeType = 5;
        this.buildRang = 2;
    }


    /**
    * 合成蜜蜂
    */
    combineBee(btn,callBack) {
        let conbineData=BeeMgr.getIns().getConbineBeeId();
        if(conbineData.beeId==0){
            G_PlatHelper.showToast("未拥有三个相同的蜜蜂!");
            return;
        }

        if(!BeeMgr.getIns().canOpreateBee()){
            G_PlatHelper.showToast("操作太块了!");
            return;
        }

        let desBee=conbineData.bees;
        if(desBee.length>3){//移除多余的
            let count=desBee.length-3;
            for(let i=0;i<count;i++){
                desBee.pop();
            }
        }

        let beeId=conbineData.beeId;
        let evoId=G_GameDB.getBeeByID(beeId).evoId;
        let beeData=G_GameDB.getBeeByID(evoId);

        if(beeData){
            BeeMgr.getIns().removeBees(desBee,evoId);
            BeeMgr.getIns().createBee(evoId);
        }else{
            console.log("蜜蜂无法进化!");
        }

        Tools.getIns().handlerFun(callBack);


    }


   
}