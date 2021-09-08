import Tools from "../UIFrame/Tools";

export default class BoxItem extends Laya.Script{
    constructor(){
        super();
        this.viewProp=new Object();
        this.clickFun=null;
        this.boxData=null;
    }

    init(){
        let nodes=[];
        Tools.getIns().getChildBySgin(this.owner,"m_",nodes);
        for(let i=0;i<nodes.length;i++){
            this.viewProp[nodes[i].name]=nodes[i];
        }

        this.viewProp.m_box.on(Laya.Event.CLICK,this,function(){
            Tools.getIns().btnAction(this.viewProp.m_box);
            if(this.boxData.isAdBox){
                Tools.getIns().shareOrAd(this.viewProp.m_box,function(){
                    Tools.getIns().handlerFun(this.clickFun,this);
                }.bind(this));
            }else{
                Tools.getIns().handlerFun(this.clickFun,this);
            }
           
        })
    }

    setClickFun(fun){
        this.clickFun=fun;
    }

    setData(data){
        this.boxData=data;
        this.viewProp.m_box.visible=!data.isOpen;
        this.viewProp.m_open.visible=data.isOpen;

        this.viewProp.m_diam.visible=data.type==1;
        this.viewProp.m_gold.visible=data.type==3;
        this.viewProp.m_spped.visible=data.type==7;
        this.viewProp.m_count.visible=data.isOpen;
        this.viewProp.m_count.text=data.valT;
        this.viewProp.m_ad_icon.visible=data.isAdBox;
    }
}