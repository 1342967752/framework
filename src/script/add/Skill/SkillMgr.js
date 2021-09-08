import MapMgr from "../Mgr/MapMgr";
import PropBuffSkill from "./PropBuffSkill";

export default class SkillMgr {
    constructor() {
        this.skills = new Object();//所有的技能
        //属性改变回调
        this.propCallBack = null;
        this.playerMgr = null;
        this.loopFuns = [];
        this.timerKey = null;
    }

    init() {

    }

    setSkillOwenr(playerMgr) {
        this.playerMgr = playerMgr;
        this.timerKey = "skill_" + playerMgr.owner.id + "_timer";
    }

    resgistSkill(skillId) {
        let skillData = this.getSkillData(skillId);
        if (!skillData) {
            skillData = new Object();
            this.skills[skillId] = skillData;
            this.initSkillData(skillData, skillId)
        }
    }

    initSkillData(skillData, skillId) {
        let skillConfig = G_GameDB.getSkillConfigByID(skillId);
        skillData.skillConfig = skillConfig;
        skillData.curLayer = 0;
    }

    removeSkill(skillId, isAll) {
        let skillData = this.getSkillData(skillId);
        if (skillData) {
            if (isAll) {
                this.skills[skillId] = null;
            } else {
                skillData.curLayer--;
                if (skillData.curLayer <= 0) {
                    this.skills[skillId] = null;
                }
            }
        }
    }

    getSkillDataById(skillId) {
        return this.getSkillData(skillId);
    }

    useSkill(skillId) {
        let skillData = this.getSkillData(skillId);
        if (!skillData) {//注册技能
            this.resgistSkill(skillId);
            skillData = this.getSkillData(skillId);
        }

        let skillType = skillData.skillConfig.skillType;
        if (skillType == 1) {//buff技能

            if (skillData.curLayer >= skillData.skillConfig.layerMax) {
                console.error("buff技能生效达到最大层数");
                return;
            }
            skillData.curLayer++;//增加生效层数
            let propMgr = new PropBuffSkill();
            propMgr.setSkillData(skillData.skillConfig);
            propMgr.useSkill(this);
        }
    }

    /**
     * 主动结束技能
     * @param {*} skillId 
     * @returns 
     */
    endSkill(skillId) {
        let skillData = this.getSkillData(skillId);
        if (!skillData) {//注册技能
            console.error("没有生效该技能:", skillId);
            return;
        }
        let skillType = skillData.skillConfig.skillType;
        if (skillType == 1) {
            let propMgr = new PropBuffSkill();
            propMgr.setSkillData(skillData.skillConfig);
            propMgr.endSkill(this);
        }
        skillData.curLayer--;
        if (skillData.curLayer <= 0) {//移除技能
            this.removeSkill(skillId, true);
        }
    }

    /**
     * 检查技能是否结束
     */
    checkSkill() {

    }

    getSkillData(skillId) {
        if (this.skills[skillId]) {
            return this.skills[skillId];
        }

        return null;
    }

    getAllBuffId() {
        let buffIds = [];
        let buffId = 0;
        for (let i = 0; i < MapMgr.getIns().configMgr.buffIds.length; i++) {
            buffId = MapMgr.getIns().configMgr.buffIds[i];
            if (this.getSkillData(buffId)) {
                buffIds.push(buffId);
            }

        }

        return buffIds;
    }


    addTimerFun(id, fun, space) {
        this.openTimer();
        this.loopFuns.push({ id: id, fun: fun, start: G_ServerInfo.getServerTime(), space: space });
    }

    removeTimerFun(id) {
        for (let i = 0; i < this.loopFuns.length; i++) {
            if (this.loopFuns[i].id == id) {
                this.loopFuns.splice(i, 1);

                if(this.loopFuns.length==0){
                    this.closeTimer();
                }

                break;
            }
        }
    }



    openTimer() {
        if (this.hasTimer()) {
            return;
        }

        if (!this.timerKey) {
            console.error("定时器键值问题:", this.timerKey);
            return;
        }

        G_Scheduler.schedule(this.timerKey, () => {
            this.exeTimerFun();
        }, false, 500);
    }

    exeTimerFun() {
        let servertime = G_ServerInfo.getServerTime();
        let loopData = null;
        for (let i = 0; i < this.loopFuns.length; i++) {
            loopData = this.loopFuns[i];
            if (servertime - loopData.start >= loopData.space) {
                loopData.start = servertime;
                loopData.fun();
            }
        }
    }

    hasTimer() {
        return G_Scheduler.isScheduled(this.timerKey);
    }

    closeTimer() {
        G_Scheduler.unschedule(this.timerKey);
    }
}