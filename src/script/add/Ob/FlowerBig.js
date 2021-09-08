
import Flower from "./Flower";

export default class FlowerBig extends Flower {
    constructor() {
        super();
        this.buildRang = 1.2 ;

      
    }

    toBorder(vecs){

    }

    toDeath(){
        super.toDeath();
        G_SoundMgr.playSound(GG_SoundName.SN_Mp3.format("flower_die_big"));
    }
}