import BaseUI from "../base/BaseUI"

export default class Finger extends BaseUI {
    /** @prop {name:rootNode, tips:"根节点，确保锚点在中心", type:Node, default:null}*/
    /** @prop {name:openType, tips:"打开方式, scale为缩放，fromLeft为从左进入，fromBottom为从下进入，opacity为淡入，none为无", type:Option, option:"none,scale,fromLeft,fromBottom,opacity", default:"none"}*/
    /** @prop {name:closeType, tips:"关闭方式, scale为缩放，opacity为淡出，none为无", type:Option, option:"none,scale,opacity", default:"none"}*/

    constructor() { 
        super();

        // privates
        this._finger = null
        this._release = null
        this._press = null
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
        let finger = G_UIHelper.seekNodeByName(this.owner, "finger")
        if (finger) {
            // save
            this._finger = finger
        }

        let release = G_UIHelper.seekNodeByName(this.owner, "release")
        if (release) {
            // save
            this._release = release
        }

        let press = G_UIHelper.seekNodeByName(this.owner, "press")
        if (press) {
            // save
            this._press = press
        }
    }

    onInit( worldPt, duration = 2000 ) {
        this._release.visible = true
        this._press.visible = false
        this._finger.x = worldPt.x
        this._finger.y = worldPt.y

        G_Scheduler.schedule("Auto_Change_Fingers", () => {
            this._release.visible = !this._release.visible
            this._press.visible = !this._press.visible
        }, false, 200)

        if (duration > 0) {
            G_Scheduler.schedule("Auto_Close_Finger", () => {
                G_UIManager.hideUI("finger")
            }, false, duration, 1)
        }
    }

    onHide() {
        G_Scheduler.unschedule("Auto_Change_Fingers")
        G_Scheduler.unschedule("Auto_Close_Finger")
    }
}