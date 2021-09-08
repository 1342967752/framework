import GameBase from "./GameBase";
import GameMgr from "../add/Mgr/GameMgr";
import Tools from "../add/UIFrame/Tools";
import TeachMgr from "../add/teach/TeachMgr";
import MistakeMgr from "../add/Mgr/MistakeMgr";
import ExportAdMgr from "../add/Mgr/ExportAdMgr";

/**
 * 主游戏场景View
 */
export default class Game extends GameBase {
    constructor() {
        super("game/GameScene.scene", G_ResPath.scenePath);
        // super("game/GameScene.scene", 'res/scenes/Game/MainGame.ls');
        this.testId = -1;
    }

    /**
     * 第一次打开场景（Laya提供）
     */
    onOpened() {
        // do not delete...
        super.onOpened()

        G_Event.addEventListerner(G_EventName.EN_CANCEL_NAVIGATION_FROM_AD, function () {
            if (!ExportAdMgr.getIns().isOnShow("fullSceneAd")) {
                ExportAdMgr.getIns().showAdFullView();
            }

        })
    }

    /**
     * 加入场景
     */
    onEnable() {
        // body...
        if (this.uiRoot) {
            G_UIManager.registerUIRoot(this.uiRoot)
        }

        Laya.SoundManager.autoStopMusic = false;
        this.p2 = () => {
            if (G_PlatHelper.isOVPlatform()) {
                if (!G_OVAdv.isWatchingVideoAdv()) {
                    G_SoundMgr.resumeMusic()
                }
            }
            else {
                if (!G_Adv.isWatchingVideoAdv()) {
                    G_SoundMgr.resumeMusic()
                }
            }

            //重新刷新banner
            if (GameMgr.getUIMgr() && G_PlatHelper.isTTPlatform()) {
                let page = GameMgr.getUIMgr().getEndActivePage();
                if (page && page.adObj && page.adObj.num == 2) {//显示banner
                    G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD);
                }

            }
        };

        G_Event.addEventListerner(G_EventName.EN_APP_AFTER_ONSHOW, this.p2);
    }

    /**
     * 离开场景
     */
    onDisable() {
        // body...
        if (this.uiRoot) {
            G_UIManager.unregisterUIRoot()
        }

        G_Event.removeEventListerner(G_EventName.EN_APP_AFTER_ONSHOW, this.p2);
    }

    /**
     * 初始化UI
     */
    onInitUI() {
        // body...
    }

    /**
     * 注册监听事件
     */
    onRegisterEvent() {
        // body...
    }

    /**
     * 显示自己的商业广告
     */
    onShowOwnBanner() {
        // body...
    }

    /**
     * 隐藏自己的商业广告
     */
    onHideOwnBanner() {
        // body...
    }

    /**
     * 显示自己的插屏广告
     */
    onShowOwnInsertAd(closeCb) {
        // body...
        G_UIManager.showUI("insertAd", closeCb)
    }

    /**
     * 显示全屏广告
     * 取消跳转时
     */
    onShowFullSceneAd() {
        // body...
        G_UIManager.showUI("fullSceneAd")
    }

    /**
     * 显示本地的提示
     */
    onShowLocalTips(content) {
        // body...
        G_UIManager.showUI("tips", null, content)
    }

    /**
     * 隐藏本地的提示
     */
    onHideLocalTips() {
        // body...
        G_UIManager.hideUI("tips")
    }

    /**
     * 加载场景完成
     */
    onLoadSceneCompleted(scene) {
        this.initFun();
        // body...
        //MistakeMgr.getIns().preloadAsset();
        MistakeMgr.getIns().preCompileShader();
        GameMgr.getIns().init(scene);
        GameMgr.getIns().initMap();

        Tools.getIns().createUiRoot(this, () => {
            //初始化场景
            GameMgr.getIns().initGame();
        });

    }

    initFun() {
        G_UIHelper.playBtnTouchAction = function (btn, cb, originalScale = 1, scaleExternal = 1, durationScale = 1) {
            // body...
            if (btn) {
                if (btn._touchTween) {
                    btn._touchTween.clear()
                    btn._touchTween = null
                }

                btn.scaleX = originalScale
                btn.scaleY = originalScale

                btn._touchTween = Laya.Tween.to(btn, { scaleX: (originalScale * 1.1 * scaleExternal), scaleY: (originalScale * 1.1 * scaleExternal) }, 100 * durationScale, null, Laya.Handler.create(null, function () {
                    btn._touchTween = Laya.Tween.to(btn, { scaleX: originalScale, scaleY: originalScale }, 50 * durationScale, null, null)
                }))
            }

            if (typeof cb === "function") {
                cb()
            }
        }

        G_Utils.bigNumber2StrNumber = function (bigNum, roundNum) {
            if (!bigNum) {
                return ""
            }
            else {
                if (typeof bigNum === "number") {
                    bigNum = BigNumber(bigNum)
                }

                if (!(bigNum instanceof BigNumber)) {
                    return ""
                }

                if (bigNum.e <= 2) {
                    return bigNum.toFixed()
                }

                let unit = "k"

                if (bigNum.e >= 6) {
                    for (let bit = 6; bit <= 246; bit = bit + 3) {
                        if (bigNum.e >= bit && bigNum.e < (bit + 3)) {
                            if (bit === 6) {
                                unit = "m"
                            }
                            else if (bit === 9) {
                                unit = "b"
                            }
                            else if (bit === 12) {
                                unit = 't'
                            }
                            else {
                                unit = String.fromCharCode("a".charCodeAt() + (bit - 15) / 3)
                                unit += unit
                            }

                            break
                        }
                    }
                }

                // roundNum default 3
                if (typeof roundNum !== "number") {
                    roundNum = 2
                }
                let exp = bigNum.toExponential(roundNum - 1)
                let valid = BigNumber(exp.substring(0, exp.indexOf("e"))).times(Math.pow(10, bigNum.e % 3))
                return valid.toString() + unit
            }
        }

    }


}