import GameBase from "./GameBase";
import ImageAnimation from "./ui/view/ImageAnimation.js";

/**
 * 主游戏场景View
 */
export default class GameTest extends GameBase {
    constructor() {
        super("game/GameTestScene.scene");
        // super("game/GameTestScene.scene", 'res/scenes/Game/MainGame.ls');

        // default
        if (this.readyView) {
            this.readyView.doShow()
        }

        if (this.popupView) {
            this.popupView.doHide()
        }

        if (this.testBtn) {
            let animation = new ImageAnimation({width: this.testBtn.width, height: this.testBtn.height})

            if (animation) {
                animation.onSizeChanged(function () {
                    animation.pivotX = animation.width / 2
                    animation.pivotY = animation.height / 2
                    animation.x = this.testBtn.width / 2
                    animation.y = this.testBtn.height / 2
                    animation.scaleX = this.testBtn.width / animation.width
                    animation.scaleY = this.testBtn.height / animation.height
                }.bind(this))

                // add
                this.testBtn.addChild(animation)

                // set animation
                let imgData = {
                    width: 96,
                    height: 96,
                    path: "https://image.game.hnquyou.com/loading_gif.png",
                    frame_count: 12
                }
                animation.setImageData(imgData)

                // G_Scheduler.schedule("Delay_Set_Image_Animation", function () {
                //     // body...
                //     animation.setImageData("game/white.jpg")
                // }.bind(this), false, 1000)
            }
        }

        if (this.testImage) {
            this.testImage.dark = true
        }
    }

    /**
     * 第一次打开场景（Laya提供）
     */
    onOpened() {
        // do not delete...
        super.onOpened()

        if (G_PlatHelper.getPlat()) {
            // let bannerAd = wx.createBannerAd({
            //     adUnitId: 'adunit-492c72acf993478a',
            //     style: {
            //         left: 0,
            //         top: 0,
            //         width: 300
            //     }
            // })

            // bannerAd.onError(function ( err ) {
            //     // body...
            //     console.error(err)

            //     console.error(bannerAd)
            //     bannerAd.destroy()
            //     bannerAd = null
            // })

            // bannerAd.style.left = 10
    
            // // show
            // bannerAd.show()

            // // log
            // console.error(bannerAd)

            // G_Scheduler.schedule("Delay_Move_Banner", function () {
            //     // body...
            //     bannerAd.style.left = 20
            //     bannerAd.style.width = 360
            // }.bind(this), false, 10000)

            // // video
            // let videoAd = wx.createRewardedVideoAd({
            //     adUnitId: 'adunit-490fc5b2fd156482'
            // })

            // videoAd.onError(function (err) {
            //     console.log(videoAd)
            //     videoAd.destroy()
            //     videoAd.destroy()
            // })

            // G_Scheduler.schedule("Delay_Show_Video", function () {
            //     // body...
            //     videoAd.show().catch(() => {
            //         // 失败重试
            //         videoAd.load()
            //         .then(() => videoAd.show())
            //         .catch(err => {
            //             console.log('激励视频 广告显示失败')
            //         })
            //     })
            // }.bind(this), false, 10000, 0)

            G_Switch.isPublishing(function ( isPublishing ) {
                console.log("isPublishing: ", isPublishing)
            })

            G_Switch.isNewGame(function ( isNewGame ) {
                console.log("isNewGame: ", isNewGame)
            })

            console.log("isSupportBannerAd: ", G_Adv.isSupportBannerAd())
            console.log("isSupportVideoAd: ", G_Adv.isSupportVideoAd())

            G_FreeGetMgr.getNextFreeGetWay(function ( way ) {
                console.log("next free get way: ", way)
            })

            // G_Switch.isAdvStateNormal(false, function ( isNormal ) {
            //     // body...
            //     console.log("is adv normal: ", isNormal)

            //     let sysInfo = G_PlatHelper.getSysInfo();
            //     if (isNormal) {
            //         G_Adv.createAutoRefreshBannerAdv(10, {centerX: 0, bottom: 0, width: sysInfo.screenWidth}, null, function () {
            //             G_Adv.showBannerAdv()
            //         })
            //     }
            //     else {
            //         G_Adv.createAutoRefreshBannerAdv(10, {centerX: 0, bottom: 0, width: sysInfo.screenWidth}, null, function () {
            //             G_Adv.showBannerAdv()
            //         })
            //     }
            // })

            // G_Scheduler.schedule("Cancel_Auto_Refresh_Banner", function () {
            //     // body...
            //     // G_Adv.destoryAutoRefreshBannerAdv()
            // }.bind(this), false, 5000, 0)

            // G_Scheduler.schedule("Delay_Auto_Show_Video", function () {
            //     // body...
            //     G_Adv.createVideoAdv(function (isEnded) {
            //         // body...
            //         console.log("Watch Video Finished: ", isEnded)
            //     })
            // }.bind(this), false, 15000, 1)
        }

        let test = {
            arr: [0, 1, 2],
            boolean: true,
            date: new Date(0),
            err: new Error('我是一个错误'),     // not support
            func: function() {
                console.log('我是一个函数')
            },      // not support
            nul: null,
            num: 0,
            obj: {
                name: '我是一个对象',
                id: 1
            },
            reg: new RegExp('/我是一个正则/ig'),
            str: '123aa',
            unf: undefined,
        }

        console.log(test)

        console.log("deepClone...")
        let deepClone_result = G_Utils.deepClone(test)
        console.log(deepClone_result)
        console.log(deepClone_result.err) // print fail
        deepClone_result.func()   // error

        console.log("cloneDeep...")
        let cloneDeep_result = G_Utils.cloneDeep(test)
        console.log(cloneDeep_result)
        console.log(cloneDeep_result.err) // print succ
        cloneDeep_result.func()   // succ

        let func = function () {
            console.log("test!!!")
        }

        console.error("aaabbccc event...")
        G_Event.addEventListerner("aaabbccc", func)
        G_Event.removeEventListerner("aaabbccc", func)
        G_Event.dispatchEvent("aaabbccc")
    }

    /**
     * 加入场景
     */
    onEnable() {
        if (this.uiRoot) {
            G_UIManager.registerUIRoot(this.uiRoot)
        }
    }

    /**
     * 离开场景
     */
    onDisable() {
        if (this.uiRoot) {
            G_UIManager.unregisterUIRoot()
        }
    }

    /**
     * 初始化UI
     */
    onInitUI() {
        // body...
        if (this.settingBtn) {
            let touchIndex = 0

            this.settingBtn.on("click", null, function () {
                G_UIHelper.playBtnTouchAction(this.settingBtn, function () {
                    // this.onSettingTouched()
                    this.onMoreGameTouched()

                    // G_Adv.createVideoAdv(function (isEnded) {
                    //     console.log("show video isEnded: ", isEnded)
                    // })

                    // G_MistakeMgr.isClickMistakeEnabled(function ( isClickEnabled ) {
                    //     console.log("is click mistake enabled: ", isClickEnabled)

                    //     G_MistakeMgr.isMoveMistakeEnabled(function ( isMoveEnabled ) {
                    //         console.log("is move mistake enabled: ", isMoveEnabled)
                    //     })
                    // })

                    // G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD)

                    // touchIndex += 1
                    // if (touchIndex % 2 == 0) {
                    //     G_PlatHelper.showToast("这个是测试是啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊")
                    // }
                    // else {
                    //     G_PlatHelper.showToast("这个是测试是啊")
                    // }

                    // G_UIManager.showUI("fullSceneAd", function () {
                    //     // body...
                    //     console.log("on show fullSceneAd closed...")
                    // })

                    // G_Event.dispatchEvent(G_EventName.EN_SYSTEM_ERROR)

                    // if (!G_AudioHelper.isMusicUrlValid()) {
                    //     G_SoundMgr.playMusic("https://image.game.hnquyou.com/upload/ShootingEnemy/v22/res/sounds/readyBg.mp3")
                    // }
                    // else {
                    //     G_SoundMgr.stopMusic()
                    // }

                    // G_SoundMgr.loadMusic("https://image.game.hnquyou.com/upload/RhythmGunmen/v23/res/online/GMusic/feiniaoyuchan.mp3", () => {
                    //     G_Scheduler.schedule("Print_Audio_Pos", () => {
                    //         console.log("Cur Music Time: ", G_SoundMgr.getCurMusicTime())
                    //     }, true)

                    //     G_SoundMgr.playMusic("https://image.game.hnquyou.com/upload/RhythmGunmen/v23/res/online/GMusic/feiniaoyuchan.mp3", true)
                    // })
                }.bind(this))

                G_SoundMgr.playSound(G_SoundName.SN_CLICK)
            }.bind(this))
        }

        if (this.moreGamesBtn) {
            this.moreGamesBtn.on("click", null, function () {
                G_UIHelper.playBtnTouchAction(this.moreGamesBtn, () => {
                    // console.log("show more games modal...")
                    // G_PlatHelper.showMoreGamesModal()
                    // G_SoundMgr.playSound(G_SoundName.SN_CLICK)
                    // let soundUrl = "https://image.game.hnquyou.com/upload/ShootingEnemy/v22/res/sounds/{0}.mp3".format(G_Utils.random(1, 10).toString())
                    // console.log("soundUrl: ", soundUrl)
                    // G_SoundMgr.playSound(soundUrl);
                    // G_Scheduler.unschedule("Print_Audio_Pos")
                })
            }.bind(this))
        }

        if (this.testUIBtn) {
            G_UIHelper.refreshFreeWayOfBtn(this.testUIBtn, "comm/video_icon.png", "comm/share_icon.png")

            this.testUIBtn.on("click", null, function () {
                this.testUIBtn.doTouch(G_ShareScene.SS_SHARE_APP, function () {
                    console.log("succ....")
                }, function () {
                    console.log("fail....");
                })
            }.bind(this))
        }

        if (this.testBannerBtn) {
            this.testBannerBtn.on("click", null, function () {
                G_SoundMgr.playSound(G_SoundName.SN_CLICK)
                G_Event.dispatchEvent(G_EventName.EN_SHOW_BANNER_AD, {min: true})
            }.bind(this))
        }

        if (this.testInsertBtn) {
            this.testInsertBtn.on("click", null, function () {
                G_SoundMgr.playSound(G_SoundName.SN_CLICK)
                G_Event.dispatchEvent(G_EventName.EN_SHOW_INSERT_AD)
            }.bind(this))
        }

        if (this.testSubscribeOnceBtn) {
            this.testSubscribeOnceBtn.on("click", null, function () {
                G_SoundMgr.playSound(G_SoundName.SN_CLICK)

                if (G_Subscriber.isSupportOnce()) {
                    G_Subscriber.reqSubscribeOnceMsgs("Test", bSucc => {
                        console.log("reqSubscribeOnceMsgs state: ", bSucc)

                        if (bSucc) {
                            G_PlatHelper.showToast("订阅一次性消息成功");
                        }
                        else {
                            G_PlatHelper.showToast("订阅一次性消息失败");
                        }
                    })
                }
                else {
                    G_PlatHelper.showToast("当前平台暂不支持")
                }
            }.bind(this))
        }

        if (this.testSubscribeForeverBtn) {
            this.testSubscribeForeverBtn.on("click", null, function () {
                G_SoundMgr.playSound(G_SoundName.SN_CLICK)
                if (G_Subscriber.isSupportForever()) {
                    G_Subscriber.reqSubscribeAllForeverMsgs(bSucc => {
                        console.log("reqSubscribeAllForeverMsgs state: ", bSucc)

                        if (bSucc) {
                            G_PlatHelper.showToast("订阅长期消息成功");
                        }
                        else {
                            G_PlatHelper.showToast("订阅长期消息失败");
                        }
                    })
                }
                else {
                    G_PlatHelper.showToast("当前平台暂不支持")
                }
            }.bind(this))
        }

        if (this.testDepositBtn) {
            this.testDepositBtn.on("click", null, function () {
                G_RedPackageMgr.depositMoney((bSucc, depositedMoney) => {
                    console.log("deposit money state: ", bSucc, depositedMoney)
                })
            }.bind(this))
        }

        if (this.testWithdrawBtn) {
            this.testWithdrawBtn.on("click", null, function () {
                G_RedPackageMgr.withdrawMoney(3, (bSucc, withdrawedMoney) => {
                    console.log("withdraw money state: ", bSucc, withdrawedMoney)
                })
            }.bind(this))
        }

        if (this.testWithdrawEverydayBtn) {
            this.testWithdrawEverydayBtn.on("click", null, function () {
                G_RedPackageMgr.withdrawEverydayMoney((bSucc, withdrawedMoney) => {
                    console.log("withdraw everyday money state: ", bSucc, withdrawedMoney)
                })
            }.bind(this))
        }

        if (this.testLoginBtn) {
            this.testLoginBtn.on("click", null, function () {
                if (!G_NativeWXMgr.isWXAppInstalled()) {
                    console.warn("wx app is not installed...")
                    return
                }
        
                G_NativeWXMgr.reqLoginToWX((bSucc, code) => {
                    console.log("login result: ", bSucc, code)
                })
            }.bind(this))
        }

        if (this.testShareBtn) {
            this.testShareBtn.on("click", null, function () {
                if (G_PlatHelper.isNativePlatform() && !G_NativeWXMgr.isWXAppInstalled()) {
                    console.warn("wx app is not installed...")
                    return
                }
        
                // Text
                // G_NativeWXMgr.reqShareText(true, "This is a test text...", (bSucc) => {
                //     console.log("share result: ", bSucc)
                // })
        
                // Image
                G_UIManager.showUI("capture", function () {
                    // body...
                    console.log("on show capture closed...")
                }, (imagePath) => {
                    G_NativeWXMgr.reqShareImage(true, imagePath, (bSucc) => {
                        console.log("share result: ", bSucc)
                    })
                })
        
                // Web
                // G_NativeWXMgr.reqShareWeb(true, "百度", "百度一下，你就知道", "https://www.baidu.com/")
            }.bind(this))
        }

        if (this.readyView) {
            this._initBaseMenu(this.readyView)
        }
    }

    /**
     * 注册监听事件
     */
    onRegisterEvent() {
        G_Event.addEventListerner(G_EventName.EN_REFRESH_VIDEO_AD, () => {
            if (this.testUIBtn) {
                G_UIHelper.refreshFreeWayOfBtn(this.testUIBtn, "comm/video_icon.png", "comm/share_icon.png")
            }
        })
    }

    /**
     * 显示自己的商业广告
     */
    onShowOwnBanner() {
        // body...
        G_UIManager.showUI("bannerAd")
    }

    /**
     * 隐藏自己的商业广告
     */
    onHideOwnBanner() {
        // body...
        G_UIManager.hideUI("bannerAd")
    }

    /**
     * 显示自己的插屏广告
     */
    onShowOwnInsertAd( closeCb ) {
        // body...
        G_UIManager.showUI("insertAd", closeCb)
    }
    
    /**
     * 显示本地的提示
     */
    onShowLocalTips( content ) {
        // body...
        G_UIManager.showUI("tips", null, content)
    }

    /**
     * 隐藏本地的提示
     */
    onHideLocalTips() {
        // body...
        G_UIManager.hideUI("tips")
    }

    /**
     * 显示本地的对话框
     */
    onShowLocalModal( obj ) {
        // body...
        G_UIManager.showUI("modal", null, obj)
    }

    /**
     * 显示本地的Loading
     */
    onShowLocalLoading( content ) {
        // body...
        G_UIManager.showUI("loading", null, content)
    }

    /**
     * 隐藏本地的Loading
     */
    onHideLocalLoading() {
        // body...
        G_UIManager.hideUI("loading")
    }

    /**
     * 加载场景完成
     */
    onLoadSceneCompleted( scene ) {
    }

    /**
     * 设置
     */
    onSettingTouched( btn ) {
        G_UIManager.showUI("setting", function () {
            // body...
            console.log("on show setting closed...")
        })
    }

    /**
     * 更多游戏
     */
    onMoreGameTouched() {
        G_UIManager.showUI("fakeLoadingAd", function () {
            // body...
            console.log("on show fakeLoadingAd closed...")
        })
    }

    _initBaseMenu( menu ) {
        if (menu) {
            menu.doShow = function () {
                menu.visible = true
            }

            menu.doHide = function () {
                menu.visible = false
            }

            // default
            menu.doHide()
        }
    }
}