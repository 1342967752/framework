import MapMgr from "../Mgr/MapMgr";
import Tools from "../UIFrame/Tools";

export default class TaskItem extends Laya.Script {
    constructor() {
        super();
        this.viewProp = new Object();
        this.data = null;

        this.isUpNum = false;
        this.numStart = 0;
        this.numEnd = 0;
        this.numAdd = 51;
        this.numText = null;


    }

    init() {
        Tools.getIns().setUINode(this.owner, "m_", this.viewProp);
    }

    setData(data, isWin) {
        this.data = data;
        let title = "获得游戏胜利";
        this.viewProp.m_cup.visible = false;
        this.viewProp.m_star.visible = false;
        this.viewProp.m_diam.visible = false;
        this.viewProp.m_gold.visible = false;
        this.viewProp.m_cup.visible = false;
        if (data.id == 1) {
            this.viewProp.m_star.visible = true;
        } else if (data.id == 2) {
            this.viewProp.m_star.visible = true;
        } else if (data.id == 0) {//游戏通关胜利
            this.viewProp.m_cup.visible = true;
        }
        else {
            this.viewProp.m_star.visible = true;
        }

        if (data.id == 0) {

            if (isWin) {
                this.numEnd = data.diam;
                this.viewProp.m_state.skin = "game/gameOver/yiwcheng.png";
            } else {
                this.numEnd = 0;
                this.viewProp.m_state.skin = "game/gameOver/weiwc.png";
            }
            this.viewProp.m_diam_count.text = "+" + this.numEnd;
            this.viewProp.m_diam_count.gray = this.numEnd == 0;
        } else {
            let qualityData = G_GameDB.getQualityByID(data.quality);
            if (qualityData) {
                title = "击败{0}车手".format(qualityData.name);
            }

            //显示金币
            let killCount =1// MapMgr.getIns().configMgr.getKillEnemyByCount(data.enemyType);
            this.numEnd = 1//MapMgr.getIns().configMgr.getKillEnemyGoldByType(data.enemyType);
            this.viewProp.m_kill_count.text = "x" + killCount;
            this.viewProp.m_kill_count.gray = killCount == 0;
            this.viewProp.m_gold_count.gray = this.numEnd == 0;
            this.viewProp.m_gold_count.text = "+" + this.numEnd;
        }

        this.viewProp.m_des.text = title;

    }

    onUpdate() {
        if (this.isUpNum) {
            this.numStart += this.numAdd;
            this.numText.text = "+" + this.numStart;


            if (this.numStart >= this.numEnd) {
                this.numText.text = "+" + this.numEnd;
                this.isUpNum = false;
            }
        }
    }

    playTweenStart() {
        this.viewProp.m_state.visible = false;
        this.viewProp.m_diam.visible = false;
        this.viewProp.m_gold.visible = false;
        this.viewProp.m_kill_count.visible = false;
    }

    playGetTween() {
        let stateNode = this.data.id == 0 ? this.viewProp.m_state : this.viewProp.m_kill_count;
        stateNode.visible = true;
        //为0不做数组动画
        if (this.numEnd <= 0) {
            this.viewProp.m_diam.visible = this.data.id == 0;
            this.viewProp.m_gold.visible = this.data.id != 0;
            return;
        }

        stateNode.scaleX = 2;
        stateNode.scaleY = 2;
        Laya.Tween.to(stateNode, { scaleX: 1, scaleY: 1 }, 200, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
            this.viewProp.m_diam.visible = this.data.id == 0;
            this.viewProp.m_gold.visible = this.data.id != 0;
            this.numStart = 0;
            this.numAdd = Math.floor(this.numEnd * 0.03) + 1;
            this.numText = this.data.id == 0 ? this.viewProp.m_diam_count : this.viewProp.m_gold_count;
            this.isUpNum = true;
        }), 0, true, false);
    }
}