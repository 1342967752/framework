import BaseUI from "../base/BaseUI"

export default class NativeFlow extends BaseUI {
    constructor() { 
        super();

        // privates
        this._closeBtn = null
        this._clickBtn = null
        this._checkBtn = null
        this._insertAdObj = null
        this._insertAdInfo = null
    }

    onEnable() {
        // init ui
        this._initUI()

        // init event
        this._initEvent()
    }

    onDisable() {
        // uninit event
        this._unInitEvent()
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

        let clickBtn = G_UIHelper.seekNodeByName(this.owner, "clickBtn")
        if (clickBtn) {
            // save
            this._clickBtn = clickBtn

            clickBtn.on("click", null, function () {
                this.onClickTouched(clickBtn)
            }.bind(this))
        }

        let checkBtn = G_UIHelper.seekNodeByName(this.owner, "checkBtn")
        if (checkBtn) {
            // save
            this._checkBtn = checkBtn

            checkBtn.on("click", null, function () {
                this.onClickTouched(checkBtn)
            }.bind(this))
        }
    }

    _initEvent() {
        G_Event.addEventListerner(G_EventName.EN_REFRESH_FLOW_AD, this._doShowAndRefreshAd, this)
    }

    _unInitEvent() {
        G_Event.removeEventListerner(G_EventName.EN_REFRESH_FLOW_AD, this._doShowAndRefreshAd, this)
    }

    _initOnShowEvent() {
        G_Event.addEventListerner(G_EventName.EN_REFRESH_ONSHOW_FLOW_AD, this._refreshNativeAd, this)
    }

    _unInitOnShowEvent() {
        G_Event.removeEventListerner(G_EventName.EN_REFRESH_ONSHOW_FLOW_AD, this._refreshNativeAd, this)
    }

    _doShowAndRefreshAd() {
        // show
        this.showUI()
    }

    onShow() {
        this._initOnShowEvent()
    }

    onInit() {
        // refresh
        this._refreshNativeAd()
    }

    onHide() {
        this._unInitOnShowEvent()
    }

    onCloseTouched( btn ) {
        G_UIHelper.playBtnTouchAction(btn, function () {
            G_OVAdv.reportNativeAdHide()
            
            // hide
            this.hideUI()
        }.bind(this))
        
        G_SoundMgr.playSound(G_SoundName.SN_CLICK)
    }

    onClickTouched( btn ) {
        let doClick = () => {
            if (this._insertAdObj && this._insertAdInfo) {
                G_OVAdv.reportNativeAdClick(this._insertAdObj, this._insertAdInfo.adId, this._insertAdInfo.localAdID)
            }
    
            // hide
            this.hideUI()
        }
        
        if (btn === this._clickBtn) {
            doClick()
        }
        else {
            G_UIHelper.playBtnTouchAction(btn, function () {
                doClick()
            }.bind(this))
        }
        
        G_SoundMgr.playSound(G_SoundName.SN_CLICK)
    }

    _refreshNativeAd() {
        if (!this.isOnShow()) {
            return
        }

        if (!G_PlatHelper.isOVPlatform() && !G_PlatHelper.isHWPlatform()) {
            // hide
            this.hideUI()
            return
        }

        let loadCb = function (ret) {
            if (this.destroyed) return

            if (ret) {
                let info = G_OVAdv.getNextNativeAdInfo()

                if (info) {
                    let insertAdObj = info[0]
                    let insertAdInfo = info[1]

                    if (insertAdObj && insertAdInfo) {
                        // save
                        this._insertAdObj = insertAdObj
                        this._insertAdInfo = insertAdInfo

                        if (this._clickBtn) {
                            let imageUrl = ""

                            if (insertAdInfo.imgUrlList.length > 0) {
                                imageUrl = insertAdInfo.imgUrlList[0]
                            }
                            else if (insertAdInfo.iconUrlList.length > 0) {
                                imageUrl = insertAdInfo.iconUrlList[0]
                            }

                            if (G_PlatHelper.isHWPlatform()) {
                                this._clickBtn.skin = ""
                                Laya.loader.load(imageUrl, Laya.Handler.create(this, function () {
                                    if (this.destroyed) return

                                    this.owner.visible = true
                                    this._clickBtn.skin = imageUrl
                                    G_OVAdv.reportNativeAdShow(insertAdObj, insertAdInfo.adId)
                                }))
                            }
                            else {
                                this.owner.visible = true
                                this._clickBtn.skin = imageUrl

                                // report ad show
                                G_OVAdv.reportNativeAdShow(insertAdObj, insertAdInfo.adId)
                            }
                            
                            // ok
                            return
                        }
                    }
                }
            }

            // hide
            this.hideUI()
        }.bind(this)

        this.owner.visible = false

        if (G_PlatHelper.isHWPlatform()) {
            // clear cache native ad
            G_OVAdv.reportNativeAdHide()
            G_OVAdv.loadRandomNativeAd(loadCb)
        }
        else {
            loadCb()
        }
    }
}