import Tools from "../UIFrame/Tools";

export default class EggItem extends Laya.Script{
    constructor(){
        super();
        this.data=null;
        this.clickFun=null;
    }

    init(){
        this.owner.on(Laya.Event.CLICK,null,()=>{
            Tools.getIns().btnAction(this.owner,()=>{
                Tools.getIns().handlerFun(this.clickFun,this);
            })
        });

        Tools.getIns().setAdBtnIcon(this.owner);
    }

    setClickFun(fun){
        this.clickFun=fun;
    }

    setData(data){
        this.data=data;
        this.owner.skin=G_ResPath.nailVipSkinPath.format(data.icon);
    }
}