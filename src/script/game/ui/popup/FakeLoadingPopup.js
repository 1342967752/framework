import BaseUI from "../base/BaseUI"
import AdvLoadMgr from "../../ctrl/AdvLoadMgr"

export default class FakeLoadingPopup extends BaseUI {
    /** @prop {name:rootNode, tips:"根节点，确保锚点在中心", type:Node, default:null}*/
    /** @prop {name:openType, tips:"打开方式, scale为缩放，fromLeft为从左进入，fromBottom为从下进入，opacity为淡入，none为无", type:Option, option:"none,scale,fromLeft,fromBottom,opacity", default:"none"}*/
    /** @prop {name:closeType, tips:"关闭方式, scale为缩放，opacity为淡出，none为无", type:Option, option:"none,scale,opacity", default:"none"}*/

    constructor() {
        super()

        // privates
        this._startBtn = null
        this._advLoadMgrs = []
        this._isFirstTouch = false
        this._progress = null
    }

    onAwake() {
        this._rootNode = this.rootNode
        this._openType = this.openType
        this._closeType = this.closeType
    }

    onEnable() {
        // init ui
        this._initUI()
    }

    _initUI() {
        let startBtn = G_UIHelper.seekNodeByName(this.owner, "startBtn")
        if (startBtn) {
            // reset
            startBtn._isTouching = false

            // save
            this._startBtn = startBtn

            startBtn.on("click", null, function () {
                this.onStartTouched(startBtn)
            }.bind(this))
        }

        let btnAdvLoader = G_UIHelper.seekNodeByName(this.owner, "btnAdvLoader")
        if (btnAdvLoader) {
            // save
            this._advLoadMgrs.push(btnAdvLoader.getComponent(AdvLoadMgr))
        }

        let listAdvLoader = G_UIHelper.seekNodeByName(this.owner, "listAdvLoader")
        if (listAdvLoader) {
            let listAdvLoadMgr = listAdvLoader.getComponent(AdvLoadMgr)

            // save
            this._advLoadMgrs.push(listAdvLoadMgr)

            Laya.loader.create("prefab/ad/wx/fakeListItem.json", Laya.Handler.create(null, json => {
                let creator = new Laya.Prefab()
                creator.json = json

                listAdvLoadMgr.getAdvInfos(() => {
                    let list = G_UIHelper.seekNodeByName(listAdvLoader, "list")
                    let rankNum = 3
                    list.cells.forEach(cell => {
                        if (cell && !cell._advFrameExt) {
                            rankNum += 1

                            let advFrameExt = creator.create()
                            advFrameExt.pivotX = advFrameExt.width / 2
                            advFrameExt.pivotY = advFrameExt.height / 2
                            advFrameExt.x = advFrameExt.width / 2
                            advFrameExt.y = advFrameExt.height / 2

                            let rank = G_UIHelper.seekNodeByName(advFrameExt, "rank")
                            rank.text = rankNum.toString()

                            let tips = G_UIHelper.seekNodeByName(advFrameExt, "tips")
                            this._setRankTips(tips, rankNum)

                            // save
                            cell._advFrameExt = advFrameExt

                            // add
                            cell.addChild(advFrameExt)
                        }
                    })
                })
            }))
            
        }

        let tips = G_UIHelper.seekNodeByName(this.owner, "progressTips")
        let progress = G_UIHelper.seekNodeByName(this.owner, "progress")
        progress.setFakeProgress = (percent) => {
            percent = percent > 1 ? 1 : percent
            progress.value = percent
            tips.text = "游戏资源加载中...{0}%".format(Math.floor(percent * 100).toString())
        }

        // save
        this._progress = progress
    }

    onInit() {
        // reset
        this._isFirstTouch = true

        // hide banner
        G_Event.dispatchEvent(G_EventName.EN_HIDE_BANNER_AD)

        // default
        this._startBtn.visible = false
        this._progress.setFakeProgress(0)
        let startedTime = G_ServerInfo.getServerTime()
        G_Switch.getFakeLoadingConfig(cfg => {
            G_Scheduler.schedule("Fake_Loading_Progress", () => {
                let passedTime = G_ServerInfo.getServerTime() - startedTime
                let percent = passedTime / cfg.time
                this._progress.setFakeProgress(percent)

                if (percent >= 1) {
                    this._startBtn.visible = true
                    G_Scheduler.unschedule("Fake_Loading_Progress")
                }
            }, true)
        })

        for (let rank = 1; rank <= 3; rank++) {
            let tipsName = "static_tips_" + rank.toString()
            let tips = G_UIHelper.seekNodeByName(this.owner, tipsName)
            this._setRankTips(tips, rank)
        }
    }

    onHide() {
        if (this._advLoadMgrs.length > 0) {
            this._advLoadMgrs.forEach(advLoadMgr => {
                advLoadMgr.hideAdv()
            })
        }
    }

    onStartTouched( btn ) {
        G_UIHelper.playBtnTouchAction(btn, () => {
            if (this._isFirstTouch) {
                this._isFirstTouch = false
                if (this._advLoadMgrs) {
                    this._advLoadMgrs[0].randomNavigate()
                }
            }
            else {
                G_UIManager.hideUI("fakeLoadingAd")
            }
        })
        
        G_SoundMgr.playSound(G_SoundName.SN_CLICK)
    }

    _setRankTips(tips, rank) {
        if (tips) {
            if (rank <= 20) {
                tips.text = G_Utils.random((20 - rank) * 8, (20 - rank + 1) * 8).toString() + "万人在玩"
            }
            else {
                tips.text = "新游立即玩"
            }
        }
    }
}