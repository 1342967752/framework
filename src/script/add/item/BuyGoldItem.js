import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";


export default class BuyGoldItem extends Laya.Script {

    constructor() { 
        super(); 
       this.buyFun=null;
       this.itemData=null;
       this.viewProp=new Object();
    }
    
   init(){
         //插入值
         let p=[];
         Tools.getIns().getChildBySgin(this.owner,GameMgr.getUIName().nodeSgin,p);
         
         for(var i=0;i<p.length;i++){
             this.viewProp[p[i].name]=p[i];
         }

         this.viewProp.m_buy.on(Laya.Event.CLICK,this,function(){
                Tools.getIns().btnAction(this.viewProp.m_buy);
                Tools.getIns().handlerFun(this.buyFun,this);
         })
   }

   setBuyFun(fun){
       this.buyFun=fun;
   }

   setData(data){
        this.itemData=data;
        this.viewProp.m_effect.text=data.text;
        this.viewProp.m_diam_num.text=data.count;
        let speed=G_PlayerInfo.getAllEffect();
        if(speed.lte(0)){
            speed=BigNumber(1);
        }
        this.viewProp.m_gold_num.text=G_Utils.bigNumber2StrNumber(speed.times(data.time));
   }
}