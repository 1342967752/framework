import StarMgr from "../gameMgr/StarMgr";
import GameMgr from "../Mgr/GameMgr";
import TTSumbitData from "../Mgr/TTSumbitData";
import Tools from "../UIFrame/Tools";

import ItemBase from "./ItemBase";

export default class PropItem extends ItemBase {
    constructor() {
        super();

    }

    init() {
        super.init();


        this.viewProp.m_up_btn.on(Laya.Event.CLICK, null, () => {
            Tools.getIns().btnAction(this.viewProp.m_up_btn, () => {
                let gold = BigNumber(GameMgr.getPlayerInfo().getPlayerPropGold(this.data.id));
                if (!Tools.getIns().canUseItem(gold, 3)) {
                    return;
                }
                Tools.getIns().useItem(gold, 3);
                let skinId=GameMgr.getPlayerInfo().getSkinId();
                let star=StarMgr.getIns().getSkinSatrById(skinId)
                let val = GameMgr.getPlayerInfo().getPlayerProp(this.data.id,skinId,star );
                G_PlayerInfo.upPlayerProp(this.data.id);
                val = GameMgr.getPlayerInfo().getPlayerProp(this.data.id, skinId,star) - val;

                this.showLvTween();
                this.toRefersh(val);
            });

        })

        this.viewProp.m_ad_up_btn.on(Laya.Event.CLICK, null, () => {
            Tools.getIns().btnAction(this.viewProp.m_ad_up_btn, () => {
                TTSumbitData.getIns().Video_broadcast(10005,2);
                Tools.getIns().shareOrAd(this.viewProp.m_ad_up_btn,()=>{
                    let skinId=GameMgr.getPlayerInfo().getSkinId();
                    let star=StarMgr.getIns().getSkinSatrById(skinId)
                    let val = GameMgr.getPlayerInfo().getPlayerProp(this.data.id, skinId,star);
                    G_PlayerInfo.upPlayerProp(this.data.id);
                    val = GameMgr.getPlayerInfo().getPlayerProp(this.data.id, skinId,star) - val;
                    TTSumbitData.getIns().Video_broadcast(10005,4);
                    this.showLvTween();
                    this.toRefersh(val);
                },()=>{
                    TTSumbitData.getIns().Video_broadcast(10005,3);
                })

            });

        })

        let endFun = () => {
            Laya.Tween.to(this.viewProp.m_up_icon, { centerY: -110 }, 1000, Laya.Ease.linearOut, Laya.Handler.create(null, () => {
                Laya.Tween.to(this.viewProp.m_up_icon, { centerY: -100 }, 1000, Laya.Ease.linearOut, Laya.Handler.create(null, () => {
                    endFun();
                }))
            }))
        }

        endFun();

    }

    toRefersh(val) {
        let readView = GameMgr.getUIMgr().getPageByName(GameMgr.getUIName().ReadyView);
        if (readView) {
            readView.setProp();
            readView.showPropVal(this.data.id, val);
        }
    }

    showLvTween() {
        let tween = this.viewProp.m_lv.propTween;
        if (tween) {
            tween.clear();
        }
        this.viewProp.m_lv.scaleX = 1;
        this.viewProp.m_lv.scaleY = 1;
        this.viewProp.m_lv.propTween = Laya.Tween.to(this.viewProp.m_lv, { scaleX: 1.4, scaleY: 1.4 }, 100, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
            this.viewProp.m_lv.propTween.clear();
            this.viewProp.m_lv.scaleX = 1;
            this.viewProp.m_lv.scaleY = 1;
        }), 0, true, false);
    }

    setData(data) {
        super.setData(data);
        Tools.getIns().setAdBtnIcon(this.viewProp.m_ad_up_btn);
        let path = "game/ready/{0}.png";
        if (data.id == 1) {
            this.owner.skin = path.format("shengm");
        } else if (data.id == 2) {
            this.owner.skin = path.format("gongji");
        } else {
            this.owner.skin = path.format("fangyu");
        }
        let skinId=GameMgr.getPlayerInfo().getSkinId();
        let use = BigNumber(GameMgr.getPlayerInfo().getPlayerPropGold(data.id));
        let curLv = GameMgr.getPlayerInfo().getPlayerPropLv(this.data.id);
        this.viewProp.m_count.text = G_Utils.bigNumber2StrNumber(use);
        this.viewProp.m_lv.text = "Lv." + curLv;
        this.viewProp.m_val.text = BigNumber(GameMgr.getPlayerInfo().getPlayerProp(data.id, skinId,StarMgr.getIns().getSkinSatrById(skinId))).toFixed(0);
        let enought = Tools.getIns().canUseItemNotTips(use, 3);
        this.viewProp.m_up_icon.visible = enought;


        //判断是否最大级数
        let playerData = G_GameDB.getPlayerConfigByID(skinId);
        let maxLv = playerData.maxLv;
        this.viewProp.m_ad_up_btn.visible = false;
        this.viewProp.m_up_btn.visible = false;
        if (maxLv <= curLv) {

            this.viewProp.m_up_icon.visible = false;
            this.viewProp.m_lv.text = "Max";

        } else {
            if (enought) {
                this.viewProp.m_up_btn.visible = true;
            } else {
                this.viewProp.m_ad_up_btn.visible = true;
            }

        }

    }
}