var Gap_Of_Each_Reward_Video = 10000
var Gap_Of_Each_Interaction = 10000

/*
* 全局原生广告管理
*/
var _NativeAdvMgr = (function () {
	var _instance;

	function init() {
		// body...
		console.log('Init G_NativeAdvMgr Instance...')

		// splash
		var _splashAdUnitIDIndex = -1

		// banner
		var _isBannerOnShow = false
		var _bannerAdUnitIDIndex = -1

		// reward video
		var _isRewardVideoLoaded = false
		var _rewardVideoLoadCb = null
		var _rewardVideoCloseCb = null
		var _rewardVideoErrCb = null
		var _videoAdUnitIDIndex = -1

		// interaction
		var _isInteractionLoaded = false
		var _interactionLoadCb = null
		var _interactionCloseCb = null
		var _interactionErrCb = null
		var _interactionAdUnitIDIndex = -1

		var _getNextSplashID = function () {
			_splashAdUnitIDIndex += 1

			if (_splashAdUnitIDIndex >= G_advConfigs.splashAdUnitIDs.length) {
				_splashAdUnitIDIndex = 0
			}

			return G_advConfigs.splashAdUnitIDs[_splashAdUnitIDIndex]
		}

		var _getNextBannerID = function () {
			_bannerAdUnitIDIndex += 1

			if (_bannerAdUnitIDIndex >= G_advConfigs.bannerAdUnitIDs.length) {
				_bannerAdUnitIDIndex = 0
			}

			return G_advConfigs.bannerAdUnitIDs[_bannerAdUnitIDIndex]
		}

		var _getNextRewardVideoID = function () {
			_videoAdUnitIDIndex += 1

			if (_videoAdUnitIDIndex >= G_advConfigs.videoAdUnitIDs.length) {
				_videoAdUnitIDIndex = 0
			}

			return G_advConfigs.videoAdUnitIDs[_videoAdUnitIDIndex]
		}

		var _getNextInteractionID = function () {
			_interactionAdUnitIDIndex += 1

			if (_interactionAdUnitIDIndex >= G_advConfigs.interstitialAdUnitIDs.length) {
				_interactionAdUnitIDIndex = 0
			}

			return G_advConfigs.interstitialAdUnitIDs[_interactionAdUnitIDIndex]
		}

		var _doCallback = function ( cb ) {
			// body...
			if (typeof cb === "function") {
				let args = Array.prototype.slice.call(arguments)
				args.shift()
				
				// cb
				return cb.apply(null, args)
			}

			return null
		}

		return {
			preload: function () {
				// body...

				if (G_PlatHelper.isNativePlatform()) {
					// preload
					G_PlatHelper.callStaticMethod("preloadAllAdvs", JSON.stringify({
						userID: G_PlayerInfo.getOpenID(),
						splashID: _getNextSplashID(),
						bannerID: _getNextBannerID(),
						videoID: _getNextRewardVideoID(),
						interactionID: _getNextInteractionID()
					}))
				}
			},

			getBridge: function () {
				return this._bridge
			},

			isSupportBanner: function () {
				if (G_advConfigs.bannerAdUnitIDs.length > 0) {
					return true
				}
				else {
					return false
				}
			},

			showBanner: function () {
				if (G_PlatHelper.isNativePlatform()) {
					if (_isBannerOnShow) {
						G_PlatHelper.callStaticMethod("refreshBannerAdv", _getNextBannerID())
					}
					else {
						// mark
						_isBannerOnShow = true

						G_PlatHelper.callStaticMethod("showBannerAdv")
					}
				}
			},

			hideBanner: function () {
				// mark
				_isBannerOnShow = false

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("hideBannerAdv", _getNextBannerID())
				}
			},

			isSupportRewardVideo: function () {
				if (G_advConfigs.videoAdUnitIDs.length > 0) {
					return true
				}
				else {
					return false
				}
			},

			isRewardVideoLoaded: function () {
				return _isRewardVideoLoaded	
			},

			showRewardVideo: function (closeCb, errCb) {
				if (!_isRewardVideoLoaded) {
					// cb
					_doCallback(errCb)
					return
				}

				if (typeof closeCb === "function") {
					_rewardVideoCloseCb = closeCb
				}

				if (typeof errCb === "function") {
					_rewardVideoErrCb = errCb
				}
				else {
					_rewardVideoErrCb = null
				}

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("showRewardVideoAdv")
				}
			},

			_loadNextRewardVideo: function (loadCb, errCb) {
				if (_isRewardVideoLoaded) {
					// cb
					_doCallback(loadCb)
					return
				}

				if (typeof loadCb === "function") {
					_rewardVideoLoadCb = loadCb
				}

				if (typeof errCb === "function") {
					_rewardVideoErrCb = errCb
				}
				else {
					_rewardVideoErrCb = null
				}

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("loadRewardVideoAdv", _getNextRewardVideoID())
				}
			},

			onRewardVideoLoaded: function () {
				_isRewardVideoLoaded = true

				let cb = _rewardVideoLoadCb
				_rewardVideoLoadCb = null

				// cb
				_doCallback(cb, false)
			},

			onRewardVideoClosed: function () {
				_isRewardVideoLoaded = false

				let cb = _rewardVideoCloseCb
				_rewardVideoCloseCb = null

				// cb
				_doCallback(cb, false)

				// auto load next
				this._autoLoadNextRewardVideo()
			},

			onRewardVideoFinished: function () {
				_isRewardVideoLoaded = false

				let cb = _rewardVideoCloseCb
				_rewardVideoCloseCb = null

				// cb
				_doCallback(cb, true)

				// auto load next
				this._autoLoadNextRewardVideo()
			},

			onRewardVideoError: function () {
				_isRewardVideoLoaded = false

				let cb = _rewardVideoErrCb
				_rewardVideoErrCb = null

				// cb
				_doCallback(cb)

				// auto load next
				this._autoLoadNextRewardVideo()
			},

			_autoLoadNextRewardVideo: function () {
				G_Scheduler.schedule("Auto_Load_Next_Reward_Video", function () {
                    // body...
                    if (_isRewardVideoLoaded) {
						return
					}

					// do load
					this._loadNextRewardVideo()
                }.bind(this), false, Gap_Of_Each_Reward_Video, 0)
			},

			isSupportInteraction: function () {
				if (G_advConfigs.interstitialAdUnitIDs.length > 0) {
					return true
				}
				else {
					return false
				}
			},

			isInteractionLoaded: function () {
				return _isInteractionLoaded	
			},

			showInteraction: function (closeCb, errCb) {
				if (!_isInteractionLoaded) {
					// cb
					_doCallback(errCb)
					return
				}

				if (typeof closeCb === "function") {
					_interactionCloseCb = closeCb
				}

				if (typeof errCb === "function") {
					_interactionErrCb = errCb
				}
				else {
					_interactionErrCb = null
				}

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("showInteractionAdv")
				}
			},

			_loadNextInteraction: function (loadCb, errCb) {
				if (_isInteractionLoaded) {
					// cb
					_doCallback(loadCb)
					return
				}

				if (typeof loadCb === "function") {
					_interactionLoadCb = loadCb
				}

				if (typeof errCb === "function") {
					_interactionErrCb = errCb
				}
				else {
					_interactionErrCb = null
				}

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("loadInteractionAdv", _getNextInteractionID())
				}
			},

			onInteractionLoaded: function () {
				_isInteractionLoaded = true

				let cb = _interactionLoadCb
				_interactionLoadCb = null

				// cb
				_doCallback(cb)
			},

			onInteractionClosed: function () {
				_isInteractionLoaded = false

				let cb = _interactionCloseCb
				_interactionCloseCb = null

				// cb
				_doCallback(cb)

				// auto load next
				this._autoLoadNextInteraction()
			},

			onInteractionError: function () {
				_isInteractionLoaded = false

				let cb = _interactionErrCb
				_interactionErrCb = null

				// cb
				_doCallback(cb)

				// auto load next
				this._autoLoadNextInteraction()
			},

			_autoLoadNextInteraction: function () {
				G_Scheduler.schedule("Auto_Load_Next_Interaction", function () {
                    // body...
                    if (_isInteractionLoaded) {
						return
					}

					// do load
					this._loadNextInteraction()
                }.bind(this), false, Gap_Of_Each_Interaction, 0)
			}
		};
	}

	return {
		getInstance: function () {
			if ( !_instance ) {
				_instance = init()
			}

			return _instance
		}
	};
})();

// export
export {_NativeAdvMgr}