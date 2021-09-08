
import DailyTaskMgr from "../../add/Mgr/DailyTaskMgr";
import Tools from "../../add/UIFrame/Tools";
import PlayerBaseInfo from "./player_base_info";

export class PlayerInfo extends PlayerBaseInfo {
	constructor() {
		super()

		this._coinBigNumber = null;
		this._totalCoinBigNumber = null;

		/**新的 */
		this.curSelectLevelId = 0;
		this._curMoney = 0;//当前金钱
		this._dianBigNumber = null;
		/**end */

		// log
		console.log("Init G_PlayerInfo Instance...")
	}

	onGeneratedNewPlayerInfo(playerInfo) {
		playerInfo.coin = G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_BORN_COIN_NUM"]).num.toString()
		playerInfo.totalCoin = playerInfo.coin;
		/**新 */
		playerInfo.levelID = G_levelID;
		playerInfo.continueLevel = 0;//连续通关数
		playerInfo.totalLevelCount = playerInfo.levelID;//总共通关关卡
		playerInfo.skinId = G_SkinId;
		playerInfo.diam = "0";
		playerInfo.curSginDay = 0;//当前已经签到的天数
		playerInfo.curSginWeekCount = 0;//当前已经签到了几个星期
		playerInfo.lastSginYear = "0&0";//上一次签到是多少 年&日
		playerInfo.lastGetPowerTime = Math.floor(G_ServerInfo.getServerTime() / 1000);
		playerInfo.power = G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_BORN_POWER_NUM"]).num;
		playerInfo.lastViewAdGetPowerTime = 0;//上一次重置获得体力看广告次数
		playerInfo.todayViewAdGetPowerTimes = 0;//今日看获得体力的次数
		playerInfo.todayViewAdGetDiamTimes = 0;//今日看视屏获得钻石的次数
		playerInfo.todayTurntableTimes = 0;//今日抽奖次数
		playerInfo.isShowSubscribeApp = 0;
		playerInfo.curDailyTaskId = G_CurDailySgin;
		playerInfo.curMoney = G_InitMoney;//当前金钱
		playerInfo.dailTaskSgin = G_CurDailySgin;//任务的sgin(不是一样的sgin会重置任务)
		playerInfo.dailTaskTLevel = 0;//任务开始通关数
		playerInfo.loginDays = 0;//任务开始累积登陆天数
		playerInfo.curGetRedTimers = 0;//今天获得红包的次数
		playerInfo.lastGetRedTimers = 0;//上一次获得红包的时间戳
		playerInfo.dailyTaskBeginTime = Math.floor(G_ServerInfo.getServerTime() / 1000);//活动开始时间
		playerInfo.todayDiamGetPowerTimes = 0;//今日钻石获得体力次数
		playerInfo.todayShowInsertAdCount = 0;//单日显示插屏次数
		playerInfo.isShowTeach = 1;//是否显示教程
		playerInfo.getAdGoldTimes = 0;
		playerInfo.sex = 0;
		playerInfo.lastLevelId=1;
		playerInfo.beeSpeedLv=1;
		playerInfo.containLv=1;
		playerInfo.hurtLv=1;
		/**end */

	}

	onInitAfterGetPlayerInfo() {
		// coin
		this._loadCoin();
		this._loadTotalCoin();
		this._loadLevelId();
		this._loadMoney();
		this.loadSkin();
		this.resetGetPowerAdTimes();
		this.loadDiam();
		if (this._playerInfo.taskLine.length == 0) {
			DailyTaskMgr.getIns().initTaskLine();
		}
		DailyTaskMgr.getIns().setTaskLine(this._playerInfo.taskLine);

		if(this.getCurLevelId()>1){
			this.setBackHomeOpen();
			this.setSpeedOpen();
			this.setStrongeOpen();
		}
	}

	

	initProp(playerProp) {
		playerProp.hpLv = 1;
		playerProp.defLv = 1;
		playerProp.hurtLv = 1;
		playerProp.speedLv = 1;
	}


	onFixOptionalDataInPlayerInfo() {
		let isNeedSave = false
		let _playerInfo = this._playerInfo;
		if (_playerInfo) {



			if (_playerInfo.levelID === null || _playerInfo.levelID === 0) {
				_playerInfo.levelID = G_levelID;
				isNeedSave = true
			}

			if (_playerInfo.totalLevelCount == null || _playerInfo.totalLevelCount == 0) {
				_playerInfo.totalLevelCount = _playerInfo.levelID;
				isNeedSave = true;
			}

			if (_playerInfo.continueLevel == null) {
				_playerInfo.continueLevel = 0;
				isNeedSave = true;
			}




			if (_playerInfo.skinId === null || _playerInfo.skinId == 0) {
				_playerInfo.skinId = G_SkinId;
				isNeedSave = true
			}



			if (_playerInfo.diam == null) {
				_playerInfo.diam = "0";
				isNeedSave = true;
			}

			if (_playerInfo.curSginDay == null) {
				_playerInfo.curSginDay = 0;
				isNeedSave = true;
			}

			if (_playerInfo.curSginWeekCount == null) {
				_playerInfo.curSginWeekCount = 0;
				isNeedSave = true;
			}

			if (_playerInfo.lastSginYear == null) {
				_playerInfo.lastSginYear = "0&0";
				isNeedSave = true;
			}

			if (_playerInfo.power === null) {
				_playerInfo.power = G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_BORN_POWER_NUM"]).num;
				isNeedSave = true
			}

			if (_playerInfo.lastGetPowerTime === null) {
				_playerInfo.lastGetPowerTime = Math.floor(G_ServerInfo.getServerTime() / 1000);
				isNeedSave = true
			}

			if (_playerInfo.lastViewAdGetPowerTime == null) {
				_playerInfo.lastViewAdGetPowerTime = 0;
				isNeedSave = true;
			}

			if (_playerInfo.todayViewAdGetPowerTimes == null) {
				_playerInfo.todayViewAdGetPowerTimes = 0;
				isNeedSave = true;
			}

			if (_playerInfo.todayTurntableTimes == null) {
				_playerInfo.todayTurntableTimes = 0;
				isNeedSave = true;
			}

			if (_playerInfo.todayViewAdGetDiamTimes == null) {
				_playerInfo.todayViewAdGetDiamTimes = 0;
				isNeedSave = true;
			}

			if (_playerInfo.todayDiamGetPowerTimes == null) {
				_playerInfo.todayDiamGetPowerTimes = 0;
				isNeedSave = true;
			}

			if (_playerInfo.isShowSubscribeApp == null) {
				_playerInfo.isShowSubscribeApp = 0;
				isNeedSave = true;
			}

			if (_playerInfo.curDailyTaskId == null || _playerInfo.curDailyTaskId == 0) {
				_playerInfo.curDailyTaskId = G_CurDailySgin;
				isNeedSave = true;
			}

			if (_playerInfo.curMoney == null || _playerInfo.curMoney == "") {
				_playerInfo.curMoney = G_InitMoney;
				isNeedSave = true;
			}

			if (_playerInfo.dailTaskSgin == null) {
				_playerInfo.dailTaskSgin = G_CurDailySgin;
				isNeedSave = true;
			}

			if (_playerInfo.dailTaskTLevel == null) {
				_playerInfo.dailTaskTLevel = 0;
				isNeedSave = true;
			}

			if (_playerInfo.loginDays == null) {
				_playerInfo.loginDays = 0;
				isNeedSave = true;
			}

			if (_playerInfo.curGetRedTimers == null) {
				_playerInfo.curGetRedTimers = 0;
				isNeedSave = true;
			}

			if (_playerInfo.lastGetRedTimers == null) {
				_playerInfo.lastGetRedTimers = 0;
				isNeedSave = true;
			}

			if (_playerInfo.dailyTaskBeginTime == null || _playerInfo.dailyTaskBeginTime == 0) {
				_playerInfo.dailyTaskBeginTime = Math.floor(G_ServerInfo.getServerTime() / 1000);
				isNeedSave = true;
			}

			if (_playerInfo.todayShowInsertAdCount == null) {
				_playerInfo.todayShowInsertAdCount = 0;
				isNeedSave = true;
			}



			if (_playerInfo.isShowTeach == null) {
				_playerInfo.isShowTeach = 1;
				isNeedSave = true;
			}

			if(_playerInfo.lastLevelId==0){
				_playerInfo.lastLevelId=1;
				isNeedSave=true;
			}

			if(_playerInfo.containLv==0){
				_playerInfo.containLv=1;
				isNeedSave=true;
			}

			if(_playerInfo.beeSpeedLv==0){
				_playerInfo.beeSpeedLv=1;
				isNeedSave=true;
			}

			if(_playerInfo.hurtLv==0){
				_playerInfo.hurtLv=1;
				isNeedSave=true;
			}
		}



		return isNeedSave
	}

	onFillSaveToWXData(selfInfo) {
		if (this._playerInfo) {
			selfInfo.totalCoin = this._playerInfo.totalCoin
		}


	}

	// 获取玩家金币数
	// 返回类型BigNumber
	getCoin() {
		// body...
		return this._coinBigNumber
	}

	// 获取玩家总金币数
	// 返回类型BigNumber
	getTotalCoin() {
		// body...
		return this._totalCoinBigNumber
	}

	// 增加玩家金币数
	// num必须是number类型或BigNumber类型
	plusCoin(num) {
		// body...
		if (!this._coinBigNumber || !this._totalCoinBigNumber) {
			console.error("PlayerInfo.plusCoin: can not operation coin data before login...")
			return
		}

		if (typeof num !== "number" && !BigNumber.isBigNumber(num)) {
			console.error("PlayerInfo.plusCoin: param num must be a type of number or BigNumber...")
			return
		}

		this._coinBigNumber = this._coinBigNumber.plus(num)
		this._totalCoinBigNumber = this._totalCoinBigNumber.plus(num)
		this._saveTotalCoin()
		this._saveCoin()
	}

	// 减少玩家金币数
	// num必须是number类型或BigNumber类型
	minusCoin(num) {
		// body...
		if (!this._coinBigNumber) {
			console.error("PlayerInfo.minusCoin: can not operation coin data before login...")
			return
		}

		if (typeof num !== "number" && !BigNumber.isBigNumber(num)) {
			console.error("PlayerInfo.minusCoin: param num must be a type of number or BigNumber...")
			return
		}

		this._coinBigNumber = this._coinBigNumber.minus(num)
		this._saveCoin()
	}

	_loadCoin() {


		if (this._playerInfo) {
			if (isNaN(this._playerInfo.coin)) {
				this._playerInfo.coin = "0";
			}

			if (isNaN(this._playerInfo.totalCoin)) {
				this._playerInfo.totalCoin = "0";
			}
		}

		// body...
		if (this._playerInfo && !this._coinBigNumber) {
			this._coinBigNumber = BigNumber(this._playerInfo.coin)
		}
	}

	_saveCoin() {
		// body...
		if (this._playerInfo && this._coinBigNumber) {
			this._playerInfo.coin = this._coinBigNumber.toFixed(0)
			this._serializePlayerInfoIntoLocal()
		}

		// event
		G_Event.dispatchEvent(G_EventName.EN_COIN_CHANGED)
	}

	_loadTotalCoin() {
		// body...
		if (this._playerInfo && !this._totalCoinBigNumber) {
			this._totalCoinBigNumber = BigNumber(this._playerInfo.totalCoin)
		}
	}

	_saveTotalCoin() {
		// body...
		if (this._playerInfo && this._totalCoinBigNumber) {
			this._playerInfo.totalCoin = this._totalCoinBigNumber.toFixed(0)
		}
	}

	/***新加 */
	_loadLevelId() {
		let _playerInfo = this._playerInfo;
		if (_playerInfo) {
			let count = G_GameDB.getAllLevelConfigCount();
			let isLoop = (this._playerInfo.totalLevelCount >= count);
			this.curSelectLevelId = this._playerInfo.totalLevelCount % count;//回到第一关(全部通关回到第一关)
			if (this.curSelectLevelId == 0) {
				this.curSelectLevelId = 1;
			}

			if (isLoop) {
				// if(this.curSelectLevelId==1||this.curSelectLevelId==2){//1 2关不循环
				// 	this.curSelectLevelId=3;
				// }
			}
		}
	}

	_loadMoney() {
		let _playerInfo = this._playerInfo;
		if (_playerInfo) {

			if (!Tools.getIns().isString(_playerInfo.curMoney) || _playerInfo.curMoney == NaN) {
				_playerInfo.curMoney = G_InitMoney;
			}

			this._curMoney = parseFloat(_playerInfo.curMoney);
		}
	}

	_loadDailyTaskData() {
		let _playerInfo = this._playerInfo;
		if (_playerInfo) {
			if (_playerInfo.dailTaskSgin != G_CurDailySgin) {
				_playerInfo.dailTaskSgin = G_CurDailySgin;
				_playerInfo.curMoney = G_InitMoney;
				_playerInfo.dailTaskTLevel = 0;
				_playerInfo.curDailyTaskId = G_CurDailySgin;
				_playerInfo.dailyTaskBeginTime = Math.floor(G_ServerInfo.getServerTime() / 1000);
			}
		}
	}




	resetGetPowerAdTimes() {
		let _playerInfo = this._playerInfo;
		let day = G_ServerInfo.getCurServerDayOfYear();
		if (day != _playerInfo.lastViewAdGetPowerTime) {
			_playerInfo.lastViewAdGetPowerTime = day;
			_playerInfo.todayViewAdGetPowerTimes = 0;
			_playerInfo.todayViewAdGetDiamTimes = 0;
			_playerInfo.todayDiamGetPowerTimes = 0;
			_playerInfo.todayTurntableTimes = 0;
			_playerInfo.isShowSubscribeApp = 0;
			_playerInfo.loginDays++;
			_playerInfo.curGetRedTimers = 0;
			_playerInfo.lastGetRedTimers = 0;
			_playerInfo.getAdGoldTimes = 0;
			_playerInfo.todayShowInsertAdCount = 0;
			_playerInfo.viewAdTenLuck=0;
			this.clearTask();
			DailyTaskMgr.getIns().initTaskLine();
			this._serializePlayerInfoIntoLocal();
		}
	}

	/**
	* 加载皮肤
	*/
	loadSkin() {
		//第一个皮肤设置为拥有
		let skinData = this.getSkinDataById(G_SkinId);
		skinData.isOwner = 1;
		this._serializePlayerInfoIntoLocal();
	}

	/**
	 * 获得皮肤数据
	 * @param {*} id 
	 * @returns 
	 */
	getSkinDataById(skinId) {
		let skinData = null;
		let skinArray = this._playerInfo.ownSkinDetail;
		for (let i = 0; i < skinArray.length; i++) {
			if (skinId == skinArray[i].id) {
				skinData = skinArray[i];
				break;
			}
		}

		if (!skinData) {
			skinData = this.createSkinData(skinId);
			skinArray.push(skinData);
			this._serializePlayerInfoIntoLocal();
		}

		return skinData;
	}

	/**
	 * 创建一份皮肤数据
	 * @returns 
	 */
	createSkinData(skinId){
		let skinData = new db["SkinData"];
		skinData.playerProp = new db["PlayerProp"];
		this.initProp(skinData.playerProp);
		this.setSkinData(skinData, skinId);
		return skinData;
	}

	setSkinData(skinData, skinId) {
		skinData.id = skinId;
	}

	addSkinChipById(skinId, count) {
		let skinData = this.getSkinDataById(skinId);
		skinData.skinChip += count;
		this._serializePlayerInfoIntoLocal();
	}

	getSkinChipById(skinId) {
		let skinData = this.getSkinDataById(skinId);
		return skinData.skinChip
	}

	useSkinChip(skinId, count) {
		let skinData = this.getSkinDataById(skinId);
		if (skinData.skinChip >= count) {
			skinData.skinChip -= count;
			this._serializePlayerInfoIntoLocal();
		}

	}

	upSkinStarById(skinId) {
		let skinData = this.getSkinDataById(skinId);
		if (skinData.star < G_MaxStar) {
			skinData.star += 1;
			this._serializePlayerInfoIntoLocal();
		}

	}

	/**
	 * 合成皮肤
	 * @param {*} skinId 
	 */
	combineSkin(skinId) {
		let needCount = G_GameDB.getPlayerConfigByID(skinId).combineChip;
		this.useSkinChip(skinId, needCount);
	}


	/**
	 * 是否可以合成皮肤
	 * @param {*} skinId 
	 * @returns 
	 */
	canCombineSkinById(skinId) {
		let needCount = G_GameDB.getPlayerConfigByID(skinId);
		let skinData = this.getSkinDataById(skinId);
		return skinData.skinChip >= needCount

	}

	hasSkinById(skinId) {
		return this.getSkinDataById(skinId).isOwner == 1;
	}

	setCurSelectSkinId(skinId) {
		this._playerInfo.skinId = skinId;
		this._serializePlayerInfoIntoLocal();
	}

	/**
	 * 添加皮肤
	 * @param {*} skinId 
	 */
	addSkin(skinId) {
		let skinData = this.getSkinDataById(skinId);
		skinData.isOwner = 1;
	}

	getCurLevelId() {//当在通关的关卡
		return this.curSelectLevelId;
	}

	getCurThoungLevelId() {//当前在通关的关卡

		let lid = this._playerInfo.levelID + 1;
		let levelInfo = G_GameDB.getLevelConfigByID(lid);//判断是不是最后一关
		if (!levelInfo) {
			lid--;
		}

		return lid;
	}

	/**
	 * 当前已经通关的关卡
	 */
	getLevelID() {
		return this._playerInfo.levelID;
	}

	/**
	 * 拿到显示的关卡
	 */
	getShowLevelCount() {
		if (this._playerInfo.totalLevelCount == 0) {
			this._playerInfo.totalLevelCount = this.curSelectLevelId;
			this._serializePlayerInfoIntoLocal();
		}
		return this._playerInfo.totalLevelCount;
	}

	setToNextLevelID() {

		if (this.curSelectLevelId > this._playerInfo.levelID) {//保存通关的关卡
			this._playerInfo.levelID = this.curSelectLevelId;
		}

		this.curSelectLevelId++;
		this._playerInfo.totalLevelCount++;
		let levelInfo = G_GameDB.getLevelConfigByID(this.curSelectLevelId);//判断是不是最后一关
		if (!levelInfo) {
			let count = G_GameDB.getAllLevelConfigCount();
			let isLoop = this._playerInfo.totalLevelCount >= count;
			this.curSelectLevelId = this._playerInfo.totalLevelCount % count;//回到第一关(全部通关回到第一关)

			if (this.curSelectLevelId == 0) {
				this.curSelectLevelId = 1;
			}

			if (isLoop) {

				// if(this.curSelectLevelId==1||this.curSelectLevelId==2){//1 2关不循环
				// 	this.curSelectLevelId=3;
				// }
			}
		}
		this._serializePlayerInfoIntoLocal();

	}



	setLevelIndex(index) {
		this.curSelectLevelId = index;
	}


	/**
	 * 获得连续通关数
	 */
	getContinueLevelCount() {

		let num = this._playerInfo.continueLevel - 1;

		return Math.max(0, num);
	}

	/**
	 * 添加连续通关数
	 * @param {*} num 
	 */
	addContinueLevel(num) {
		this._playerInfo.continueLevel += num;
		this._serializePlayerInfoIntoLocal();
	}

	resetContinueLevel() {
		this._playerInfo.continueLevel = 0;
		this._serializePlayerInfoIntoLocal();
	}

	setTeachId(teachId) {
		this._playerInfo.teachId = teachId;
		this._serializePlayerInfoIntoLocal();
	}

	getCurTeachId() {
		return this._playerInfo.teachId;
	}

	/**
	 * 拿到皮肤id
	 */
	getSkinId() {
		return this._playerInfo.skinId;
	}





	loadDiam() {
		if (this._playerInfo) {
			if (isNaN(this._playerInfo.diam)) {
				this._playerInfo.diam = "0";
			}
		}

		// body...
		if (this._playerInfo && !this._dianBigNumber) {
			this._dianBigNumber = BigNumber(this._playerInfo.diam)
		}
	}

	/**
	 * 改变钻石数量
	 * @param {*} num 
	 */
	changeDiam(num, isAdd) {

		// body...
		if (!this._dianBigNumber) {
			console.error("PlayerInfo._dianBigNumber: can not operation coin data before login...")
			return
		}

		if (typeof num !== "number" && !BigNumber.isBigNumber(num)) {
			console.error("PlayerInfo.plusCoin: param num must be a type of number or BigNumber...")
			return
		}

		if (isAdd) {
			this._dianBigNumber = this._dianBigNumber.plus(num);
		} else {
			this._dianBigNumber = this._dianBigNumber.minus(num);
		}

		this.saveDiam();
		G_Event.dispatchEvent(G_EventName.EN_DIAM_CHANGE);
	}

	saveDiam() {
		if (this._playerInfo && this._dianBigNumber) {
			this._playerInfo.diam = this._dianBigNumber.toFixed(0)
			this._serializePlayerInfoIntoLocal()
		}
	}

	/**
	 * 拿到钻石数量
	 */
	getDiamCount() {
		return this._dianBigNumber;
	}

	/**获取已经签到的天数
	 */
	getSginDayCount() {

		if (this._playerInfo.curSginDay == 7) {//签到完七天
			if (!this.hasSginByDay()) {//今天没有签到
				this._playerInfo.curSginDay = 0;//重置回去
				this._serializePlayerInfoIntoLocal();
			}
		}

		return this._playerInfo.curSginDay;
	}

	/**
	 * 今天是否签到
	 */
	hasSginByDay() {

		let temp = this._playerInfo.lastSginYear.split('&');
		let lastYear = parseInt(temp[0]);
		let lastDay = parseInt(temp[1]);

		let year = G_ServerInfo.getServerDate().getFullYear();
		let day = G_ServerInfo.getCurServerDayOfYear();

		if (year == lastYear && day == lastDay) {//同一年的同一天
			return true;
		}

		return false;
	}

	/**
	 * 添加物品 1钻石 2 皮肤碎片 3金币 4皮肤 5 体力
	 * @param {*} type 
	 * @param {*} count 
	 */
	addItemByType(type, count, id) {
		if (type == 1) {//钻石
			this.changeDiam(count, true);
		} else if (type == 2) {//人物碎片
			this.addSkinChipById(id, count);
		} else if (type == 3) {//金币
			this.plusCoin(count);
		} else if (type == 4) {//人物皮肤
			this.addSkin(id);
		} else if (type == 5) {//体力
			this.addPower(count, false);
		} else if (type == 6) {//体力上限
			this.addExtraPowerCount(count);
		}
	}

	/**
	 * 拿到下一次签到的天数
	 */
	getNextSginDay() {
		let day = this._playerInfo.curSginDay;
		day++;
		if (day > 7) {
			day = day % 7;
		}

		return day;
	}

	/**
	 * 标记今天已经签到
	 */
	markSginToday() {
		let year = G_ServerInfo.getServerDate().getFullYear();
		let day = G_ServerInfo.getCurServerDayOfYear();

		this._playerInfo.lastSginYear = year + "&" + day;

		this._playerInfo.curSginDay++;

		if (this._playerInfo.curSginDay == 7) {//签到完第七天 签到周数加一
			this._playerInfo.curSginWeekCount++;
		}

		if (this._playerInfo.curSginDay > 7) {//签到七天之后 重置
			this._playerInfo.curSginDay = this._playerInfo.curSginDay % 7;
		}

		this._serializePlayerInfoIntoLocal();
	}

	/**
	 * 重置签到
	 */
	resetSginDay() {
		this._playerInfo.lastSginYear = "0&0";
	}

	/**
	 * 拿到签到总周数
	 */
	getSginWeekCount() {

		if (this._playerInfo.curSginDay == 7 && this.hasSginByDay()) {//今天是星期天 并且已经签到 签到天数减一
			let count = this._playerInfo.curSginWeekCount--;
			if (count < 0) {
				count = 0;
			}

			return count;
		} else {
			return this._playerInfo.curSginWeekCount;
		}
	}


	getPower() {
		if (this._playerInfo) {
			return this._playerInfo.power
		}
		else {
			return 0
		}
	}

	usePower(num) {
		if (this._playerInfo) {
			let maxPower = G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_MAX_POWER_NUM"]).num
			if (this._playerInfo.power === maxPower) {
				// not full
				this._playerInfo.lastGetPowerTime = Math.floor(G_ServerInfo.getServerTime() / 1000)
			}

			this._playerInfo.power -= num;

			// save
			this._serializePlayerInfoIntoLocal()

			// event
			G_Event.dispatchEvent(G_EventName.EN_POWER_CHANGED)

			// check
			this.checkPowerIsFullOrNot()
		}
	}

	addPower(restorePower, fromTime) {
		// body...
		this.addPowerNotLimit(restorePower, fromTime);
	}

	addPowerNotLimit(restorePower, fromTime) {
		let _playerInfo = this._playerInfo;
		// body...
		if (_playerInfo) {
			if (fromTime) {
				let needTime = G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_NEED_TIME_TO_RESTORE_POWER"]).num
				_playerInfo.lastGetPowerTime += needTime * restorePower
			}

			let maxPower = G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_MAX_POWER_NUM"]).num + this.getExtraPowerCount();
			if (_playerInfo.power === maxPower - restorePower) {
				// full
				_playerInfo.lastGetPowerTime = 0
			}

			_playerInfo.power += restorePower;


			// save
			this._serializePlayerInfoIntoLocal()

			// event
			G_Event.dispatchEvent(G_EventName.EN_POWER_CHANGED)

			// check
			this.checkPowerIsFullOrNot()
		}
	}

	getLastGetPowerTime() {
		if (this._playerInfo) {
			return this._playerInfo.lastGetPowerTime
		}
		else {
			return 0
		}
	}

	checkPowerIsFullOrNot() {
		// body...
		if (this._playerInfo) {
			let maxPower = G_GameDB.getBaseConfigByID(BaseConfigIDs["BC_MAX_POWER_NUM"]).num

			if (this._playerInfo.power >= maxPower) {
				// event
				return true;
			}
			else {
				// event
				return false;
			}
		}
	}

	/**
	 * 是否可以视频获得体力
	 */
	canViewADGetPower() {
		return this._playerInfo.todayViewAdGetPowerTimes < 3;
	}

	/**
	 * 添加次数
	 */
	addViewADGetPowerTimes() {
		this._playerInfo.todayViewAdGetPowerTimes++;
		this._serializePlayerInfoIntoLocal();
	}

	getCurViewAdGetPowerTimes() {
		return this._playerInfo.todayViewAdGetPowerTimes;
	}

	canMakeTurntable() {
		return this._playerInfo.todayTurntableTimes < 5;
	}

	getSupTurntableTimes() {
		return 5 - this._playerInfo.todayTurntableTimes;
	}

	addTurntableTimes(count) {
		this._playerInfo.todayTurntableTimes += count;
		this._serializePlayerInfoIntoLocal();
	}


	canDiamGetPower() {
		return this._playerInfo.todayDiamGetPowerTimes < 3;
	}

	addDiamGetPowerTimes() {
		this._playerInfo.todayDiamGetPowerTimes++;
		this._serializePlayerInfoIntoLocal();
	}

	getSupDiamGetPowerTimes() {
		return 3 - this._playerInfo.todayDiamGetPowerTimes;
	}

	getIsShowSubscribeApp() {
		return this._playerInfo.isShowSubscribeApp == 0;
	}

	setShowSubscribeApp() {
		this._playerInfo.isShowSubscribeApp = 1;
		this._serializePlayerInfoIntoLocal();
	}

	getNickName() {
		return this._playerInfo.nickname;
	}

	getHeadUrl() {
		return this._playerInfo.headUrl;
	}

	/**
	 * 拿到当前的任务id
	 */
	getCurDailyTaskId() {
		return this._playerInfo.curDailyTaskId;
	}



	/**
	 * 进行下一个任务
	 */
	toNextDailyTask() {
		this._playerInfo.curDailyTaskId++;
		this._serializePlayerInfoIntoLocal();
	}

	addMoney(num) {

		if (!Tools.getIns().isNumber(num)) {
			num = 0;
		}

		this._curMoney += parseFloat(num.toFixed(2));
		this._playerInfo.curMoney = _curMoney + "";
		G_Event.dispatchEvent(G_EventName.EN_MONEY_CHANGE);
		this._serializePlayerInfoIntoLocal();
	}

	getMoney() {
		return parseFloat(this._curMoney.toFixed(2));
	}

	getDailTaskTLevel() {
		return this._playerInfo.dailTaskTLevel;
	}

	getDailyTaskBeginTime() {
		return this._playerInfo.dailyTaskBeginTime;
	}

	toNextDailTaskTLevel() {
		this._playerInfo.dailTaskTLevel++;
		this._serializePlayerInfoIntoLocal();
	}

	getLoginDays() {

		if (this._playerInfo.loginDays <= 0) {
			return 1;
		}

		return this._playerInfo.loginDays;
	}

	getCurGetRedTimers() {
		return this._playerInfo.curGetRedTimers;
	}

	addGetRedTimers() {
		this._playerInfo.curGetRedTimers++;
		this._playerInfo.lastGetRedTimers = Math.floor(G_ServerInfo.getServerTime() / 1000);//记录获得时间
		this._serializePlayerInfoIntoLocal();
	}


	getLastGetRedTimers() {
		return this._playerInfo.lastGetRedTimers;
	}

	canShowInsertAd() {
		return this._playerInfo.todayShowInsertAdCount < 8;
	}

	showInsertAdAdd() {
		this._playerInfo.todayShowInsertAdCount++;
		this._serializePlayerInfoIntoLocal();
	}

	getIsShowTeach() {
		return this._playerInfo.isShowTeach == 1;
	}

	setIsShowTeach(show) {
		let val = 0;
		if (show) {
			val = 1;
		}
		this._playerInfo.isShowTeach = val;
		this._serializePlayerInfoIntoLocal();
	}


	hasTeach() {
		return false;
	}

	addExtraPowerCount(count) {
		this._playerInfo.extraPowerCount += count;
		this._serializePlayerInfoIntoLocal();
		// event
		G_Event.dispatchEvent(G_EventName.EN_POWER_CHANGED)
	}

	getExtraPowerCount() {
		return this._playerInfo.extraPowerCount;
	}

	getDelineEf(){
		let lvId=this.getCurLevelId();
		let fallHoney=G_GameDB.getLevelConfigByID(lvId).fallHoney;
		let temp=fallHoney.split(',');
		temp=temp[0].split('&')[1];

		return parseFloat(temp);
	}


	getDelineGold() {
		let count = BigNumber("0");
		let maxSup = 2 * 60 * 60;//最多两个小时
		let delineTime = G_PlayerInfo.getOutlineTime();//离线时间
		delineTime = Math.floor(Math.min(maxSup, delineTime));//转化整形
		count = count.plus(delineTime);
		count = BigNumber(count.times(this.getDelineEf()).toFixed(0));

		return count;
	}

	


	getAdGoldTimes() {
		return this._playerInfo.getAdGoldTimes;
	}

	addGoldTimes() {
		this._playerInfo.getAdGoldTimes++;
		this._serializePlayerInfoIntoLocal();
	}

	getSex() {
		return this._playerInfo.sex;
	}

	changeSex() {
		if (this._playerInfo.sex == 0) {
			this._playerInfo.sex = 1;
		} else {
			this._playerInfo.sex = 0;
		}
		this._serializePlayerInfoIntoLocal();
	}

	getTaskData(taskId) {
		let taskData = null;
		let taskArray = this._playerInfo.taskDatas;
		for (let i = 0; i < taskArray.length; i++) {
			if (taskId == taskArray[i].id) {
				taskData = taskArray[i];
				break;
			}
		}

		if (!taskData) {
			taskData = new db["TaskData"];
			this.initTaskData(taskData, taskId);
			taskArray.push(taskData);
			this._serializePlayerInfoIntoLocal();
		}

		return taskData;
	}

	initTaskData(taskData, taskId) {
		taskData.id = taskId;
		let taskConfig = G_GameDB.getDailyTaskByID(taskId);
		taskData.state = 0;//0未完  1已完成 2已领取
		taskData.taskTime = taskConfig.taskTime;
	}

	clearTask() {
		this._playerInfo.taskDatas = [];
	}

	getTaskId() {
		return this._playerInfo.curTaskId;
	}

	setTaskId(taskId) {
		this._playerInfo.curTaskId = taskId;
		this._serializePlayerInfoIntoLocal();
	}

	
	setTaskLine(taskLine) {
		if (this._playerInfo) {
			this._playerInfo.taskLine = taskLine;
			this._serializePlayerInfoIntoLocal();
		}

	}

	getTaskLine() {
		return this._playerInfo.taskLine;
	}

	getViewAdTenLuckTimes(){
		return  this._playerInfo.viewAdTenLuck;
	}

	addViewAdTenLuckTimes(){
		this._playerInfo.viewAdTenLuck++;
		this._serializePlayerInfoIntoLocal();
	}

	/**
	 * 拿到关卡数据
	 * @param {*} lvId 
	 * @returns 
	 */
	getLevelDataById(lvId){
		let levelData = null;
		let levelDatas = this._playerInfo.levelDatas;
		for (let i = 0; i < levelDatas.length; i++) {
			if (lvId == levelDatas[i].id) {
				levelData = levelDatas[i];
				break;
			}
		}

		if (!levelData) {
			levelData = new db["LevelData"];
			this.initLevelData(levelData, lvId);
			levelDatas.push(levelData);
			this._serializePlayerInfoIntoLocal();
		}

		return levelData;
	}

	/**
	 * 
	 * @param {*} type 1成功 2失败 3进入 4 主动退出次数
	 * @param {*} lvId 
	 */
	setLevelPlayTime(type,lvId){
		let levelData=this.getLevelDataById(lvId);
		if(type==1){
			levelData.passTimes++;
		}else if(type==2){
			levelData.failTimes++;
		}else if(type==3){
			levelData.playTimes++;
		}else if(type==4){
			levelData.activeExitTimes++;
		}
		this._serializePlayerInfoIntoLocal();
	}

	initLevelData(levelData,lvId){
		levelData.id=lvId;
		levelData.playTimes=0;
		levelData.passTimes=0;
		levelData.failTimes=0;
	}

	//上一次玩家的位置
	getLastPlayerPos(){
		return this._playerInfo.lastPlayerPos;
	}

	/**
	 * 
	 * @returns 拿到上一个关卡id
	 */
	getLastLevelId(){
		return this._playerInfo.lastLevelId;
	}

	/**
	 * 设置玩家shang
	 * @param {*} levelId 
	 * @param {*} pos 
	 */
	savePlayerPos(levelId,pos){
		this._playerInfo.lastPlayerPos="{0}&{1}&{2}".format(pos.x,pos.y,pos.z);
		this._playerInfo.lastLevelId=levelId;
		this._serializePlayerInfoIntoLocal();
	}

	/**
	 * 创建一份初始的蜜蜂数据
	 * @param {*} beeId 
	 */
	createBeeData(beeId){
		let beeData=new db["BeeData"];
		beeData.id=beeId;
		return beeData;
	}

	/**
	 * 添加一支蜜蜂
	 * @param {*} beeId 
	 */
	addBee(beeId){
		let beeData=this.createBeeData(beeId);
		this._playerInfo.beeDatas.push(beeData);
		this._serializePlayerInfoIntoLocal();
		return beeData;
	}

	/**
	 * 升级一支蜜蜂
	 * @param {*} beeId 
	 */
	upBee(beeId,removeBees){

		//先移除
		let bees=this._playerInfo.beeDatas;
		for(let i=0;i<removeBees.length;i++){

			for(let j=bees.length-1;j>=0;j--){
				if(bees[j].id==removeBees[i].beaData.beeId){
					bees.splice(j,1);
					break;
				}
			}
		}


		

		this._serializePlayerInfoIntoLocal();
	}

	/**
	 * 得到蜜蜂数据
	 * @param {*} beeId 
	 * @returns 
	 */
	getBeeDataById(beeId){
		for(let i=0;i<this._playerInfo.beeDatas.length;i++){
			if(this._playerInfo.beeDatas[i].id==beeId){
				return this._playerInfo.beeDatas[i];
			}
		}

		return null;
	}

	getAllBeeDatas(){
		return this._playerInfo.beeDatas;
	}

	getBeeSpeedLv(){
		return this._playerInfo.beeSpeedLv;
	}


	upBeeSpeedLv(){
		this._playerInfo.beeSpeedLv++;
		super._serializePlayerInfoIntoLocal();
		G_Event.dispatchEvent(G_EventName.EN_BEESPEEDUP);
	}

	getContainLv(){
		return this._playerInfo.containLv;
	}

	upContainLv(){
		this._playerInfo.containLv++;
		super._serializePlayerInfoIntoLocal();
		G_Event.dispatchEvent(G_EventName.ENUPCONTAIN);
	}

	getHurtLv(){
		return this._playerInfo.hurtLv;
	}

	upHurtLv(){
		this._playerInfo.hurtLv++;
		super._serializePlayerInfoIntoLocal();
		G_Event.dispatchEvent(G_EventName.EN_UPHURT);
	}

	buyBee(){
		this._playerInfo.buyBeeTimes++;
		super._serializePlayerInfoIntoLocal();
	}

	getBuyBeeTimes(){
		return this._playerInfo.buyBeeTimes;
	}

	getSpeedUpToTime(){
		return this._playerInfo.speedUpToTime;
	}

	createSkillData(id){
		let skillData=new db["PlayerSkillData"];
		skillData.id=id;
		skillData.toTime=0;
		skillData.count=0;

		this._playerInfo.playerSkillDatas.push(skillData);
		super._serializePlayerInfoIntoLocal();

		return skillData;
	}

	getPlayerSkillDataById(id){
		let skillData=null;

		let array=this._playerInfo.playerSkillDatas;
		for(let i=0;i<array.length;i++){
			if(array[i].id==id){
				skillData=array[i];
				break;
			}
		}

		if(!skillData){
			skillData=this.createSkillData(id);
		}

		return skillData;
	}

	addSkillTime(id,time){
		let skillData=this.getPlayerSkillDataById(id);
		skillData.toTime=time;
		super._serializePlayerInfoIntoLocal();
		if(id==1){
			G_Event.dispatchEvent(G_EventName.EN_SPEEDUPCHANGE);
		}else if(id==2){
			G_Event.dispatchEvent(G_EventName.EN_STRONGE_CHANGE);
		}
		
	}
	
	setSpeedOpen(){
		this._playerInfo.speedUpOpen=1;
		super._serializePlayerInfoIntoLocal();
		//G_Event.dispatchEvent(G_EventName.EN_REFERSH_POPBAR);
	}

	getSpeedOpen(){
		return this._playerInfo.speedUpOpen==1;
	}

	setStrongeOpen(){
		this._playerInfo.strongeUpOpen=1;
		super._serializePlayerInfoIntoLocal();
		//G_Event.dispatchEvent(G_EventName.EN_REFERSH_POPBAR);
	}

	getStrongeOpen(){
		return this._playerInfo.strongeUpOpen==1;
	}

	setBackHomeOpen(){
		this._playerInfo.backHomeOpen=1;
		super._serializePlayerInfoIntoLocal();
		//G_Event.dispatchEvent(G_EventName.EN_REFERSH_POPBAR);
	}

	getBackHomeOpen(){
		return this._playerInfo.backHomeOpen==1;
	}
}

// global
window.G_PlayerInfo = new PlayerInfo()

