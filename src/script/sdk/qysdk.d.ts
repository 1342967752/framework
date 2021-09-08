/**
 * 事件名
 */
declare class G_EventName {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 第一次打开主场景
     */
    static EN_FIRST_OPEN_MAIN_SCENE: String;
    /**
     * 第一次开始游戏
     */
    static EN_FIRST_START_GAME: String;
    /**
     * 显示banenr，默认banner宽度为屏幕宽度
     * @param {Object} style 可传第一个参数（样式），仅wx，qq平台适用
	 * @param {Boolean} style.max 是否强制显示最大banner（banner宽度即屏幕的宽度）
	 * @param {Boolean} style.min 是否强制显示最小banner（banner宽度即300）
	 * @param {Number} style.width 是否强制指定banner宽度（最小300）
	 * @param {Number} style.topFromHeight 是否指定banner顶部距离屏幕底部的高度（banner最小宽度不会小于300）
     */
    static EN_SHOW_BANNER_AD: String;
    /**
     * 隐藏banner广告
     */
    static EN_HIDE_BANNER_AD: String;
    /**
     * 显示插屏广告
     */
    static EN_SHOW_INSERT_AD: String;
    /**
     * 显示自己的插屏广告
     */
    static EN_SHOW_OWN_INSERT_AD: String;
    /**
     * 刷新悬浮广告
     */
	static EN_REFRESH_FLOW_AD: String;
    /**
     * 显示自己的banner广告
     */
    static EN_SHOW_OWN_BANNER_AD: String;
    /**
     * 隐藏自己的banner广告
     */
    static EN_HIDE_OWN_BANNER_AD: String;
    /**
     * 显示本地提示框
     */
    static EN_SHOW_LOCAL_TIPS: String;
    /**
     * 隐藏本地提示框
     */
    static EN_HIDE_LOCAL_TIPS: String;
    /**
     * App进去前台
     */
    static EN_APP_AFTER_ONSHOW: String;
    /**
     * App进去后台
     */
    static EN_APP_BEFORE_ONHIDE: String;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_EventName) ****/
}

/**
 * 免费获取方式
 */
declare class G_FreeGetWay {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 都不支持
     */
    static FGW_NONE: String;
    /**
     * 分享
     */
    static FGW_SHARE: String;
    /**
     * 广告
     */
    static FGW_ADV: String;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_FreeGetWay) ****/
}

/**
 * 上报事件名
 */
declare class G_ReportEventName {
    /**** 以下为框架相关，勿主动修改 ****/
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_ReportEventName) ****/
}

/**
 * 开关名
 */
declare class G_SwitchName {
    /**** 以下为框架相关，勿主动修改 ****/
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_SwitchName) ****/
}

/**
 * 分享场景名
 */
declare class G_ShareScene {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 系统菜单
     */
    static SS_SYSTEM_MENU: String;
    /**
     * 分享App
     */
    static SS_SHARE_APP: String;
    /**
     * 客服界面默认分享
     */
    static SS_CUSTOMER_SERVER: String;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_ShareScene) ****/
}

/**
 * 音效名
 */
declare class G_SoundName {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 点击音效
     */
    static SN_CLICK: String;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_SoundName) ****/
}

/**
 * 基础配置键值
 */
declare class BaseConfigIDs {
    /**** 以下为框架相关，勿主动修改 ****/
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (BaseConfigIDs) ****/
}

/**
 * 文本键值
 */
declare class UIWordIDs {
    /**** 以下为框架相关，勿主动修改 ****/
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (UIWordIDs) ****/
}

/**
 * 定时器 
 */
declare class G_Scheduler {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 创建定时器
     * @param key 标识符(全局唯一)
     * @param cb 回调
     * @param useFrame 是否帧循环, 默认false
     * @param interval useFrame为true时，单位为帧，默认为0; useFrame为false时，单位为毫秒，默认为0
     * @param repeat 重复次数（默认G_Const.C_SCHEDULE_REPEAT_FOREVER), 传0和1都是回调一次，但0次无法取消
     * @returns 成功或失败
     */
    static schedule(key:String, cb:Function, useFrame?:Boolean, interval?:Number, repeat?:Number):Boolean;

    /**
     * 取消定时器
     * @param key 标识符(全局唯一)
     * 
     * @returns 成功或失败
     */
    static unschedule(key:String):Boolean;

    /**
     * 是否存在此定时器
     * @param key 标识符(全局唯一)
     * 
     * @returns 存在与否
     */
    static isScheduled(key:String):Boolean;

    /**
     * 取消所有定时器
     */
    static unscheduleAll():void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Scheduler) ****/
}

/**
 * 事件中心
 * 支持事件冒泡 
 */
declare class G_Event {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 添加事件监听
     * @param event_name 事件名（有效的字符）
     * @param listerner 监听函数
     * @param caller 函数调用域
     * 
     * @returns 监听事件的唯一标识符
     */
    static addEventListerner(event_name:String, listerner:Function, caller?:Object):String;

    /**
     * 通过标识符移除事件监听
     * @param event_name 事件名（有效的字符）
     * @param key 监听事件的唯一标识符
     */
    static removeEventListernerByKey(event_name:String, key:String):void;

    /**
     * 移除事件监听
     * @param event_name 事件名（有效的字符）
     * @param listerner 监听函数
     * @param caller 函数调用域
     */
    static removeEventListerner(event_name:String, listerner:Function, caller?:Object):void;

    /**
     * 移除所有的事件监听
     */
    static removeAllEventListerners():void;

    /**
     * 检查指定事件名是否存在监听
     * @param event_name 事件名（有效的字符）
     * @returns 存在或否
     */
    static hasEventListerner(event_name:String):Boolean;

    /**
     * 派发事件
     * @param event_name 事件名（有效的字符）
     * @param args 参数
     */
    static dispatchEvent(event_name:String, ...args:any[]):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Event) ****/
}

/**
 * 工具类 
 */
declare class G_Utils {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 获取注册的lodash第三方开源库
     * 
     */
    static getLodash():any;
            
    /**
     * 格式化时间, 默认格式 2018年1月1日 01:02:03,当first = 2时日期格式为 2018/01/01 23:45:08
     * @param date 目标时间结构
     * @param first 是否需要年月日
     * @param last 是否需要当日时间
     */
    static formatDate(date:Date, first:any, last:Boolean):String;

    /**
     * 拷贝数据
     * 支持对象或数据的拷贝
     * @param dataObj 待拷贝的数据或对象
     */
    static clone(dataObj:any):any;

    /**
     * 深拷贝数据
     * 支持对象或数据的拷贝
     * @param dataObj 待拷贝的数据或对象
     */
    static cloneDeep(dataObj:any):any;

    /**
     * 深拷贝数据
     * 支持对象或数据的拷贝
     * 不依赖第三方库
     * @param dataObj 待拷贝的数据或对象
     */
    static deepClone(dataObj:any):any;

    /**
     * 生成从min到max之间的随机数，其中min和max都必须大于0的整数
     * 若为一个参数，则生成1到min之间的随机数
     * 若为两个参数，则生成min到max之间的随机数
     * 其他参数个数，返回错误0
     */
    static random(min:Number, max?:any):Number;

    /**
     * 生成指定位数的随机字符串
     * @param count 需要生成的字符数量
     */
    static generateString(count:Number):String;

    /**
     * 将大数字转换为字符数字
     * k = 3个0, m = 6个0, b = 9个0, t = 12个0, aa = 15个0, bb = 18个0, cc = 21个0 ... zz = 246个0
     * @param bigNum 需要转换的数字
     * @param roundNum 转换后数据的有效位数
     */
    static bigNumber2StrNumber(bigNum:any, roundNum?:Number):String;

    /**
     * 将数字转化为中文
     * @param num 支持数字1-7
     */
    static convertNumberToChinese(num:Number):String;

    /**
     * 将秒数转化为时分制
     * @param seconds 秒数
     */
    static convertSecondToHourMinute(seconds:Number):String;

    /**
     * 将秒数转化为时分秒制
     * @param seconds 秒数
     * @param isAutoHideHour 不足1小时是否自动隐藏小时数字
     */
    static convertSecondToHourMinuteSecond(seconds:Number, isAutoHideHour:Boolean):String;

    /**
     * 判断是否为对象
     * @param obj 要判断的对象
     */
    static isObject(obj):Boolean;

    /**
     * 打乱数组（影响原数组对象）
     * @param arr 要打乱的数组
     */
    static shuffleArray(arr:Array<any>):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Utils) ****/
}

/**
 * 全局UI帮助
 */
declare class G_UIHelper {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 遍历查找指定名称的节点，返回找到的第一个匹配的节点
     * @param node 查找的根节点
     * @param name 要查找的节点名
     */
    static seekNodeByName(node:any, name:string):any;

    /**
     * 通用按钮点击动画
     * @param btn 按钮
     * @param cb 动画完成回调
     * @param originalScale 按钮原始缩放比例，默认为1
     * @param scaleExternal 按钮点击缩放额外倍率（基于1.1），默认为1
     * @param durationScale 按钮点击缩放耗时额外倍率（基于100毫秒），默认为1
     */
    static playBtnTouchAction(btn:any, cb:Function, originalScale?:Number, scaleExternal?:Number, durationScale?:Number):void;

    /**
     * UI缩放动画
     * @param ui UI
     * @param fromScale 起始缩放比例
     * @param endScale 结束缩放比例
     * @param duration 缩放耗时
     * @param cb 缩放完成回调
     */
    static playUIScaleAction(ui:any, fromScale:Function, endScale:Number, duration:Number, cb?:Function):void;

    /**
     * 将指定容器内的指定节点按照指定间隔排列
     * @param content 指定容器
     * @param nodeArr 需要排列的所有节点
     * @param gap 指定间隔
     */
    static layoutItemsInContent(content:any, nodeArr:any[], gap:Number):void;
    
    /**
     * 封装按钮，使其支持通用免费获取逻辑，按钮里面必须含名为icon的图片节点
     * 封装后，添加btn.getWay():G_FreeGetWay方法，获取当前按钮的免费领取方式
     * 封装后，添加btn.refreshWay():void方法，当按钮每次显示时，调用
     * 封装后，添加btn.doTouch(shareScene:String, succCb?:Function, failCb?:Function, showFailTips?:Boolean, showTwiceModal?:Boolean):void方法其中shareScene为分享场景名，succCb为成功回调，failCb为失败回调。此方法当按钮被点击时调用, showFailTips为是否显示失败提示，showTwiceModal是否显示二次弹框
     * @param btn 按钮
     * @param videoIconPath 当免费获取方法为视频时，icon节点的使用图片，默认"comm/video_icon.png"
     * @param shareIconPath 当免费获取方法为分享时，icon节点的使用图片，默认"comm/share_icon.png"
     */
    static refreshFreeWayOfBtn(btn:any, videoIconPath?:String, shareIconPath?:String):void;

    /**
     * 延迟显示指定节点
     * @param node 需要延迟显示的节点
     * @param delay 延迟时间，默认3000毫秒
     */
    static delayShow(node:any, delay?:Number):void;

    /**
     * 使用框架默认配置自动控制某个节点，一般用于控制误触按钮
     * 默认配置可以需要通过管理后台的moveMistakeCfg开关配置
     * @param node 需要控制的某个节点
     * @param offsetPos 节点开始显示时相对于节点出生点的位移，格式为{x:Number, y:Number}
     * @param cb 回调，每阶段都有相应的回调，如：cb("hide_finished"), cb("hold_finished_1"), cb("hold_finished_2"), cb("move_finished")
     */
    static autoMoveWithDefaultConfig(node:any, offsetPos:any, cb:Function):void;

    /**
     * 自动控制某个节点，一般用于控制误触按钮
     * @param node 需要控制的某个节点
     * @param hideDuration 节点隐藏时间
     * @param holdDuration_1 节点第一阶段保持不动的时间(一般此时用来显示banner广告)
     * @param holdDuration_2 节点第二阶段保持不动的时间
     * @param moveDuration 节点移动时间(一般此时用来使按钮可被点击)
     * @param isTween 节点移动时是否缓动
     * @param offsetPos 节点开始显示时相对于节点出生点的位移，格式为{x:Number, y:Number}
     * @param cb 回调，每阶段都有相应的回调，如：cb("hide_finished"), cb("hold_finished_1"), cb("hold_finished_2"), cb("move_finished")
     */
    static autoMove(node:any, hideDuration:Number, holdDuration_1:Number, holdDuration_2:Number, moveDuration:Number, isTween:Boolean, offsetPos:any, cb:Function):void;

    /**
     * 改变指定节点（如果节点下存在名为mesh的节点则为mesh节点）的皮肤
     * @param mesh 指定节点
     * @param texturePath 需要更换的皮肤地址
     */
    static changeSkin(mesh:any, texturePath:String):void;

    /**
     * 改变指定节点（如果节点下存在名为mesh的节点则为mesh节点）的颜色
     * @param mesh 指定节点
     * @param R 颜色值R
     * @param G 颜色值G
     * @param B 颜色值B
     */
    static changeColor(mesh:any, R:Number, G:Number, B:Number):void;

    /**
     * 缓动变化摄像机的视野，位置，角度
     * @param camera 摄像机
     * @param duration 缓动时间
     * @param isLocal 是否是改变局部视野，位置，角度
     * @param start 起始信息{position:Vector3, rotationEuler:Vector3, fieldOfView:Number}
     * @param end 结束信息{position:Vector3, rotationEuler:Vector3, fieldOfView:Number}
     * @param disableEffects 是否强制不改变某个坐标{posX:Boolean, posY:Boolean, posZ:Boolean}
     * @param cb 缓动完成回调
     */
    static tweenMoveCamera(camera:any, duration:Number, isLocal:Boolean, start:any, end:any, disableEffects:any, cb:Function):void;

    /**
     * 获得起止坐标中的某个坐标
     * @param fromPos 起始坐标
     * @param endPos 起始坐标
     * @param progress 进度，0-1
     * @returns 新节点
     */
    static getMidVec3(fromPos:any, endPos:any, progress:Number):any;

    /**
     * 将世界坐标转化为OpenGL坐标（2D）
     * @param worldPt 世界坐标
     * @param worldPt.x X轴世界坐标
     * @param worldPt.y y轴世界坐标
     * @returns OpenGL坐标
     */
    static convertToOpenGLPt(worldPt:any):any;

    /**
     * 将世界Size转化为OpenGL的Size（2D）
     * @param worldSize 世界Size
     * @param worldSize.width 世界Size的宽度
     * @param worldSize.height 世界Size的高度
     * @returns OpenGL的Size
     */
    static convertToOpenGLSize(worldSize:any):any;

    /**
     * 将OpenGL坐标转化为世界坐标（2D）
     * @param openGLPt OpenGL坐标
     * @param openGLPt.x X轴OpenGL坐标
     * @param openGLPt.y y轴OpenGL坐标
     * @returns OpenGL坐标
     */
    static convertToWorldPt(openGLPt:any):any;

    /**
     * 将OpenGL的Size转化为世界Size（2D）
     * @param openGLSize OpenGLSize
     * @param openGLSize.width OpenGLSize的宽度
     * @param openGLSize.height OpenGLSize的高度
     * @returns OpenGL的Size
     */
    static convertToWorldSize(openGLSize:any):any;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_UIHelper) ****/
}

/**
 * 数据中心
 */
declare class G_GameDB {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 注册，框架会自动注册，在G_GameDBConfigs变量中按规则填写
     * @param configs 全局G_GameDBConfigs变量
     */
    static registerAll(configs:any):void;

    /**
     * 监听数据加载完成回调
     * @param loadCb 回调
     */
    static onLoad(loadCb:Function):void;

    /**
     * 通过全局枚举变量BaseConfigIDs的枚举值获取指定的配置信息
     * @param id ID
     */
    static getBaseConfigByID(id:any):any;

    /**
     * 通过所有的配置信息
     */
    static getAllBaseConfigs():any;

    /**
     * 通过全局枚举变量UIWordIDs的枚举值获取指定的文本信息
     * @param id ID
     */
    static getUIWordByID(id:any):any;

    /**
     * 通过所有的文本信息
     */
    static getAllUIWords():any;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_GameDB) ****/
}

/**
 * 平台帮助
 */
declare class G_PlatHelper {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
	 * 重启游戏，Cocos平台支持，Laya平台为退出游戏功能
	 */
    static restartApp():void;
    
    /**
	 * 退出游戏
	 */
    static exitApp():void;
    
    /**
	 * 获取平台sdk
	 */
	static getPlat():any

	/**
	 * 获取平台类型
	 */
	static getPlatType():String;

	/**
	 * 获取平台描述
	 */
	static getPlatDesc():String;

    /**
	 * 当前平添是否能远程登录（从后台拉取存储数据）
	 */
    static canLoginOnline():Boolean;

    /**
	 * 显示模态对话框
     * @param title 对话框标题
     * @param content 对话框内容
     * @param showCancel 是否显示取消选项
     * @param cb 回调 cb(true) 点击确认 cb(false) 点击取消
     * @param custom 定制(支持cancelText, cancelColor, confirmText, confirmColor)
	 */
	static showModal(title:String, content:String, showCancel:Boolean, cb?:Function, custom?:any):void;
    
    /**
	 * 显示提示框
	 * @param title 提示框内容
	 * @param icon 只微信平添支持"success", "loading", "none"三种模式，默认为"none"
	 */
	static showToast(title:String, icon?:String):void;

	/**
	 * 隐藏提示框
	 */
    static hideToast():void;

    /**
	 * 显示loading提示框
	 * @param title 提示框内容
	 */
	static showLoading(title:String):void;

	/**
	 * 隐藏loading提示框
	 */
    static hideLoading():void;

    /**
	 * 获取系统信息
	 */
    static getSysInfo():any;

    /**
	 * 获取平台sdk版本
	 */
    static getSDKVersion():any;

    /**
	 * 判断当前是否为iPhoneX(S/R)机型
	 */
    static isIPhoneX():Boolean;
    
    /**
	 * 手机震动
	 * @param bLong 长/短
	 */
    static vibratePhone(bLong:Boolean):void;

    /**
	 * 生成桌面图标(OV平台适用)
	 */
    static installShortcut(succCb?:Function):void;
    
    /**
	 * 展示更多游戏弹出窗(TT平台适用)
	 */
    static showMoreGamesModal(closeCb?:Function, succCb?:Function, failCb?:Function):void;
    
    /**
	 * 开始录像(TT平台适用)
	 */
    static startRecord():void;
    
    /**
	 * 结束录像(TT平台适用)
	 */
    static stopRecord():void;
    
    /**
	 * 获取录像存储地址(TT平台适用)
	 */
    static getSavedVideoPath():String;
    
    /**
	 * 打开客服对话框，微信平台支持
	 * @param showCard 是否显示默认分享卡片，需配置G_ShareScene.SS_CUSTOMER_SERVER分享信息
	 */
    static openCustomerService(showCard:Boolean, cb?:Function):void;

    /**
	 * 存储本地数据
	 * @param key 键名(全局唯一)，不能为空
	 * @param data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象
	 */
    static setStorage(key:String, data):void;
    
    /**
	 * 获取本地数据
	 * @param key 键名(全局唯一)，不能为空
     * @param def 不存在时的默认值
	 */
	static getStorage(key:String, def?:any):any;
    
    /**
	 * 清除本地数据
	 * @param key 键名(全局唯一)，不能为空
	 */
    static clearStorage(key:String):void;

    /**
	 * 是否Windows平台
	 */
    static isWINPlatform():Boolean;
    
    /**
	 * 是否微信平台
	 */
    static isWXPlatform():Boolean;

    /**
	 * 是否QQ平台
	 */
	static isQQPlatform():Boolean;

    /**
	 * 是否OPPO平台
	 */
	static isOPPOPlatform():Boolean;

    /**
	 * 是否VIVO平台
	 */
	static isVIVOPlatform():Boolean;

    /**
	 * 是否OPPO或VIVO平台
	 */
	static isOVPlatform():Boolean;

    /**
	 * 是否头条平台
	 */
    static isTTPlatform():Boolean;

    /**
	 * 是否趣头条平台
	 */
    static isQTTPlatform():Boolean;

    /**
	 * 是否魅族平台
	 */
    static isMZPlatform():Boolean;

    /**
	 * 是否华为平台
	 */
    static isHWPlatform():Boolean;

    /**
	 * 是否原生平台
	 */
    static isNativePlatform():Boolean;

    /**
	 * 是否安卓原生平台
	 */
    static isAndroidNativePlatform():Boolean;

    /**
	 * 是否IOS原生平台
	 */
    static isIOSNativePlatform():Boolean;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_PlatHelper) ****/
}

/**
 * 分享帮助
 */
declare class G_Share {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
	 * 当前平台是否支持分享
	 */
    static isSupport():Boolean;

    /**
	 * 当前是否正在分享
	 */
    static isSharing():Boolean;

    /**
	 * 分享
	 * @param {String} scene_name 场景名，必须属于G_ShareScene
	 * @param {Object} customQueryObj 自定义参数
	 * @param {Boolean} showFailTips 是否显示失败提示，默认true
	 * @param {Function} cb 回调函数
	 */
	static share(scene_name:String, customQueryObj:Object, showFailTips?:Boolean, cb?:Function):void;
    
    /**
	 * 分享视频（TT平台支持）
	 * @param {String} scene_name 场景名，必须属于G_ShareScene
	 * @param {String} videoPath 视频地址
	 * @param {Object} customQueryObj 自定义参数
	 * @param {Boolean} showFailTips 是否显示失败提示，默认true
	 * @param {Function} cb 回调函数
	 */
    static shareVideo(scene_name:String, videoPath:String, customQueryObj:Object, showFailTips?:Boolean, cb?:Function):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Share) ****/
}

/**
 * 广告帮助
 */
declare class G_Adv {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
	 * 当前是否支持Banner广告
     */
    static isSupportBannerAd():Boolean;

    /**
	 * 当前是否支持Video广告
     */
    static isSupportVideoAd():Boolean;

    /**
	 * 当前是否支持Interstitial广告
     */
    static isSupportInterstitialAd():Boolean;

    /**
	 * 当前是否正在观看视频广告
     */
    static isWatchingVideoAdv():Boolean;

    /**
	 * 创建盒子广告（仅QQ平台支持）
     * @param closeCb 关闭回调函数
     * 
     * @returns 失败为null，成功为盒子广告对象
     */
    static createBoxAdv(closeCb?:Function):any;

    /**
	 * 添加彩签（仅QQ平台支持）
     */
    static addColorSign():void;

    /**
	 * 创建积木盒子广告并显示（仅QQ平台支持）
     * Tips: 积木盒子广告，靠左靠上不能顶着屏幕边接显示
     * @param align 布局配置，为一个字段，其中
     * 字段layout为布局方式(left:靠左，leftCenter:靠左居中，right:靠右，rightCenter:靠右居中，top:靠上居中，bottom:靠下居中, center:居中对齐)
     * 字段top为距离屏幕顶部的距离（非像素），仅当layout为left或right有效
     * 字段hor为距离中心水平方向的偏移（非像素），仅当center有效
     * 字段vel为距离中心竖直方向的偏移（非像素），仅当center有效
     * @param size 积木盒子广告数量，默认为1
     * @param orientation 积木盒子广告展示方向，landscape为横向，vertical为纵向
     * @param loadCb 加载完成回调函数
     * @param errCb 错误回调函数
     * 
     * @returns 失败为null，成功为积木盒子广告对象
     */
    static createBlockAd(align:Object, size?:Number, orientation?:String, loadCb?:Function, errCb?:Function):any;

    /**
	 * 销毁积木盒子广告（仅QQ平台支持）
     * @param blockAdObj 需要销毁的盒子广告对象
     */
    static destoryBlockAd(blockAdObj:any):void;

    /**
	 * 销毁所有的积木盒子广告（仅QQ平台支持）
     */
    static destroyAllBlockAds():void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Adv) ****/
}

/**
 * OV平台广告帮助
 */
declare class G_OVAdv {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
	 * 当前是否支持Banner广告
     */
    static isSupportBanner():Boolean;

    /**
	 * 当前是否支持Video广告
     */
    static isSupportVideo():Boolean;

    /**
	 * 当前是否支持Insert广告
     */
    static isSupportInsert():Boolean;

    /**
	 * 当前是否支持Native广告
     */
    static isSupportNative():Boolean;

    /**
	 * 当前是否正在观看视频广告
     */
    static isWatchingVideoAdv():Boolean;

    /**
	 * 获取下个展示的Native广告信息
     * 
     * @returns [0: Native广告对象, 1:Native广告数据]
     */
    static getNextNativeAdInfo():Array<any>;

    /**
	 * 上报显示Native广告
     * @param adObj Native广告对象
     * @param adID Native广告ID
     */
    static reportNativeAdShow(adObj:any, adID:String):void;

    /**
	 * 上报关闭Native广告
     * 会自动拉取更多的Native广告
     */
    static reportNativeAdHide():void;

    /**
	 * 上报点击Native广告
     * @param adObj Native广告对象
     * @param adID Native广告ID
     */
    static reportNativeAdClick(adObj:any, adID:String):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_OVAdv) ****/
}

/**
 * 开放域帮助（暂只支持微信平台）
 */
declare class G_OpenHelper {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
	 * 当前是否支持
     */
    static isSupport():Boolean;

    /**
	 * 通知开放域做预加载操作
     * @param params 参数
     */
    static preload(params?:Object):void;

    /**
	 * 通知开放域做展示排行榜操作
     * @param params 参数
     */
    static showRank(params?:Object):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_OpenHelper) ****/
}

/**
 * 短连接访问帮助
 */
declare class G_HttpHelper {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 创建获取Json数据请求
     * @param url 请求地址
     * @param cb 回调函数
     */
    static getJson(url:String, cb:Function):void;

    /**
     * 创建发送Json数据请求
     * @param url 请求地址
     * @param jsonData 数据对象
     * @param cb 回调函数
     */
    static sendJson(url:String, jsonData:Object, cb:Function):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_HttpHelper) ****/
}

/**
 * 网络帮助
 */
declare class G_NetHelper {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 获取当前网络类型
     * @param cb 回调函数
     */
    static getNetType(cb:Function):void;

    /**
     * 当前是否有网络连接
     * @param cb 回调函数
     */
    static isConnected(cb:Function):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_NetHelper) ****/
}

/**
 * 推荐组件帮助
 */
declare class G_Recommend {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 是否支持游戏图标推荐组件
     */
    static isSupportGameIconAd():Boolean;

    /**
     * 创建游戏图标推荐组件
     * @param nodes 需要创建图标的节点位置
     * @param extendStyle 扩展风格，appNameHidden: 是否隐藏游戏名, color: 游戏名颜色, borderWidth: 边框宽度, borderColor: 变宽颜色
     * @param loadCb 加载完成回调
     * @param errCb 错误回调
     */
    static createGameIcon(nodes:any[], extendStyle?:Object, loadCb?:Function, errCb?:Function):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Recommend) ****/
}

/**
 * 上报帮助
 */
declare class G_Reportor {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 上报
     * @param eventName 上报事件名
     * @param jsonObj 上报参数
     */
    static report(eventName:String, jsonObj?:Object):void;

    /**
     * 关卡开始
     * @param levelID 关卡ID
     */
    static beginLevel(levelID:Number):void;

    /**
     * 关卡结束
     * @param levelID 关卡ID
     */
    static endLevel(levelID:Number):void;

    /**
     * 关卡失败
     * @param levelID 关卡ID
     */
    static failLevel(levelID:Number):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Reportor) ****/
}

/**
 * 开关帮助
 */
declare class G_Switch {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 获取提审版本，默认0
     * @param cb 回调函数
     */
    static getCommitVersion(cb:Function):void;

    /**
     * 是否正在提审，默认false
     * @param cb 回调函数
     */
    static isPublishing(cb:Function):void;

    /**
     * 是否新游戏，默认false
     * @param cb 回调函数
     */
    static isNewGame(cb:Function):void;

    /**
     * 是否广告状态正常，默认false
     * @param cb 回调函数（true：允许误触类广告出现，false：不允许误触类广告出现）
     */
    static isAdvStateNormal(cb:Function):void;

    /**
     * 获取位移类误触配置
     * 默认为按钮开始出现，1.5秒后出现底部banner，2秒后按钮上移，上移时间为0.3秒
     * @param cb 回调函数
     * @returns {hold1: 指定时间后出现banner, hold2: 出现banner后指定时间后开始上移, move: 按钮上移耗时}
     */
    static getMoveMistakeConfig(cb:Function):void;

    /**
     * 获取导出位移类误触配置
     * 默认进入导出页后1.5秒出现banner，banner停留0.5秒消失
     * @param cb 回调函数
     * @returns {delay: 指定时间后出现banner, stay: banner的停留时间}
     */
    static getExportMoveMistakeConfig(cb:Function):void;

    /**
     * 获取狂点类误触配置
     * 默认为进度条自动下降每次0.05，进度条点击增加0.175，最小触发进度条值为0.5，触发后最少点击1次，最多点击3次即触发误触
     * @param cb 回调函数
     * @returns {gap: 进度条自动下降间隔, miniMinus: 进度条每次自动最小下降, maxMinus: 进度条每次自动最大下降, add: 进度条点击增加, target: 最小触发进度条值, miniClick: 触发后最少点击次数, maxClick: 触发后最多点击次数, rate: 触发概率, duration: banner持续时间, firstShow: 是否开始显示banner}
     */
    static getClickMistakeConfig(cb:Function):void;

    /**
     * 获取按钮类误触配置
     * 默认按钮延迟3秒出现，出现后点击0.7秒显示banner，banner停留2秒消失
     * @param cb 回调函数
     * @returns {delay: 按钮延迟出现的时间，delay2: 点击多长时间出现banner, stay: banner的停留时间}
     */
    static getBtnMistakeConfig(cb:Function):void;

    /**
     * 获取游戏内banner状态配置
     * 默认每5秒出现一个banner，每个banner停留2秒
     * @param cb 回调函数
     * @returns {gap: banner间隔出现时间，show: banner的停留时间}
     */
    static getGamingBannerConfig(cb:Function):void;

    /**
     * 导出页是否自动打开
     * 默认否
     * @param cb 回调函数
     * @returns {Boolean}
     */
    static isExportAutoOpen(cb:Function):void;

    /**
     * 签到页是否自动打开
     * 默认否
     * @param cb 回调函数
     * @returns {Boolean}
     */
    static isSignAutoOpen(cb:Function):void;

    /**
     * 皮肤试用页是否自动打开
     * 默认否
     * @param cb 回调函数
     * @returns {Boolean}
     */
    static isTrySkinOpen(cb:Function):void;

    /**
     * 获取更多好玩页什么时候自动开启
     * 默认0
     * @param cb 回调函数
     * @returns {Number}
     */
    static getMoreGameOpenCfg(cb:Function):void;
    
    /**
     * 指定位置的导出商业广告是否可用，默认false
     * 全局变量G_ADCfg中指定变量不为空，才可用
     * @param key 位置标志
     * @param cb 回调函数
     */
    static isExportAdvEnabled(key:String, cb:Function):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Switch) ****/
}

/**
 * 免费领取管理
 */
declare class G_FreeGetMgr {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 获取下一次免费领取的方式
     * @param cb 回调函数
     */
    static getNextFreeGetWay(cb:Function):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_FreeGetMgr) ****/
}

/**
 * 对象池管理
 */
declare class G_NodePoolMgr {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 预加载资源
     * @param assets 需要预加载的资源列表
     * @param cb 回调函数
     */
    static preload(assets:String[], cb:Function):void;

    /**
     * 通过资源名获取资源
     * @param asset 资源名
     */
    static getNode(asset:String):any;

    /**
     * 通过资源名清除资源，清除后下次使用需先预加载
     * @param asset 资源名|资源名集
     */
    static clear(asset:String|[String]):void;

    /**
     * 清除所有资源
     */
    static clearAll():void;

    /**
     * 回收资源
     * @param node 需要回收的节点
     */
    static recycleNode(node:any):void;

    /**
     * 判断指定资源是否可被对象池回收
     * @param node 需要回收的节点
     */
    static canRecycle(node:any):Boolean;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_NodePoolMgr) ****/
}

/**
 * 音乐音效管理
 */
declare class G_SoundMgr {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 加载音效
     * @param url 音效地址
     * @param cb 加载完成回调
     */
    static loadSound(url:String, cb?:Function):void;

    /**
     * 播放声音
     * @param url 音效地址
     * @param loops 循环次数，默认1（0代表无限循环）
     */
    static playSound(url:String, loops?:Number):void;

    /**
     * 停止播放声音
     * @param url 音效地址
     */
    static stopSound(url:String):void;

    /**
     * 加载音乐
     * @param url 音乐地址
     * @param cb 加载完成回调
     */
    static loadMusic(url:String, cb?:Function):void;

    /**
     * 播放背景音乐
     * @param url 音乐地址
     * @param cb 播放完成回调
     * @param isLoop 是否循环播放，默认true
     */
    static playMusic(url:String, cb?:Function, isLoop?:Boolean):void;

    /**
     * 停止播放背景音乐
     * @param cb 停止完成回调
     */
    static stopMusic(cb?:Function):void;

    /**
     * 暂停播放背景音乐
     */
    static pauseMusic():void;

    /**
     * 恢复播放背景音乐
     */
    static resumeMusic():void;

    /**
     * 获取当前背景音效播放位置（单位秒）
     */
    static getCurMusicTime():Number;

    /**
     * 设置是否允许音效开启
     * @param isEnabled 是否允许
     */
    static setSoundEnable(isEnabled:Boolean):void;

    /**
     * 当前音效是否开启
     */
    static isSoundEnable():Boolean;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_SoundMgr) ****/
}

/**
 * 误触管理
 */
declare class G_MistakeMgr {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 是否允许展现狂点误触
     * @param cb 回调函数
     */
    static isClickMistakeEnabled(cb:Function):void;

    /**
     * 是否允许展现狂点误触
     * 同步版本
     * @returns 允许与否
     */
    static isClickMistakeEnabledAsync():Boolean;

    /**
     * 是否允许展现位移误触
     * @param cb 回调函数
     */
    static isMoveMistakeEnabled(cb:Function):void;

    /**
     * 是否允许展现位移误触
     * 同步版本
     * @returns 允许与否
     */
    static isMoveMistakeEnabledAsync():Boolean;

    /**
     * 是否允许展现按钮状态误触
     * @param cb 回调函数
     */
    static isBtnMistakeEnabled(cb:Function):void;

    /**
     * 是否允许展现按钮状态误触
     * 同步版本
     * @returns 允许与否
     */
    static isBtnMistakeEnabledAsync():Boolean;

    /**
     * 是否允许展现退出误触
     * @param cb 回调函数
     */
    static isExitMistakeEnabled(cb:Function):void;

    /**
     * 是否允许展现退出误触
     * 同步版本
     * @returns 允许与否
     */
    static isExitMistakeEnabledAsync():Boolean;

    /**
     * 是否允许展现开局误触
     * @param cb 回调函数
     */
    static isStartMistakeEnabled(cb:Function):void;

    /**
     * 是否允许展现开局误触
     * 同步版本
     * @returns 允许与否
     */
    static isStartMistakeEnabledAsync():Boolean;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_MistakeMgr) ****/
}

/**
 * UI管理
 */
declare class G_UIManager {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 注册UI的根节点，所有显示的UI都在此根节点以zOrder排序
     * @param root ui的根节点
     */
    static registerUIRoot(root:any):void;

    /**
     * 反注册UI的根节点
     */
    static unregisterUIRoot():void;

    /**
     * 显示指定的UI
     * @param key 指定UI的唯一标识符
     * @param closeCb 关闭回调函数
     * @param args 参数
     * 
     * @returns [0]为对应UI的节点，[1]为对应UI的管理类
     */
    static showUI( key:String, closeCb?:Function, ...args:any[]):Array<any>;

    /**
     * 隐藏指定的UI
     * @param key 指定UI的唯一标识符
     */
    static hideUI( key:String ):void;

    /**
     * 获得指定的UI
     * @param key 指定UI的唯一标识符
     * 
     * @returns [0]为对应UI的节点，[1]为对应UI的管理类
     */
    static getUI( key:String ):Array<any>;

    /**
     * 预加载UI
     * @param keys 所有需要加载的UI的key值
     * @param cb 回调函数
     */
    static preloadUI( keys:string[], cb?:Function ):void;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_UIManager) ****/
}

/**
 * 红包管理
 */
declare class G_RedPackageMgr {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 存钱到钱包
     * @param cb 存钱完成后回调 cb(bSucc, depositedMoney) 其中bSucc为是否成功，depositedMoney为已存入的金钱
     */
    static depositMoney( cb:Function ):void;

    /**
     * 从钱包取钱
     * @param money 要取出的金钱
     * @param cb 存钱完成后回调 cb(bSucc) 其中bSucc为是否成功
     */
    static withdrawMoney( money:Number, cb:Function ):void;

    /**
     * 提取每日奖金
     * @param cb 存钱完成后回调 cb(bSucc, withdrawedMoney) 其中bSucc为是否成功，withdrawedMoney为已存入的金钱
     */
    static withdrawEverydayMoney( cb:Function ):void;

    /**
     * 查询剩余的钱（红包内）
     */
    static getMoney():Number;

    /**
     * 查询领过的钱（从红包）
     */
    static getTotalWithdrawMoney():Number;

    /**
     * 查询取过几次钱（从红包）
     */
    static getTotalWithdrawMoneyTimes():Number;

    /**
     * 今天是否已经提取了每日现金
     */
    static isWithdrawEverydayMoneyToday():Number;

    /**
     * 获取提取每日现金需要的视频次数
     */
    static getNeedAdvTimesOfEverydayMoney():Number;

    /**
     * 获取所有提现选项
     */
    static getAllDepositOptions():[Number];
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_RedPackageMgr) ****/
}

/**
 * 订阅管理
 */
declare class G_Subscriber {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 是否支持一次性订阅
     */
    static isSupportOnce():Boolean;

    /**
     * 是否支持长期订阅
     */
    static isSupportForever():Boolean;

    /**
     * 请求订阅指定一次性消息（可同时订阅多个，最多3个，超过的自动舍弃）
     * @param keys 需要订阅的标识符
     * @param cb 返回结果回调
     */
    static reqSubscribeOnceMsgs(keys:String|[String], cb:Function):Boolean;

    /**
     * 请求订阅所有长期消息
     * @param cb 返回结果回调
     */
    static reqSubscribeAllForeverMsgs(cb:Function):Boolean;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_Subscriber) ****/
}

/**
 * 视频排行管理
 */
declare class G_VideoRankMgr {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 刷新过去已上报的视频信息（点赞数，封面图）
     */
    static refreshAndReport():void;

    /**
     * 上报视频
     * @param videoId 需上报的视频ID
     */
    static recordMyNewVideoId(videoId:String):void;

    /**
     * 获取所有的视频排行信息
     * @param cb 回调 cb(rankInfos) 其中rankInfos为数组，每个数据中videoId为视频ID，digg为点赞数，coverUrl为封面图地址
     */
    static getAllVideoRankInfo(cb:(rankInfos: any[]) => void):void;
    /**** 以上为框架相关，勿主动修改 ****/
}

/**
 * 资源管理器
 */
 declare class G_AssetMgr {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 判断某资源是否已下载
     * @param assetName 资源名
     */
    static isAssetDownloaded(assetName:String):Boolean;

    /**
     * 下载资源（支持下载一个或同时多个资源）
     * @param assetNames 资源名
     * @param progress 进度回调
     * @param completeCb 完成回调
     */
    static download(assetNames:String|[String], progressCb?:(progress: Number) => void, completeCb?:() => void):void;
    /**** 以上为框架相关，勿主动修改 ****/
}

/**
 * 服务器信息
 */
declare class G_PlayerInfo {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 主动上传到服务器
     */
    static save():void;

    /**
     * 主动上传到微信开放域
     */
    static saveToWX():void;

    /**
     * 获取玩家openID
     */
    static getOpenID():String;

    /**
     * 获取玩家sessID
     */
    static getSessID():String;

    /**
     * 获取玩家userID
     */
    static getUserID():String;

    /**
     * 获取玩家昵称
     */
    static getNickName():String;

    /**
     * 获取玩家头像地址
     */
    static getHeadUrl():String;

    /**
     * 是否是新玩家
     */
    static isNewPlayer():Boolean;

    /**
     * 是否被封号
     */
    static isBlocked():Boolean;

    /**
     * 获取封号原因
     */
    static getLockedReason():String;

    /**
     * 获取离线时长
     */
    static getOutlineTime():Number;

    /**
     * 设置是否允许音效开启
     */
    static setSoundEnable():Number;

    /**
     * 当前音效是否开启
     */
    static isSoundEnable():Boolean;

    /**
     * 设置是否允许震动开启
     * @param isEnabled 是否允许
     */
    static setMuteEnable(isEnabled:Boolean):void;

    /**
     * 当前震动是否开启
     */
    static isMuteEnable():Boolean;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_PlayerInfo) ****/
}

/**
 * 服务器信息
 */
declare class G_ServerInfo {
    /**** 以下为框架相关，勿主动修改 ****/
    /**
     * 重新拉取服务器时间
     * @param cb 回调函数
     */
    static reload(cb:Function):void;

    /**
     * 获取服务器时间（精确到毫秒）
     */
    static getServerTime():Number;

    /**
     * 获取服务器时间（Date格式）
     */
    static getServerDate():Date;

    /**
     * 获取服务器为星期几
     */
    static getCurServerDayOfWeek():Number;

    /**
     * 获取服务器为本月多少日
     */
    static getCurServerDayOfWeek():Number;

    /**
     * 获取服务器为本年多少日
     */
    static getCurServerDayOfYear():Number;

    /**
     * 获取服务器为本年多少周
     */
    static getCurServerWeekOfYear():Number;
    /**** 以上为框架相关，勿主动修改 ****/
    /**** placeholder of (G_ServerInfo) ****/
}

