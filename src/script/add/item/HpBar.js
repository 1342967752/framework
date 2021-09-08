import MapMgr from "../Mgr/MapMgr";

export default class HpBar extends Laya.Script {
    constructor() {
        super();
        this.pro = null;
        this.follow = null;

        this.forwardTemp = new Laya.Vector3();
        this.posTemp1 = new Laya.Vector3(0, 0, 0)
    }

    init() {
        this.pro = G_UIHelper.seekNodeByName(this.owner, "hpBar");
    }

    setPro(val) {
        this.pro.value = val;
    }

    setFollowNode(node) {
        this.follow = node;
    }

    setShow(show) {
        this.owner.visible = show;
    }

    onUpdate() {
        if (this.follow && !this.follow.destroyed) {

            //判断是否显示
            MapMgr.getIns().cameraMgr.owner.transform.getForward(this.forwardTemp);
            this.forwardTemp.y = 0;
            Laya.Vector3.subtract(MapMgr.getIns().cameraMgr.owner.transform.position, this.follow.transform.position, this.posTemp1);
            this.posTemp1.y = 0;
            let dot = Laya.Vector3.dot(this.forwardTemp, this.posTemp1);
            //反向不显示血条
            if (dot < 0) {
                this.owner.y = -10000;
            } else {
                Laya.Vector3.subtract(this.follow.transform.position, MapMgr.getIns().cameraMgr.owner.transform.position, this.posTemp1);
                let dis = Laya.Vector3.scalarLength(this.posTemp1);
                dis = 30 - dis;
                dis = dis < 0 ? 0 : dis;
                let pos2D = MapMgr.getIns().cameraMgr.worldPosToScreenPos(this.follow.transform.position);
                //高度显示
                this.owner.x = pos2D.x;
                this.owner.y = pos2D.y - (0.7 + dis *0.03) * 50;

                //大小显示
                this.owner.scaleX =(1 + dis *0.03) ;
                this.owner.scaleY=this.owner.scaleX;
            }

        }
    }
}