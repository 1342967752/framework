import AdvBase from "./adv_base";

var SK_KEY_OF_COLOR_SIGN_INFO = "storage_key_of_color_sign_info"
var GAP_OF_EACH_INTERSTITIAL_AD = 30 * 1000
if (typeof window.tt !== "undefined") {
	GAP_OF_EACH_INTERSTITIAL_AD = 60 * 1000
}

class UnSupportAdv extends AdvBase {
    constructor() {
		super()
    }
}

class WXAdv extends AdvBase {
    constructor() {
		super()
		this._gapOfEachInterstitialAd = GAP_OF_EACH_INTERSTITIAL_AD
    }

	_registerAdUnitIDs(bannerAdUnitIDs, videoAdUnitIDs, interstitialAdUnitIDs) {
		if (bannerAdUnitIDs.length === 0) {
			bannerAdUnitIDs = G_advConfigs.bannerAdUnitIDs
		}

		if (videoAdUnitIDs.length === 0) {
			videoAdUnitIDs = G_advConfigs.videoAdUnitIDs
		}

		if (interstitialAdUnitIDs.length === 0) {
			interstitialAdUnitIDs = G_advConfigs.interstitialAdUnitIDs
		}

		// register
		super._registerAdUnitIDs(bannerAdUnitIDs, videoAdUnitIDs, interstitialAdUnitIDs)
	}

	// 内部接口
	_doCreateBannerAdObj(platformStyle, loadCb, errCb) {
		// default platform style
		let bannerAdObj = super._doCreateBannerAdObj(platformStyle, loadCb, errCb)

		return bannerAdObj
	}

	_getDefaultPlatformStyle() {
		return {
			left: 0,
			top: 0,
			width: 300
		}
	}

	getBannerOriginalSize() {
		return {
			width: 960,
			height: 334
		}
	}

	getMiniGapFromBottom() {
		return 40
	}

	_fixedStyle( style ) {
		// body...
		if (style) {
			if (typeof style.width !== "number") {
				// default
				style.width = 300
			}

			if (style.width < 300) {
				// at least 300
				style.width = 300
			}
		}
		
	}
}

class QQAdv extends AdvBase {
    constructor() {
		super()

		// box
		this._boxAdObj = null
		this._boxAdUnitIDIndex = -1

		// color sign
		this._isShowColorSignBefore = false

		// block
		this._blockAdObj = null
		this._blockAdUnitIDIndex = -1
		this._onShowBlockAdObjs = []
	}

	createBoxAdv( closeCb ) {
		if (!G_BoxAdUnitIDs) {
			return null
		}

		if (G_PlatHelper.getPlat() && G_PlatHelper.getPlat().createAppBox) {
			// destory old box obj
			if (this._boxAdObj) {
				console.log("destory old unclosed box...")
    			this._boxAdObj.destroy()
    			this._boxAdObj = null
			}

			this._boxAdUnitIDIndex += 1

			if (this._boxAdUnitIDIndex >= G_BoxAdUnitIDs.length) {
				this._boxAdUnitIDIndex = 0
			}

			let boxAdObj = G_PlatHelper.getPlat().createAppBox({adUnitId: G_BoxAdUnitIDs[this._boxAdUnitIDIndex]})

			if (boxAdObj) {
				if (typeof closeCb === "function") {
					boxAdObj.closeCb = closeCb
				}

				let p = boxAdObj.load()
				if (p.then) {
					p.then(() => {
						boxAdObj.show()
					})
				}

				if (boxAdObj.onClose) {
					boxAdObj.onClose(() => {	
						let _closeCb = boxAdObj.closeCb
						boxAdObj.closeCb = null

						// destory
						this._boxAdObj.destroy()
						this._boxAdObj = null

						// cb
						if (_closeCb) {
							_closeCb()
						}
					})
				}

				// save
				this._boxAdObj = boxAdObj
			}
		}

		return this._boxAdObj
	}

	addColorSign() {
		if (G_PlatHelper.getPlat() && G_PlatHelper.getPlat().addColorSign && !this._isShowColorSignBefore) {
			// mark
			this._isShowColorSignBefore = true

			G_PlatHelper.getPlat().addColorSign()
		}
	}

	createBlockAd(align, size = 1, orientation = "landscape", loadCb, errCb) {
		if (!G_BlockAdUnitIDs) {
			return null
		}

		if (G_PlatHelper.getPlat() && G_PlatHelper.getPlat().createBlockAd) {
			this._blockAdUnitIDIndex += 1

			if (this._blockAdUnitIDIndex >= G_BlockAdUnitIDs.length) {
				this._blockAdUnitIDIndex = 0
			}

			let blockAdObj = G_PlatHelper.getPlat().createBlockAd({
				adUnitId: G_BlockAdUnitIDs[this._blockAdUnitIDIndex],
				style: {
					left: 20,
					top: 32
				},
				size: size,
				orientation: orientation
			})

			if (blockAdObj) {
				console.log("create a block ad...")

				// mark
				blockAdObj.canOnShow = true

				if (typeof loadCb === "function") {
					blockAdObj.loadCb = loadCb
				}

				if (typeof errCb === "function") {
					blockAdObj.errCb = errCb
				}

				let onLoadFunc = () => {
					console.log("blockAdObj.onLoad...")

					// off
					blockAdObj.offLoad(onLoadFunc)

					let _loadCb = blockAdObj.loadCb
					blockAdObj.loadCb = null
					if (_loadCb) {
						_loadCb()
					}

					if (!blockAdObj.canOnShow) {
						this.destoryBlockAd(blockAdObj)
					}
					else {
						// add into onshow list
						this._onShowBlockAdObjs.push(blockAdObj)

						// direct show
						blockAdObj.show()
					}
				}

				let onResizeFunc = (res) => {
					let sysInfo = G_PlatHelper.getPlat().getSystemInfoSync()

					if (align && align.layout === "left" && typeof align.top === "number") {
						blockAdObj.style.left = 20
						blockAdObj.style.top = align.top / Laya.stage.height * sysInfo.screenHeight

						// fix
						if (blockAdObj.style.top < 32) {
							blockAdObj.style.top = 32
						}
					}
					else if (align && align.layout === "leftCenter") {
						blockAdObj.style.left = 20
						blockAdObj.style.top = (sysInfo.screenHeight - res.height) / 2
					}
					else if (align && align.layout === "right" && typeof align.top === "number") {
						blockAdObj.style.left = sysInfo.screenWidth - res.width
						blockAdObj.style.top = align.top / Laya.stage.height * sysInfo.screenHeight

						// fix
						if (blockAdObj.style.top < 32) {
							blockAdObj.style.top = 32
						}
					}
					else if (align && align.layout === "rightCenter") {
						blockAdObj.style.left = sysInfo.screenWidth - res.width
						blockAdObj.style.top = (sysInfo.screenHeight - res.height) / 2
					}
					else if (align && align.layout === "top") {
						blockAdObj.style.left = (sysInfo.screenWidth - res.width) / 2
						blockAdObj.style.top = 32
					}
					else if (align && align.layout === "bottom") {
						blockAdObj.style.left = (sysInfo.screenWidth - res.width) / 2
						blockAdObj.style.top = sysInfo.screenHeight - res.height
					}
					else if (align && align.layout === "center") {
						blockAdObj.style.left = (sysInfo.screenWidth - res.width) / 2
						blockAdObj.style.top = (sysInfo.screenHeight - res.height) / 2
						if (typeof align.hor === "number") {
							blockAdObj.style.left += align.hor
						}
						if (typeof align.vel === "number") {
							blockAdObj.style.top += align.vel
						}
					}
					else {
						console.error("align error, check input...", align)
					}
				}

				let onErrorFunc = (err) => {
					console.error("createBlockAd fail: ", err)

					// reset
					blockAdObj.canOnShow = false

					blockAd.offLoad(onLoadFunc)
                	blockAd.offResize(onResizeFunc)
					blockAd.offError(onErrorFunc)

					let _errCb = blockAdObj.errCb
					blockAdObj._errCb = null
					if (_errCb) {
						_errCb()
					}
				}

				blockAdObj.onLoad(onLoadFunc)
				blockAdObj.onResize(onResizeFunc)
				blockAdObj.onError(onErrorFunc)

				return blockAdObj
			}
		}

		return null
	}

	destoryBlockAd(blockAdObj) {
		if (blockAdObj) {
			let index = this._onShowBlockAdObjs.indexOf(blockAdObj)
			if (index >= 0) {
				// remove from onshow list
				this._onShowBlockAdObjs.splice(index, 1)

				console.log("destory a block ad...")
				blockAdObj.destroy()
			}
			else {
				console.err("can not destory a block ad which is not created by func: createBlockAd...")
			}
		}
	}

	destroyAllBlockAds() {
		let onShowBlockAdObjs = [].concat(this._onShowBlockAdObjs)

		onShowBlockAdObjs.forEach(blockAdObj => {
			this.destoryBlockAd(blockAdObj)
		})
	}

	_canShowColorSign() {
		let save_json_str = G_PlatHelper.getStorage(SK_KEY_OF_COLOR_SIGN_INFO)

		if (save_json_str && save_json_str !== "") {
			let save_json = JSON.parse(save_json_str)

			if (typeof save_json["lastSignDay"] !== "undefined" && save_json["lastSignDay"] === G_ServerInfo.getCurServerDayOfYear()) {
				return false
			}
		}

		return true
	}

	_markShowColorSign() {
		let save_json = {
			lastSignDay: G_ServerInfo.getCurServerDayOfYear()
		}

		G_PlatHelper.setStorage(SK_KEY_OF_COLOR_SIGN_INFO, JSON.stringify(save_json))
	}
	
	_registerAdUnitIDs(bannerAdUnitIDs, videoAdUnitIDs, interstitialAdUnitIDs) {
		if (bannerAdUnitIDs.length === 0) {
			bannerAdUnitIDs = G_advConfigs.bannerAdUnitIDs
		}

		if (videoAdUnitIDs.length === 0) {
			videoAdUnitIDs = G_advConfigs.videoAdUnitIDs
		}

		if (interstitialAdUnitIDs.length === 0) {
			interstitialAdUnitIDs = G_advConfigs.interstitialAdUnitIDs
		}

		// register
		super._registerAdUnitIDs(bannerAdUnitIDs, videoAdUnitIDs, interstitialAdUnitIDs)
	}

	// 内部接口
	_doCreateBannerAdObj(platformStyle, loadCb, errCb) {
		// default platform style
		let bannerAdObj = super._doCreateBannerAdObj(platformStyle, loadCb, errCb)

		return bannerAdObj
	}

	_getDefaultPlatformStyle() {
		let sysInfo = G_PlatHelper.getSysInfo()

		let bannerWidth = 300
		let bannerHeight = this.getBannerOriginalSize().height / this.getBannerOriginalSize().width * bannerWidth

		let defaultStyle = {
			left: (sysInfo.screenWidth - bannerWidth) / 2,
			top: sysInfo.screenHeight - bannerHeight,
			width: bannerWidth
		}

		if (G_PlatHelper.isIPhoneX()) {
			defaultStyle.top -= 20
		}

		return defaultStyle
	}

	getBannerOriginalSize() {
		return {
			width: 960,
			height: 223
		}
	}

	getMiniGapFromBottom() {
		return 20
	}

	_fixedStyle( style ) {
		// body...
		if (style) {
			if (typeof style.width !== "number") {
				// default
				style.width = 300
			}

			if (style.width < 300) {
				// at least 300
				style.width = 300
			}
		}
	}

	_isSupportPreloadBanner() {
		return false
	}

	_isSupportDelayDestroyBanner() {
		return false
	}
}

class TTAdv extends AdvBase {
    constructor() {
		super()
		this._gapOfEachInterstitialAd = GAP_OF_EACH_INTERSTITIAL_AD
	}
	
	_registerAdUnitIDs(bannerAdUnitIDs, videoAdUnitIDs, interstitialAdUnitIDs) {
		if (bannerAdUnitIDs.length === 0) {
			bannerAdUnitIDs = G_advConfigs.bannerAdUnitIDs
		}

		if (videoAdUnitIDs.length === 0) {
			videoAdUnitIDs = G_advConfigs.videoAdUnitIDs
		}

		if (interstitialAdUnitIDs.length === 0) {
			interstitialAdUnitIDs = G_advConfigs.interstitialAdUnitIDs
		}

		// register
		super._registerAdUnitIDs(bannerAdUnitIDs, videoAdUnitIDs, interstitialAdUnitIDs)
	}

	// 内部接口
	_doCreateBannerAdObj(platformStyle, loadCb, errCb) {
		let bannerAdObj = super._doCreateBannerAdObj(platformStyle, loadCb, errCb)

		const { windowWidth, windowHeight } = G_PlatHelper.getPlat().getSystemInfoSync()
		let onResized = (size) => {
			bannerAdObj.style.top = windowHeight - size.height
			bannerAdObj.style.left = (windowWidth - size.width) / 2

			if (G_PlatHelper.isIPhoneX()) {
				bannerAdObj.style.top -= 20
			}

			// off
			bannerAdObj.offResize(onResized)
		}

		// on
		bannerAdObj.onResize(onResized)

		return bannerAdObj
	}

	// 内部接口
	_doCreateInterstitialAdObj(closeCb, loadCb, errCb) {
		let interstitialAdObj = super._doCreateInterstitialAdObj(() => {
			let needDestroyObj = interstitialAdObj

			G_Scheduler.schedule("Destroy_Interstitial_Ad", function () {
				// body...
				if(needDestroyObj) {
					console.log("destory interstitial ad...")
					needDestroyObj.destroy()
				}
			}.bind(this), false, 60, 0);

			// reset
			this._interstitialAdObj = null

			if (typeof closeCb === "function") {
				closeCb()
			}
		}, loadCb, errCb)

		// load
		console.log("start to load interstitial ad...")
		interstitialAdObj.load()

		return interstitialAdObj
	}

	_isSupportPreloadInterstitial() {
		return false
	}

	_isSupportDelayDestroyInterstitial() {
		return false
	}

	_getDefaultPlatformStyle() {
		return {
			left: 0,
			top: 0,
			width: 128
		}
	}

	_caculateRealWidth( bannerWidth ) {
		return bannerWidth / 208 * 300
	}

	getBannerOriginalSize() {
		return {
			width: 960,
			height: 336
		}
	}

	getMiniGapFromBottom() {
		return 40
	}

	_isSupportResizeTwice() {
		return false
	}

	_fixedStyle( style ) {
		// body...
		if (style) {
			if (typeof style.width !== "number") {
				// default
				style.width = 128
			}

			if (style.width < 128) {
				// at least 128
				style.width = 128
			}
		}
	}
}

var _Adv = null

if (typeof window.qq !== "undefined") {
    _Adv = QQAdv
}
else if (typeof window.tt !== "undefined") {
    _Adv = TTAdv
}
else if (typeof window.wx !== "undefined") {
    _Adv = WXAdv
}
else {
    _Adv = UnSupportAdv
}

export {_Adv}