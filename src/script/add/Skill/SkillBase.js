export default class SkillBase {
    constructor(){
        this.skillId=0;
        this.skillData=null;
        this.skillType=1;//1 buff 2主动技能 3被动技能 
        this.effectType=1;//1 血量 2伤害 3防御
        this.addEffectType;//1 值 2 百分比
        this.effectVal=1;//增加的值
        this.effectTime=1;
        this.effectCount=1;
        this.layerMax=1;//最大层数
        this.skillStartTime=0;
        this.receptorMgr=null;//受体
    }

    init(){

    }

    setSkillData(skillData){
        this.skillData=skillData;
        this.skillId=skillData.id;
        this.skillType=skillData.skillType;
        this.effectType=skillData.effectType;
        this.addEffectType=skillData.addEffectType;
        this.effectCount=skillData.effectCount;
        this.effectVal=parseFloat(skillData.effectVal);
        this.effectTime=parseFloat(skillData.effectTime);
        this.layerMax=parseInt(skillData.layerMax);
    }

    useSkill(skillMgr){
        this.receptorMgr=skillMgr;
        this.skillStartTime=G_ServerInfo.getServerTime();
    }

    endSkill(skillMgr){
        this.receptorMgr=skillMgr;
    }
}