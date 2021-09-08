import GameMgr from "../Mgr/GameMgr";
import PageBase from "../UIFrame/PageBase";
import Tools from "../UIFrame/Tools";


export default class DelineReward extends PageBase {
    constructor() {
        super();
        this.chineseName = "离线奖励";
        this.adObj = new Object();
        this.adObj.num = 2;
        this.isNeedTween = true;
        this.count = 0;
        this.isShowTop = false;
    }

    pageInit() {
        super.pageInit();
        this.viewProp.m_four.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_four, () => {
                this.toGetReward(true);
            });

        });

        this.viewProp.m_nor.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_nor, () => {
                this.toGetReward(false);
            });

        });





    }

    pageOpen(vals) {
        super.pageOpen(vals);
        this.count = vals.count;
        this.viewProp.m_count.text = G_Utils.bigNumber2StrNumber(this.count);
        Tools.getIns().setAdBtnIcon(this.viewProp.m_four);
    }

    toGetReward(ad) {
        if (ad) {
            Tools.getIns().shareOrAd(this.viewProp.m_four, () => {
                GameMgr.getPlayerInfo().addItemByType(3, this.count * 3, 0);
                GameMgr.getUIMgr().closeUI(GameMgr.getUIName().DelineReward);
            });
        } else {
            GameMgr.getPlayerInfo().addItemByType(3, this.count);
            GameMgr.getUIMgr().closeUI(GameMgr.getUIName().DelineReward);
        }
    }




}