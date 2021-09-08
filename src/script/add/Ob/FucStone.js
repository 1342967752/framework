import GameMgr from "../Mgr/GameMgr";
import MapMgr from "../Mgr/MapMgr";
import ColBase from "./ColBase";

export default class FucStone extends ColBase {

    constructor() {
        super();
        this.colType = 3;
        this.stoneType = 0;//1 回城 2速度 3力量
        this.buildRang = 1;
    }



    checkRegist() {
        if (!this.owner.active) {
            this.unResgist();
        }
    }

    setStoneType(type) {
        this.stoneType = type;

        //判断是否显示
        let show = false;
        if (this.stoneType == 1) {
            show = GameMgr.getPlayerInfo().getBackHomeOpen();
        } else if (this.stoneType == 2) {
            show = GameMgr.getPlayerInfo().getSpeedOpen();
        } else if (this.stoneType == 3) {
            show = GameMgr.getPlayerInfo().getStrongeOpen();
        }

        this.owner.active = !show;
    }

    addCols(mgr) {
        super.addCols(mgr);

        let tips;
        //触发
        if (this.stoneType == 1) {
            GameMgr.getPlayerInfo().setBackHomeOpen();
            tips = "获得传送石，使用后玩家可回到该岛屿的初始位置";
        } else if (this.stoneType == 2) {
            GameMgr.getPlayerInfo().setSpeedOpen();
            tips = "速度强化，开启后增加玩家的移动速度";
        } else if (this.stoneType == 3) {
            GameMgr.getPlayerInfo().setStrongeOpen();
            tips = "力量强化，开启后使玩家可采摘任意花朵";
        }
        
        MapMgr.getIns().gameView.showWantedView(true, tips)
        G_SoundMgr.playSound(GG_SoundName.SN_Mp3.format("stone"));
        this.owner.active = false;
        this.removeCols(mgr);
        this.unResgist();
    }

    unResgist() {
        if (MapMgr.getIns().curMap) {
            let fucStones = MapMgr.getIns().curMap.fucStones;
            let index = fucStones.indexOf(this);

            if (index >= 0) {
                fucStones.splice(index, 1);
            }
        }
    }
}