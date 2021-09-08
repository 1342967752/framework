import MistakeMgr from "../add/Mgr/MistakeMgr";
import TTSumbitData from "../add/Mgr/TTSumbitData";
import XiYouMgr from "../add/Mgr/XiYouMgr";
import PlatAction from "../add/UIFrame/PlatAction";
import LoadingBase from "./LoadingBase";

/**
 * loading场景View
 */
export default class Loading extends LoadingBase {
    constructor() {
        super("loading/LoadingScene.scene");

        this.isConfrom = true;
        this.senView_show_key = "senView_show";


    }



    /**
     * 初始化UI
     */
    onInitUI() {

        // this.m_list.array = [1];
        // this.m_list.vScrollBarSkin = "";
        // this.senView.visible = false;

        // this.m_ok.on(Laya.Event.CLICK, null, () => {
        //     this.isConfrom = true;
        //     this.toConfrom();
        //     Laya.LocalStorage.setItem(this.senView_show_key,"1");
        // })

        // this.m_cancel.on(Laya.Event.CLICK, null, () => {
        //     G_PlatHelper.exitApp();
        // })


    }

    /**
     * 注册监听事件
     */
    onRegisterEvent() {
    }

    /**
     * 第一次加入场景（Laya提供）
     */
    onEnable() {

        // 开始检查服务端
        this._startCheckServer()
        PlatAction.getIns().checkNetworkType();
    }

    /**
     * 检查服务器状态完成
     */
    onServerChecked() {
        console.log("server checked successfully...")

        // 开始登录
        this._startLogin()

        // 开始资源加载
        this._startLoad()
    }

    /**
     * 登录完成
     */
    onLogined(playerInfo) {
        console.log("login successfully...")
        console.log(playerInfo)

        // 开始检查配置
        this._startCheckCfgs()
    }

    /**
     * 加载完成
     */
    onLoadComplete() {
        // 打开场景(加载完成)
        this._openGameScene({ isLoaded: true })
    }

    /**
     * 登录完成后，检查完必须配制
     */
    onCfgChecked() {
        if (G_PlatHelper.isHWPlatform() || G_PlatHelper.isWINPlatform()) {
            // //判断是否显示隐私提示
            // let show = Laya.LocalStorage.getItem(this.senView_show_key);
            // if (show != "1") {
            //     this.senView.visible = true;
            //     this.isConfrom = false;
            // }
        }

        this.toConfrom();

    }

    toConfrom() {
        if (this.isConfrom) {



            XiYouMgr.getIns().init(() => {
                MistakeMgr.getIns().init(() => {
                    MistakeMgr.getIns().preloadAsset(() => {
                        this._openGameScene({ cfgChecked: true });
                        TTSumbitData.getIns().Enter_click(1);
                        TTSumbitData.getIns().Enter_click(2);
                    })


                })
            })


        }
    }



    /**
     * 下发游戏场景地址
     */
    getGameSceneName() {
        return "game/GameScene.scene"
    }

    /**
     * 加载进度发生变化
     */
    onLoadProgress(percent) {
        if (this.loadingProgress) {
            this.loadingProgress.value = percent;
            this.loadingTips.text = Math.floor(percent * 100) + "%";
        }
    }
}