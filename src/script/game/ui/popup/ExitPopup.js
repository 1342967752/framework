import BaseUI from "../base/BaseUI"
import AdvLoadMgr from "../../ctrl/AdvLoadMgr"

export default class ExitPopup extends BaseUI {
    /** @prop {name:rootNode, tips:"根节点，确保锚点在中心", type:Node, default:null}*/
    /** @prop {name:openType, tips:"打开方式, scale为缩放，fromLeft为从左进入，fromBottom为从下进入，opacity为淡入，none为无", type:Option, option:"none,scale,fromLeft,fromBottom,opacity", default:"none"}*/
    /** @prop {name:closeType, tips:"关闭方式, scale为缩放，opacity为淡出，none为无", type:Option, option:"none,scale,opacity", default:"none"}*/

    constructor() { 
        super();

        // privates
        this._closeBtn = null
        this._advLoadMgr = null
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
        let closeBtn = G_UIHelper.seekNodeByName(this.owner, "closeBtn")
        if (closeBtn) {
            // save
            this._closeBtn = closeBtn

            closeBtn.on("click", null, function () {
                this.onCloseTouched(closeBtn)
            }.bind(this))
        }

        let advLoadMgr = this.owner.getComponent(AdvLoadMgr)
        if (advLoadMgr) {
            // save
            this._advLoadMgr = advLoadMgr
        }
    }

    onInit() {
        if (this._closeBtn) {
            G_UIHelper.delayShow(this._closeBtn)
        }

        if (this._advLoadMgr) {
            this._advLoadMgr.refreshAdv()
        }
    }

    onHide() {
        if (this._advLoadMgr) {
            this._advLoadMgr.hideAdv()
        }
    }

    onCloseTouched( btn ) {
        G_UIHelper.playBtnTouchAction(btn, function () {
            G_OVAdv.reportNativeAdHide()
            G_UIManager.hideUI("exitAd")
        }.bind(this))
        
        G_SoundMgr.playSound(G_SoundName.SN_CLICK)
    }
}