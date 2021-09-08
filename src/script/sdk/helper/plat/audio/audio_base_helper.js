/*
* 音乐音效管理
*/

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

var _reseekAndCb = function (audioContext, cb) {
	if (audioContext) {
		if (G_PlatHelper.isWXPlatform()) {
			if (audioContext.currentTime > 0) {
				audioContext.seek(0)
			}

			_doCallback(cb, audioContext)
		}
		else {
			let seekCb = () => {
				audioContext.offSeeked(seekCb)
				_doCallback(cb, audioContext)
			}

			if (audioContext.currentTime > 0) {
				audioContext.onSeeked(seekCb)
				audioContext.seek(0)
			}
			else {
				_doCallback(cb, audioContext)
			}
		}
	}
}

export default class AudioBaseHelper {
	constructor() {
		this._isInited = false

		// effects
		this._nativePlayLoopTimes = {}
		this._playingContexts = []
		this._backupContexts = []

		// music
		this._bgAudioContext = null
		this._bgMusicUrl = ""
		this._bgMusicLoopState = true
		this._bgMusicRate = 1.0
		this._bgNativeAudio = null
		this._isBgMusicStoped = false
		this._lastBgMusicPos = -1
	}

	init() {
		if (this._isInited) {
			return
		}

		// mark
		this._isInited = true

		if (this._isSupportAudioContext()) {
			// get bg audio context
			this._bgAudioContext = this._getAudioContext()
			if (this._bgAudioContext) {
				this._bgAudioContext._bgSrc = ""
			}
		}
	}

	_isSupportAudioContext() {
		return true
	}

	_isSupportNativeUrl() {
		return true
	}

	_getAudioContext() {
		let audioContext = null

		if (this._isSupportAudioContext()) {
			if (this._backupContexts.length > 0) {
				audioContext = this._backupContexts[0]
				this._backupContexts.splice(0, 1)
			}
			else {
				audioContext = G_PlatHelper.getPlat().createInnerAudioContext()
				audioContext.onError(err => {
					console.log("play error:", err)
				})
			}
		}

		this._playingContexts.push(audioContext)

		return audioContext
	}

	_recycleAudioContext(context) {
		let playingIndex = this._playingContexts.indexOf(context)
		if (playingIndex !== -1) {
			this._playingContexts.splice(playingIndex, 1)
		}

		this._backupContexts.push(context)
	}

	loadSound(url, cb) {
		this.init()

		if (!this._checkUrl(url)) {
			_doCallback(cb, null)
			return
		}

		if ((Laya.MiniFileMgr && typeof Laya.MiniFileMgr.fakeObj[url] !== "undefined") || (url.indexOf("http") < 0 && !this._isSupportNativeUrl())) {
			_doCallback(cb, null)
			return
		}

		if (this._isSupportAudioContext()) {
			let audioContext = this._getAudioContext()

			// check
			if(audioContext.src == url) {
				_reseekAndCb(audioContext, cb)
				return
			}

			// set
			audioContext.src = url
			audioContext.loop = false
			audioContext.autoplay = false
			
			let canPlayCb = () => {
				// off
				audioContext.offCanplay(canPlayCb)
				_reseekAndCb(audioContext, cb)
			}
			
			// on
			audioContext.onCanplay(canPlayCb)
		}
		else {
			_doCallback(cb, null)
		}
	}

	loadMusic(url, cb) {
		this.init()

		if (!this._checkUrl(url)) {
			_doCallback(cb, null)
			return
		}

		if ((Laya.MiniFileMgr && typeof Laya.MiniFileMgr.fakeObj[url] !== "undefined") || (url.indexOf("http") < 0 && !this._isSupportNativeUrl())) {
			_doCallback(cb, null)
			return
		}

		if (this._isSupportAudioContext()) {
			// if (this._bgAudioContext !== null) {
			// 	this._recycleAudioContext(this._bgAudioContext)
			// 	this._bgAudioContext = this._getAudioContext()
			// 	if (this._bgAudioContext) {
			// 		this._bgAudioContext._bgSrc = ""
			// 	}
			// }

			// check
			if(this._bgAudioContext.src == url) {
				// set
				this._bgAudioContext._bgSrc = url

				_reseekAndCb(this._bgAudioContext, cb)
				return
			}

			// set
			this._bgAudioContext.src = url
			this._bgAudioContext._bgSrc = url
			this._bgAudioContext.autoplay = false
			
			let canPlayCb = () => {
				this._bgAudioContext.offCanplay(canPlayCb)
				_reseekAndCb(this._bgAudioContext, cb)
			}
			
			this._bgAudioContext.onCanplay(canPlayCb)
		}
		else {
			_doCallback(cb, null)
		}
	}

	playSound(url, loops = 1, rate = 1.0) {
		this.init()

		if (!this._checkUrl(url)) {
			return
		}

		// stop first
		this.stopSound(url)

		loops = loops <= 0 ? 99999 : loops

		if ((Laya.MiniFileMgr && typeof Laya.MiniFileMgr.fakeObj[url] !== "undefined") || (url.indexOf("http") < 0 && !this._isSupportNativeUrl())) {
			this._playSoundByNative(url, loops, rate)
			return
		}

		if(this._isSupportAudioContext()) {
			let identify = G_Utils.generateString(32)

			this.loadSound(url, audioContext => {
				if (audioContext) {
					let endCb = () => {
						if (typeof this._nativePlayLoopTimes[url] !== "undefined" 
							&& this._nativePlayLoopTimes[url].identify === identify
							&& this._nativePlayLoopTimes[url].loops > 1) {
							this._nativePlayLoopTimes[url].loops -= 1
	
							audioContext.seek(0)
							audioContext.play()
						}
						else {
							if (typeof this._nativePlayLoopTimes[url] !== "undefined") {
								delete this._nativePlayLoopTimes[url]
							}
	
							audioContext._endCb = null
							audioContext.offEnded(endCb)
	
							// recycle
							this._recycleAudioContext(audioContext)
						}
					}

					if (loops > 1) {
						this._nativePlayLoopTimes[url] = {loops: loops, identify: identify}
					}
	
					audioContext.loop = false
					audioContext.playbackRate = rate
					audioContext.seek(0)
					audioContext.play()
					audioContext._endCb = endCb
					audioContext.onEnded(endCb)
				}
			})
		}
		else {
			this._playSoundByNative(url, loops, rate)
		}
	}

	_playSoundByNative(url, loops = 1, rate = 1.0) {
		let identify = G_Utils.generateString(32)

		if (loops > 1) {
			this._nativePlayLoopTimes[url] = {loops: loops, identify: identify}
		}

		let doPlay = () => {
			Laya.SoundManager.playbackRate = rate
			Laya.SoundManager.playSound(url, 1, Laya.Handler.create(null, () => {
				if (typeof this._nativePlayLoopTimes[url] !== "undefined" && this._nativePlayLoopTimes[url].identify === identify) {
					this._nativePlayLoopTimes[url].loops -= 1

					if (this._nativePlayLoopTimes[url].loops > 0) {
						doPlay()
					}
					else {
						delete this._nativePlayLoopTimes[url]
					}
				}
			}), 0)
		}
		
		doPlay()
	}

	stopSound(url) {
		if (!this._checkUrl(url)) {
			return
		}

		if ((Laya.MiniFileMgr && typeof Laya.MiniFileMgr.fakeObj[url] !== "undefined") || url.indexOf("http") < 0 && !this._isSupportNativeUrl()) {
			this._stopSoundByNative(url)
			return
		}

		if(this._isSupportAudioContext()) {
			if (typeof this._nativePlayLoopTimes[url] !== "undefined") {
				delete this._nativePlayLoopTimes[url]
			}

			for (let index = 0; index < this._playingContexts.length; index++) {
				let audioContext = this._playingContexts[index]
				if (audioContext.src === url) {
					if (audioContext._endCb) {
						audioContext.offEnded(audioContext._endCb)
						audioContext._endCb = null
					}

					audioContext.stop()

					// recycle
					this._recycleAudioContext(audioContext)
				}
			}
		}
		else {
			this._stopSoundByNative(url)
		}
	}

	_stopSoundByNative(url) {
		Laya.SoundManager.stopSound(url)

		if (typeof this._nativePlayLoopTimes[url] !== "undefined") {
			delete this._nativePlayLoopTimes[url]
		}
	}

	stopAllSounds() {
		for (const url in this._nativePlayLoopTimes) {
			this.stopSound(url)
		}
	}

	playMusic(url, cb, isLoop = true, rate = 1.0) {
		this.init()

		if (!this._checkUrl(url)) {
			return
		}

		// stop first
		this.stopMusic(() => {
			this._isBgMusicStoped = false

			if ((Laya.MiniFileMgr && typeof Laya.MiniFileMgr.fakeObj[url] !== "undefined") || (url.indexOf("http") === -1 && !this._isSupportNativeUrl())) {
				this._playMusicByNative(url, isLoop, rate)
				_doCallback(cb)
				return
			}
			
			if (this._isSupportAudioContext()) {
				this.loadMusic(url, bgAudioContext => {
					if(this._isBgMusicStoped) {
						return
					}

					if (bgAudioContext) {
						let endCb = () => {
							bgAudioContext.offEnded(endCb)
							this._recycleAudioContext(bgAudioContext)
						}
		
						bgAudioContext.loop = isLoop
						bgAudioContext.playbackRate = rate
						bgAudioContext.volume = 1
						bgAudioContext.seek(0)
						bgAudioContext.play()
						bgAudioContext.onEnded(endCb)

						_doCallback(cb)
					}
				})
			}
			else { 
				this._playMusicByNative(url, isLoop, rate)
				_doCallback(cb)
			}
		})
	}

	_playMusicByNative(url, isLoop, rate = 1.0) {
		this._bgMusicUrl = url
		this._bgMusicLoopState = isLoop
		this._bgMusicRate = rate

		let loops = isLoop ? 99999 : 1
		let doPlay = () => {
			Laya.SoundManager.playbackRate = rate
			this._bgNativeAudio = Laya.SoundManager.playMusic(url, 1, Laya.Handler.create(null, () => {
				loops -= 1

				if (this._bgMusicUrl !== "" && loops > 0) {
					doPlay()
				}
			}), 0)

			if (this._bgNativeAudio) {
				this._bgNativeAudio.volume = 1
			}
		}
		
		doPlay()
	}

	stopMusic(cb) {
		this._isBgMusicStoped = true
		this._lastBgMusicPos = -1
		
		if (this._bgMusicUrl !== "") {
			this._stopMusicByNative()
			_doCallback(cb)
		}
		else if (this._bgAudioContext && this._bgAudioContext._bgSrc !== "") {
			let stopFun = () => {
				if (this._bgAudioContext) {
					this._bgAudioContext.offStop(stopFun)
				}
				_doCallback(cb)
			}

			if (this._bgAudioContext.volume !== 0 ) {
				this._bgAudioContext.onStop(stopFun)
				this._bgAudioContext.stop()
			}
			else {
				this._bgAudioContext.stop()
				_doCallback(cb)
			}

			this._bgAudioContext.volume = 0
			this._bgAudioContext._bgSrc = ""
		}
		else {
			_doCallback(cb) 
		}
	}

	_stopMusicByNative() {
		this._bgMusicUrl = ""
		this._bgMusicLoopState = true
		this._bgMusicRate = 1.0
		if (this._bgNativeAudio) {
			this._bgNativeAudio.stop()
			this._bgNativeAudio.volume = 0
			this._bgNativeAudio = null
		}
	}

	resumeMusic() {
		if (this._bgMusicUrl !== "") {
			if (this._bgNativeAudio) {
				this._bgNativeAudio.volume = 1
				this._bgNativeAudio.resume()
			}
			else {
				this.playMusic(this._bgMusicUrl, null, this._bgMusicLoopState, this._bgMusicRate)
			}
		}
		else if (this._bgAudioContext && this._bgAudioContext._bgSrc !== "") {
			this._bgAudioContext.volume = 1
			if (this._lastBgMusicPos != -1) {
				this._bgAudioContext.seek(this._lastBgMusicPos)
				this._lastBgMusicPos = -1
			}
			this._bgAudioContext.play()
		}
	}

	pauseMusic() {
		if (this._bgMusicUrl !== "") {
			if (this._bgNativeAudio) {
				this._bgNativeAudio.volume = 0
				this._bgNativeAudio.pause()
			}
		}
		else if (this._bgAudioContext) {
			this._bgAudioContext.pause()
			this._lastBgMusicPos = this.getCurMusicTime()
			this._bgAudioContext.volume = 0
		}
	}

	getCurMusicTime() {
		if (this._bgMusicUrl !== "") {
			if (this._bgNativeAudio) {
				return this._bgNativeAudio.position
			}
		}
		else if (this._bgAudioContext) {
			return this._bgAudioContext.currentTime
		}

		return 0
	}

	isMusicUrlValid() {
		if (this._bgMusicUrl !== "" || this._bgAudioContext && this._bgAudioContext._bgSrc !== "") {
			return true
		}
		else {
			return false
		}
	}

	setMusicInfo( url, isLoop = true, rate = 1.0 ) {
		if (this._bgAudioContext) {
			this._bgAudioContext._bgSrc = url
			this._bgAudioContext.loop = isLoop
			this._bgAudioContext.playbackRate = rate
		}
		else {
			this._bgMusicUrl = url
			this._bgMusicLoopState = isLoop
			this._bgMusicRate = rate
		}
	}

	_checkUrl( url ) {
		if (typeof url === "string" && url !== "") {
			return true
		}
		else {
			return false
		}
	}
}