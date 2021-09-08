import ItemBase from "./ItemBase";

export default class TrainPropItem extends ItemBase{
    constructor(){
        super();
    }

    init(){
        super.init();
    }


    setData(data){
        super.setData(data);

        this.viewProp.m_prop_decs.text="{0}   +{1}%".format(this.getPropName(data.key),data.val*100);
    }

    getPropName(key){
        switch(key){
            case PropKey.hp:
                return "血量"
            case PropKey.hurt:
                return "伤害";
            case PropKey.def:
                return "防御";
            case PropKey.defRate:
                return "免伤";
            case PropKey.speed:
                return "速度";
            case PropKey.bounceHurt:
                return "反伤";
            default:
                return "未命名";
        }
    }
}