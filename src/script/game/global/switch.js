import SwitchBase from "./switch_base";

class Switch extends SwitchBase {
	constructor() {
		super()
	}

	/**
     * 所有的开关数据加载完成
     */
	onInited() {
	}
}

// global
window.G_Switch = new Switch()