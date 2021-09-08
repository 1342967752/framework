import ItemBase from "./ItemBase";

export default class DailyTaskRewardItem extends ItemBase{
    constructor(){
        super();
    }

 


    setData(data){
        super.setData(data);

        this.viewProp.m_gold.visible=false;
        this.viewProp.m_diam.visible=false;
        this.viewProp.m_chip.visible=false;
        switch(data.type){
            case 3:
                this.viewProp.m_gold.visible=true;
                this.viewProp.m_gold_count.text="x"+G_Utils.bigNumber2StrNumber(BigNumber(data.count));
                break;
            case 1:
                this.viewProp.m_diam.visible=true;
                this.viewProp.m_diam_count.text="x"+G_Utils.bigNumber2StrNumber(BigNumber(data.count));
                break;
            case 2:
                this.viewProp.m_chip.visible=true;
                let playerData = G_GameDB.getPlayerConfigByID(data.paraId);
                let qualityData = G_GameDB.getQualityByID(playerData.quality);
                this.viewProp.m_chip_skin.skin= G_ResPath.skinPath.format(playerData.icon);
                this.viewProp.m_chip.skin=G_ResPath.rareBoxPath.format(qualityData.rareBg);
                this.viewProp.m_chip_count.text="x"+G_Utils.bigNumber2StrNumber(BigNumber(data.count));
                break;
        }

    }
}