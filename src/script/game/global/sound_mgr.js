/*
* 音乐音效管理
*/
var _SoundMgr = function() {
	var _instance;

	function init() {
		// body ...
		console.log("Init G_SoundMgr Instance...")

		return {
			loadSound: function ( url, cb ) {
				G_AudioHelper.loadSound(url, cb)
			},

			playSound: function ( url, loops = 1 ) {
				if (G_PlayerInfo.isSoundEnable()) {
					// fix
					url = this._fixSoundUrl(url)

					G_AudioHelper.playSound(url, loops)
				}
			},

			playSoundWithRate: function (url, loops = 1, rate = 1.0) {
				if (G_PlayerInfo.isSoundEnable()) {
					// fix
					url = this._fixSoundUrl(url)

					G_AudioHelper.playSound(url, loops, rate)
				}
			},

			stopSound: function ( url ) {
				// fix
				url = this._fixSoundUrl(url)

				G_AudioHelper.stopSound(url)
			},

			stopAllSounds: function () {
				G_AudioHelper.stopAllSounds()
			},

			loadMusic: function ( url, cb ) {
				G_AudioHelper.loadMusic(url, cb)
			},

			playMusic: function ( url, cb, isLoop) {
				// fix
				url = this._fixSoundUrl(url)

				if (G_PlayerInfo.isSoundEnable()) {
					G_AudioHelper.playMusic(url, cb, isLoop)
				}
				else {
					G_AudioHelper.setMusicInfo(url, isLoop)
				}
			},

			playMusicWithRate: function ( url, rate, cb, isLoop) {
				// fix
				url = this._fixSoundUrl(url)

				if (G_PlayerInfo.isSoundEnable()) {
					G_AudioHelper.playMusic(url, cb, isLoop, rate)
				}
				else {
					G_AudioHelper.setMusicInfo(url, isLoop, rate)
				}
			},

			stopMusic: function ( cb ) {
				G_AudioHelper.stopMusic( cb )
			},

			pauseMusic: function () {
				G_AudioHelper.pauseMusic()
			},

			resumeMusic: function () {
				if (G_PlayerInfo.isSoundEnable()) {
					G_AudioHelper.resumeMusic()
				}
			},

			getCurMusicTime() {
				return G_AudioHelper.getCurMusicTime()
			},

			setSoundEnable: function ( isEnabled ) {
				// body...
				if (G_PlayerInfo.isSoundEnable() !== isEnabled) {
					G_PlayerInfo.setSoundEnable(isEnabled)

					if (isEnabled && G_AudioHelper.isMusicUrlValid()) {
						G_AudioHelper.resumeMusic()
					}
					else if (!isEnabled && G_AudioHelper.isMusicUrlValid()) {
						G_AudioHelper.pauseMusic()
					}
				}
			},

			isSoundEnable: function () {
				return G_PlayerInfo.isSoundEnable()
			},

			_fixSoundUrl( url ) {
				if (G_PlatHelper.getPlat() && G_BaseUrlPath !== "") {
					let isLocal = false

					if (G_AppNativefiles.length > 0) {
						for (let i = 0; i < G_AppNativefiles.length; i++) {
							let each = G_AppNativefiles[i]
							if (url.indexOf(each) !== -1) {
								isLocal = true
								break
							}
						}
					}

					if (!isLocal) {
						url = G_BaseUrlPath + url
					}
				}

				if (G_PlatHelper.isNativePlatform()) {
					if (url.indexOf(".mp3") !== -1) {
						url = url.substring(0, url.indexOf(".mp3")) + ".wav"
					}
				}

				return url
			}
		};
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
window.G_SoundMgr = _SoundMgr.getInstance()