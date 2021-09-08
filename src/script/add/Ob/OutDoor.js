import DrawLine from "../gameMgr/DrawLine";
import GrowUp from "../gameMgr/GrowUp";
import GameMgr from "../Mgr/GameMgr";
import MapMgr from "../Mgr/MapMgr";
import Tools from "../UIFrame/Tools";
import Store from "./Store";

export default class OutDoor extends Store{
    constructor(){
        super();
        this.storeType=4;//下一关商店
        // this.nextLevelId=0;
        // this.nextLevelDoorIndex=0;

        //this.doorId=0;
        /**
         * 玩家站立的位置
         */
        //this.stand_pos=null;
    }

    init(){
        super.init();
        //let name=this.owner.name;
        //let temp=name.split('_');
        //this.doorId=parseInt(temp[1]);
        //let nextArray=temp[2].split('&');
        // this.nextLevelId=parseInt(nextArray[0]);
        // this.nextLevelDoorIndex=parseInt(nextArray[1]);

        //this.stand_pos=Tools.getIns().returnSprite3D(G_UIHelper.seekNodeByName(this.owner,"stand_pos"));
    }

    toNextLvByGold(){
        let gold = GrowUp.getIns().getNextLvGold(GameMgr.getPlayerInfo().getShowLevelCount());

        if (!Tools.getIns().canUseItem(gold, 3)) {
            return;
        }

        Tools.getIns().useItem(gold, 3);
        this.closeStore();
        MapMgr.getIns().inDoor(this);
    }

    toNextLvByHoney(){
        let gold = GrowUp.getIns().getNextLvGold(GameMgr.getPlayerInfo().getShowLevelCount());

        if (MapMgr.getIns().playerMgr.curCapcityContain <= gold) {
            G_PlatHelper.showToast("蜂蜜不足!");
            return;
        }

        MapMgr.getIns().playerMgr.useHoney(gold);
        this.closeStore();
        MapMgr.getIns().inDoor(this);
    }
}