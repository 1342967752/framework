import ItemBase from "./ItemBase";

export default class RewardItem extends ItemBase {
    constructor() {
        super();
        this.showRang = false;
    }

    init() {
        super.init();
    }

    setData(rewardData) {
        super.setData(rewardData);
        if (!rewardData) {
            return;
        }
        let type = rewardData.type;

        this.viewProp.m_chip.visible = type == 2;
        this.viewProp.m_gold.visible = type == 3;
        this.viewProp.m_diam.visible = type == 1;
        this.viewProp.m_skin.visible = type == 4;
        this.viewProp.m_rang.visible = false;
        this.showRang = false;
        if (type == 2) {
            let playerData = G_GameDB.getPlayerConfigByID(rewardData.paraId);
            this.viewProp.m_chip_skin.skin = G_ResPath.skinPath.format(playerData.icon);
            let qualityData = G_GameDB.getQualityByID(playerData.quality);
            this.viewProp.m_chip.skin = G_ResPath.rareBoxPath.format(qualityData.rareBg);
            if(playerData.quality>2){
                this.showRang = true;
                this.viewProp.m_rang.rotation = 0;
                this.viewProp.m_rang.visible = true;
            }
          
        } else if (type == 4) {
            let playerData = G_GameDB.getPlayerConfigByID(rewardData.paraId);
            this.viewProp.m_whole_skin.skin = G_ResPath.skinPath.format(playerData.icon);
        }

        if (rewardData.count instanceof BigNumber) {
            this.viewProp.m_count.text = "x" + G_Utils.bigNumber2StrNumber(rewardData.count);
        } else {
            this.viewProp.m_count.text = "x" +  G_Utils.bigNumber2StrNumber(BigNumber(rewardData.count));
        }


    }

    onUpdate() {
        if (this.showRang) {
            this.viewProp.m_rang.rotation += 5;
        }
    }
}