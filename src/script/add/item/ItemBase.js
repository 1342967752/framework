import Tools from "../UIFrame/Tools";

export default class ItemBase extends Laya.Script{
    constructor(){
        super();
        this.viewProp=new Object();
        this.data=null;
    }

    init(){
        Tools.getIns().setUINode(this.owner,"m_",this.viewProp);
    }

    setData(data){
        this.data=data;
    }
}