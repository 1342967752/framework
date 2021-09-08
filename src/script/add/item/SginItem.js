import GameMgr from "../Mgr/GameMgr";
import ItemBase from "./ItemBase";

export default class SginItem extends ItemBase {

    constructor() { 
        super(); 
        
    }
    
    init(){
        super.init();
    }

   
    setData(data){
        super.setData(data);
        this.viewProp.m_day.skin="game/sgin/d{0}.png".format(data.day);
        this.viewProp.m_sel.visible=GameMgr.getPlayerInfo().getSginDayCount()>=data.day;
        

        this.viewProp.m_diam.visible=data.sginData.type==1;
        this.viewProp.m_gold.visible=data.sginData.type==3;
        this.viewProp.m_skin.visible=data.sginData.type==2;
        if(data.sginData.type==2||data.sginData.type==4){
            let skinId=data.sginData.param1;
            let playerData = G_GameDB.getPlayerConfigByID(skinId);
           // let qualityData = G_GameDB.getQualityByID(playerData.quality);
            this.viewProp.m_skin.skin= G_ResPath.skinPath.format(playerData.icon);
        }
        this.viewProp.m_name.text=data.sginData.name;
    }
}