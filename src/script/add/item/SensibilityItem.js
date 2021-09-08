import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";


export default class SensibilityItem extends Laya.Script{
    constructor(){
        super();
        this.viewProp=new Object();
        this.clickFun=null;
        this.indexVal=0;
    }

    init(){
        Tools.getIns().setUINode(this.owner,GameMgr.getUIName().nodeSgin,this.viewProp);
        this.owner.on(Laya.Event.CLICK,this,function(){
            Tools.getIns().btnAction(this.owner);
            Tools.getIns().handlerFun(this.clickFun,this.indexVal);
        });
    }

    setData(index){
        this.indexVal=index;
        this.owner.skin="game/sensibilitySetting/s_{0}.png".format(index-1);
        if(index==1){
            this.viewProp.m_text.text="低";
        }else if(index==2){
            this.viewProp.m_text.getChildAt(0).text="中";
        }else if(index==3){
            this.viewProp.m_text.getChildAt(0).text="高";
        }else{
            this.viewProp.m_text.getChildAt(0).text="定制";
        }

        this.viewProp.m_sel.visible=GameMgr.getPlayerInfo().getSensibilityVal()==index;
    }

    setClickFun(fun){
        this.clickFun=fun;
    }
}