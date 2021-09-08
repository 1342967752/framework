import AudioBaseHelper from "./audio_base_helper";

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

class CommonAudioHelper extends AudioBaseHelper {
    constructor() {
		super()
	}
	
	_isSupportAudioContext() {
		if (G_PlatHelper.isMZPlatform() || G_PlatHelper.isNativePlatform()) {
			return false
		}
		else {
			return G_PlatHelper.getPlat()
		}
	}

	_isSupportNativeUrl() {
		return true
	}

	// _recycleAudioContext(context) {
	// 	let playingIndex = this._playingContexts.indexOf(context)
	// 	if (playingIndex !== -1) {
	// 		this._playingContexts.splice(playingIndex, 1)
	// 	}

	// 	if (context) {
	// 		context.destroy()
	// 	}
	// }

	playMusic(url, cb, isLoop = true, rate = 1.0) {
		super.playMusic(url, () => {
			if (G_PlatHelper.getPlat() && G_Adv.isWatchingVideoAdv()) {
				this.pauseMusic()
				this._bgNativeAudio._bgSrc = url
			}

			_doCallback(cb)
		}, isLoop, rate)
	}
}

class OPPOAudioHelper extends AudioBaseHelper {
    constructor() {
		super()
	}

	_isSupportAudioContext() {
		return true
	}

	_isSupportNativeUrl() {
		return false
	}

	playMusic(url, cb, isLoop = true, rate = 1.0) {
		super.playMusic(url, () => {
			if (G_OVAdv.isWatchingVideoAdv()) {
				this.pauseMusic()
				this._bgNativeAudio._bgSrc = url
			}

			_doCallback(cb)
		}, isLoop, rate)
	}
}

class VIVOAudioHelper extends AudioBaseHelper {
    constructor() {
		super()
	}

	_isSupportAudioContext() {
		return true
	}

	_isSupportNativeUrl() {
		return false
	}
	
	_recycleAudioContext(context) {
		let playingIndex = this._playingContexts.indexOf(context)
		if (playingIndex !== -1) {
			this._playingContexts.splice(playingIndex, 1)
		}

		if (context) {
			context.destroy()
		}
	}

	playMusic(url, cb, isLoop = true, rate = 1.0) {
		super.playMusic(url, () => {
			if (G_OVAdv.isWatchingVideoAdv()) {
				this.pauseMusic()
				this._bgNativeAudio._bgSrc = url
			}

			_doCallback(cb)
		}, isLoop, rate)
	}
}

var _AudioHelper = null

if (typeof window.qg !== "undefined" && (window.qg.getProvider().toLowerCase().indexOf("oppo") > -1)) {
	_AudioHelper = OPPOAudioHelper
}
else if (typeof window.qg !== "undefined" && (window.qg.getProvider().toLowerCase().indexOf("vivo") > -1)) {
    _AudioHelper = VIVOAudioHelper
}
else {
    _AudioHelper = CommonAudioHelper
}

export {_AudioHelper}