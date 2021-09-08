export default class GrowUp{

    constructor(){
        this.maxId=1;
    }

    static getIns(){
        if(!this.ins){
            this.ins=new GrowUp();
            this.ins.init();
        }

        return this.ins;
    }

    init(){


        this.maxId=G_GameDB.getGrowUpByID(G_GameDB.getAllGrowUps().length-1).id;
    }


    getBeeSpeedGold(id){
        return BigNumber(G_GameDB.getGrowUpByID(id).beeSpeedCutGold);
    }

    getBeeBuyTimesGold(id){
        return BigNumber(G_GameDB.getGrowUpByID(id).beeBuy);
    }

    getCapacityGold(id){
        return BigNumber(G_GameDB.getGrowUpByID(id).pCapacityGold);
    }

    getHurtGold(id){
        return BigNumber(G_GameDB.getGrowUpByID(id).pHurtGold);
    }

    getNextLvGold(id){
        return BigNumber(G_GameDB.getGrowUpByID(id).toNextLvGold);
    }
}

// export  class GrowUpData{


//     constructor(){
//         this.id=0;
//         this.pHurt;
//         this.pHurtGold;
//         this.pCapacity;
//         this.pCapacityGold;
//         this.beeSpeedCut;
//         this.beeSpeedCutGold;
//         this.beeBuy;
//         this.toNextLvGold;
//     }

//     init(data){
//         this.id=data.id;
//         this.pHurt=BigNumber(data.pHurt);
//         this.pHurtGold=BigNumber(data.pHurtGold);
//         this.pCapacity=BigNumber(data.pCapacity);
//         this.pCapacityGold=BigNumber(data.pCapacityGold);
//         this.beeSpeedCut=parseFloat(data.beeSpeedCut);
//         this.beeSpeedCutGold=BigNumber(data.beeSpeedCutGold);
//         this.beeBuy=BigNumber(data.beeBuy);
//         this.toNextLvGold=BigNumber(data.toNextLvGold);
//     }
// }