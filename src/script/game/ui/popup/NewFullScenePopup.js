import BaseUI from "../base/BaseUI"
import AdvLoadMgr from "../../ctrl/AdvLoadMgr"

export default class NewFullScenePopup extends BaseUI {
    /** @prop {name:rootNode, tips:"根节点，确保锚点在中心", type:Node, default:null}*/
    /** @prop {name:openType, tips:"打开方式, scale为缩放，fromLeft为从左进入，fromBottom为从下进入，opacity为淡入，none为无", type:Option, option:"none,scale,fromLeft,fromBottom,opacity", default:"none"}*/
    /** @prop {name:closeType, tips:"关闭方式, scale为缩放，opacity为淡出，none为无", type:Option, option:"none,scale,opacity", default:"none"}*/

    constructor() {
        super()

        // privates
        this._list = null
        this._listContent = null
        this._closeBtn = null
        this._advLoadMgrs = []

        this._isMistakeEnabled = false
        this._isCanClose = false

        this._isTouching = false
        this._fromTopToBottom = true

        this._isFirstOpen = true
    }

    onAwake() {
        this._rootNode = this.rootNode
        this._openType = this.openType
        this._closeType = this.closeType
    }

    onEnable() {
        // init ui
        this._initUI()
    }

    _initUI() {
        let closeBtn = G_UIHelper.seekNodeByName(this.owner, "closeBtn")
        if (closeBtn) {
            // reset
            closeBtn._isTouching = false

            // record
            closeBtn._originalPos = {x: closeBtn.x, y: Laya.stage.height - closeBtn.height / 2 - closeBtn.bottom}

            // save
            this._closeBtn = closeBtn

            closeBtn.on("click", null, function () {
                this.onCloseTouched(closeBtn)
            }.bind(this))
        }

        let list = G_UIHelper.seekNodeByName(this.owner, "list")
        if (list) {
            // save
            this._list = list

            window.testList = list

            Laya.loader.create("prefab/ad/wx/newFullSceneAdContent.json", Laya.Handler.create(null, json => {
                let creator = new Laya.Prefab()
                creator.json = json
                
                // init
                // list.cacheContent = true
                list.vScrollBarSkin = ""

                var self = this
                list.itemRender = function() {
                    let content = creator.create()

                    // clear
                    self._advLoadMgrs = []

                    let staticAdvLoader = G_UIHelper.seekNodeByName(content, "staticAdvLoader")
                    if (staticAdvLoader) {
                        // save
                        self._advLoadMgrs.push(staticAdvLoader.getComponent(AdvLoadMgr))
                    }

                    let scrollAdvLoader = G_UIHelper.seekNodeByName(content, "scrollAdvLoader")
                    if (scrollAdvLoader) {
                        // save
                        self._advLoadMgrs.push(scrollAdvLoader.getComponent(AdvLoadMgr))
                    }

                    let listAdvLoader = G_UIHelper.seekNodeByName(content, "listAdvLoader")
                    if (listAdvLoader) {
                        // save
                        self._advLoadMgrs.push(listAdvLoader.getComponent(AdvLoadMgr))
                    }

                    return content
                }
                list.array = ["content"]
            }))
        }
    }

    _doTotalScroll() {
        if (this._list && !this._list.destroyed && this._list.scrollBar && !this._isTouching) {
            if (this._fromTopToBottom) {
                this._list.scrollBar.value += 0.5
                if (this._list.scrollBar.value >= this._list.scrollBar.max) {
                    this._list.scrollBar.value = this._list.scrollBar.max
                    this._fromTopToBottom = false
                }
            }
            else {
                this._list.scrollBar.value -= 0.5
                if (this._list.scrollBar.value <= 0) {
                    this._list.scrollBar.value = 0
                    this._fromTopToBottom = true
                }
            }
        }
    }

    _enableTotalScroll() {
        this._isTouching = false
    }

    _disableTotalScroll() {
        this._isTouching = true
    }

    onInit() {
        // check mistake state
        this._isMistakeEnabled = false

        let func = G_MistakeMgr.isMoveMistakeEnabled
        if (typeof G_MistakeMgr.isExportMistakeEnabled === "function") {
            func = G_MistakeMgr.isExportMistakeEnabled
            console.log("Use Export Mistake...")
        }
        else {
            console.log("Use Move Mistake...")
        }

        func(isEnabled => {
            this._isMistakeEnabled = isEnabled

            if (!isEnabled) {
                this._isCanClose = true
                G_UIHelper.delayShow(this._closeBtn)
            }
            else {
                this._isCanClose = false
            }
        })

        // reset
        this._closeBtn.x = this._closeBtn._originalPos.x
        this._closeBtn.y = this._closeBtn._originalPos.y

        // register
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this._disableTotalScroll)
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._enableTotalScroll)
        Laya.stage.on(Laya.Event.MOUSE_OVER, this, this._enableTotalScroll)

        // auto total scroll
        G_Scheduler.schedule("Auto_Do_Total_Scroll_Of_NewFullSceneAd", () => {
            this._doTotalScroll()
        }, true)

        let doShowFinger = () => {
            let allAdvInfos = this._advLoadMgrs[2].getAllExposedAdvInfos()
            let advInfo = null
            if (allAdvInfos.length > 6) {
                let randomIndex = G_Utils.random(0, 5)
                advInfo = allAdvInfos[randomIndex]
            }
            else if (allAdvInfos.length > 0) {
                let randomIndex = G_Utils.random(0, allAdvInfos.length - 1)
                advInfo = allAdvInfos[randomIndex]
            }

            G_UIManager.hideUI("finger")
            if (advInfo) {
                G_UIManager.showUI("finger", null, new Laya.Vector2(advInfo.centerPt.x, advInfo.centerPt.y - 50))
            }
        }

        G_Scheduler.schedule("Auto_Show_Finger_Of_NewFullSceneAd", () => {
            doShowFinger()
        }, false, 2000)

        G_Scheduler.schedule("First_Show_Finger_Of_NewFullSceneAd", () => {
            doShowFinger()
        }, false, 500, 0)

        if (this._advLoadMgrs.length > 0) {
            if (this._isFirstOpen) {
                this._isFirstOpen = false
            }
            else {
                this._advLoadMgrs.forEach(advLoadMgr => {
                    advLoadMgr.refreshAdv()
                })
            }
        }

        // hide banner
        G_Event.dispatchEvent(G_EventName.EN_HIDE_BANNER_AD)
    }

    onHide() {
        if (this._advLoadMgrs.length > 0) {
            this._advLoadMgrs.forEach(advLoadMgr => {
                advLoadMgr.hideAdv()
            })
        }

        // unregister
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this._disableTotalScroll)
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._enableTotalScroll)
        Laya.stage.off(Laya.Event.MOUSE_OVER, this, this._enableTotalScroll)

        // stop auto total scroll
        G_Scheduler.unschedule("Auto_Do_Total_Scroll_Of_NewFullSceneAd")

        G_Scheduler.unschedule("Auto_Show_Finger_Of_NewFullSceneAd")

        // hide banner
        G_Event.dispatchEvent(G_EventName.EN_HIDE_BANNER_AD)
    }

    onCloseTouched( btn ) {
        G_UIHelper.playBtnTouchAction(btn, () => {
            if (this._isCanClose) {
                G_UIManager.hideUI("finger")
                G_UIManager.hideUI("newFullSceneAd")
                return
            }
            
            if (btn._isTouching) {
                return
            }

            if (!this._isMistakeEnabled) {
                G_UIManager.hideUI("finger")
                G_UIManager.hideUI("newFullSceneAd")
            }
            else {
                // mark
                btn._isTouching = true

                G_UIHelper.autoMove(btn, 0, 0, 2000, 1000, false, new Laya.Vector2(0, 0), step => {
                    if (step === "hold_finished_1") {
                        // show banner
                        G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD)
                    }
                    if (step === "hold_finished_2") {
                        btn._moveTween = Laya.Tween.to(btn, {x: btn._originalPos.x, y: btn._originalPos.y - 250}, 1000, null, Laya.Handler.create(null, function () {
                            btn._moveTween = null
                        }), 0, false, false)
                    }
                    else if (step === "move_finished") {
                        // reset
                        btn._isTouching = false
                        this._isCanClose = true

                        btn.x = btn._originalPos.x
                        btn.y = btn._originalPos.y - 250
                    }
                })
            }
        })
        
        G_SoundMgr.playSound(G_SoundName.SN_CLICK)
    }
}