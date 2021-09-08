var SK_OF_LOCAL_ASSET_VERSION = "storage_key_of_local_asset_version"
var ASSET_ZIP_INFO_FILE_NAME = "zip_info.json"

/*
* 资源管理类
*/
var _AssetMgr = function() {
	var _instance;

	function init() {
		// body ...
		console.log("Init G_AssetMgr Instance...")

		// private
		var _isSupport = false
		var _assetVerCfgs = null
		var _downloadingAssets = {}

		var _getAssetVersion = function (assetName) {
			let save_json_str = G_PlatHelper.getStorage(SK_OF_LOCAL_ASSET_VERSION)

			if (save_json_str && save_json_str !== "") {
				let save_json = JSON.parse(save_json_str)

				if (typeof save_json[assetName] !== "undefined") {
					return save_json[assetName].version
				}
			}

			return 0
		}

		var _setAssetVersion = function (assetName, version) {
			let save_json_str = G_PlatHelper.getStorage(SK_OF_LOCAL_ASSET_VERSION)

			let save_json = null
			if (save_json_str && save_json_str !== "") {
				save_json = JSON.parse(save_json_str)
			}
			else {
				save_json = {}
			}

			if (typeof save_json[assetName] !== "undefined") {
				save_json[assetName].version = version
			}
			else {
				save_json[assetName] = {version: version}
			}

			G_PlatHelper.setStorage(SK_OF_LOCAL_ASSET_VERSION, JSON.stringify(save_json))
		}

		var _clearAssetVersion = function (assetName) {
			let save_json_str = G_PlatHelper.getStorage(SK_OF_LOCAL_ASSET_VERSION)

			if (save_json_str && save_json_str !== "") {
				let save_json = JSON.parse(save_json_str)

				if (typeof save_json[assetName] !== "undefined") {
					delete save_json[assetName]

					G_PlatHelper.setStorage(SK_OF_LOCAL_ASSET_VERSION, JSON.stringify(save_json))
				}
			}
		}

		var _getFileUtils = function () {
			if (G_PlatHelper.getPlat()) {
				return G_PlatHelper.getPlat().getFileSystemManager()
			}
			else {
				return null
			}
		}

		var _checkDir = function (dir, isAutoCreate = false) {
			if (G_PlatHelper.getPlat()) {
				let fs = _getFileUtils()

				if (G_PlatHelper.isVIVOPlatform()) {
					let dirPath = dir
					if (dirPath[dirPath.length - 1] !== "/") {
						dirPath += "/"
					}

					if (!fs.accessSync(dirPath)) {
						if (isAutoCreate) {
							fs.mkdirSync(dirPath)
						}

						return false
					}
				}
				else {
					try {
						fs.accessSync(dir)
					}
					catch (e) {
						try {
							if (isAutoCreate) {
								fs.mkdirSync(dir, true)
							}
							
							return false
						}
						catch (e) {
							// notify
							G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
						}
					}
				}

				return true
			}
			else {
				// no need
				return true
			}
		}

		var _checkFile = function (filePath) {
			if (G_PlatHelper.getPlat()) {
				let fs = _getFileUtils()

				if (G_PlatHelper.isVIVOPlatform()) {
					if (!fs.accessSync(filePath)) {
						return false
					}
				}
				else {
					try {
						fs.accessSync(filePath)
					}
					catch (e) {
						return false
					}
				}

				return true
			}
			else {
				// no need
				return true
			}
		}

		var _deleteDir = function (dir) {
			if (G_PlatHelper.getPlat()) {
				let fs = _getFileUtils()

				let _doDeleteDir = (dir) => {
					let files = fs.readdirSync(dir + (G_PlatHelper.isVIVOPlatform() ? "/" : ""))
					if (G_PlatHelper.isVIVOPlatform()) {
						files = files.files
					}

					if (Array.isArray(files) && files.length > 0) {
						files.forEach(file => {
							let filePath = dir + "/" + file
							let stat = fs.statSync(filePath)
							if (G_PlatHelper.isVIVOPlatform()) {
								stat = stat.stats
							}

							if (stat.isFile()) {
								fs.unlinkSync(filePath)
							}
							else {
								_doDeleteDir(filePath)
							}
						})
					}
					
					fs.rmdirSync(dir)
				}

				try {
					_doDeleteDir(dir)
					console.log("remove dir: " + dir + " succ...")
				} catch (error) {
					// console.warn(error)
				}
			}
		}

		var _doReadDir = function(dir, outFiles) {
			if (G_PlatHelper.getPlat()) {
				let fs = _getFileUtils()

				let files = fs.readdirSync(dir + (G_PlatHelper.isVIVOPlatform() ? "/" : ""))
				if (G_PlatHelper.isVIVOPlatform()) {
					files = files.files
				}

				if (Array.isArray(files) && files.length > 0) {
					files.forEach(file => {
						let filePath = dir + "/" + file
						let stat = fs.statSync(filePath)
						if (G_PlatHelper.isVIVOPlatform()) {
							stat = stat.stats
						}

						if (stat.isFile()) {
							outFiles.push(filePath)
						}
						else {
							_doReadDir(filePath, outFiles)
						}
					})
				}
			}
		}

		var _getCacheDir = function () {
			// body...
			if (G_PlatHelper.getPlat()) {
				let cacheDir = G_PlatHelper.getPlat().env.USER_DATA_PATH + "/layaairGame"

				// check cache dir
				_checkDir(cacheDir, true)

				return cacheDir
			}
			else {
				return ""
			}
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
			init: function (cb) {
				if (G_PlatHelper.getPlat()) {
					if (G_PlatHelper.isNativePlatform()) {
						console.warn("Do Not Support On Current Platform...")
	
						_doCallback(cb)
						return
					}

					G_HttpHelper.getJson(this._getAssetVersionWebPath(), (bSucc, jsonData) => {
						if (bSucc && jsonData) {
							_assetVerCfgs = jsonData

							for (let assetName in _assetVerCfgs) {
								let assetVersion = _getAssetVersion(assetName)
								if (assetVersion !== _assetVerCfgs[assetName].version || !this._isAssetDownloaded(assetName)) {
									console.log("asset " + assetName + " need update: " + assetVersion + " => " + _assetVerCfgs[assetName].version)

									// delete old ver asset
									this._deleteTargetAssetCache(assetName)
								}
							}

							// mark
							_isSupport = true

							_doCallback(cb)
						}
						else {
							// notify
							G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
						}
					})
				}
				else {
					_doCallback(cb)
				}
			},

			isAssetDownloaded: function (assetName) {
				if (!_isSupport) {
					return true
				}

				return this._isAssetDownloaded(assetName)
			},

			download: function (assetNames, progressCb, completeCb) {
				if (!_isSupport) {
					_doCallback(progressCb, 1)
					_doCallback(completeCb)

					return
				}
				
				let willDownloadAssetNames = []

				let isAssetNeedDownload = (assetName) => {
					if (G_PlatHelper.getPlat()
						&& typeof _assetVerCfgs[assetName] !== "undefined"
						&& !this._isAssetDownloaded(assetName)
						&& typeof _downloadingAssets[assetName] === "undefined") {
						return true
					}

					return false
				}

				if (Array.isArray(assetNames)) {
					assetNames.forEach(assetName => {
						if (isAssetNeedDownload(assetName)) {
							willDownloadAssetNames.push(assetName)
						}
					})
				}
				else {
					let assetName = assetNames
					if (isAssetNeedDownload(assetName)) {
						willDownloadAssetNames.push(assetName)
					}
				}
				
				if (willDownloadAssetNames.length > 0) {
					let downloadedCount = 0

					willDownloadAssetNames.forEach(assetName => {
						this._downloadAsset(assetName, () => {
							downloadedCount += 1

							// progress
							_doCallback(progressCb, downloadedCount / willDownloadAssetNames.length)

							if (downloadedCount === willDownloadAssetNames.length) {
								// complete
								_doCallback(completeCb)
							}
						})
					})
				}
				else {
					_doCallback(progressCb, 1)
					_doCallback(completeCb)
				}
			},

			_downloadAsset: function (assetName, cb) {
				if (typeof _downloadingAssets[assetName] === "undefined") {
					// mark
					_downloadingAssets[assetName] = []

					// clear old
					this._deleteTargetAssetCache(assetName)

					this._doDownloadAndParseAsset(assetName, cachePath => {
						if (_downloadingAssets[assetName].length > 0) {
							_downloadingAssets[assetName].forEach(_cb => {
								_doCallback(_cb, cachePath)
							})

							delete _downloadingAssets[assetName]
						}

						_doCallback(cb, cachePath)
					})
				}
				else {
					_downloadingAssets[assetName].push(cb)
				}
			},

			_doDownloadAndParseAsset: function (assetName, cb) {
				// start
				let startTime = Date.now()

				let url = this._getAssetWebPath(assetName, _assetVerCfgs[assetName].version)
				this._doDownloadAsset(url, (tempPath, data) => {
					let finishDownloadedTime = Date.now()
					console.log("cost time(ms) of download asset: {0}".format(assetName), finishDownloadedTime - startTime)

					let cachePath = Laya.URL.getPath(this._getAssetCacheDir(assetName))
					if (cachePath[cachePath.length - 1] === "/") {
						cachePath = cachePath.substr(0, cachePath.length - 1)
					}

					// unzip
					this._unzipAsset(tempPath, cachePath, () => {
						let finishUnzipedTime = Date.now()
						console.log("cost time(ms) of unzip asset: {0}".format(assetName), finishUnzipedTime - finishDownloadedTime)

						// parse
						this._parseAsset(assetName, cachePath + "/" + assetName, () => {
							let finishParsedTime = Date.now()
							console.log("cost time(ms) of parse asset: {0}".format(assetName), finishParsedTime - finishUnzipedTime)
							console.log("cost total time(ms) of asset: {0}".format(assetName), finishParsedTime - startTime)

							// save version
							_setAssetVersion(assetName, _assetVerCfgs[assetName].version)

							_doCallback(cb, cachePath)
						});
					})
				})
			},

			_doDownloadAsset: function (url, cb) {
				G_PlatHelper.getPlat().downloadFile({
					url: url,
					success: res => {
						if (res.statusCode === 200) {
							_doCallback(cb, res.tempFilePath)
						}
						else {
							G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
						}
					},
					fail: () => {
						G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
					}
				})
			},

			_unzipAsset: function (zipFilePath, cachePath, cb) {
				let fs = _getFileUtils()
	
				fs.unzip({
					zipFilePath: zipFilePath,
					targetPath: cachePath,
					success: () => {
						_doCallback(cb)
					},
					fail: () => {
						G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)
					}
				})
			},

			_parseAsset: function (assetName, rootPath, cb) {
				let filesInAsset = []
				_doReadDir(rootPath, filesInAsset)

				if (filesInAsset.length > 0) {
					let savedFileInfos = []
					let _doCheck = () => {
						if (savedFileInfos.length === filesInAsset.length) {
							Laya.MiniFileMgr.onSaveZipFiles(savedFileInfos)
							_doCallback(cb)
						}
					}

					for (let i = 0; i < filesInAsset.length; i++) {
						let filePath = filesInAsset[i]
						let ext = "." + Laya.Utils.getFileExtension(filePath)
						let relativePath = filePath.replace(rootPath, assetName)
						let webUrl = G_BaseUrlPath + relativePath

						if (ext === ".lmat" || ext === ".lh" || ext === ".ls" || ext === ".json") {
							savedFileInfos.push({readyUrl: webUrl, md5Name: relativePath, encoding: "utf8", fileSize: 0})
							_doCheck()
						}
						else {
							savedFileInfos.push({readyUrl: webUrl, md5Name: relativePath, encoding: "", fileSize: 0})
							_doCheck()
						}
					}
				}
			},

			_isAssetDownloaded: function (assetName) {
				if (!G_PlatHelper.getPlat()) {
					return true
				}

				let assetCacheDir = this._getAssetCacheDir(assetName)
				if (_checkDir(assetCacheDir) && _checkFile(assetCacheDir + "/" + ASSET_ZIP_INFO_FILE_NAME)) {
					let fs = _getFileUtils()

					let jsonStr = fs.readFileSync(assetCacheDir + "/" + ASSET_ZIP_INFO_FILE_NAME, "utf-8")
					if (typeof jsonStr === "string" && jsonStr !== "") {
						let jsonData = JSON.parse(jsonStr)
						for (let i = 0; i < jsonData.files.length; i++) {
							let relativePath = jsonData.files[i]
							let webUrl = G_BaseUrlPath + assetName + "/" + relativePath
							
							if (typeof Laya.MiniFileMgr.fakeObj[webUrl] === "undefined") {
								console.warn("check webUrl: {0}, state: false, need re-download...".format(webUrl))
								return false
							}
						}

						return true
					}
					else {
						return false
					}
				}
				else {
					return false
				}
			},

			_getAssetCacheDir: function (assetName) {
				if (!G_PlatHelper.getPlat()) {
					return assetName
				}
	
				return _getCacheDir() + "/" + assetName
			},
	
			_deleteTargetAssetCache: function (assetName) {
				if (!G_PlatHelper.getPlat()) {
					return
				}
	
				let assetRootDir = _getCacheDir() + "/" + assetName
				_deleteDir(assetRootDir)
				_clearAssetVersion(assetName)
			},

			_getAssetWebPath: function (assetName, version) {
				return this._fillPlatType(G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_HTTP_ADDR_OF_ASSET_ROOT"]).str) + "/" + assetName + "/" + version + ".zip"
			},

			_getAssetVersionWebPath: function () {
				return this._fillPlatType(G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_HTTP_ADDR_OF_ASSET_VERSION"]).str)
			},

			_fillPlatType: function ( formatStr ) {
				return formatStr.format(G_PlatHelper.getPlatType(), G_SDKCfg.getAssetResVersion().toString())
			}
		}
	};

	return {
		getInstance: function () {
			if ( !_instance ) {
				_instance = init();
			}

			return _instance;
		}
	};
}();

// global
window.G_AssetMgr = _AssetMgr.getInstance()