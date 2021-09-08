import BaseUI from "../base/BaseUI"

var Max_Str_Length_Of_Loading_Content = 14

export default class Waiting extends BaseUI {
    /** @prop {name:rootNode, tips:"根节点，确保锚点在中心", type:Node, default:null}*/
    /** @prop {name:openType, tips:"打开方式, scale为缩放，fromLeft为从左进入，fromBottom为从下进入，opacity为淡入，none为无", type:Option, option:"none,scale,fromLeft,fromBottom,opacity", default:"none"}*/
    /** @prop {name:closeType, tips:"关闭方式, scale为缩放，opacity为淡出，none为无", type:Option, option:"none,scale,opacity", default:"none"}*/

    constructor() { 
        super();

        // privates
        this._bg = null
        this._icon = null
        this._content = null
    }

    onAwake() {
        this._rootNode = this.rootNode
        this._openType = this.openType
        this._closeType = this.closeType
    }

    onEnable() {
        // init UI
        this._initUI()
    }

    _initUI() {
        // body...
        let bg = G_UIHelper.seekNodeByName(this.owner, "bg")
        if (bg) {
            // save
            this._bg = bg
        }

        let icon = G_UIHelper.seekNodeByName(this.owner, "icon")
        if (icon) {
            icon.rotateForever = function () {
                if (icon._isRotating) {
                    return
                }

                // mark
                icon._isRotating = true

                G_Scheduler.schedule("Rotate_Of_Loading_Icon", () => {
                    icon.rotation = (icon.rotation - 45) % 360
                }, false, 100)
            }

            icon.stopRotate = function () {
                if (!icon._isRotating) {
                    return
                }

                // mark
                icon._isRotating = false
                icon.rotation = 0

                G_Scheduler.unschedule("Rotate_Of_Loading_Icon")
            }

            // default
            icon._isRotating = false

            // save
            this._icon = icon
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

        let content = G_UIHelper.seekNodeByName(this.owner, "content")
        if (content) {
            // save
            this._content = content
        }
    }

    onShow() {
        if (this._icon) {
            this._icon.rotateForever()
        }
    }

    onInit( content ) {
        if (this._content) {
            this._content.text = G_Utils.cutString(content, Max_Str_Length_Of_Loading_Content)
        }
    }

    onHide() {
        if (this._icon) {
            this._icon.stopRotate()
        }
    }
}
