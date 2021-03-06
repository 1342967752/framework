import PageBase from "../UIFrame/PageBase";
import Tools from "../UIFrame/Tools";
import CameraRecordMgr from "../Mgr/CameraRecordMgr";
import GameMgr from "../Mgr/GameMgr";
import MapMgr from "../Mgr/MapMgr";
import ContinuousTweenMgr from "../Mgr/ContinuousTweenMgr";
import DragCorl from "../ctrol/DragCorl";
import GrowUp from "../gameMgr/GrowUp";
import BeeMgr from "../gameMgr/BeeMgr";
export default class GameView extends PageBase {

    constructor() {
        super();
        this.adObj = new Object();
        //this.adObj.num = 1;
        this.endFun = null;
        this.curDownTime = 0;
        this.downTime = 5;
        this.isShowTimer = false;
        this.timeDownCb = null;
        this.isShowTop = true;
        //this.showMore = true;

        this.isShowAd = false;
        this.isOpenAd = false;

        this.dragCrol = null;

        this.curStoreMgr = null;
        this.curStoreUI = null;

        this.storeTween = new ContinuousTweenMgr();
        let vals = [];
        vals.push({ time: 300, prop: { scaleX: 0.5, scaleY: 0.5 }, ease: Laya.Ease.linearOut });
        vals.push({ time: 300, prop: { scaleX: 1, scaleY: 1 }, ease: Laya.Ease.linearOut });
        this.storeTween.setTweenVals(vals);

        this.storeCloseTween = new ContinuousTweenMgr();
        let vals1 = [];
        vals1.push({ time: 300, prop: { scaleX: 1, scaleY: 1 }, ease: Laya.Ease.linearIn })
        vals1.push({ time: 300, prop: { scaleX: 0, scaleY: 0 }, ease: Laya.Ease.linearIn })
        this.storeCloseTween.setTweenVals(vals1);

        this.containTween = null;

        this.speedUpData = null;
        this.strongeData = null;

        this.useTime = 30000;

        this.sellViewItems = [];
        this.notUseSellItems = [];
        this.inUseSellItem = [];

        this.sellNodes = [];
        this.lastSelltime = 0;
        this.lastSellViewZorder = 0;
    }


    pageInit() {
        super.pageInit();
        MapMgr.getIns().gameView = this;

        this.viewProp.m_btn_setting.on(Laya.Event.CLICK, null, () => {
            Tools.getIns().btnAction(this.viewProp.m_btn_setting, () => {
                GameMgr.getUIMgr().openUI(GameMgr.getUIName().SettingView);
            })

        });



        let dragCrol = this.viewProp.m_dragArea.getComponent(DragCorl);
        if (dragCrol instanceof DragCorl) {
            this.dragCrol = dragCrol;
            dragCrol.init();
        }

        this.viewProp.m_beeAdd.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_beeAdd, () => {
                if (!MapMgr.getIns().curMap) {
                    console.error("?????????????????????");
                    return;
                }


                if (this.viewProp.m_beeAdd.isMax) {
                    G_PlatHelper.showToast("????????????????????????!");
                    return;
                }

                this.curStoreMgr.buyBee(this.viewProp.m_beeAdd_Ad, () => {
                    this.refershBuyBeeStore();
                })

            })
        })

        this.viewProp.m_backStart.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_backStart, () => {
                this.backStartPos();
            })
        })

        this.viewProp.m_capacityAdd.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_capacityAdd, () => {


                if (this.viewProp.m_capacityAdd.isMax) {
                    G_PlatHelper.showToast("????????????????????????!");
                    return;
                }

                if (!MapMgr.getIns().curMap) {
                    console.error("?????????????????????");
                    return;
                }


                this.curStoreMgr.capacityAdd(this.viewProp.m_capacityAdd_Ad, () => {
                    this.refershCapacityStore();
                })
            })
        })

        this.viewProp.m_daoHurt.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_daoHurt, () => {

                if (this.viewProp.m_daoHurt.isMax) {
                    G_PlatHelper.showToast("????????????????????????!");
                    return;
                }

                if (!MapMgr.getIns().curMap) {
                    console.error("?????????????????????");
                    return;
                }

                this.curStoreMgr.upHurt(this.viewProp.m_daoHurt_Ad, () => {
                    this.refershCapacityStore();
                })



            })
        })

        this.viewProp.m_beeSpeed.on(Laya.Event.CLICK, this, () => {

            Tools.getIns().btnAction(this.viewProp.m_beeSpeed, () => {

                if (this.viewProp.m_beeSpeed.isMax) {
                    G_PlatHelper.showToast("????????????????????????!");
                    return;
                }

                if (!MapMgr.getIns().curMap) {
                    console.error("?????????????????????");
                    return;
                }

                this.curStoreMgr.beeSpeedUp(this.viewProp.m_beeAdd_Ad, () => {
                    this.refershBuyBeeStore();
                })



            })
        })

        this.viewProp.m_toNext_by_gold.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_toNext_by_gold, () => {
                if (this.viewProp.m_toNext_by_gold.isMax) {
                    G_PlatHelper.showToast("??????????????????!");
                    return;
                }
            })

            this.curStoreMgr.toNextLvByGold();
        })

        this.viewProp.m_toNext_by_honey.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_toNext_by_honey, () => {
                if (this.viewProp.m_toNext_by_honey.isMax) {
                    G_PlatHelper.showToast("??????????????????!");
                    return;
                }
            })
            this.curStoreMgr.toNextLvByHoney();

        })

        this.viewProp.m_speedUp_ad.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_speedUp_ad, () => {
                Tools.getIns().shareOrAd(this.viewProp.m_speedUp_ad, () => {
                    this.toSpeedUp();

                })
            })
        })

        this.viewProp.m_stronge_ad.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_stronge_ad, () => {
                Tools.getIns().shareOrAd(this.viewProp.m_stronge_ad, () => {

                    this.toStronge();
                })
            })
        })

        this.viewProp.m_bee_change_btn.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_bee_change_btn, () => {

                this.curStoreMgr.combineBee(this.viewProp.m_bee_change_btn, () => {
                    this.refershBeeConBineStore();
                });

            })
        })

        this.viewProp.m_wanted_btn.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_wanted_btn, () => {
                this.showWantedView(false);
                this.refershPropView();
            })
        })

    }


    pagePreload(callBack) {
        Laya.loader.load("prefab/item/sellTips.json", Laya.Handler.create(this, () => {
            Tools.getIns().handlerFun(callBack);
        }))
    }

    toStronge() {
        let skillData = GameMgr.getPlayerInfo().getPlayerSkillDataById(2);

        let lastTime = skillData.toTime - G_ServerInfo.getServerTime();

        if (lastTime <= 0) {
            lastTime = G_ServerInfo.getServerTime() + this.useTime;
        } else {
            lastTime += (G_ServerInfo.getServerTime() + this.useTime);
        }

        GameMgr.getPlayerInfo().addSkillTime(2, lastTime);
        this.refershStrongeView();
    }

    toSpeedUp() {
        let skillData = GameMgr.getPlayerInfo().getPlayerSkillDataById(1);

        let lastTime = skillData.toTime - G_ServerInfo.getServerTime();

        if (lastTime <= 0) {
            lastTime = G_ServerInfo.getServerTime() + this.useTime;
        } else {
            lastTime += (G_ServerInfo.getServerTime() + this.useTime);
        }

        GameMgr.getPlayerInfo().addSkillTime(1, lastTime);
        this.refershSpeedUpView();
    }


    backStartPos() {
        if (MapMgr.getIns().curMap) {
            MapMgr.getIns().curMap.toStartPos();
        }
    }

    closeAllStore() {
        this.viewProp.m_beeStore.visible = false;
        this.viewProp.m_capacityStore.visible = false;
        this.viewProp.m_beeChange.visible = false;
        this.viewProp.m_next_lv.visible = false;
        this.viewProp.m_sellView.visible = false;
        G_Event.dispatchEvent(G_EventName.EN_CLOSEALLSTORE);
    }

    setContain(cur, max, isTween = true) {
        if (this.containTween) {
            this.containTween.clear();
        }

        let val = cur / max;
        if (isTween) {
            this.containTween = Laya.Tween.to(this.viewProp.m_contain, { value: val }, 500, Laya.Ease.linearOut, null, 0, true, false);
        } else {
            this.viewProp.m_contain.value = val;
        }

        this.viewProp.m_contain_val.text = G_Utils.bigNumber2StrNumber(BigNumber(cur), 2)
        this.viewProp.m_contain_Full.visible = val >= 1
    }

    /**
     * ????????????
     */
    refershSpeedUpView() {
        let skillData = GameMgr.getPlayerInfo().getPlayerSkillDataById(1);
        this.viewProp.m_speedUp_ad.visible = false;
        this.viewProp.m_speedUp_use.visible = false;
        this.viewProp.m_speedUp_count.text = skillData.count;
        if (skillData.count > 0) {
            this.viewProp.m_speedUp_use.visible = true;
        } else {
            Tools.getIns().setAdBtnIcon(this.viewProp.m_speedUp_ad);
            this.viewProp.m_speedUp_ad.visible = true;

        }

        //?????????????????????
        if (skillData.toTime > G_ServerInfo.getServerTime()) {
            this.speedUpData = skillData;
            this.openTimer();
            MapMgr.getIns().playerMgr.speedUp();
        } else {
            GameMgr.getPlayerInfo().addSkillTime(1, 0);
            this.viewProp.m_speedUp_time.text = "00:00:00";
            MapMgr.getIns().playerMgr.cancelSpeedUp();
        }
    }

    refershStrongeView() {
        let skillData = GameMgr.getPlayerInfo().getPlayerSkillDataById(2);
        this.viewProp.m_stronge_ad.visible = false;
        this.viewProp.m_stronge_use.visible = false;
        this.viewProp.m_stronge_time.text = skillData.count;
        if (skillData.count > 0) {
            this.viewProp.m_stronge_use.visible = true;
        } else {
            Tools.getIns().setAdBtnIcon(this.viewProp.m_stronge_ad);
            this.viewProp.m_stronge_ad.visible = true;

        }

        //?????????????????????
        if (skillData.toTime > G_ServerInfo.getServerTime()) {
            this.strongeData = skillData;
            this.openTimer();
        } else {
            GameMgr.getPlayerInfo().addSkillTime(2, 0);
            this.viewProp.m_stronge_time.text = "00:00:00";
        }
    }

    openTimer() {
        this.refershTimer();
        Laya.timer.clear(this, this.refershTimer);
        Laya.timer.loop(1000, this, this.refershTimer);
    }


    closeTimer() {
        if (!this.speedUpData && !this.strongeData) {
            Laya.timer.clear(this, this.refershTimer);
        }
    }

    /**
     * ????????????
     */
    refershTimer() {
        let time = G_ServerInfo.getServerTime();
        if (this.speedUpData) {
            let sup = this.speedUpData.toTime - time;
            if (sup > 0) {

                this.viewProp.m_speedUp_time.text = G_Utils.convertSecondToHourMinuteSecond(Math.floor(sup * 0.001), false)
            } else {
                this.refershSpeedUpView();
            }
        }

        if (this.strongeData) {
            let sup = this.strongeData.toTime - time;
            if (sup > 0) {

                this.viewProp.m_stronge_time.text = G_Utils.convertSecondToHourMinuteSecond(Math.floor(sup * 0.001), false)
            } else {
                this.refershStrongeView();
            }
        }

    }

    pageOpen(vals) {
        super.pageOpen(vals);
        this.isOpenAd = false;
        this.isShowAd = false;
        this.refershNative();
        this.closeTimerDown();
        this.closeAllStore();
        this.refershSpeedUpView();
        this.refershStrongeView();
        MapMgr.getIns().playerMgr.refershContainView();
        CameraRecordMgr.getIns().start();
        if (vals && vals.endFun) {
            this.endFun = vals.endFun;
            this.endFun();
        }
        this.checkDelineReward();
        //????????????
        MapMgr.getIns().playerMgr.setCorl();
        this.showWantedView(false);
        this.refershPropView();
        this.startTeach();
    }

    refershPropView() {
        this.viewProp.m_backHome_bar.visible = GameMgr.getPlayerInfo().getBackHomeOpen();
        this.viewProp.m_speedUp_bar.visible = GameMgr.getPlayerInfo().getSpeedOpen();
        this.viewProp.m_stronge_bar.visible = GameMgr.getPlayerInfo().getStrongeOpen();
    }

    addListerner() {
        G_Event.removeEventListerner(G_EventName.EN_APP_AFTER_ONSHOW, this.appOnShow, this);
    }

    removeListerner() {
        G_Event.removeEventListerner(G_EventName.EN_APP_AFTER_ONSHOW, this.appOnShow, this);
    }

    /**
     * ???????????????????????????
     */
    refershBuyBeeStore() {

        let speedLv = GameMgr.getPlayerInfo().getBeeSpeedLv();
        let max = GrowUp.getIns().maxId;
        if (speedLv < max) {
            let data = G_GameDB.getGrowUpByID(speedLv);
            this.viewProp.m_beeSpeed.isMax = false;
            let gold = data.beeSpeedCutGold;
            let enougth = Tools.getIns().canUseItemNotTips(gold, 3);
            this.viewProp.m_beeSpeed.gray = !enougth;
            this.viewProp.m_beeSpeed_Ad.visible = !enougth;
            this.viewProp.m_beeSpeed_gold.text = G_Utils.bigNumber2StrNumber(BigNumber(gold));
        } else {
            this.viewProp.m_beeSpeed_gold.text = 0;
            this.viewProp.m_beeSpeed_Ad.visible = false;
            this.viewProp.m_beeSpeed.isMax = true;
            this.viewProp.m_beeSpeed.gray = true;
        }

        this.viewProp.m_beeSpeed_count.text = speedLv;

        //????????????
        let times = GameMgr.getPlayerInfo().getBuyBeeTimes();



        if (times < max) {
            let data = G_GameDB.getGrowUpByID(times);
            this.viewProp.m_beeAdd.isMax = false;
            let gold = data.beeBuy;
            this.viewProp.m_beeAdd_gold.text = G_Utils.bigNumber2StrNumber(BigNumber(gold));
            let enougth = Tools.getIns().canUseItemNotTips(gold, 3);
            this.viewProp.m_beeAdd.gray = !enougth;
            this.viewProp.m_beeAdd_Ad.visible = !enougth;
        } else {
            this.viewProp.m_beeAdd_Ad.visible = false;
            this.viewProp.m_beeAdd.isMax = true;
            this.viewProp.m_beeAdd_gold.text = 0;
            this.viewProp.m_beeAdd.gray = true;
        }

        this.viewProp.m_beeAdd_count.text = times;
    }


    refershCapacityStore() {
        let lv = GameMgr.getPlayerInfo().getContainLv();
        let max = GrowUp.getIns().maxId;
        let data = G_GameDB.getGrowUpByID(lv);
        if (lv < max) {

            this.viewProp.m_capacityAdd.isMax = false;
            let gold = data.pCapacityGold;
            let enougth = Tools.getIns().canUseItemNotTips(gold, 3);
            this.viewProp.m_capacityAdd_Ad.visible = !enougth;
            this.viewProp.m_capacityAdd.gray = !enougth;
            this.viewProp.m_capacityAdd_gold.text = G_Utils.bigNumber2StrNumber(BigNumber(gold));
        } else {
            this.viewProp.m_capacityAdd_Ad.visible = false;
            this.viewProp.m_capacityAdd_gold.text = 0;
            this.viewProp.m_capacityAdd.gray = true;
            this.viewProp.m_capacityAdd.isMax = true;
        }

        this.viewProp.m_capacityAdd_count.text = G_Utils.bigNumber2StrNumber(BigNumber(data.pCapacity));

        //????????????
        lv = GameMgr.getPlayerInfo().getHurtLv();
        data = G_GameDB.getGrowUpByID(lv);
        if (lv < max) {
            this.viewProp.m_daoHurt.isMax = false;
            let gold = data.pHurtGold;
            let enougth = Tools.getIns().canUseItemNotTips(gold, 3);
            this.viewProp.m_daoHurt_Ad.visible = !enougth;
            this.viewProp.m_daoHurt.gray = !enougth;
            this.viewProp.m_daoHurt_gold.text = G_Utils.bigNumber2StrNumber(BigNumber(gold));
        } else {
            this.viewProp.m_daoHurt.isMax = true;
            this.viewProp.m_daoHurt_gold.text = 0;
            this.viewProp.m_daoHurt_Ad.visible = false;
            this.viewProp.m_daoHurt.gray = true;
        }

        this.viewProp.m_daoHurt_count.text = G_Utils.bigNumber2StrNumber(BigNumber(data.pHurt));
    }


    refershNextLvStroe() {
        let lv = GameMgr.getPlayerInfo().getShowLevelCount();
        let max = GrowUp.getIns().maxId;

        if (lv < max) {
            this.viewProp.m_toNext_by_honey.isMax = false;
            this.viewProp.m_toNext_by_gold.isMax = false;
            this.viewProp.m_to_next_gold.text = G_Utils.bigNumber2StrNumber(GrowUp.getIns().getNextLvGold(lv));
            this.viewProp.m_to_next_honey.text = this.viewProp.m_to_next_gold.text;
        } else {
            this.viewProp.m_toNext_by_gold.isMax = true;
            this.viewProp.m_toNext_by_honey.isMax = true;
            this.viewProp.m_to_next_gold.text = 0;
            this.viewProp.m_to_next_honey.text = this.viewProp.m_to_next_gold.text;
        }
    }


    refershBeeConBineStore() {
        this.viewProp.m_bee_change_btn.gray = BeeMgr.getIns().getConbineBeeId().beeId == 0;
    }

    /**
     * ???????????????ui
     * @param {*} type 
     */
    openStoreUI(type, storeMgr) {
        this.storeTween.end();
        this.storeTween.clearTarget();
        this.curStoreMgr = storeMgr;
        if (type == 2) {
            this.curStoreUI = this.viewProp.m_beeStore;
            this.refershBuyBeeStore();
        } else if (type == 3) {
            this.refershCapacityStore();
            this.curStoreUI = this.viewProp.m_capacityStore;
        } else if (type == 1) {
            this.curStoreUI = this.viewProp.m_sellView;
        } else if (type == 4) {
            this.curStoreUI = this.viewProp.m_next_lv;
            this.refershNextLvStroe();
        } else if (type == 5) {
            this.curStoreUI = this.viewProp.m_beeChange;
            this.refershBeeConBineStore();
        }


        if (this.curStoreUI) {
            this.curStoreUI.visible = true;
            this.storeTween.setTarget(this.curStoreUI);
            this.storeTween.play();
            
        }

    }

    /**
     * ????????????
     */
    hideStore() {
        if (this.curStoreUI) {
            this.curStoreUI.visible = false;
           
        }
    }


    /**
     * ???????????????ui
     * @param {*} type 
     */
    closeStoreUI(type, storeMgr) {
        this.curStoreMgr = null;
        if (this.curStoreUI) {
            this.storeCloseTween.isTest=true;
            this.storeCloseTween.clearEndFun();
            this.storeCloseTween.clearTarget();
            this.storeCloseTween.setTarget(this.curStoreUI);
            this.storeCloseTween.end();
           
            this.storeCloseTween.setEndCallBack(() => {
                if (this.curStoreUI) {
                    this.curStoreUI.visible = false;
                    this.curStoreUI = null;
                }
            })

            this.storeCloseTween.play();
        }

    }

    /**
     * ??????????????????
     * @param {*} show 
     * @param {*} tips 
     */
    showWantedView(show, tips) {
        this.viewProp.m_wantedView.visible = show;
        if (show) {
            this.viewProp.m_wanted_tips.text = tips;
        }
    }

    onUpdate() {
        if (this.curStoreMgr && this.curStoreUI) {
            let pos = this.curStoreMgr.owner.transform.position;
            let tempPos = MapMgr.getIns().cameraMgr.worldPosToScreenPos(pos);
            this.curStoreUI.pos(tempPos.x, tempPos.y - 200);

           
        }

  

        if (this.inUseSellItem.length > 0) {
            let pos = MapMgr.getIns().playerMgr.node.transform.position;
            let tempPos = MapMgr.getIns().cameraMgr.worldPosToScreenPos(pos);
            for (let i = 0; i < this.inUseSellItem.length; i++) {
                this.inUseSellItem[i].pos(tempPos.x-50, tempPos.y-150);
            }
        }

        if (this.sellNodes.length > 0) {
            if (Laya.timer.currTimer - this.lastSelltime > 150) {
                this.createSellTween(this.sellNodes.pop());
                this.lastSelltime = Laya.timer.currTimer;
            }
        }
    }

    pageClose() {
        super.pageClose();
        this.dragCrol.clearCallBackFun();

    }


    appOnShow() {
        this.checkDelineReward();
    }

    timeDownFun() {
        if (GameMgr.getIns().isPause) {
            return;
        }

        this.curDownTime += 1;
        let tIndex = this.downTime - this.curDownTime;
        if (tIndex > 0) {
            this.viewProp.m_timer_down.skin = "game/gameView/time{0}.png".format(tIndex);
        }

        G_SoundMgr.playSound(GG_SoundName.SN_Mp3.format("timeDown"));

        let node = this.viewProp.m_timer_down;
        let tween = node.tween;
        if (tween) {
            tween.clear();
            tween = null;
        }
        node.scaleX = 1;
        node.scaleY = 1;
        node.alpha = 1;
        tween = Laya.Tween.to(node, { scaleX: 2, scaleY: 2, alpha: 0 }, 400, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
            tween = node.tween;
            if (tween) {
                tween.clear();
                tween = null;
            }
            Laya.Tween.to(node, { scaleX: 1, scaleY: 1, alpha: 1 }, 100, Laya.Ease.linearOut);
            node.tween = tween;
        }), null, 0, true, false);
        node.tween = tween;
        if (this.downTime - this.curDownTime <= 0) {
            this.closeTimerDown();
        }
    }

    openTimeDown(time = 5, callBack) {

        if (this.isShowTimer) {
            return;
        }
        this.timeDownCb = callBack;
        this.isShowTimer = true;
        this.downTime = time;
        this.viewProp.m_timer_down.visible = true;
        this.curDownTime = 0;
        this.viewProp.m_timer_down.skin = "game/gameView/time{0}.png".format(this.downTime);

        Laya.timer.loop(1000, this, this.timeDownFun);
    }

    closeTimerDown() {
        Tools.getIns().handlerFun(this.timeDownCb);
        this.timeDownCb = null;
        this.isShowTimer = false;
        this.viewProp.m_timer_down.visible = false;
        Laya.timer.clear(this, this.timeDownFun);
    }






    addListerner() {
        super.addListerner();
        G_Event.addEventListerner(G_EventName.GAMESTART, this.gameStart, this);
        G_Event.addEventListerner(G_EventName.END_CHECK_OVER, this.gameOver, this);
        G_Event.addEventListerner(G_EventName.EN_REFERSH_POPBAR, this.refershPropView, this);
    }

    removeListerner() {
        super.removeListerner();
        G_Event.removeEventListerner(G_EventName.GAMESTART, this.gameStart, this);
        G_Event.removeEventListerner(G_EventName.END_CHECK_OVER, this.gameOver, this);
        G_Event.removeEventListerner(G_EventName.EN_REFERSH_POPBAR, this.refershPropView, this);
    }

    refershNative() {

    }

    /**
     * ????????????
     */
    startTeach() {
        if (this.isStartTeach) {
            return;
        }
        this.isStartTeach = true;

        
    }

    showTeachTips(type){
        if(GameMgr.getPlayerInfo().getShowLevelCount()==1){
            if(type==1){
                this.showWantedView(true,"?????????????????????????????????");

                // if(MapMgr.getIns().curMap){
                //     MapMgr.getIns().playerMgr.jianTouLookAt(MapMgr.getIns().curMap.getPlantsByType(2).owner.transform.position);
                // }


            }else if(type==2){
                this.showWantedView(true,"??????????????????????????????")
                // if(MapMgr.getIns().curMap){
                //     MapMgr.getIns().playerMgr.jianTouLookAt(MapMgr.getIns().curMap.getStoreType(1).owner.transform.position);
                // }
            }else if(type==3){
                this.showWantedView(true,"??????????????????????????????????????????")
                // if(MapMgr.getIns().curMap){
                //     MapMgr.getIns().playerMgr.jianTouLookAt(MapMgr.getIns().curMap.getStoreType(3).owner.transform.position);
                // }
            }
            
        }
    }

    /**
     * ????????????(?????????????????????)
     */
    endTeach() {
        if (!this.isStartTeach) {
            return;
        }

        this.isStartTeach = false;

    }


    checkDelineReward() {
        let delineTime = G_PlayerInfo.getOutlineTime();//????????????
        if (delineTime >= 3 * 60) {//3??????
            let obj = new Object();
            obj.count = GameMgr.getPlayerInfo().getDelineGold();

            GameMgr.getUIMgr().openUI(GameMgr.getUIName().DelineReward, obj);
        }
    }

    showSellView(num) {
        
        let sellView = null;
        if (this.notUseSellItems.length > 0) {
            sellView = this.notUseSellItems.pop();
        } else {

            let json = new Laya.Prefab();
            json.json = Laya.loader.getRes("prefab/item/sellTips.json");
            sellView = json.create();
            this.owner.addChild(sellView);
            sellView.tNode = sellView.getChildAt(0);
            sellView.sellView_gold = G_UIHelper.seekNodeByName(sellView, "sellView_gold");
            this.sellViewItems.push(sellView);
        }
        sellView.visible = false;
       
        sellView.sellView_gold.text = G_Utils.bigNumber2StrNumber(BigNumber(num.toFixed(2)));
        this.sellNodes.push(sellView);
    }

    setSellGold(gold){
        this.viewProp.m_sellView_gold.text=G_Utils.bigNumber2StrNumber(BigNumber(BigNumber(gold.toFixed(2))),2);
    }

    createSellTween(sellView) {
        
        sellView.visible = true;
        sellView.zOrder=this.lastSellViewZorder++;
        let tweenNode = sellView.tNode;
        tweenNode.centerX = 0;
        tweenNode.centerY = 0;
        tweenNode.alpha = 1;
        let end = tweenNode.centerY - 100;
        this.inUseSellItem.push(sellView);
        let tween = Laya.Tween.to(tweenNode, { centerY: end, alpha: 0.2 }, 800, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
            sellView.visible = false;
            
            
            let index = this.inUseSellItem.indexOf(sellView);
            if (index >= 0) {
                this.inUseSellItem.splice(index, 1);
            }


            index=this.notUseSellItems.indexOf(sellView);
            if(index<0){
                this.notUseSellItems.push(sellView);
            }

            tween.clear();
            tween.recover();
            tween = null;
        }), 0, true, false);
        sellView.tween = tween;
    }

    clearSellView() {
        this.inUseSellItem.splice(0, this.inUseSellItem.length);
        this.notUseSellItems.splice(0, this.notUseSellItems.length);
        let item = null;
        for (let i = 0; i < this.sellViewItems.length; i++) {
            item = this.sellViewItems[i];
            this.notUseSellItems.push(item);
            item.visible = false;
            if (item.tween) {
                item.tween.clear();
                item.tween.recover();
                item = null;
            }
        }
        this.lastSellViewZorder=0;
    }
}
