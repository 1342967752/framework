import Tools from "../UIFrame/Tools";
import SkillBase from "./SkillBase";
/**
 * buff技能
 */
export default class BuffSkillBase extends SkillBase {
    constructor() {
        super();
        this.curLayer = 0;
        this.timer
    }

    useSkill(skillMgr) {
        super.useSkill(skillMgr);
        this.startEf();
        //属性改变
        if (this.skillData.effectCount == -1) {//循环加
            if (this.skillData.effectTime > 0) {
                let key = "prop_" + this.receptorMgr.playerMgr.id + "_" + this.skillData.effectType;
                this.receptorMgr.addTimerFun(key,()=>{
                    Tools.getIns().handlerFun(this.receptorMgr.propCallBack, this.skillData, false);
                }, this.skillData.effectTime);
            } else {
                console.error("技能持续间隔时间错误:", this.skillData.id)
            }
        } else {
            Tools.getIns().handlerFun(this.receptorMgr.propCallBack, this.skillData,false);
        }

    }



    startEf() {
        let node = this.receptorMgr.playerMgr.buffEfPos;
        Tools.getIns().createEf(this.skillData.skillStartEf, Tools.getIns().zeroVec, node, 2, true, Tools.getIns().zeroVec, true);
    }


    endSkill(skillMgr) {
        super.endSkill(skillMgr);
    
        //属性改变
        if (this.skillData.effectCount == -1) {//循环加
            let key = "prop_" + this.receptorMgr.playerMgr.id + "_" + this.skillData.effectType;
            this.receptorMgr.removeTimerFun(key);
        } else {
            Tools.getIns().handlerFun(this.receptorMgr.propCallBack, this.skillData,true);
        }
    }
}