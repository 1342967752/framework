/*
* 全局基础开关
*/
export default class SwitchBase {
	constructor() {
		this._cfgs = null
		this._initedCbs = {}
		this._isAdvStateNormal = null
		this._isExportAdvEnabled = null

		// log
		console.log("Init G_Switch Instance...")
	}

	__add( key, value ) {
		// body...
		if (!this._cfgs) {
			this._cfgs = {}
		}

		if (typeof this._cfgs[key] !== "undefined") {
			console.error("G_Switch.addCfg: key: {0} has registered before...".format(key))
			return
		}

		this._cfgs[key] = value
	}

	_add( cfgs ) {
		// body...
		if (cfgs) {
			for (let key in cfgs) {
				this.__add(key, cfgs[key])
			}
		}
	}

	_checkString(string) {
		// body...
		if (typeof string !== "string" || string === "") {
			return false
		}

		return true
	}

	_getCfgByKey(key, cb) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		if (!this._checkString(key)) {
			cb(false, "")
		}

		if (this._cfgs) {
			if (typeof this._cfgs[key] !== "undefined") {
				cb(true, this._cfgs[key])
			}
			else {
				cb(false, "")
			}
		}
		else {
			this._initedCbs[key] = cb
		}
	}

	addCfgs( cfgs ) {
		// body...
		this._add(cfgs)
	}

	addCfg( key, cfg ) {
		// body...
		this.__add(key, cfg)
	}

	inited() {
		// body...
		for (let key in this._initedCbs) {
    		this._initedCbs[key](true, this._cfgs[key])
		}

		this._initedCbs = {}

		if (typeof this.onInited === "function") {
            this.onInited()
        }
	}

	getCommitVersion( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_COMMIT_VERSION, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10))
			}
			else {
				cb(0)
			}
		})
	}

	getRewardTimesOfEachDay( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_REWARD_TIMES_OF_EACH_DAY, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10))
			}
			else {
				cb(G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_MAX_ADV_TIMES_OF_ONE_DAY"]).num)
			}
		})
	}

	getRateOfShare( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_RATE_OF_SHARE, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10))
			}
			else {
				cb(100)
			}
		})
	}

	getAdvTimesBeforeShare( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_ADV_TIMES_BEFORE_SHARE, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10))
			}
			else {
				cb(0)
			}
		})
	}

	getPercentOfReportToAld( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_PERCENT_OF_REPORT_TO_ALD, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10))
			}
			else {
				cb(100)
			}
		})
	}

	getMinDurationBetweenShare( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_MIN_DURATION_BETWEEN_SHARE, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10))
			}
			else {
				cb(3000)
			}
		})
	}

	isPublishing( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_IS_PUBLISHING, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10) === 1)
			}
			else {
				cb(false)
			}
		})
	}

	isNewGame( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_IS_NEW_GAME, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10) === 1)
			}
			else {
				cb(false)
			}
		})
	}

	isExportAdvEnabled( key, cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		let isKeyInited = false
		if (typeof G_ADCfg[key] === "string" && G_ADCfg[key] !== "") {
			isKeyInited = true
		}

		if (G_PlatHelper.isWXPlatform()) {
			if (this._isExportAdvEnabled === null) {
				this._getCfgByKey(G_SwitchName.SN_DISABLE_EXPORT_ADV_CHIDS, function (bSucc, sCfg) {
					// body...
					if (bSucc) {
						let channelID = G_PlatHelper.getChannelID()

						if (channelID !== "") {
							console.log("current channelID: ", channelID)

							let disabledChIDs = sCfg.split("||")
							if (Array.isArray(disabledChIDs)) {
								for (let i = 0; i < disabledChIDs.length; i++) {
									if (disabledChIDs[i].toString() === channelID) {
										this._isExportAdvEnabled = false
										break
									}
								}
							}

							if (this._isExportAdvEnabled === null) {
								this._isExportAdvEnabled = true
							}
						}
						else {
							this._isExportAdvEnabled = true
						}
					}
					else {
						this._isExportAdvEnabled = true
					}

					// cb
					cb(this._isExportAdvEnabled && isKeyInited)
				}.bind(this))
			}
			else {
				cb(this._isExportAdvEnabled && isKeyInited)
			}
		}
		else if (G_PlatHelper.isWINPlatform() || G_PlatHelper.isOPPOPlatform() || G_PlatHelper.isTTPlatform()) {
			cb(isKeyInited)
		}
		else {
			cb(false)
		}
	}

	isAdvStateNormal( forceReload, cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		if (G_PlatHelper.getPlat() && typeof G_PlatHelper.getPlat().h_JudgeRegion === 'function') {
			if (forceReload) {
				this._isAdvStateNormal = null
			}

			if (this._isAdvStateNormal === null) {
				var self = this

				let scene = undefined
				if (!G_PlatHelper.isOVPlatform() && !G_PlatHelper.isNativePlatform()) {
					scene = G_PlatHelper.getLaunchOptions().scene
				}

				G_PlatHelper.getPlat().h_JudgeRegion({
					scene: scene,
					success: function (res) {
						if (res.Status === 200) {
							self._isAdvStateNormal = res.Result.Status === 0
							cb(self._isAdvStateNormal)
						}
						else {
							cb(false)
						}
					}
				})
			}
			else {
				cb(this._isAdvStateNormal)
			}
		}
		else {
			console.warn('plat.h_JudgeRegion 方法不存在，请检查 qy(-plat).js');
			cb(true)
		}
	}

	isAdvStateNormalSync() {
		if (G_PlatHelper.isWINPlatform()) {
			return true
		}

		if (this._isAdvStateNormal === null) {
			return false
		}
		else {
			return this._isAdvStateNormal
		}
	}

	isMistakeEnabled( type, cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		let isSupport = false

		G_SupportMistakeTypes.forEach(each => {
			if (type === each) {
				isSupport = true
			}
		})

		if (!isSupport) {
			cb(false)
		}

		this.getCommitVersion(function ( commitVersion ) {
			if (commitVersion === G_SDKCfg.getAppVersion()) {
				// commit
				this._getCfgByKey(G_SwitchName.SN_FORMAT_OF_CV_STATUS.format(type.charAt(0).toUpperCase() + type.slice(1)), function (bSucc, sCfg) {
					// body...
					if (bSucc) {
						cb(parseInt(sCfg, 10) === 1)
					}
					else {
						cb(false)
					}
				})
			}
			else {
				// online
				this._getCfgByKey(G_SwitchName.SN_FORMAT_OF_OV_STATUS.format(type.charAt(0).toUpperCase() + type.slice(1)), function (bSucc, sCfg) {
					// body...
					if (bSucc) {
						cb(parseInt(sCfg, 10) === 1)
					}
					else {
						cb(false)
					}
				})
			}
		}.bind(this))
	}

	getTodayMaxMistakeCounts( cb ) {
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_TODAY_MAX_MISTAKE_COUNTS, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(sCfg)
			}
			else {
				cb(9999)
			}
		})
	}

	getInvokeMistakeRate( cb ) {
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_INVOKE_MISTAKE_RATE, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10))
			}
			else {
				cb(100)
			}
		})
	}

	getIntervalOfMistakes( type, cb ) {
		if (typeof cb !== "function") {
			return
		}

		let getCommonInterval = function ( _cb ) {
			this._getCfgByKey(G_SwitchName.SN_INTERVAL_OF_MISTAKES, function (bSucc, sCfg) {
				// body...
				if (bSucc) {
					_cb(parseInt(sCfg, 10))
				}
				else {
					_cb(0)
				}
			})
		}.bind(this)

		let isSupport = false

		G_SupportMistakeTypes.forEach(each => {
			if (type === each) {
				isSupport = true
			}
		})

		if (isSupport) {
			this._getCfgByKey(G_SwitchName.SN_FORMAT_OF_INTERVAL_OF_MISTAKES.format(type.charAt(0).toUpperCase() + type.slice(1)), function (bSucc, sCfg) {
				// body...
				if (bSucc) {
					cb(parseInt(sCfg, 10))
				}
				else {
					getCommonInterval(cb)
				}
			})
		}
		else {
			getCommonInterval(cb)
		}
	}

	getMoveMistakeConfig( cb ) {
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_MOVE_MISTAKE_CFG, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				let arrCfgs = sCfg.split('||')
				cb({
					hold1: (parseFloat(arrCfgs[0]) * 1000),
					hold2: (parseFloat(arrCfgs[1]) * 1000),
					move: (parseFloat(arrCfgs[2]) * 1000)
				})
			}
			else {
				cb({hold1: 1500, hold2: 2000, move: 300})
			}
		})
	}

	getExportMoveMistakeConfig( cb ) {
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_EXPORT_MOVE_MISTAKE_CFG, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				let arrCfgs = sCfg.split('||')
				cb({
					delay: (parseFloat(arrCfgs[0]) * 1000),
					stay: (parseFloat(arrCfgs[1]) * 1000)
				})
			}
			else {
				cb({delay: 1500, stay: 500})
			}
		})
	}

	getClickMistakeConfig( cb ) {
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_CLICK_MISTAKE_CFG, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				let arrCfgs = sCfg.split('||')
				if (arrCfgs.length === 4) {
					cb({
						gap: 100,
						miniMinus: parseFloat(arrCfgs[0]),
						maxMinus: parseFloat(arrCfgs[0]),
						add: parseFloat(arrCfgs[1]),
						target: parseFloat(arrCfgs[2]),
						miniClick: parseInt(arrCfgs[3].split('-')[0]),
						maxClick: parseInt(arrCfgs[3].split('-')[1]),
						rate: 30,
						duration: 1500,
						firstShow: false
					})
				}
				else if (arrCfgs.length === 8) {
					cb({
						gap: parseInt(arrCfgs[0]),
						miniMinus: parseFloat(arrCfgs[1]),
						maxMinus: parseFloat(arrCfgs[2]),
						add: parseFloat(arrCfgs[3]),
						target: parseFloat(arrCfgs[4]),
						miniClick: parseInt(arrCfgs[5].split('-')[0]),
						maxClick: parseInt(arrCfgs[5].split('-')[1]),
						rate: parseInt(arrCfgs[6] * 100),
						duration: parseInt(arrCfgs[7] * 1000),
						firstShow: false
					})
				}
				else if (arrCfgs.length === 9) {
					cb({
						gap: parseInt(arrCfgs[0]),
						miniMinus: parseFloat(arrCfgs[1]),
						maxMinus: parseFloat(arrCfgs[2]),
						add: parseFloat(arrCfgs[3]),
						target: parseFloat(arrCfgs[4]),
						miniClick: parseInt(arrCfgs[5].split('-')[0]),
						maxClick: parseInt(arrCfgs[5].split('-')[1]),
						rate: parseInt(arrCfgs[6] * 100),
						duration: parseInt(arrCfgs[7] * 1000),
						firstShow: (parseInt(arrCfgs[8]) === 1)
					})
				}
			}
			else {
				cb({
					gap: 100,
					miniMinus: 0.06,
					maxMinus: 0.06,
					add: 0.2,
					target: 0.5,
					miniClick: 1,
					maxClick: 3,
					rate: 30,
					duration: 1500,
					firstShow: false
				})
			}
		})
	}

	getBtnMistakeConfig( cb ) {
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_BTN_MISTAKE_CFG, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				let arrCfgs = sCfg.split('||')
				cb({
					delay: (parseFloat(arrCfgs[0]) * 1000),
					delay2: (parseFloat(arrCfgs[1]) * 1000),
					stay: (parseFloat(arrCfgs[2]) * 1000)
				})
			}
			else {
				cb({
					delay: 3000,
					delay2: 700,
					stay: 2000
				})
			}
		})
	}

	getGamingBannerConfig( cb ) {
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_GAMING_BANNER_STATE_CFG, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				let arrCfgs = sCfg.split('||')
				cb({
					gap: (parseFloat(arrCfgs[0]) * 1000),
					show: (parseFloat(arrCfgs[1]) * 1000)
				})
			}
			else {
				cb({
					gap: 5000,
					show: 2000
				})
			}
		})
	}

	getFakeLoadingConfig( cb ) {
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_FAKE_LOADING_CFG, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				let arrCfgs = sCfg.split('||')
				cb({
					time: (parseFloat(arrCfgs[0]) * 1000)
				})
			}
			else {
				cb({
					time: 4000
				})
			}
		})
	}

	getAutoRandomNavPagesCfg( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_GET_AUTO_RANDOM_NAV_PAGE_CFG, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				let pages = sCfg.split('||')
				cb(pages)
			}
			else {
				cb([])
			}
		})
	}

	isExportAutoOpen( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_IS_EXPORT_AUTO_OPEN, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10) === 1)
			}
			else {
				cb(false)
			}
		})
	}

	isSignAutoOpen( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_IS_SIGN_AUTO_OPEN, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10) === 1)
			}
			else {
				cb(false)
			}
		})
	}

	isTrySkinOpen( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_IS_TRY_SKIN_AUTO_OPEN, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10) === 1)
			}
			else {
				cb(false)
			}
		})
	}

	getMoreGameOpenCfg( cb ) {
		// body...
		if (typeof cb !== "function") {
			return
		}

		this._getCfgByKey(G_SwitchName.SN_WHEN_MORE_GAME_AUTO_OPEN_CFG, function (bSucc, sCfg) {
			// body...
			if (bSucc) {
				cb(parseInt(sCfg, 10))
			}
			else {
				cb(0)
			}
		})
	}

	//根据key名获取配置_无本配置就返回null
	getConfigByKey(key) {
		if (this._cfgs) {
			if (typeof this._cfgs[key] !== "undefined") {
				return this._cfgs[key]
			}
			else {
				return null;
			}
		}
		return null;
	}
}