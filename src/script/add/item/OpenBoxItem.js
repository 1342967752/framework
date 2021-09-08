import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";
import ItemBase from "./ItemBase";

export default class OpenBoxItem extends ItemBase{
    
    constructor(){
        super();
        
    }

    init(){
        super.init();
        this.owner.on(Laya.Event.CLICK,this,()=>{
            if(this.data.isOpen){
                return;
            }

            if(this.data.isAd){
                Tools.getIns().shareOrAd(this.viewProp.m_ad,()=>{
                    let ui=GameMgr.getUIMgr().getPageByName(GameMgr.getUIName().OpenBoxView);
                    ui.openBox(this.data.id,true);
                })
            }else{
                let ui=GameMgr.getUIMgr().getPageByName(GameMgr.getUIName().OpenBoxView);
                ui.openBox(this.data.id,false);
            }

        })
    }

    setData(data){
        super.setData(data);

        this.viewProp.m_open.visible=data.isOpen;
        this.viewProp.m_box.visible=!data.isOpen;

        this.viewProp.m_count.text=data.count;
        Tools.getIns().setAdBtnIcon(this.viewProp.m_ad);
        this.viewProp.m_ad.visible=data.isAd;
        
    }
    
}