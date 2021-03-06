import PlatBaseHelper from "./plat_base_helper";

class ExtPlatHelper extends PlatBaseHelper {
	constructor() {
		super()
		
		this._isUseLocalModal = false
		this._isUseLocalToast = false
		this._isUseLocalLoading = false
	}

	init() {
		super.init()

		if (this._isUseLocalModal) {
			ExtPlatHelper.prototype.showModal = function(title, content, showCancel, cb, custom) {
				// body...
				if (this._isModalOnShow) {
					return
				}
		
				if (this._checkString(content)) {
					let obj = {
						content: content,
						showCancel: showCancel,
						cb: (isConfirm) => {
							this._isModalOnShow = false
		
							if (typeof cb === "function") {
								cb(isConfirm)
							}
						}
					}
		
					if (this._checkString(title)) { obj.title = title; }
		
					if (custom) {
						if (custom.cancelText) { obj.cancelText = custom.cancelText; }
						if (custom.cancelColor) { obj.cancelColor = custom.cancelColor; }
						if (custom.confirmText) { obj.confirmText = custom.confirmText; }
						if (custom.confirmColor) { obj.confirmColor = custom.confirmColor; }
					}
		
					G_Event.dispatchEvent(G_EventName.EN_SHOW_LOCAL_MODAL, obj)
				}
				else {
					if (typeof cb === "function") {
						cb(false)
					}
				}
			}
		}

		if (this._isUseLocalToast) {
			ExtPlatHelper.prototype.showToast = function(title, icon) {
				// body...
				this._clearToastAndLoading()

				console.log("show toast: " + title)
				G_Event.dispatchEvent(G_EventName.EN_SHOW_LOCAL_TIPS, title)
			}

			ExtPlatHelper.prototype.hideToast = function() {
				// body...
				G_Event.dispatchEvent(G_EventName.EN_HIDE_LOCAL_TIPS)
			}
		}

		if (this._isUseLocalToast) {
			ExtPlatHelper.prototype.showLoading = function(content) {
				// body...
				this._clearToastAndLoading()
	
				console.log("show loading: " + content)
				G_Event.dispatchEvent(G_EventName.EN_SHOW_LOCAL_LOADING, content)
			}

			ExtPlatHelper.prototype.hideLoading = function() {
				// body...
				G_Event.dispatchEvent(G_EventName.EN_HIDE_LOCAL_LOADING)
			}
		}
	}
}

class WINPlatHelper extends ExtPlatHelper {
    constructor() {
        super()
        
        this._platType = "WIN"
		this._platDesc = "Windows???????????????"                                                                                                                                                                                      
		
		this._isUseLocalModal = true
		this._isUseLocalToast = true
		this._isUseLocalToast = true
    }

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return false
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return false
	}

	/**
	 * ??????????????????
	 */
	isSupportVibratePhone() {
		return false
	}
}

class NativePlatHelper extends ExtPlatHelper {
    constructor() {
        super()
		
		this._plat = window.conch
        this._platType = "Native"
		this._platDesc = "?????????????????????" 
		this._bridge = null                                                                                                                                                                                
		
		this._isUseLocalModal = true
		this._isUseLocalToast = true
		this._isUseLocalToast = true
	}
	
	init() {
		super.init()

		// create bridge
		this._bridge = PlatformClass.createClass(this._fixClassName("JSBridge"))
	}

	callStaticMethod(funcName, param) {
		if (this._bridge) {
			if (typeof param !== "undefined") {
				return this._bridge.call(this._fixNativeFuncName(funcName), param)
			}
			else {
				if (G_PlatHelper.isIOSNativePlatform()) {
					return this._bridge.call(this._fixNativeFuncName(funcName), "")
				}
				else {
					return this._bridge.call(this._fixNativeFuncName(funcName))
				}
			}
		}

		return null
	}

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return false
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return false
	}

	// ??????????????????
	getSysInfo() {
		// body...
		if (this._sysInfo === null) {
			let sys_info_json_str = this.callStaticMethod("getSysInfo")

			try {
				this._sysInfo = JSON.parse(sys_info_json_str)
			} catch (error) {
				// error
				G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
			}
		}

		return this._sysInfo
	}

	/**
	 * ????????????
	 * @param {Boolean} bLong ???/???
	 */
	vibratePhone( bLong ) {
		// body...
		if (!G_PlayerInfo.isMuteEnable()) {
			return
		}
		
		this.callStaticMethod("vibrate", 400)
	}

	_fixNativeFuncName( funcName ) {
		if (G_PlatHelper.isIOSNativePlatform()) {
			return funcName + ":"
		}
		else {
			return funcName
		}
	}

	_fixClassName( clsName ) {
		if (G_PlatHelper.isAndroidNativePlatform()) {
			return "hiillo." + clsName
		}
		else {
			return clsName
		}
	}
}

class WXPlatHelper extends ExtPlatHelper {
    constructor() {
        super()

        this._plat = window.wx
        this._platType = "WX"
        this._platDesc = "?????????????????????"

        this._recogniseSceneIDs.push({sceneIDs: [1007], eventName: G_EventName.EN_LAUNCH_APP_FROM_SINGLE_SHARE})
		this._recogniseSceneIDs.push({sceneIDs: [1008], eventName: G_EventName.EN_LAUNCH_APP_FROM_GROUP_SHARE})
		this._recogniseSceneIDs.push({sceneIDs: [1007, 1008], eventName: G_EventName.EN_LAUNCH_APP_FROM_SHARE})
		this._recogniseSceneIDs.push({sceneIDs: [1089], eventName: G_EventName.EN_LAUNCH_APP_FROM_RECENT})
		this._recogniseSceneIDs.push({sceneIDs: [1038], eventName: G_EventName.EN_LAUNCH_APP_BACK_FROM_OTHER_APP})
		this._recogniseSceneIDs.push({sceneIDs: [1104], eventName: G_EventName.EN_LAUNCH_APP_FROM_FAVOURITE})
    }

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return true
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return true
	}
}

class QQPlatHelper extends ExtPlatHelper {
    constructor() {
        super()

        this._plat = window.qq
        this._platType = "QQ"
        this._platDesc = "QQ???????????????"

        this._recogniseSceneIDs.push({sceneIDs: [1007], eventName: G_EventName.EN_LAUNCH_APP_FROM_SINGLE_SHARE})
		this._recogniseSceneIDs.push({sceneIDs: [1008], eventName: G_EventName.EN_LAUNCH_APP_FROM_GROUP_SHARE})
		this._recogniseSceneIDs.push({sceneIDs: [1007, 1008], eventName: G_EventName.EN_LAUNCH_APP_FROM_SHARE})
		this._recogniseSceneIDs.push({sceneIDs: [1038], eventName: G_EventName.EN_LAUNCH_APP_BACK_FROM_OTHER_APP})
    }

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return true
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return true
	}
}

class OPPOPlatHelper extends ExtPlatHelper {
    constructor() {
        super()

        this._plat = window.qg
        this._platType = "OPPO"
		this._platDesc = "OPPO???????????????"
		
		this._isUseLocalToast = true
    }

    /**
	 * ????????????
	 */
	exitApp() {
		// body...
		if (this._plat && this._plat.exitApplication) {
			this._plat.exitApplication({
				fail: function () {
					// notify
					G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
				}
			})
		}
    }
    
    // ????????????sdk??????
	getSDKVersion() {
		// body...
		let sysInfo = this.getSysInfo()

		if (sysInfo && typeof sysInfo.platformVersion !== "undefined") {
			return sysInfo.platformVersion.toString()
		}
		else {
			return '0'
		}
	}

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return false
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return false
	}

	/**
	 * ????????????
	 * @param {Boolean} bLong ???/???
	 */
	vibratePhone( bLong ) {
		// body...
		if (!G_PlayerInfo.isMuteEnable()) {
			return
		}
		
		if (bLong) {
			if (this._plat && this._plat.vibrateLong) {
				this._plat.vibrateLong({
					success: null,
					fail: null,
					complete: null
				})
			}
		}
		else {
			if (this._plat && this._plat.vibrateShort) {
				this._plat.vibrateShort({})
			}
		}
	}

	// ??????loading?????????
	hideLoading() {
		// body...
		if (this._isLoadingOnShow) {
			this._isLoadingOnShow = false

			if (this._plat && this._plat.hideLoading) {
				this._plat.hideLoading({
					success: null,
					fail: null,
					complete: null
				})
			}
		}
	}

	/**
	 * ??????????????????
	 */
	installShortcut( succCb ) {
		// body...
		this._plat.hasShortcutInstalled({
			success: res => {
				if(res == false) {
					this._plat.installShortcut({
						success: () => {
							if (typeof succCb === "function") {
								succCb()
							}
						}
					})
				}
			}
		})
	}

	_toGetLoginCode( res ) {
		return res.data.token
	}
}

class VIVOPlatHelper extends ExtPlatHelper {
    constructor() {
        super()

        this._plat = window.qg
        this._platType = "VIVO"
		this._platDesc = "VIVO???????????????"
		
		this._isUseLocalToast = true
    }

    /**
	 * ????????????
	 */
	exitApp() {
		// body...
		if (this._plat && this._plat.exitApplication) {
			this._plat.exitApplication()
		}
    }
    
    // ????????????sdk??????
	getSDKVersion() {
		// body...
		let sysInfo = this.getSysInfo()

		if (sysInfo && typeof sysInfo.platformVersion !== "undefined") {
			return sysInfo.platformVersion.toString()
		}
		else {
			return '0'
		}
	}

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return false
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return false
	}

	// ?????????????????????
	// cb(true) ????????????
	// cb(false) ????????????
	// custom ??????(??????cancelText, cancelColor, confirmText, confirmColor)
	showModal(title, content, showCancel, cb, custom) {
		// body...
		if (this._isModalOnShow) {
			return
		}

		if (this._plat && this._plat.showDialog && this._checkString(content)) {
			let obj = {
				message: content,
				buttons: [
					{
						text: "??????"
					}
				],
				success: res => {
					this._isModalOnShow = false
					if (typeof cb === "function") {
						if (res.index === 0) {
							cb(true)
						}
						else if (res.index === 1) {
							cb(false)
						}
					}
				},
				cancel: () => {
					this._isModalOnShow = false
					if (typeof cb === "function") {
						cb(false)
					}
				},
				fail: () => {
					this._isModalOnShow = false
					if (typeof cb === "function") {
						cb(false)
					}
				}
			}

			if (showCancel) {
				obj.buttons.push({
					text: "??????"
				})
			}

			if (custom) {
				if (this._checkString(title)) { obj.title = title; }
				if (custom.confirmText) {
					obj.buttons[0].text = custom.confirmText
				}
				if (custom.confirmColor) {
					obj.buttons[0].color = custom.confirmColor
				}
				if (showCancel) {
					if (custom.cancelText) {
						obj.buttons[1].text = custom.cancelText
					}
					if (custom.cancelColor) {
						obj.buttons[1].color = custom.cancelColor
					}
				}
			}

			this._isModalOnShow = true
			this._plat.showDialog(obj)
		}
		else {
			if (typeof cb === "function") {
				cb(false)
			}
		}
	}

	/**
	 * ??????????????????
	 */
	installShortcut( succCb ) {
		// body...
		this._plat.hasShortcutInstalled({
			success: res => {
				if(res == false) {
					this._plat.installShortcut({
						success: () => {
							if (typeof succCb === "function") {
								succCb()
							}
						}
					})
				}
			}
		})
	}

	/**
	 * ??????????????????
	 * @param {String} key ??????(????????????)???????????????
	 * @param {Any} data ????????????????????????????????????????????????Date??????????????????JSON.stringify??????????????????
	 */
	setStorage(key, data) {
		if (!this._checkString(key)) {
			console.error("PlatHelper.setStorage Fail, Check Input...")
			return
		}

		Laya.LocalStorage.setItem(key, data)
	}

	/**
	 * ??????????????????
	 * @param {String} key ??????(????????????)???????????????
	 */
	getStorage(key, def) {
		if (!this._checkString(key)) {
			console.error("PlatHelper.getStorage Fail, Check Input...")
			return
		}

		return Laya.LocalStorage.getItem(key)
	}

	/**
	 * ??????????????????
	 * @param {String} key ??????(????????????)???????????????
	 */
	clearStorage( key ) {
		if (!this._checkString(key)) {
			console.error("PlatHelper.clearStorage Fail, Check Input...")
			return
		}

		Laya.LocalStorage.removeItem(key)
	}
}

class MZPlatHelper extends ExtPlatHelper {
    constructor() {
        super()

        this._plat = window.mz
        this._platType = "MeiZu"
		this._platDesc = "MeiZu???????????????"

		this._isUseLocalModal = true
		this._isUseLocalToast = true
		
		// ???qg???????????????mz?????????????????????????????????mz???
		if (typeof qg !== "undefined") {
			Object.keys(qg).forEach( funcName => {
				if (!mz.hasOwnProperty(funcName)) {
					mz[funcName] = qg[funcName]
				}
			})
		}
    }

    /**
	 * ????????????
	 */
	exitApp() {
		// body...
		if (this._plat && this._plat.exitGame) {
			this._plat.exitGame()
		}
    }
    
    // ????????????sdk??????
	getSDKVersion() {
		// body...
		let sysInfo = this.getSysInfo()

		if (sysInfo && typeof sysInfo.platformVersion !== "undefined") {
			return sysInfo.platformVersion.toString()
		}
		else {
			return '0'
		}
	}

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return false
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return false
	}

	/**
	 * ????????????
	 * @param {Boolean} bLong ???/???
	 */
	vibratePhone( bLong ) {
		// body...
		if (!G_PlayerInfo.isMuteEnable()) {
			return
		}
		
		if (bLong) {
			if (this._plat && this._plat.vibrateLong) {
				this._plat.vibrateLong({
					success: null,
					fail: null,
					complete: null
				})
			}
		}
		else {
			if (this._plat && this._plat.vibrateShort) {
				this._plat.vibrateShort({
					success: null,
					fail: null,
					complete: null
				})
			}
		}
	}

	/**
	 * ??????????????????
	 * @param {String} key ??????(????????????)???????????????
	 * @param {Any} data ????????????????????????????????????????????????Date??????????????????JSON.stringify??????????????????
	 */
	setStorage(key, data) {
		if (!this._checkString(key)) {
			console.error("PlatHelper.setStorage Fail, Check Input...")
			return
		}

		Laya.LocalStorage.setItem(key, data)
	}

	/**
	 * ??????????????????
	 * @param {String} key ??????(????????????)???????????????
	 */
	getStorage(key, def) {
		if (!this._checkString(key)) {
			console.error("PlatHelper.getStorage Fail, Check Input...")
			return
		}

		return Laya.LocalStorage.getItem(key)
	}

	/**
	 * ??????????????????
	 * @param {String} key ??????(????????????)???????????????
	 */
	clearStorage( key ) {
		if (!this._checkString(key)) {
			console.error("PlatHelper.clearStorage Fail, Check Input...")
			return
		}

		Laya.LocalStorage.removeItem(key)
	}
}

class TTPlatHelper extends ExtPlatHelper {
    constructor() {
        super()

        this._plat = window.tt
        this._platType = "TT"
		this._platDesc = "TT???????????????"
		this._onNavigateSuccCb = null
		this._onNavigateFailCb = null
		this._onMoreGamesModalCloseCb = null
		this._videoRecorder = null
		this._shareVideoPath = ""

		this._isUseLocalToast = true
	}
	
	init() {
		super.init()

		if (this._plat && this._plat.onNavigateToMiniProgram) {
			this._plat.onNavigateToMiniProgram(res => {
				if (res.errCode === 0 || res.errCode === 1) {
					console.log("????????????", res)

					// report succ
					G_Reportor.report(G_ReportEventName.REN_NAVIGATE_SUCC_ON_TT_PLAT)

					if (typeof this._onNavigateSuccCb === "function") {
						this._onNavigateSuccCb()
					}
				}
				else {
					console.error("????????????", res)

					if (typeof this._onNavigateFailCb === "function") {
						this._onNavigateFailCb()
					}
				}
			})
		}

		if (this._plat && this._plat.onMoreGamesModalClose) {
			this._plat.onMoreGamesModalClose(() => {
				this._onNavigateSuccCb = null
				this._onNavigateFailCb = null
				let closeCb = this._onMoreGamesModalCloseCb
				this._onMoreGamesModalCloseCb = null

				if (typeof closeCb === "function") {
					closeCb()
				}
			})
		}
	}

    /**
	 * ????????????
	 */
	exitApp() {
		// body...
		if (this._plat && this._plat.exitApplication) {
			this._plat.exitApplication()
		}
	}

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return false
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return false
	}

	/**
	 * ???????????????????????????
	 */
	showMoreGamesModal( closeCb, succCb, failCb ) {
		// body...
		let sysInfo = this.getSysInfo()
		if (sysInfo.platform === "ios") {
			this.showToast(G_GameDB.getUIWordByID(UIWordIDs["UIWORD_ID_NOT_SUPPORT_ON_IOS_PLATFORM"]).word)
			return
		}

		if (this._plat.showMoreGamesModal) {
			this._plat.showMoreGamesModal({
				appLaunchOptions: []
			})

			this._onNavigateSuccCb = succCb
			this._onNavigateFailCb = failCb
			this._onMoreGamesModalCloseCb = closeCb
		}
	}

	startRecord() {
		if (!this._videoRecorder) {
			this._videoRecorder = this._plat.getGameRecorderManager()
	
			this._videoRecorder.onStart(res => {
				console.log("start record and clear succ...")
				this._shareVideoPath = ""
			})

			this._videoRecorder.onStop(res => {
				console.log("stop record and save succ...")

				this._videoRecorder.clipVideo({
					path: res.videoPath,
					timeRange: [25, 0],
					success: res => {
						this._shareVideoPath = res.videoPath
					},
					fail: e => {
						console.error("clip video fail: ", e)
					}
				})
			})
		}

		if (this._videoRecorder) {
			this._videoRecorder.start({
				duration: 60
			})
		}
    }

    pauseRecord() {
		if (this._videoRecorder) {
			this._videoRecorder.pause()
		}
    }

    resumeRecord() {
		if (this._videoRecorder) {
			this._videoRecorder.resume()
		}
    }

    stopRecord() {
		if (this._videoRecorder) {
			this._videoRecorder.stop()
		}
	}
	
	getSavedVideoPath() {
		return this._shareVideoPath
	}

	_convertStyle(node, extendStyle) {
		let style = {
			textColor: "#000000",
			textAlign: "center",
			fontSize: 0,
			borderRadius: 0,
			borderWidth: 0,
			borderColor: "#000000"
		}

		if (extendStyle) {
			if (typeof extendStyle.backgroundColor !== "undefined") {
				style.backgroundColor = extendStyle.backgroundColor
			}

			if (typeof extendStyle.textColor !== "undefined") {
				style.textColor = extendStyle.textColor
			}

			if (typeof extendStyle.textAlign !== "undefined") {
				style.textAlign = extendStyle.textAlign
			}

			if (typeof extendStyle.fontSize !== "undefined") {
				style.fontSize = extendStyle.fontSize
			}

			if (typeof extendStyle.borderRadius !== "undefined") {
				style.borderRadius = extendStyle.borderRadius
			}

			if (typeof extendStyle.borderWidth !== "undefined") {
				style.borderWidth = extendStyle.borderWidth
			}

			if (typeof extendStyle.borderColor !== "undefined") {
				style.borderColor = extendStyle.borderColor
			}
		}

		let worldCenterPt = node.localToGlobal(new Laya.Vector2(node.width / 2, node.height / 2), true)
		let leftTopPosX = worldCenterPt.x - (node.width / 2 * node.scaleX)
		let leftTopPosY = worldCenterPt.y - (node.height / 2 * node.scaleY)

		let openGLPt = G_UIHelper.convertToOpenGLPt({x: leftTopPosX, y: leftTopPosY})
		let openGLSize = G_UIHelper.convertToOpenGLSize({width: (node.width * node.scaleX), height: (node.height * node.scaleY)})

		style.left = openGLPt.x
		style.top = openGLPt.y
		style.width = openGLSize.width
		style.height = openGLSize.height

		return style
	}
}

class QTTPlatHelper extends ExtPlatHelper {
    constructor() {
		super()

        this._plat = window.qttGame
        this._platType = "QTT"
		this._platDesc = "????????????????????????"

		this._isUseLocalToast = true
		this._isUseLocalModal = true
		this._isUseLocalLoading = true
	}

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return false
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return true
	}

	/**
	 * ????????????
	 */
	autoLogin( cb ) {
		if (typeof cb === "function") {
			cb(null)
		}
	}

	_login( cb ) {
		this.__login(cb)
	}

	/**
	 * QTT??????
	 */
	__login( cb ) {
		let locationParams = this._getLocationParams()

		let values = {
			app_id: G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_QTT_MINI_PROGRAM_APP_ID"]).str,
			app_key: G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_QTT_MINI_PROGRAM_APP_SECRET"]).str,
			platform: locationParams.platform,
			ticket: locationParams.ticket,
			time: Date.parse(new Date()) / 1000,
		}

		// get keys
		let keys_arr = []
		for(let key in values){
			keys_arr.push(key)
		}

		// sort
		keys_arr.sort()

		// to string
		let keys_str = ""
		keys_arr.forEach(key => {
			keys_str += key
			keys_str += values[key]
		})

		// sign
		values.sign = hex_md5(keys_str)

		// login
		let params_url = "app_id=" + values.app_id + "&platform=" + values.platform + "&ticket=" + values.ticket + "&time=" + values.time + "&sign=" + values.sign
		G_HttpHelper.getJson("https://newidea4-gamecenter-backend.1sapp.com/x/open/user/ticket?" + params_url, (bSucc, jsonData) => {
			console.log(jsonData)

			if (bSucc && jsonData && jsonData.data && jsonData.data.open_id) {
				if (typeof cb === "function") {
					cb(jsonData.data.open_id, this._generateSessID())
				}
			}
			else {
				// notify
				G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
			}
		})
	}

	/**
	 * ??????????????????
	 */
	isSupportVibratePhone() {
		return false
	}

	_getLocationParams() {
		let data = window.location.search.substring()

		if (data) {
			data = data.substring(data.indexOf("?") + 1)

			let kvs_arr = data.split('&')
			let kvs_map = {}

			kvs_arr.forEach(each => {
				let kvs = each.split("=")
				if (kvs.length === 2) {
					kvs_map[kvs[0]] = kvs[1]
				}
				 
			})

			return kvs_map
		}

		return {}
	}
}

class HWPlatHelper extends ExtPlatHelper {
    constructor() {
        super()

        this._plat = window.hbs
        this._platType = "HuaWei"
		this._platDesc = "HuaWei???????????????"
		
		this._isUseLocalModal = true
    }

    /**
	 * ????????????
	 */
	exitApp() {
		// body...
		if (this._plat && this._plat.exitApplication) {
			this._plat.exitApplication({
                success: null,
                fail: null,
                complete: null
            })
		}
    }
    
    // ????????????sdk??????
	getSDKVersion() {
		// body...
		let sysInfo = this.getSysInfo()

		if (sysInfo && typeof sysInfo.version !== "undefined") {
			return sysInfo.version.toString()
		}
		else {
			return '0'
		}
	}

    /**
	 * ??????????????????????????????????????????
	 */
	canLoginOnline() {
		return false
	}

	/**
	 * ??????????????????????????????????????????
	 */
	canSaveOnline() {
		return false
	}

	/**
	 * ??????????????????
	 */
	installShortcut( succCb ) {
		// body...
		this._plat.hasInstalled({
			success: res => {
				if(res == false) {
					this._plat.install({
						success: () => {
							if (typeof succCb === "function") {
								succCb()
							}
						}
					})
				}
			}
		})
	}
}

var _PlatHelper = null

if (typeof window.qq !== "undefined") {
    _PlatHelper = QQPlatHelper
}
else if (typeof window.tt !== "undefined") {
    _PlatHelper = TTPlatHelper
}
else if (typeof window.qg !== "undefined" && (window.qg.getProvider().toLowerCase().indexOf("oppo") > -1)) {
    _PlatHelper = OPPOPlatHelper
}
else if (typeof window.qg !== "undefined" && (window.qg.getProvider().toLowerCase().indexOf("vivo") > -1)) {
    _PlatHelper = VIVOPlatHelper
}
else if (typeof window.qg !== "undefined" && (window.qg.getProvider().toLowerCase().indexOf("meizu") > -1)) {
    _PlatHelper = MZPlatHelper
}
else if (typeof window.qttGame !== "undefined") {
    _PlatHelper = QTTPlatHelper
}
else if (typeof window.hbs !== "undefined") {
    _PlatHelper = HWPlatHelper
}
else if (typeof window.wx !== "undefined") {
    _PlatHelper = WXPlatHelper
}
else if (typeof window.conch !== "undefined") {
    _PlatHelper = NativePlatHelper
}
else {
    _PlatHelper = WINPlatHelper
}

export {_PlatHelper}