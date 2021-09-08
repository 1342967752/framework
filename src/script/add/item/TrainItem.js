
import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";
import ItemBase from "./ItemBase";
import TrainPropItem from "./TrainPropItem";

export default class TrainItem extends ItemBase{
    constructor(){
        super();
        this.curTrainIndex=0;
    }

    init(){
        super.init();

        this.owner.on(Laya.Event.CLICK,this,()=>{
            Tools.getIns().btnAction(this.owner, () => {
                if(!DriverLicense.getIns().canTrain(this.data[0].licenseType)){
                    G_PlatHelper.showToast("未达开启条件!");
                    return;
                 }
                
                //花费
                this.toGame(!DriverLicense.getIns().hasLicenseByLicenseType(this.data[0].licenseType));

            })
        })

        this.viewProp.m_prop.renderHandler=new Laya.Handler(this,this.propRender);
    }

    toGame(useItem){
        let trainView=GameMgr.getUIMgr().getPageByName(GameMgr.getUIName().TrainView);
        if(trainView){
            trainView.toGame(this.data[this.curTrainIndex],useItem);
        }
    }

    setData(data){
        super.setData(data);

        let firstData=null;//默认第一个是显示数据
        let index=-1;
        for(let i=0;i<data.length;i++){
            if(!DriverLicense.getIns().hasLicenseById(data[i].id)){
                index=i;
                break;
            }
        }
        //是否全部通关
        let isAllGet=index==-1;
        let curCount=0
        if(index==-1){
            index=0;
            curCount=data.length;
        }else{
            curCount=index;
        }

        this.curTrainIndex=index;

        this.viewProp.m_pro_txt.text="进度 {0}/{1}".format(curCount,data.length);
        
        firstData=data[index];
        
        this.viewProp.m_title.skin=G_ResPath.trainTitle.format(firstData.licenseType);
        this.viewProp.m_icon.skin=G_ResPath.trainIcon.format(firstData.licenseType);
        this.viewProp.m_diam.visible=false;
        this.viewProp.m_free_Text.visible=false;
        let temp=firstData.useMat.split('&');
        let num=parseInt(temp[1]);
        if(num>0){
             this.viewProp.m_diam.visible=true;
            this.viewProp.m_diam_count.text=G_Utils.bigNumber2StrNumber(BigNumber(num));
        }else{
            this.viewProp.m_free_Text.visible=true;
        }
        

        let lastHas=DriverLicense.getIns().hasLicenseByLicenseType(firstData.licenseType-1);
        if(firstData.licenseType!=1){
            this.viewProp.m_state_tips.skin="game/trainView/limit{0}.png".format(firstData.licenseType);
        }
       

        if(isAllGet){
            this.viewProp.m_state_txt.skin="game/trainView/txt3.png";
            this.viewProp.m_state_tips.visible=false;
            this.owner.skin="game/trainView/has_get.png";
        }else{
            if(lastHas){
                this.viewProp.m_state_txt.skin="game/trainView/txt2.png";
                this.viewProp.m_state_tips.visible=false;
                this.owner.skin="game/trainView/can_train.png";
            }else{
                this.viewProp.m_state_txt.skin="game/trainView/txt1.png";
                this.viewProp.m_state_tips.visible=true;
                this.owner.skin="game/trainView/dont_reach.png";
            }
            
        }

        this.owner.gray=!lastHas;
        let props=GameMgr.getPlayerInfo().getLicensePropObj(firstData.upProp);

        let array=[];
        let keys=Object.keys(props);
        for(let i=0;i<keys.length;i++){
            array.push({key:keys[i],val:props[keys[i]]});
        }
        this.viewProp.m_prop.array=array;

    }

    propRender(cell,index){
        let mgr=cell.getComponent(TrainPropItem);
        if(!mgr){
            mgr=cell.addComponent(TrainPropItem);
            mgr.init();
        }

        mgr.setData(this.viewProp.m_prop.getItem(index));
    }

}