import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";

export default class SkinItem extends Laya.Script {

    constructor() { 
        super(); 
        this.playerData=null;
        this.tabType=1;
        this.clickFun=null;
    }
    
   init(){
      super.init();

      this.viewProp.m_goldBuy.on(Laya.Event.CLICK,this,function(){
          Tools.getIns().btnAction(this.viewProp.m_goldBuy);
         Tools.getIns().handlerFun(this.clickFun,this);
      });

      this.viewProp.m_adBuy.on(Laya.Event.CLICK,this,function(){
        Tools.getIns().btnAction(this.viewProp.m_adBuy);
        Tools.getIns().handlerFun(this.clickFun,this);
      });

      this.viewProp.m_equip.on(Laya.Event.CLICK,this,function(){
        Tools.getIns().btnAction(this.viewProp.m_equip);
        Tools.getIns().handlerFun(this.clickFun,this);
      });
   }

   setClickFun(fun){
       this.clickFun=fun;
   }

   setData(playerData,type){
       super.setData(playerData,type);
       this.playerData=playerData;
       this.tabType=type;
       this.viewProp.m_name.text=playerData.name;
       this.viewProp.m_icon.skin=G_ResPath.skinPath.format(playerData.icon);
       let buyTemp=playerData.unLockCount.split("&");
       let buyType=parseInt(buyTemp[0]);
       let count=parseInt(buyTemp[1]);
     
       this.viewProp.m_goldCount.text="x"+count;
       
       
        if(buyType==6){
            this.viewProp.m_btnName.text="x{0}获取".format(GameMgr.getPlayerInfo().getSkinViewAdTimesById(skinData.id)+"/"+count);
            Tools.getIns().setAdBtnIcon(this.viewProp.m_adBuy);
        }

        let used=false;
        if(type==1){
            used=GameMgr.getPlayerInfo().getSkinId01()==skinData.id;
        }else if(type==2){
            used=GameMgr.getPlayerInfo().getSkinId()==skinData.id;
        }

        this.viewProp.m_usedIcon.visible=false;
        this.viewProp.m_used.visible=used;

        let has=GameMgr.getPlayerInfo().hasSkinById(skinData.id);;

        if(!used){
            this.viewProp.m_equip.visible=has;
           
        }else{
            this.viewProp.m_equip.visible=false;
            this.viewProp.m_adBuy.visible=buyType==6;
            this.viewProp.m_goldBuy.visible=buyType==3;
        }

        if(has){
            this.viewProp.m_adBuy.visible=false;
            this.viewProp.m_goldBuy.visible=false;
        }else{
            this.viewProp.m_adBuy.visible=buyType==6;
            this.viewProp.m_goldBuy.visible=buyType==3;
        }

        this.viewProp.m_lock.visible=!has;
   }

  
}