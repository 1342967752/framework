import { APP_BASE_CONST } from "./app_base_const";
import ModuleMgr from "../../add/Mgr/ModuleMgr";
import ExtraEffect from "../../add/Mgr/ExtraEffect";
var APP_CONST = {}

APP_CONST.init = function () {
	// init base first
	APP_BASE_CONST.init()

	// Event Name For App
	let _EventName = {
		EN_DIAM_CHANGE: "EN_DIAM_CHANGE",
		EN_COIN_CHANGED: "EN_COIN_CHANGED",
		EN_LACK_OF_COIN: "EN_LACK_OF_COIN",
		GAMESTART: "GAMESTART",
		END_CHECK_OVER: "END_CHECK_OVER",
		EN_GAME_REBORN: "EN_GAME_REBORN",
		EN_GAMEGOLD_CHANGE: "EN_GAMEGOLD_CHANGE",
		EN_CHANGE_STAR: "EN_CHANGE_STAR",
		EN_POWER_CHANGED: "EN_POWER_CHANGED",

		EN_CLOSEALLSTORE:"EN_CLOSEALLSTORE",

		EN_BEESPEEDUP:"EN_BEESPEEDUP",
		ENUPCONTAIN:"ENUPCONTAIN",
		EN_UPHURT:"EN_UPHURT",
		EN_SPEEDUPCHANGE:"EN_SPEEDUPCHANGE",
		EN_STRONGE_CHANGE:"EN_STRONGE_CHANGE",
		EN_REFERSH_POPBAR:"EN_REFERSH_POPBAR",
	}

	for (let key in _EventName) {
		if (typeof G_EventName[key] === "undefined") {
			G_EventName[key] = _EventName[key]
		}
		else {
			console.error("Event Name: {0} Conflicted, It's Used By SDK...".format(key))
		}
	}

	// Not Propagation Event Name For App
	let _NotPropagationEventName = {
	}

	for (let key in _NotPropagationEventName) {
		if (typeof G_NotPropagationEventName[key] === "undefined") {
			G_NotPropagationEventName[key] = _NotPropagationEventName[key]
		}
		else {
			console.error("Event Name: {0} Conflicted, It's Used By SDK...".format(key))
		}
	}

	// 上报事件名
	// 需要先注册，才能正确上报完成
	let _ReportEventName = {
		EN_REBORN_AD: "EN_REBORN_AD",//复活
		EN_SGIN_AD: "EN_SGIN_AD",//签到
		EN_GAMESTART: "EN_GAMESTART",//游戏开始
		EN_GAMEEND: "EN_GAMEEND",//游戏结束
	}

	for (let key in _ReportEventName) {
		if (typeof G_ReportEventName[key] === "undefined") {
			G_ReportEventName[key] = _ReportEventName[key]
		}
		else {
			console.error("Report Name: {0} Conflicted, It's Used By SDK...".format(key))
		}
	}

	// 全局配置文件列表
	// 如有新的配置文件，Laya版本的需手动添加
	let _Dbs = [
		"res/conf/db/TBLevelConfig.txt",
		"res/conf/db/TBPlayerConfig.txt",
		"res/conf/db/TBSginConfig.txt",
		"res/conf/db/TBQuality.txt",
		"res/conf/db/TBTeach.txt",
		"res/conf/db/TBDailyTask.txt",
		"res/conf/db/TBBee.txt",
		"res/conf/db/TBFlower.txt",
		"res/conf/db/TBGrowUp.txt",
	]

	// 添加为全局
	_Dbs.forEach(function (_Db) {
		G_Dbs.push(_Db)
	})

	// GameDB配置
	let _GameDBConfigs = [
		{
			// 关键字
			key: "LevelConfig",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		{
			// 关键字
			key: "PlayerConfig",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		{
			// 关键字
			key: "SginConfig",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		{
			// 关键字
			key: "Quality",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		{
			// 关键字
			key: "Teach",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		{
			// 关键字
			key: "DailyTask",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		{
			// 关键字
			key: "Bee",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		{
			// 关键字
			key: "Flower",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		{
			// 关键字
			key: "GrowUp",
			// 若为true，则会创建get{*}ByID的方法，参数为id(其中{*}代表key值)
			getFunc: true,
			// 若为true，则会创建getAll{*}s的方法，无参数(其中{*}代表key值)
			getAllFunc: true,
			// 若为true，则会创建getAll{*}Count的方法，无参数(其中{*}代表key值)
			getCountFunc: true
		},
		


	]

	// 添加为全局
	_GameDBConfigs.forEach(function (_GameDBConfig) {
		G_GameDBConfigs.push(_GameDBConfig)
	})


	// 为""时不启动
	let _SoundName = {
		SN_BG: "res/online/GAudio/gameBg.mp3",
		SN_FAIL: "res/online/GAudio/fail.mp3",
		SN_SUCC: "res/online/GAudio/cheer.mp3",
		SN_Mp3: "res/online/GAudio/{0}.mp3",
	}

	// 添加为全局
	for (let key in _SoundName) {
		if (typeof G_SoundName[key] === "undefined") {
			G_SoundName[key] = _SoundName[key]
		}
		else {
			console.error("Sound Name: {0} Conflicted, It's Used By SDK...".format(key))
		}
	}

	window.G_ResPath = {
		resPath: "res/online/Sprites/Conventional/{0}.lh",
		itemPath: "prefab/item/{0}.json",
		skinPath: "res/online/Skin/icon/{0}.png",
		peoplePath: "res/online/Skin/people/{0}.png",
		scenePath: "res/online/Sprites/Conventional/GameScene.ls",
		trainTitle:"game/trainView/t{0}.png",
		trainIcon:"game/trainView/icon/icon{0}.png",
		minMapPoint:"game/gameView/{0}.png",
		skinChip:"res/online/Skin/skinChip/{0}.png",
		rareBoxPath:"game/rareBox/{0}.png",
		starPath:"game/skin/star/x{0}.png",
		scenePart:"res/online/Sprites/Conventional/{0}.ls"
	}

	// 预加载资源配置
	let _PreloadAssets = [

	];


	// 添加为全局
	_PreloadAssets.forEach(function (_PreloadAsset) {
		G_PreloadAssets.push(_PreloadAsset)
	})

	// 全局开关名
	let _SwitchName = {
		SN_FORCEUPDATE: "ForceUpdate",
		SN_MISTAKE_DATA: "mistake_data",
		SN_INSERT_TYPE: "insert_type",
		SN_INSERT_INTERVAL: "insert_interval",
		SN_ISOPENAD: "isOpenAd",
		SN_INSERTADSHOWCOUNT: "insertAdShowCount",
		SN_EXITVIEW_SHOW: "exitview_show",
		SN_MOVE_DATA: "move_data",
		SN_FORECE_SELECT: "forece_select",
		SN_DELAYSHOWBTN: "delayShowBtn",
	}

	// 添加为全局
	for (let key in _SwitchName) {
		if (typeof G_SwitchName[key] === "undefined") {
			G_SwitchName[key] = _SwitchName[key]
		}
		else {
			console.error("Switch Name: {0} Conflicted, It's Used By SDK...".format(key))
		}
	}

	// 全局分享场景名
	// 场景名应该在后台分享配置中有对应的配置
	let _ShareScene = {
		// 领取金币
		SS_GET_COIN: "SS_GET_COIN",
		// 双倍金币
		SS_DOUBLE_COIN: "SS_DOUBLE_COIN",
		// 复活
		SS_REVIVE_BACK: "SS_REVIVE_BACK",
		// 免费试用
		SS_FREE_TRY: "SS_FREE_TRY",
	}

	// 添加为全局
	for (let key in _ShareScene) {
		if (typeof G_ShareScene[key] === "undefined") {
			G_ShareScene[key] = _ShareScene[key]
		}
		else {
			console.error("Share Name: {0} Conflicted, It's Used By SDK...".format(key))
		}
	}


	// 远程资源的基础地址，为空时不设定
	G_BaseUrlPath = "https://image.game.hnquyou.com/upload/LittleBee/v22/";//"https://image.game.hnquyou.com/upload/ShootingEnemy/v4/";

	// 开启远程资源的本地白名单的地址(支持文件，文件夹）
	// "ad", "res/atlas"已添加到白名单
	let _AppNativefiles = [
		"res/Scenes",
		"game/",
		"prefab/",
		"loading/",
		"sub/",
		"sounds/",
		"res/sounds/",
		"res/tempConf/"
	]

	// 添加为全局
	_AppNativefiles.forEach(function (_AppNativefile) {
		G_AppNativefiles.push(_AppNativefile)
	})

	// 是否允许离线登录（登录失败转成离线状态）
	G_IsAllowLoginOffline = false

	// 是否使用自己的插屏广告
	G_IsUseOwnInsertAd = false

	// 登录按钮图片地址
	G_LoginBtnPath = "resources/***.png"

	// 是否每次新用户
	G_IsAlwaysNewPlayer = true

	// openID未设定随机生成32位的字符代替
	G_OpenID = null

	// sessID未设定随机生成26位的字符代替
	G_SessID = null

	// nickname未设定使用空字符代替
	G_Nickname = ""

	// sex中0未未知，1为男性，2为女性，默认为0
	G_Sex = 0

	// headUrl头像网络地址，未设定使用空字符代替
	G_HeadUrl = ""

	// 非windows环境，配置重置
	if (typeof window.hbs !== "undefined" || typeof window.wx !== "undefined" || typeof window.qq !== "undefined" || typeof window.qg !== "undefined" || typeof window.tt !== "undefined") {
		G_IsAlwaysNewPlayer = false
		G_OpenID = null
		G_SessID = null
		G_Nickname = ""
		G_Sex = 0
		G_HeadUrl = ""
	}

	//G_IsAlwaysNewPlayer = false

	// ov平台使用自己的插屏广告
	if (typeof window.qg !== "undefined") {
		G_IsUseOwnInsertAd = true;
		//G_BaseUrlPath="";
	}

	window.G_levelID = 0;
	window.G_BtnDoShowTime = 25;

	window.G_IsShowTeach = false;


	window.G_BtnDelayTime = 2;
	window.G_BrnMoveTimer = 0.05;
	window.G_SkinId = 1;

	window.G_InitDailyTaskId = 1;//初始的任务id
	window.G_CurDailySgin = 1;//当前的任务sgin

	window.G_InitMoney = "0.00";
	window.G_ColGroup = {
		player: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2,
		ray: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER6,
		item: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1,
		
		
		enemy: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4,
		enemyEye: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER7,
		playerLeg: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3,
		enemyLeg: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5,
		ob: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER8,
		wall: Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER9,
		
		all: Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER,
		

	}

	window.G_AutoRecordVideo = true;//是否自动录屏
	window.G_GameLayer = {
		hint: 9,
		ShowModel: 10,
		player:11,
	};


	window.GG_SoundName = G_SoundName;
	window.GG_EventName = G_EventName;
	window.G_IsInViewAd = false;
	window.G_BannerCenterX=0;

	window.PropKey={
		hurt:"hurt",
		hp:"hp",
		def:"def",
		speed:"speed",
		defRate:"defRate",
		bounceHurt:"bounceHurt",
	}

	window.G_MaxStar=20;
}

// export
export { APP_CONST }