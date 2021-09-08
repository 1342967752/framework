import BeeMgr from "../gameMgr/BeeMgr";
import MapMgr from "../Mgr/MapMgr";
import ColBase from "./ColBase";

export default class BeeBox extends ColBase {
    checkRegist() {
        if (!this.owner.active) {
            this.unResgist();
        }
    }


    addCols(mgr) {
        super.addCols(mgr);

        if (BeeMgr.getIns().checkCanAddBee()) {
            //增加一直蜜蜂
            BeeMgr.getIns().createBee(1);
        }
        G_SoundMgr.playSound(GG_SoundName.SN_Mp3.format("box"));
        this.owner.active = false;
        this.removeCols(mgr);
        this.unResgist();
    }

    unResgist() {
        if (MapMgr.getIns().curMap) {
            let beeBoxs = MapMgr.getIns().curMap.beeBoxs;
            let index = beeBoxs.indexOf(this);

            if (index >= 0) {
                beeBoxs.splice(index, 1);
            }
        }
    }
}