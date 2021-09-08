import BaseUI from "../base/BaseUI"

export default class ClickPopup extends BaseUI {
    /** @prop {name:invokeType, tips:"触发方式, banner为显示banner，appBox为弹出广告盒子，none为无", type:Option, option:"none,banner,appBox", default:"none"}*/
    /** @prop {name:rootNode, tips:"根节点，确保锚点在中心", type:Node, default:null}*/
    /** @prop {name:openType, tips:"打开方式, scale为缩放，fromLeft为从左进入，fromBottom为从下进入，opacity为淡入，none为无", type:Option, option:"none,scale,fromLeft,fromBottom,opacity", default:"none"}*/
    /** @prop {name:closeType, tips:"关闭方式, scale为缩放，opacity为淡出，none为无", type:Option, option:"none,scale,opacity", default:"none"}*/

    constructor() { 
        super();

        // configs
        this._minusGap = 100
        this._miniMinusValue = 0.06
        this._maxMinusValue = 0.06
        this._addValue = 0.175
        this._targetValue = 0.5
        this._miniClickTimes = 1
        this._maxClickTimes = 3
        this._needClickTimes = 0
        this._curClickTimes = 0
        this._maxValue = 1.0
        this._miniValue = 0.0
        this._clickInvokeRate = 30
        this._showBannerDuration = 1500
        this._isFirstShow = false

        // privates
        this._clickProgress = null
        this._clickBtn = null

        // schedule
        this._scheduleKey = ""

        // state
        this._isMistakeEnabled = false
        this._isAdvShowed = false
        this._isAdvClicked = false
    }

    onAwake() {
        this._rootNode = this.rootNode
        this._openType = this.openType
        this._closeType = this.closeType
    }
    
    onEnable() {
        // init ui
        this._initUI()

        // get mistake config
        G_Switch.getClickMistakeConfig(cfg => {
            this._minusGap = cfg.gap
            this._miniMinusValue = cfg.miniMinus
            this._maxMinusValue = cfg.maxMinus
            this._addValue = cfg.add
            this._targetValue = cfg.target
            this._miniClickTimes = cfg.miniClick
            this._maxClickTimes = cfg.maxClick
            this._clickInvokeRate = cfg.rate
            this._showBannerDuration = cfg.duration
            this._isFirstShow = cfg.firstShow
        })
    }

    _initUI() {
        // body...
        let clickProgress = G_UIHelper.seekNodeByName(this.owner, "clickProgress")
        if (clickProgress) {
            // save
            this._clickProgress = clickProgress
            this._clickProgress.value = 0
        }

        let clickBtn = G_UIHelper.seekNodeByName(this.owner, "clickBtn")
        if (clickBtn) {
            // save
            this._clickBtn = clickBtn
            clickBtn._originalBottom = this._clickBtn.bottom

            clickBtn.on("click", null, () => {
                // action
                G_UIHelper.playBtnTouchAction(clickBtn)

                // sound
                G_SoundMgr.playSound(G_SoundName.SN_CLICK)

                // add clickProgress
                this.onAddclickProgress()
            })
        }

        this._finger = G_UIHelper.seekNodeByName(this.owner, "finger")
        this._finger._originalBottom = this._finger.bottom
        this._tips = G_UIHelper.seekNodeByName(this.owner, "tips")
        this._tips._originalBottom = this._tips.bottom
    }

    onShow() {
        // register
        this._initEvent()
    }

    onHide() {
        // unschedule
        this._unschedule()
        G_Scheduler.unschedule("Delay_Hide_Mistake_Banner")

        // unregister
        this._unInitEvent()
    }

    onInit() {
        // hide banner first
        G_Event.dispatchEvent(G_EventName.EN_HIDE_BANNER_AD)

        // reset
        this._isMistakeEnabled = G_MistakeMgr.isClickMistakeEnabledAsync()
        this._isAdvShowed = false
        this._isAdvClicked = false
        this._needClickTimes = G_Utils.random(this._miniClickTimes, this._maxClickTimes)
        this._curClickTimes = 0

        if (this._clickProgress) {
            this._clickProgress.value = 0
        }

        if (this._isFirstShow) {
            if (G_PlatHelper.isWXPlatform()) {
                this._clickBtn.bottom = this._clickBtn._originalBottom + 300
                this._finger.bottom = this._finger._originalBottom + 300
                this._tips.bottom = this._tips._originalBottom + 300
            }
            else {
                this._clickBtn.bottom = this._clickBtn._originalBottom + 200
                this._finger.bottom = this._finger._originalBottom + 200
                this._tips.bottom = this._tips._originalBottom + 200
            }
            G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD)
        }

        // schedule
        this._schedule()
    }
    
    onAddclickProgress() {
        this._clickProgress.value += this._addValue

        // fix
        if (this._clickProgress.value >= this._maxValue) {
            this._clickProgress.value = this._maxValue

            // try hide
            this._tryToHide()
        }

        // mistake
        if (this._isMistakeEnabled) {
            if (this._clickProgress.value > this._targetValue) {
                this._curClickTimes += 1
    
                if (this._curClickTimes === this._needClickTimes) {
                    // show adv
                    this._tryShowAdv()
                }
            }
        }
    }

    onMimusclickProgress() {
        if (this._clickProgress.value > this._miniValue) {
            let minusPercent = G_Utils.random(this._miniMinusValue * 100, this._maxMinusValue * 100)
            this._clickProgress.value -= (minusPercent / 100)

            // fix
            if (this._clickProgress.value < this._miniValue) {
                this._clickProgress.value = this._miniValue
            }
        }
    }

    _initEvent() {
        G_Event.addEventListerner(G_EventName.EN_APP_BEFORE_ONHIDE, this._onAdvTouched, this)
        G_Event.addEventListerner(G_EventName.EN_APP_AFTER_ONSHOW, this._onBackFromTouchAdv, this)
    }

    _unInitEvent() {
        G_Event.removeEventListerner(G_EventName.EN_APP_BEFORE_ONHIDE, this._onAdvTouched, this)
        G_Event.removeEventListerner(G_EventName.EN_APP_AFTER_ONSHOW, this._onBackFromTouchAdv, this)
    }

    _onAdvTouched() {
        if (this.invokeType === "banner") {
            G_Scheduler.unschedule("Delay_Hide_Mistake_Banner")
        }
    }

    _onBackFromTouchAdv() {
        if (this.invokeType === "banner") {
            if (this._isAdvShowed) {
                this._isAdvClicked = true

                // set progress to full
                this._clickProgress.value = this._maxValue
                
                // hide
                this._tryToHide(1500)
            }
        }
    }

    _tryShowAdv() {
        if (this._isAdvShowed) {
            return
        }

        if (!this._isAdvShowed) {
            this._isAdvShowed = true
        }

        if (this.invokeType === "banner") {
            if (!this._isFirstShow) {
                // show banner
                G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD)
            }
            else {
                // move banner
                G_Event.dispatchEvent(G_EventName.EN_MOVE_BANNER_AD, {top: 200})
            }

            // delay hide banner
            G_Scheduler.schedule("Delay_Hide_Mistake_Banner", () => {
                if (!this._isFirstShow) {
                    // hide banner
                    G_Event.dispatchEvent(G_EventName.EN_HIDE_BANNER_AD)
                }
                else {
                    // move banner
                    G_Event.dispatchEvent(G_EventName.EN_MOVE_BANNER_AD, {bottom: 200})
                }

                // reset state
                this._isAdvShowed = false
                this._needClickTimes = G_Utils.random(this._miniClickTimes, this._maxClickTimes)
                this._curClickTimes = 0
            }, false, this._showBannerDuration, 1)
        }
        else if (this.invokeType === "appBox") {
            G_Adv.createBoxAdv(() => {
                // set progress to full
                this._clickProgress.value = this._maxValue
                
                // hide
                this._tryToHide()
            })
        }
    }

    _tryToInvoke() {
        if (this.invokeType === "banner") {
            G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD)
        }
        else if (this.invokeType === "appBox") {
            G_Adv.createBoxAdv(() => {
                this._tryToHide()
            })
        }
    }

    _tryToHide(delay = 1000) {
        if (this._isAdvClicked || this._clickProgress.value >= this._maxValue) {
            if (G_Scheduler.isScheduled("Delay_Hide_Click_Mistake_Popup")) {
                return
            }

            // stop auto reduce progress
            this._unschedule()

            G_Scheduler.schedule("Delay_Hide_Click_Mistake_Popup", () => {
                if (this.invokeType === "banner") {
                    G_UIManager.hideUI("clickBtnMistake")
    
                    // hide banner
                    G_Event.dispatchEvent(G_EventName.EN_HIDE_BANNER_AD)
                }
                else if (this.invokeType === "appBox") {
                    G_UIManager.hideUI("clickBoxMistake")
                }
            }, false, delay, 1)
        }
    }

    _schedule() {
        // unschedule first
        this._unschedule()

        this._scheduleKey = G_Utils.generateString(32)
        G_Scheduler.schedule(this._scheduleKey, () => {
            this.onMimusclickProgress()
        }, false, this._minusGap)
    }

    _unschedule() {
        if (this._scheduleKey !== "") {
            G_Scheduler.unschedule(this._scheduleKey)
            this._scheduleKey = ""
        }
    }
}