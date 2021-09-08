import BaseUI from "../base/BaseUI"
import AdvLoadMgr from "../../ctrl/AdvLoadMgr"

export default class RewardNavAdPopup extends BaseUI {
    /** @prop {name:rootNode, tips:"根节点，确保锚点在中心", type:Node, default:null}*/
    /** @prop {name:openType, tips:"打开方式, scale为缩放，fromLeft为从左进入，fromBottom为从下进入，opacity为淡入，none为无", type:Option, option:"none,scale,fromLeft,fromBottom,opacity", default:"none"}*/
    /** @prop {name:closeType, tips:"关闭方式, scale为缩放，opacity为淡出，none为无", type:Option, option:"none,scale,opacity", default:"none"}*/

    constructor() { 
        super();

        // privates
        this._bg = null
        this._title = null
        this._content = null
        this._icon = null
        this._cancelBtn = null
        this._confirmBtn = null
        this._cb = null

        this._onShowAdvInfo = null
        this._canGotReward = false
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
        // body...
        let bg = G_UIHelper.seekNodeByName(this.owner, "bg")
        if (bg) {
            // save
            this._bg = bg
        }

        let title = G_UIHelper.seekNodeByName(this.owner, "title")
        if (title) {
            // save
            this._title = title
        }

        let content = G_UIHelper.seekNodeByName(this.owner, "content")
        if (content) {
            // save
            this._content = content
        }

        let icon = G_UIHelper.seekNodeByName(this.owner, "icon")
        if (icon) {
            icon.getAdvLoadMgr = function () {
                return icon._advLoadMgr
            }
            
            // default
            icon._advLoadMgr = icon.getComponent(AdvLoadMgr)

            // save
            this._icon = icon
        }

        let cancelBtn = G_UIHelper.seekNodeByName(this.owner, "cancelBtn")
        if (cancelBtn) {
            cancelBtn.on("click", null, function () {
                this.onCancelTouched(cancelBtn)
            }.bind(this))

            // save
            this._cancelBtn = cancelBtn
        }

        let confirmBtn = G_UIHelper.seekNodeByName(this.owner, "confirmBtn")
        if (confirmBtn) {
            confirmBtn.on("click", null, function () {
                this.onConfirmTouched(confirmBtn)
            }.bind(this))

            // save
            this._confirmBtn = confirmBtn
        }
    }

    _initEvent() {
        G_Event.addEventListerner(G_EventName.EN_LAUNCH_APP_BACK_FROM_OTHER_APP, this._onGotReward, this)
    }

    _unInitEvent() {
        G_Event.removeEventListerner(G_EventName.EN_LAUNCH_APP_BACK_FROM_OTHER_APP, this._onGotReward, this)
    }

    _onGotReward() {
        if (this._canGotReward) {
            this._canGotReward = false

            // hide ui
            G_UIManager.hideUI("rewardNavAd")

            // event
            G_Event.dispatchEvent(G_EventName.EN_GOT_NAVIGATION_REDPACKAGE)
        }
    }

    onShow() {
        // register
        this._initEvent()
    }

    onHide() {
        // unregister
        this._unInitEvent()
    }

    onInit() {
        // reset
        this._canGotReward = false

        // refresh
        this._icon.getAdvLoadMgr().refreshAdv()

        this._icon.getAdvLoadMgr().getAdvInfos(advInfos => {
            if (advInfos.length > 0) {
                let advInfo = advInfos[0]
                // save
                this._onShowAdvInfo = advInfo

                // content
                this._content.text = "进入" + advInfo.title + "领取红包"
            }
            else {
                // hide
                this.hideUI()
            }
        })
    }

    onCancelTouched() {
        G_UIManager.hideUI("rewardNavAd")

        // event
        G_Event.dispatchEvent(G_EventName.EN_CANCEL_NAVIGATION_FROM_AD, this._icon.getAdvLoadMgr().advKey)
    }

    onConfirmTouched() {
        if (this._onShowAdvInfo) {
            this._icon.getAdvLoadMgr().navagate(this._onShowAdvInfo, bSucc => {
                if (!bSucc) {
                    G_UIManager.hideUI("rewardNavAd")

                    // event
                    G_Event.dispatchEvent(G_EventName.EN_CANCEL_NAVIGATION_FROM_AD, this._icon.getAdvLoadMgr().advKey)
                }
                else {
                    // mark
                    this._canGotReward = true
                }
            })
        }
    }
}