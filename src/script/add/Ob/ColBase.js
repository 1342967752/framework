import DrawLine from "../gameMgr/DrawLine";
import GameMgr from "../Mgr/GameMgr";

/**碰撞的基类
 * 
 */
export default class ColBase extends Laya.Script {

    constructor() {
        super();
        this.toPlayerDis = 10000;
        this.lastCols = [];
        this.colType = 0;
        this.node = null;
        this.buildRang = 0.5;//建筑的半径
        this.buildRangSqu = 1;//半径的平方
    }

    init() {

        this.buildRangSqu = this.buildRang * this.buildRang;
        if (this.owner instanceof Laya.Sprite3D) {
            this.node = this.owner;
        }

        //初始化检测范围
        if (GameMgr.getIns().isTest&&G_PlatHelper.isWINPlatform()) {
            let drawLine = new DrawLine();
            drawLine.init(this.owner);
            let rang = this.buildRang;
            drawLine.drawBox(rang, rang);
        }
    }

    getPos() {
        return this.owner.transform.position;
    }


    addCols(mgr) {
        if (this.lastCols.indexOf(mgr) < 0) {
            mgr.colliderEnterObj && mgr.colliderEnterObj(this.colType, this);
            this.lastCols.push(mgr);
        }
    }

    removeCols(mgr) {
        let index = this.lastCols.indexOf(mgr);
        if (index >= 0) {
            this.lastCols.splice(index, 1);
            mgr.collideExitObj && mgr.collideExitObj(this.colType, this);
        }
    }


    unResgist() {
       
    }

    resginst() {
        
    }

    checkRegist(){
        
    }
}