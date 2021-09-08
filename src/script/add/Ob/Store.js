import DrawLine from "../gameMgr/DrawLine";
import MapMgr from "../Mgr/MapMgr";
import ColBase from "./ColBase";

export default class Store extends ColBase{

    constructor(){
        super();
        this.colType=1;
        this.buildRang=0.8;//建筑的半径
        this.storeType=2;//2是蜜蜂商店
        this.isOpen=false;
    }

    init(){
        super.init();

        

        G_Event.addEventListerner(G_EventName.EN_CLOSEALLSTORE,this.forceCloseStore,this);
    }

    onDestroy(){
        super.onDestroy();
        G_Event.removeEventListerner(G_EventName.EN_CLOSEALLSTORE,this.forceCloseStore,this);
    }

    openStore(){
        if(this.isOpen){
            return;
        }
        this.isOpen=true;
        this.openStoreEnd();
    }

    openStoreEnd(){
        MapMgr.getIns().gameView.openStoreUI(this.storeType,this);
    }


    closeStore(){
        if(!this.isOpen){
            return;
        }

        this.isOpen=false;
        this.closeStoreEnd();
    }

    /**
     * 强制关闭商店
     */
    forceCloseStore(){
        this.closeStore();
    }

    closeStoreEnd(){
        MapMgr.getIns().gameView.closeStoreUI(this.storeType,this);
    }

    addCols(mgr){
        super.addCols(mgr);
        this.openStore();
    }

    removeCols(mgr){
        super.removeCols(mgr);
        this.closeStore();
    }
}