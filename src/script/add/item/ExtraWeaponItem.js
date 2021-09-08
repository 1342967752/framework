import Tools from "../UIFrame/Tools";

export default class ExtraWeaponItem extends Laya.Script{
    constructor(){
        super();
        this.viewProp=new Object();
        this.itemData=null;
        this.selFun=null;
    }

    init(){
        let nodes=[];
        Tools.getIns().getChildBySgin(this.owner,"m_",nodes);
        for(let i=0;i<nodes.length;i++){
            this.viewProp[nodes[i].name]=nodes[i];
        }

        this.owner.on(Laya.Event.CLICK,this,function(){
            Tools.getIns().btnAction(this.viewProp.owner);
            Tools.getIns().handlerFun(this.selFun,this);
            
        })
    }

    setData(data){
        this.itemData=data;
        this.viewProp.m_name.text=data.name;
        this.viewProp.m_icon.skin="game/extraWepon/{0}.png".format(data.icon);
        this.viewProp.m_ef.text=data.ef;
        this.viewProp.m_ef_val.text=data.efvalT;
        this.viewProp.m_adBtn.visible=data.isAD;
        this.owner.visible=!this.itemData.isUse;
    }

    setSelFun(fun){
        this.selFun=fun;
    }
}