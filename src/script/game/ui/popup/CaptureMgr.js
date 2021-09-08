import BaseUI from "../base/BaseUI"

export default class CaptureMgr extends BaseUI {
    /** @prop {name:rootNode, tips:"根节点，确保锚点在中心", type:Node, default:null}*/
    /** @prop {name:openType, tips:"打开方式, scale为缩放，fromLeft为从左进入，fromBottom为从下进入，opacity为淡入，none为无", type:Option, option:"none,scale,fromLeft,fromBottom,opacity", default:"none"}*/
    /** @prop {name:closeType, tips:"关闭方式, scale为缩放，opacity为淡出，none为无", type:Option, option:"none,scale,opacity", default:"none"}*/

    constructor() { 
        super();

        // privates
        this._inited = false
        this._sp = null
        this._savedCaptureFilePath = ""
    }

    onAwake() {
        this._rootNode = this.rootNode
        this._openType = this.openType
        this._closeType = this.closeType
    }
    
    onEnable() {
        // init ui
        this._initUI()

        if (G_PlatHelper.getPlat()) {
            let rootDir = this._getCaptureSaveRootDir()
            
            if (G_PlatHelper.isNativePlatform()) {
                this._inited = true
            }
            else {
                let fs = G_PlatHelper.getPlat().getFileSystemManager()

                try {
                    fs.accessSync(rootDir)
                    this._inited = true
                }
                catch (e) {
                    try {
                        fs.mkdirSync(rootDir, true)
                        this._inited = true
                    }
                    catch (e) {
                        // notify
                        G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
                    }
                }
            }
        }
    }

    _initUI() {
        // body...
        let sp = G_UIHelper.seekNodeByName(this.owner, "sp")
        if (sp) {
            sp.on("click", null, () => {
                G_UIManager.hideUI("capture")
            })

            // save
            this._sp = sp
        }
    }

    onInit( cb ) {
        let scale = 1
        if (G_PlatHelper.isQQPlatform()) {
            scale = 1.5
        }

        if (this._sp) {
            this._sp.visible = false
            this._sp.width = Laya.stage.width * scale
            this._sp.height = Laya.stage.height * scale
            this._sp.pivotX = this._sp.width
            this._sp.pivotY = this._sp.height * 0.75
            this._sp.x = Laya.stage.width
            this._sp.y = Laya.stage.height * 0.75
        }

        let savedPath = ""
        let isTweenFinished = false

        let isAllFinished = () => {
            if (savedPath !== "" && isTweenFinished) {
                if (typeof cb === "function") {
                    cb(savedPath)
                }
            }
        }

        let htmlCanvas = Laya.stage.drawToCanvas(Laya.stage.width * scale, Laya.stage.height * scale, 0, 0)
        let texture = htmlCanvas.getTexture()

        if (this._sp) {
            this._sp.visible = true
            this._sp.graphics.clear(true)
            this._sp.graphics.drawImage(texture)
            // this._sp.graphics.fillTexture(texture, 0, 0, this._sp.width, this._sp.height, "no-repeat", new Laya.Point(0, 0))

            if (this._sp._scaleTween) {
                this._sp._scaleTween.clear()
                this._sp._scaleTween = null
            }

            this._sp.scaleX = 1 / scale
            this._sp.scaleY = 1 / scale

            this._sp._scaleTween = Laya.Tween.to(this._sp, {scaleX: 0.3 / scale, scaleY: 0.3 / scale}, 1000, Laya.Ease.sineOut, Laya.Handler.create(null, () => {
                this._sp._scaleTween = null

                // mark
                isTweenFinished = true

                // try cb
                isAllFinished()
            }), 0, false, false)
        }

        // save to disk
        if (G_PlatHelper.getPlat()) {
            let filePath = this._getCaptureSaveRootDir() + "/" + G_Utils.generateString(16) + ".jpg"

            if (G_PlatHelper.isNativePlatform()) {
                G_PlatHelper.getPlat().captureScreen((arrayBuff, width, height) => {
                    G_PlatHelper.getPlat().saveAsJpeg(arrayBuff, width, height, filePath)

                    // save
                    savedPath = filePath

                    // try cb
                    isAllFinished()
                })
            }
            else {
                let fs = G_PlatHelper.getPlat().getFileSystemManager()

                let fileData = htmlCanvas.toBase64("image/jpg")
                fs.writeFile({
                    filePath: filePath,
                    data: fileData.substring(fileData.indexOf(',') + 1),
                    encoding: "base64",
                    success: () => {
                        // save
                        savedPath = filePath

                        // try cb
                        isAllFinished()
                    },
                    fail: (res) => {
                        console.error("save error: ", res.errMsg)

                        // notify
                        G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
                    }
                })
            }
        }
    }

    onHide() {
        if (this._sp) {
            if (this._sp._scaleTween) {
                this._sp._scaleTween.clear()
                this._sp._scaleTween = null
            }
        }
    }

    _getCaptureSaveRootDir() {
        // body...
        if (G_PlatHelper.getPlat()) {
            if (G_PlatHelper.isNativePlatform()) {
                return G_PlatHelper.getPlat().getCachePath()
            }
            else {
                return G_PlatHelper.getPlat().env.USER_DATA_PATH + "/capture"
            }
        }
        else {
            return ""
        }
    }
}