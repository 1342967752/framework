// for vivo
var G_GapOfEachBanner = 3000
var G_GapOfEachVideo = 3000

/*
* oppo或vivo广告管理类
* 
*/
var _OVAdv = (function () {
	var _instance;

	function init() {
		// body...
		console.log('Init G_OVAdv Instance...')

        var _isSupport = false
        var _configs = null

        // banner
        var _bannerConfigs = null
        var _onShowBannerObj = null

        // video
        var _videoConfigs = null
        var _onShowVideoObj = null

        // insert
        var _insertConfigs = null
        var _onShowInsertObj = null

        // native
        var _nativeConfigs = null
        var _unClickNativeObjs = []
        var _lastUsedAdID = ""

		return {
			init: function () {
                // body...
				if(window.qg && G_PlatHelper.isOPPOPlatform() && G_PlatHelper.getPlat().initAdService) {
                    let oppo_app_id = G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_OPPO_MINI_PROGRAM_APP_ID"]).str

                    G_PlatHelper.getPlat().initAdService({
                        appId: oppo_app_id,
                        isDebug: true,
                        success: function(res) {
                            _isSupport = true
                            console.log("initAdService success")
                        },
                        fail: function(res) {
                            console.log("initAdService fail, code: " + res.code + ", msg: " + res.msg)
                        },
                        complete: function(res) {
                            console.log("initAdService complete")
                        }
                    })
                }
                else if (G_PlatHelper.isVIVOPlatform()) {
                    _isSupport = true
                }
                else if (G_PlatHelper.isMZPlatform()) {
                    _isSupport = true
                }
                else if (G_PlatHelper.isHWPlatform()) {
                    _isSupport = true
                }
			},

			isSupport: function () {
				// body...
				return (_isSupport && _configs.length > 0)
            },

            stopSupport: function () {
                console.log("force stop support all advs...")
                _isSupport = false
            },

            isSupportBanner: function () {
                return (_isSupport && _bannerConfigs.length > 0)  
            },

            isSupportVideo: function () {
                if (G_PlatHelper.isHWPlatform()) {
                    if (_onShowVideoObj) {
                        console.log("_onShowVideoObj._isLoaded: ", _onShowVideoObj._isLoaded)
                    }
                    return (_isSupport && _videoConfigs.length > 0 && _onShowVideoObj && _onShowVideoObj._isLoaded) 
                }
                else {
                    return (_isSupport && _videoConfigs.length > 0)  
                }
            },

            isSupportInsert: function () {
                return (_isSupport && _insertConfigs.length > 0)  
            },

            isSupportNative: function () {
                if (G_PlatHelper.isHWPlatform()) {
                    return (_isSupport && _nativeConfigs.length > 0)
                }
                else {
                    return (_isSupport && _nativeConfigs.length > 0 && _unClickNativeObjs.length > 0)
                }
            },

            preload: function ( cb ) {
                console.log("start preload ov adv...")

                let needLoadAdCount = 0
                let loadedAdCount = 0
                let isVideoLoadSucc = false
                let isNativeLoadSucc = false

                let onLoaded = () => {
                    loadedAdCount += 1
                    if (loadedAdCount === needLoadAdCount) {
                        if (typeof cb === "function") {
                            cb(isVideoLoadSucc, isNativeLoadSucc)
                        }
                    }
                }

                if (G_PlatHelper.isHWPlatform()) {
                    needLoadAdCount += 1
                    this.loadRandomVideoAd(bSucc => {
                        if (bSucc) {
                            console.log("preload video ad succ...")
                        }
                        else {
                            console.log("preload video ad fail...")
                        }

                        isVideoLoadSucc = true
                        onLoaded()
                    })
                }
                
                if (!G_PlatHelper.isHWPlatform()) {
                    needLoadAdCount += 1
                    this.loadRandomNativeAd(obj => {
                        if (obj) {
                            console.log("preload native ad succ...")
                        }
                        else {
                            console.log("preload native ad fail...")
                        }
    
                        if (obj) {
                            isNativeLoadSucc = true
                        }
                        onLoaded()
                    })
                }
            },

            registerAll: function (configs) {
				// body...
				if (configs) {
                    _configs = configs
                    _bannerConfigs = []
                    _videoConfigs = []
                    _insertConfigs = []
                    _nativeConfigs = []
                    
                    let _checkString = function ( str ) {
                        if (typeof str === "string" && str !== "") {
                            return true
                        }

                        return false
                    }

					for (let i = 0; i < _configs.length; i++) {
						let info = _configs[i]
						if (info && _checkString(info.key) && _checkString(info.posId)) {
                            if (info.type === "Banner") {
                                let funcName = "show" + info.key + "BannerAd"
                                this[funcName] = function (loadCb) {
                                    // body...
                                    if (!G_PlatHelper.isOVPlatform()) {
                                        console.log("call {0} func...".format(funcName))
                                    }
									return this._doShowBanner(info.posId, loadCb)
                                }.bind(this)
                                
                                // push into banner cfgs
                                _bannerConfigs.push(info)
                            }

                            if (info.type === "Video") {
                                let funcName = "show" + info.key + "VideoAd"
                                this[funcName] = function ( closeCb, errCb ) {
                                    // body...
                                    if (G_PlatHelper.isWINPlatform()) {
                                        console.log("call {0} func...".format(funcName))
                                    }

									return this._doShowVideo(info.posId, closeCb, errCb)
                                }.bind(this)
                                
                                // push into video cfgs
                                _videoConfigs.push(info)
                            }

                            if (info.type === "Insert") {
                                let funcName = "show" + info.key + "InsertAd"
                                this[funcName] = function ( cb ) {
                                    // body...
                                    if (G_PlatHelper.isWINPlatform()) {
                                        console.log("call {0} func...".format(funcName))
                                    }
									return this._doShowInsertAd(info.posId, cb)
                                }.bind(this)
                                
                                // push into insert cfgs
                                _insertConfigs.push(info)
                            }

                            if (info.type === "Native") {
                                let funcName = "load" + info.key + "NativeAd"
                                this[funcName] = function ( cb ) {
                                    // body...
                                    if (G_PlatHelper.isWINPlatform()) {
                                        console.log("call {0} func...".format(funcName))
                                    }
									return this._doLoadNativeAd(info.posId, cb)
                                }.bind(this)
                                
                                // push into insert cfgs
                                _nativeConfigs.push(info)
                            }
                        }
                    }
				}
            },

            hideOnShowBannerAd: function () {
                if (_onShowBannerObj) {
                    _onShowBannerObj.hide()
                }
            },

            destroyOnShowBannerAd: function () {
                if (_onShowBannerObj) {
                    _onShowBannerObj.destroy()
                    _onShowBannerObj = null
                }
            },
            
            showRandomBannerAd: function ( loadCb ) {
                if (_bannerConfigs && _bannerConfigs.length > 0) {
                    let randomIndex = G_Utils.random(0, _bannerConfigs.length - 1)
                    let info = _bannerConfigs[randomIndex]

                    if (info) {
                        let funcName = "show" + info.key + "BannerAd"
                        let func = this[funcName]

                        if (func) {
                            return func.call(this, loadCb)
                        }
                    }
                }

                return null
            },

            showRandomVideoAd: function ( closeCb, errCb ) {
                if (_videoConfigs && _videoConfigs.length > 0) {
                    let randomIndex = G_Utils.random(0, _videoConfigs.length - 1)
                    let info = _videoConfigs[randomIndex]

                    if (info) {
                        let funcName = "show" + info.key + "VideoAd"
                        let func = this[funcName]

                        if (func) {
                            return func.call(this, closeCb, errCb)
                        }
                    }
                }

                return null
            },

            showRandomInsertAd: function ( cb ) {
                if (_insertConfigs && _insertConfigs.length > 0) {
                    let randomIndex = G_Utils.random(0, _insertConfigs.length - 1)
                    let info = _insertConfigs[randomIndex]

                    if (info) {
                        let funcName = "show" + info.key + "InsertAd"
                        let func = this[funcName]

                        if (func) {
                            return func.call(this, cb)
                        }
                    }
                }

                return null
            },
            
            loadRandomNativeAd: function ( cb ) {
                let tryTimes = 0
                let maxTryTimes = Math.min(3, _nativeConfigs.length)

                let _doTry = (_index, _cb) => {
                    let info = _nativeConfigs[_index]

                    if (info) {
                        let funcName = "load" + info.key + "NativeAd"
                        let func = this[funcName]

                        if (func) {
                            func.call(this, (obj) => {
                                if (obj) {
                                    let isFound = false

                                    // 同一帧拉取原生广告，可能返回同样的广告对象，不能重复添加
                                    for (let i = 0; i < _unClickNativeObjs.length; i++) {
                                        if (_unClickNativeObjs[i]._adList[0].adId === obj._adList[0].adId) {
                                            isFound = true
                                            break
                                        }
                                    }

                                    if (!isFound) {
                                        _unClickNativeObjs.push(obj)
                                    }
                                }

                                if (typeof _cb === "function") {
                                    _cb(obj)
                                }
                            })
                        }
                    }
                }

                let doTry = (index) => {
                    tryTimes += 1
                    _doTry(index, obj => {
                        if (obj) {
                            if (typeof cb === "function") {
                                cb(obj)
                            }
                        }
                        else {
                            if (tryTimes < maxTryTimes) {
                                let nextIndex = index + 1
                                if (nextIndex === _nativeConfigs.length) {
                                    nextIndex = 0
                                }

                                doTry(nextIndex)
                            }
                            else {
                                if (typeof cb === "function") {
                                    cb(null)
                                }
                            }
                        }
                    })
                }

                // first try
                let randomIndex = G_Utils.random(0, _nativeConfigs.length - 1)
                doTry(randomIndex)
            },

            _doShowBanner: function ( _posId, _loadCb = null ) {
                if (!_isSupport) {
                    return null
                }

                console.log("show banner: ", _posId)

                if (_onShowBannerObj) {
                    if (G_PlatHelper.isOPPOPlatform()) {
                        _onShowBannerObj.destroy()
                        _onShowBannerObj = null
                    }
                    else {
                        if ((G_ServerInfo.getServerTime() - _onShowBannerObj._lastCreatedTime) > G_GapOfEachBanner) {
                            _onShowBannerObj.destroy()
                            _onShowBannerObj = null
                        }
                        else {
                            let needTime = G_GapOfEachBanner / 1000 - Math.floor((G_ServerInfo.getServerTime() - _onShowBannerObj._lastCreatedTime) / 1000)
                            console.log("banner广告还未准备好，请{0}秒后重新尝试".format(needTime.toString()))
                        }
                    }
                }

                if (_onShowBannerObj === null) {
                    let bannerObj = null

                    if (G_PlatHelper.isOPPOPlatform()) {
                        bannerObj = G_PlatHelper.getPlat().createBannerAd({posId: _posId})
                    }
                    else if (G_PlatHelper.isMZPlatform()) {
                        let screenHeight = qg.getSystemInfoSync().screenHeight
                        let screenWidth = qg.getSystemInfoSync().screenWidth
                        bannerObj = G_PlatHelper.getPlat().createBannerAd({
                            adUnitId: _posId,
                            style: {
                                left: 0,
                                top: screenHeight - screenWidth / 6.7,
                                width:screenWidth,
                                height: screenWidth / 6.7
                            }
                        })
                    }
                    else {
                        bannerObj = G_PlatHelper.getPlat().createBannerAd({
                            posId: _posId,
                            style: {}
                        })
                    }

                    if (typeof _loadCb === "function") {
                        bannerObj._loadCb = _loadCb
                    }

                    if (G_PlatHelper.isVIVOPlatform() || G_PlatHelper.isMZPlatform()) {
                        bannerObj.onLoad(function() {
                            if (bannerObj && bannerObj._loadCb) {
                                let loadCb = bannerObj._loadCb
                                bannerObj._loadCb = null

                                // cb
                                loadCb(bannerObj)
                            }
                        })
                    }

                    bannerObj.onError(function( err ) {
                        console.error(err)

                        if (G_PlatHelper.isVIVOPlatform() || G_PlatHelper.isMZPlatform()) {
                            _onShowBannerObj = null
                        }
                    })

                    if (G_PlatHelper.isVIVOPlatform() || G_PlatHelper.isMZPlatform()) {
                        bannerObj.onClose(function () {
                            _onShowBannerObj = null
                        })
                    }

                    // save to on show
                    _onShowBannerObj = bannerObj
                    _onShowBannerObj._lastCreatedTime = G_ServerInfo.getServerTime()

                    if (G_PlatHelper.isOPPOPlatform()) {
                        if (bannerObj._loadCb) {
                            let loadCb = bannerObj._loadCb
                            bannerObj._loadCb = null

                            // cb
                            loadCb(bannerObj)
                        }
                        else {
                            // direct show
                            bannerObj.show()
                        }
                    }
                }
        
                return _onShowBannerObj
            },

            loadRandomVideoAd: function (cb) {
                if (_videoConfigs && _videoConfigs.length > 0) {
                    let randomIndex = G_Utils.random(0, _videoConfigs.length - 1)
                    let info = _videoConfigs[randomIndex]

                    if (!_onShowVideoObj) {
                        _onShowVideoObj = this._doCreateVideoObj(info.posId)
                    }

                    if (G_PlatHelper.isHWPlatform()) {
                        if (_onShowVideoObj._isLoaded) {
                            if (typeof cb === "function") {
                                cb(true)
                            }
                        }
                        else {
                            if (typeof cb === "function") {
                                _onShowVideoObj.loadCb = cb
                            }

                            console.log("preload video: ", info.posId)
                            _onShowVideoObj.load()
                        }
                    }
                    else {
                        if (typeof cb === "function") {
                            cb(false)
                        }
                    }
                }
                else {
                    if (typeof cb === "function") {
                        cb(false)
                    }
                }
            },
        
            _doShowVideo: function ( _posId, _closeCb, _errCb ) {
                if (!_isSupport) {
                    return null
                }
                
                if (_onShowVideoObj) {
                    if (G_PlatHelper.isOPPOPlatform()) {
                        _onShowVideoObj.destroy()
                        _onShowVideoObj = null
                    }
                }
        
                if (_onShowVideoObj === null) {
                    _onShowVideoObj = this._doCreateVideoObj(_posId)
                }

                console.log("show video: ", _posId)

                if (typeof _closeCb === "function") {
                    _onShowVideoObj.closeCb = _closeCb
                }

                if (typeof _errCb === "function") {
                    _onShowVideoObj.errCb = _errCb
                }

                if (G_PlatHelper.isHWPlatform()) {
                    if (_onShowVideoObj._isLoaded) {
                        // reset
                        _onShowVideoObj._isLoaded = false

                        _onShowVideoObj.show()
                    }
                    else {
                        _onShowVideoObj.load()
                    }
                }
                else if (G_PlatHelper.isOPPOPlatform()) {
                    _onShowVideoObj.load()
                }
                else {
                    if (_onShowVideoObj._lastShowedTime) {
                        console.log(G_ServerInfo.getServerTime(), "-", _onShowVideoObj._lastShowedTime)
                        if ((G_ServerInfo.getServerTime() - _onShowVideoObj._lastShowedTime) > G_GapOfEachVideo) {
                            _onShowVideoObj.load()
                        }
                        else {
                            let __errCb = _onShowVideoObj.errCb
                            _onShowVideoObj.closeCb = null
                            _onShowVideoObj.errCb = null

                            if(__errCb) {
                                __errCb(-1)
                                // __errCb(G_GapOfEachVideo / 1000 - Math.floor((G_ServerInfo.getServerTime() - _onShowVideoObj._lastShowedTime) / 1000))
                            }
                        }
                    }
                    else {
                        _onShowVideoObj.load()
                    }
                }

                return _onShowVideoObj
            },

            _doCreateVideoObj: function (_posId) {
                let videoObj = null

                if (G_PlatHelper.isMZPlatform() || G_PlatHelper.isHWPlatform()) {
                    videoObj = G_PlatHelper.getPlat().createRewardedVideoAd({adUnitId: _posId})
                }
                else {
                    videoObj = G_PlatHelper.getPlat().createRewardedVideoAd({posId: _posId})
                }

                videoObj.onLoad(function () {
                    if (G_PlatHelper.isHWPlatform()) {
                        console.log("load video ad succ...")

                        // mark
                        videoObj._isLoaded = true

                        if (videoObj.loadCb) {
                            let _loadCb = videoObj.loadCb
                            videoObj.loadCb = null

                            _loadCb(true)
                        }
                    }
                    else {
                        videoObj.show()
                    }
                })
            
                videoObj.onClose(function(res) {
                    videoObj._lastShowedTime = G_ServerInfo.getServerTime()

                    if (G_PlatHelper.isMZPlatform()) {
                        console.log('激励视频广告完成，发放奖励')
                    }
                    else {
                        if(res.isEnded) {
                            console.log('激励视频广告完成，发放奖励')
                        } else {
                            console.log('激励视频广告取消关闭，不发放奖励')
                        }
                    }

                    let __closeCb = videoObj.closeCb
                    videoObj.closeCb = null
                    videoObj.errCb = null

                    if(__closeCb) {
                        if (G_PlatHelper.isMZPlatform()) {
                            __closeCb(true)
                        }
                        else {
                            __closeCb(res.isEnded)
                        }
                    }

                    if (G_PlatHelper.isHWPlatform()) {
                        console.log("preload video: ", _posId)

                        // auto load next
                        videoObj.load()
                    }
                })

                videoObj.onError(function (err) {
                    console.error(JSON.stringify(err))

                    let __errCb = videoObj.errCb
                    videoObj.closeCb = null
                    videoObj.errCb = null

                    if(__errCb) {
                        __errCb(-1)
                    }
                })

                // default
                videoObj._isLoaded = false

                return videoObj
            },
        
            _doShowInsertAd: function ( _posId, _cb ) {
                if (!_isSupport) {
                    return null
                }

                console.log("show insert: ", _posId)
        
                let insertObj = null

                if (G_PlatHelper.isMZPlatform()) {
                    insertObj = G_PlatHelper.getPlat().createInsertAd({adUnitId: _posId})
                }
                else {
                    if (G_PlatHelper.getPlat().createInsertAd) {
                        insertObj = G_PlatHelper.getPlat().createInsertAd({posId: _posId})
                    }
                    else {
                        insertObj = G_PlatHelper.getPlat().createInterstitialAd({posId: _posId})
                    }
                }
        
                if (G_PlatHelper.isOPPOPlatform() || G_PlatHelper.isMZPlatform()) {
                    insertObj.onLoad(function() {
                        if (_onShowBannerObj) {
                            _onShowBannerObj.hide()
                        }

                        insertObj.show()
                        console.log("show insert ad succ...")
                    })
                }

                insertObj.onClose(function() {
                    _onShowInsertObj = null

                    if(typeof _cb === "function") {
                        _cb()
                    }
                })

                insertObj.onError(function ( err ) {
                    console.error(err)
                })

                // save to on show
                _onShowInsertObj = insertObj
        
                // load
                if (G_PlatHelper.isOPPOPlatform() || G_PlatHelper.isMZPlatform()) {
                    console.log("start to load insert ad...")
                    insertObj.load()
                }
                else {
                    insertObj.show().then(() => {
                        console.log("show insert ad succ...")

                        if (_onShowBannerObj) {
                            _onShowBannerObj.hide()
                        }
                    })
                }
        
                return insertObj
            },

            _doLoadNativeAd: function ( _posId, _cb ) {
                if (!_isSupport || G_PlatHelper.isMZPlatform()) {
                    return null
                }

                console.log("load native: ", _posId)
        
                let nativeObj = null
                if (G_PlatHelper.isHWPlatform()) {
                    nativeObj = G_PlatHelper.getPlat().createNativeAd({adUnitId: _posId})
                }
                else {
                    nativeObj = G_PlatHelper.getPlat().createNativeAd({posId: _posId})
                }

                let onLoadHander = null
                onLoadHander = function(res) {
                    nativeObj.offLoad(onLoadHander)
                    nativeObj.offError(onErrorHander)
                    if (res.adList.length > 0) {
                        res.adList.forEach(adInfo => {
                            adInfo.localAdID = G_Utils.generateString(32)
                        })

                        // save
                        nativeObj._adList = res.adList

                        if(typeof _cb === "function") {
                            _cb(nativeObj)
                        }
                    }
                }

                let onErrorHander = null
                onErrorHander = function(err) {
                    console.error(JSON.stringify(err))
                
                    nativeObj.offLoad(onLoadHander)
                    nativeObj.offError(onErrorHander)

                    if(typeof _cb === "function") {
                        _cb(null)
                    }
                }

                nativeObj.onLoad(onLoadHander)
                nativeObj.onError(onErrorHander)
        
                // load
                nativeObj.load()
        
                return nativeObj
            },

            isWatchingVideoAdv() {
                // body...
                if (_onShowVideoObj && _onShowVideoObj.closeCb) {
                    return true
                }
                else {
                    return false
                }
            },

            getNextNativeAdInfo() {
                if (_unClickNativeObjs.length > 0) {
                    for (let index = _unClickNativeObjs.length - 1; index >= 0; index--) {
                        const element = _unClickNativeObjs[index]
                        if (!element) {
                            _unClickNativeObjs.splice(index, 1)
                        }
                    }
                }

                if (_unClickNativeObjs.length > 0) {
                    let candidateObjs = _unClickNativeObjs

                    console.log("last used ad id: ", _lastUsedAdID)

                    if (_unClickNativeObjs.length > 1 && _lastUsedAdID !== "") {
                        candidateObjs = []

                        for (let i = 0; i < _unClickNativeObjs.length; i++) {
                            let localAdID = _unClickNativeObjs[i]._adList[_unClickNativeObjs[i]._adList.length - 1].localAdID
                            if (localAdID !== _lastUsedAdID) {
                                candidateObjs.push(_unClickNativeObjs[i])
                            }
                        }
                    }

                    let randomIndex = G_Utils.random(0, candidateObjs.length - 1)
                    let unClickNativeObj = candidateObjs[randomIndex]
                    let unClickNativeInfo = unClickNativeObj._adList[unClickNativeObj._adList.length - 1]

                    // save
                    _lastUsedAdID = unClickNativeInfo.localAdID

                    console.log("next used ad id: ", _lastUsedAdID)

                    return [unClickNativeObj, unClickNativeInfo]
                }
                else {
                    this.loadRandomNativeAd(obj => {
                        if (obj) {
                            console.log("auto preload next native ad succ...")
                        }
                        else {
                            console.log("auto preload next native ad fail...")
                        }
                    })
                }
                
                return null
            },

            reportNativeAdShow: function ( nativeAdObj, adID ) {
                console.log("just show native ad...")

                if (nativeAdObj) {
                    nativeAdObj.reportAdShow({
                        adId: adID
                    })
                }
            },

            reportNativeAdHide: function () {
                if (!_isSupport) {
                    return
                }

                console.log("just hide native ad...")

                if (G_PlatHelper.isHWPlatform()) {
                    _unClickNativeObjs = []
                }
                else {
                    this.loadRandomNativeAd(obj => {
                        if (obj) {
                            console.log("auto preload next native ad succ...")
                        }
                        else {
                            console.log("auto preload next native ad fail...")
                        }
                    })
                }
            },

            reportNativeAdClick: function ( nativeAdObj, adID ) {
                console.log("just click native ad...")

                if (nativeAdObj) {
                    nativeAdObj.reportAdClick({
                        adId: adID
                    })

                    // pop
                    nativeAdObj._adList.pop()

                    // check
                    if (nativeAdObj._adList.length === 0) {
                        // no more ad in this obj
                        for (let i = 0; i < _unClickNativeObjs.length; i++) {
                            if (_unClickNativeObjs[i] === nativeAdObj) {
                                _unClickNativeObjs.splice(i, 1)
                            }
                        }
                    }

                    if (!G_PlatHelper.isHWPlatform()) {
                        // preload more
                        this.reportNativeAdHide()
                    }
                }
            },
		};
	}

	return {
		getInstance: function () {
			if ( !_instance ) {
				_instance = init();

				// init...
				_instance.init()
			}

			return _instance;
		}
	};
})();

// export
export {_OVAdv}