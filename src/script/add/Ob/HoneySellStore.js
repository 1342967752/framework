import BeeMgr from "../gameMgr/BeeMgr";
import GameMgr from "../Mgr/GameMgr";
import MapMgr from "../Mgr/MapMgr";
import Tools from "../UIFrame/Tools";
import Store from "./Store";
/**
 * 蜂蜜收集
 */
export default class HoneySellStore extends Store {
    constructor() {
        super();
        this.storeType = 1;
        //蜜蜂的售出位置
        this.beeSellPos = null;
        this.buildRang = 1.8;//建筑的半径

        this.teachState = 0;
    }

    init() {
        super.init();
        this.beeSellPos = Tools.getIns().returnSprite3D(G_UIHelper.seekNodeByName(this.owner, "beeSellPos"));
    }

    getBeeSellPos() {
        return this.beeSellPos;
    }

    openStoreEnd() {
        super.openStoreEnd();
        //告诉蜜蜂卖蜂蜜

        let bees = BeeMgr.getIns().getAllBees();
        for (let i = 0; i < bees.length; i++) {
            if (!bees[i].beaData.hasHoney()) {
                continue;
            }

            let index = i;

            Laya.timer.once(index * 100, this, () => {
                bees[index].toSell(this);
            })


        }



        //显示卖出的值
        let gold = MapMgr.getIns().playerMgr.getHoney();
        if (gold != 0) {
            G_PlayerInfo.addItemByType(3, gold);
            MapMgr.getIns().playerMgr.clearHoney();
            let onceGold = gold * 0.2;
            for (let i = 0; i < 5; i++) {
                MapMgr.getIns().gameView.showSellView(onceGold);
            }

            MapMgr.getIns().gameView.setSellGold(gold);
            this.teachState++;
            G_SoundMgr.playSound(GG_SoundName.SN_Mp3.format("sell"));
        } else {
            MapMgr.getIns().gameView.hideStore();
        }

    }

    closeStoreEnd() {
        super.closeStoreEnd();
        MapMgr.getIns().gameView.clearSellView();

        if (this.teachState == 1) {
            this.teachState++;
            MapMgr.getIns().gameView.showTeachTips(3);
        }

    }

    /**
     * 卖出一份蜂蜜
     * @param {*} honey 
     */
    sellOne(honey) {
        if (honey > 0) {
            MapMgr.getIns().gameView.showSellView(honey);
            GameMgr.getPlayerInfo().addItemByType(3, honey);
        }

    }

  
}