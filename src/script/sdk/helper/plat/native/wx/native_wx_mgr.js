/*
* 全局WX管理
*/
var _NativeWXMgr = (function () {
	var _instance;

	function init() {
		// body...
		console.log('Init G_NativeWXMgr Instance...')

		var _loginCb = null
		var _shareCb = null
		var _sceneSession = "session"
		var _sceneTimeline = "timeline"

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
			init: function () {
				// body...
				if (G_PlatHelper.isNativePlatform()) {
					// preload
					G_PlatHelper.callStaticMethod("initWX", JSON.stringify({
						appID: G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_NATIVE_MINI_PROGRAM_APP_ID"]).str,
						universalLink: G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_NATIVE_MINI_PROGRAM_UNIVERSAL_LINKS"]).str
					}))
				}
			},

			isWXAppInstalled: function () {
				// body...
				if (G_PlatHelper.isNativePlatform()) {
					return G_PlatHelper.callStaticMethod("isWXAppInstalled")
				}
			},

			reqLoginToWX: function (cb) {
				// body...
				if (typeof cb === "function") {
					_loginCb = cb
				}
				else {
					_loginCb = null
				}

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("reqLoginToWX")
				}
			},

			reqShareText: function (isToSession, text, cb) {
				if (typeof cb === "function") {
					_shareCb = cb
				}
				else {
					_shareCb = null
				}

				let shareScene = isToSession ? _sceneSession : _sceneTimeline

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("reqShareTextToWX", JSON.stringify({
						shareScene: shareScene,
						text: text
					}))
				}
			},

			reqShareImage: function (isToSession, imgPath, cb) {
				if (typeof cb === "function") {
					_shareCb = cb
				}
				else {
					_shareCb = null
				}

				let shareScene = isToSession ? _sceneSession : _sceneTimeline

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("reqShareImageToWX", JSON.stringify({
						shareScene: shareScene,
						imgPath: imgPath
					}))
				}
			},

			reqShareWeb: function (isToSession, title, desc, link, cb) {
				if (typeof cb === "function") {
					_shareCb = cb
				}
				else {
					_shareCb = null
				}

				let shareScene = isToSession ? _sceneSession : _sceneTimeline

				if (G_PlatHelper.isNativePlatform()) {
					G_PlatHelper.callStaticMethod("reqShareWebToWX", JSON.stringify({
						shareScene: shareScene,
						title: title,
						desc: desc,
						link: link
					}))
				}
			},

			onLoginSucc: function (code) {
				let cb = _loginCb
				_loginCb = null

				// cb
				_doCallback(cb, true, code)
			},

			onLoginFail: function () {
				let cb = _loginCb
				_loginCb = null

				// cb
				_doCallback(cb, false)
			},

			onShareSucc: function () {
				let cb = _shareCb
				_shareCb = null

				// cb
				_doCallback(cb, true)
			},

			onShareFail: function () {
				let cb = _shareCb
				_shareCb = null

				// cb
				_doCallback(cb, false)
			},
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
export {_NativeWXMgr}