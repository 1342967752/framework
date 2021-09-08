/*
* 对象池
*/
var _NodePoolMgr = function () {
	var _instance;

	function init() {
		// body ...
		console.log("Init G_NodePoolMgr Instance...")

		var _preloadedAssets = {};
		var _inLoadAsset = [];
		var _inLoadAssetFun = {};
		var _nodeRecycle = {};
		var maxLoad = 6;//最大的加载数量
		var curLoadCount = 0;//当前加载的数量

		var readyArray = [];

		return {
			preload(assets, cb) {

				let index = 0;
				let count = assets.length;
				let loadEnd = () => {
					index++;
					if (index == count) {
						if (cb) {
							cb();
						}
					}
				}

				for (let i = 0; i < assets.length; i++) {
					if (this.getAsset[assets[i]]) {
						loadEnd();
					} else {
						this.loadAsset(assets[i], loadEnd);
					}

				}
			},

			getNode(asset) {

				//先判断是否有缓存
				let node = this.getRecycleNode(asset);
				if (node) {
					node.active = true;
				} else {
					let nodeAsset = this.getAsset(asset);
					if (!nodeAsset) {
						console.error("没有预加载该对象:", asset);
						return null;
					}

					node = Laya.Sprite3D.instantiate(nodeAsset, null, false);
				}



				return node;
			},

			loadAsset(asset, callBack) {

				if (this.hasInLoad(asset)) {//正在加载
					this.addInLoadFun(asset, callBack);
					//console.log("资源正在加载列队:",asset);
					return;
				}

				if (curLoadCount >= maxLoad) {
					this.addInReady(asset);
					this.addInLoadFun(asset, callBack);
					return;
				}

				_inLoadAsset.push(asset);
				this.addInLoadFun(asset, callBack);
				curLoadCount++;
				Laya.Sprite3D.load(asset, Laya.Handler.create(null, (sprite) => {
					_preloadedAssets[asset] = sprite;
					this.removeInLoadAsset(asset);
					curLoadCount--;
					this.checkLoad();
				}))
			},


			/**
			 * 加入准备列队
			 */
			addInReady(asset) {
				if(readyArray.indexOf(asset)<0){
					//console.error("等待:",asset);
					readyArray.push(asset);
				}else{
					//console.error("重复加载:",asset);
				}
			},


			checkLoad() {

				if (curLoadCount >= maxLoad) {
					return;
				}

				if(readyArray.length==0){
					return;
				}


				for(let i=0;i<readyArray.length;i++){
					if (curLoadCount >= maxLoad) {
						return;
					}
					this.loadAsset(readyArray.shift());
				}

				
			},


			hasInLoad(asset) {
				let index = _inLoadAsset.indexOf(asset);
				return index >= 0;
			},

			addInLoadFun(asset, fun) {

				if(!fun){
					return;
				}

				if (!_inLoadAssetFun[asset]) {
					_inLoadAssetFun[asset] = [];
				}
				_inLoadAssetFun[asset].push(fun);
			},

			removeInLoadAsset(asset) {
				//console.error("完成:",asset);
				if (_inLoadAssetFun[asset]) {
					let array = _inLoadAssetFun[asset];
					for (let i = 0; i < array.length; i++) {
						array[i]();
					}
					_inLoadAssetFun[asset] = null;
				}
				let index = _inLoadAsset.indexOf(asset);
				if (index >= 0) {
					_inLoadAsset.splice(index, 1);
				}
			},

			getAsset(path) {
				return _preloadedAssets[path];
			},

			recycleNode(path, node) {
				if (!node) {
					return;
				}
				if (!_nodeRecycle[path]) {
					_nodeRecycle[path] = [];
				}
				node.active = false;
				let array = _nodeRecycle[path];
				let index = array.indexOf(node);
				if (index < 0) {
					array.push(node);
				}
			},

			getRecycleNode(path) {
				if (_nodeRecycle[path] && _nodeRecycle[path].length != 0) {
					return _nodeRecycle[path].shift();

				}

				return null;
			},

			canRecycle(node) {

			},

			printAssets() {
				console.log(_preloadedAssets)
			},


		}
	};

	return {
		getInstance: function () {
			if (!_instance) {
				_instance = init();
			}

			return _instance;
		}
	};
}();

// global
window.G_NodePoolMgr = _NodePoolMgr.getInstance()