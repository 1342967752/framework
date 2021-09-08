/*
* 增加Image黑化功能
* 可以通过其dark属性设置
*/

// add dark function into Laya.UIUtils
let UIUtils = Laya.UIUtils;

UIUtils.darkFilter = new Laya.ColorFilter([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
UIUtils.dark = function (traget, isDark = true) {
	if (isDark) {
		UIUtils.addFilter(traget, UIUtils.darkFilter);
	}
	else {
		UIUtils.clearFilter(traget, Laya.ColorFilter);
	}
}

let Sprite = Laya.Sprite;
Sprite.drawToCanvas = function(sprite, _renderType, canvasWidth, canvasHeight, offsetX, offsetY) {
	offsetX -= sprite.x;
	offsetY -= sprite.y;
	offsetX |= 0;
	offsetY |= 0;
	canvasWidth |= 0;
	canvasHeight |= 0;
	var ctx = new Laya.Context();
	ctx.size(canvasWidth, canvasHeight);
	ctx.asBitmap = true;
	ctx._targets.start();
	ctx._targets.clear(0, 0, 0, 0);
	Laya.RenderSprite.renders[_renderType]._fun(sprite, ctx, offsetX, offsetY);
	ctx.flush();
	ctx._targets.end();
	ctx._targets.restore();
	var dt = ctx._targets.getData(0, 0, canvasWidth, canvasHeight);
	ctx.destroy();
	// var imgdata = new ImageData(canvasWidth, canvasHeight);
	var canvx = new Laya.HTMLCanvas(true);
	canvx.size(canvasWidth, canvasHeight);
	var ctx2dx = canvx.getContext('2d');
	var imgdata = ctx2dx.getImageData(0, 0, canvasWidth, canvasHeight);
	var lineLen = canvasWidth * 4;
	var dst = imgdata.data;
	var y = canvasHeight - 1;
	var off = y * lineLen;
	var srcoff = 0;
	for (; y >= 0; y--) {
		dst.set(dt.subarray(srcoff, srcoff + lineLen), off);
		off -= lineLen;
		srcoff += lineLen;
	}
	var canv = new Laya.HTMLCanvas(true);
	canv.size(canvasWidth, canvasHeight);
	var ctx2d = canv.getContext('2d');
	ctx2d.putImageData(imgdata, 0, 0);
	return canv;
}

// add get/set(dark) funcs into Laya.UIComponent
Laya.UIComponent.prototype._dark = false
Object.defineProperty(Laya.UIComponent.prototype, "dark", {
	get: function() {
		return this._dark;
	},
	set: function(value) {
		if (value !== this._dark) {
			this._dark = value;
			Laya.UIUtils.dark(this, value);
		}
	}
})

/*
* 修复List组件，同一Item无法连续点击
*/
// fix Laya.ui.List bug: can not click the same item twice or more...
Laya.List.prototype.onCellMouse = function(e) {
	if (e.type === Laya.Event.MOUSE_DOWN)
		this._isMoved = false;
	var cell = e.currentTarget;
	var index = this._startIndex + this._cells.indexOf(cell);
	if (index < 0)
		return;
	if (e.type === Laya.Event.CLICK || e.type === Laya.Event.RIGHT_CLICK) {
		if (this.selectEnable && !this._isMoved)
			this.selectedIndex = index;
		else
			this.changeCellState(cell, true, 0);
	}
	else if (e.type === Laya.Event.MOUSE_OVER || e.type === Laya.Event.MOUSE_OUT) {
		this.changeCellState(cell, e.type === Laya.Event.MOUSE_OVER, 0);
	}
	this.mouseHandler && this.mouseHandler.runWith([e, index]);
}

Laya.List.prototype.changeCells = function(e) {
	this._cellChanged = false;
	if (this._itemRender) {
		this.scrollBar = this.getChildByName("scrollBar");
		var cell = this._getOneCell();
		var cellWidth = (cell.width + this._spaceX) || 1;
		var cellHeight = (cell.height + this._spaceY) || 1;
		if (this._width > 0)
			this._repeatX2 = this._isVertical ? Math.round(this._width / cellWidth) : Math.ceil(this._width / cellWidth);
		if (this._height > 0)
			this._repeatY2 = this._isVertical ? Math.ceil(this._height / cellHeight) : Math.round(this._height / cellHeight);
		var listWidth = this._width ? this._width : (cellWidth * this.repeatX - this._spaceX);
		var listHeight = this._height ? this._height : (cellHeight * this.repeatY - this._spaceY);
		this._cellSize = this._isVertical ? cellHeight : cellWidth;
		this._cellOffset = this._isVertical ? (cellHeight * Math.max(this._repeatY2, this._repeatY) - listHeight - this._spaceY) : (cellWidth * Math.max(this._repeatX2, this._repeatX) - listWidth - this._spaceX);
		if (this._isVertical && this.vScrollBarSkin)
			this._scrollBar.height = listHeight;
		else if (!this._isVertical && this.hScrollBarSkin)
			this._scrollBar.width = listWidth;
		this.setContentSize(listWidth, listHeight);
		var numX = this._isVertical ? this.repeatX : this.repeatY;
		var numY = this._isVertical ? this.repeatY : this.repeatX;
		this._createItems(0, numX, numY);
		this._createdLine = numY;
		if (this._array) {
			this.array = this._array;
			this.runCallLater(this.renderItems);
		}
	}
}

/*
* 修复uv不流动
*/
Laya.Animator.prototype._setClipDatasToNode = function(stateInfo, additive, weight, isFirstLayer) {
	var realtimeDatas = stateInfo._realtimeDatas;
	var nodes = stateInfo._clip._nodes;
	var nodeOwners = stateInfo._nodeOwners;
	for (var i = 0, n = nodes.count; i < n; i++) {
		var nodeOwner = nodeOwners[i];
		if (nodeOwner) {
			var pro = nodeOwner.propertyOwner;
			if (pro) {
				switch (nodeOwner.type) {
				case 0:
					var proPat = nodeOwner.property;
					var m = proPat.length - 1;
					
					
					for (var j = 0; j < m; j++) {
					pro = pro[proPat[j]];
					
					if (!pro)
						break;
					}
					this._applyFloat(pro, proPat[m], nodeOwner, additive, weight, isFirstLayer, realtimeDatas[i]);
					//#region 修复uv不流动
					let isVec=pro instanceof Laya.Vector4;
					if(isVec){
					let lastPro=nodeOwner.propertyOwner;
					for(let i=0;i<m;i++){
						lastPro=lastPro[proPat[i]];
						if(i==m-2){
						lastPro[proPat[i+1]]=pro;
						break;
						}
					}
					}
					//#endregion
					break;
				case 1:
					var localPos = pro.localPosition;
					this._applyPositionAndRotationEuler(nodeOwner, additive, weight, isFirstLayer, realtimeDatas[i], localPos);
					pro.localPosition = localPos;
					break;
				case 2:
					var localRot = pro.localRotation;
					this._applyRotation(nodeOwner, additive, weight, isFirstLayer, realtimeDatas[i], localRot);
					pro.localRotation = localRot;
					break;
				case 3:
					var localSca = pro.localScale;
					this._applyScale(nodeOwner, additive, weight, isFirstLayer, realtimeDatas[i], localSca);
					pro.localScale = localSca;
					break;
				case 4:
					var localEuler = pro.localRotationEuler;
					this._applyPositionAndRotationEuler(nodeOwner, additive, weight, isFirstLayer, realtimeDatas[i], localEuler);
					pro.localRotationEuler = localEuler;
					break;
				}
				nodeOwner.updateMark = this._updateMark;
			}
		}
	}
}

Object.defineProperty(Laya.List.prototype, "selectedIndex", {
	get: function() {
		return this._selectedIndex;
	},
	set: function(value) {
		this._selectedIndex = value;
		this.changeSelectStatus();
		this.event(Laya.Event.CHANGE);
		this.selectHandler && this.selectHandler.runWith(value);
		this.startIndex = this._startIndex;
	}
})

Object.defineProperty(Laya.CharRender_Canvas.prototype, "canvasWidth", {
	get: function() {
		return Laya.CharRender_Canvas.canvas.width;
	},
	set: function(w) {
		if (Laya.CharRender_Canvas.canvas.width == w)
			return;
			Laya.CharRender_Canvas.canvas.width = w;
		if (w > 2048) {
			console.warn("画文字设置的宽度太大，超过2048了");
		}
		this.ctx.setTransform(this.lastScaleX, 0, 0, this.lastScaleY, 0, 0);
	}
})

Laya.getMiniAdpter = function () {
	if (Laya.MiniAdpter) {
		return Laya.MiniAdpter
	}
	else if (Laya.QQMiniAdapter) {
		return Laya.QQMiniAdapter
	}
	else if (Laya.VVMiniAdapter) {
		return Laya.VVMiniAdapter
	}
	else if (Laya.QGMiniAdapter) {
		return Laya.QGMiniAdapter
	}
	else if (Laya.TTMiniAdapter) {
		return Laya.TTMiniAdapter
	}
	else if (Laya.HWMiniAdapter) {
		return Laya.HWMiniAdapter
	}

	return null
}

/*
* 修复loader不支持nativefiles的bug
*/
// fix Laya.Loader bug: do not support nativefiles...
// Laya.Loader.prototype._loadImage = function(url, isformatURL = false) {
// 	var _this = this;
// 	if (isformatURL)
//	 		url = Laya.URL.formatURL(url);
// 	var onLoaded;
// 	var onError = function () {
// 		_this.event(Laya.Event.ERROR, "Load image failed");
// 	};
// 	if (this._type === "nativeimage") {
// 		onLoaded = function (image) {
// 			_this.onLoaded(image);
// 		};
// 		this._loadHtmlImage(url, this, onLoaded, this, onError);
// 	}
// 	else {
// 		var ext = Laya.Utils.getFileExtension(url);
// 		if (ext === "ktx" || ext === "pvr") {
// 			onLoaded = function (imageData) {
// 				var format;
// 				switch (ext) {
// 					case "ktx":
// 						format = 5;
// 						break;
// 					case "pvr":
// 						format = 12;
// 						break;
// 				}
// 				var tex = new Laya.Texture2D(0, 0, format, false, false);
// 				tex.wrapModeU = Laya.BaseTexture.WARPMODE_CLAMP;
// 				tex.wrapModeV = Laya.BaseTexture.WARPMODE_CLAMP;
// 				tex.setCompressData(imageData);
// 				tex._setCreateURL(url);
// 				_this.onLoaded(tex);
// 			};
// 			this._loadHttpRequest(url, Laya.Loader.BUFFER, this, onLoaded, null, null, this, onError);
// 		}
// 		else {
// 			onLoaded = function (image) {
// 				var tex = new Laya.Texture2D(image.width, image.height, 1, false, false);
// 				tex.wrapModeU = Laya.BaseTexture.WARPMODE_CLAMP;
// 				tex.wrapModeV = Laya.BaseTexture.WARPMODE_CLAMP;
// 				tex.loadImageSource(image, true);
// 				tex._setCreateURL(url);
// 				_this.onLoaded(tex);
// 			};
// 			this._loadHtmlImage(url, this, onLoaded, this, onError);
// 		}
// 	}
// }