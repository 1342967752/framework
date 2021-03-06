import UIRegisterInfos from "./UIRegistor_Base"

var _UIRegisterInfos = [
  // {
  //   // 关键字，全局唯一
  //   key: "tips",
  //   // z方向排序顺序，view：10-100，弹出窗：101-799, 广告窗800-999
  //   zOrder: 999,
  //   // 隐藏后是否销毁
  //   isAutoDestory: false,
  //   // 管理类，需继承自BaseUI
  //   cls: Tips,
  //   // 预制体位置
  //   prefab: "prefab/tipsView.json"
  // }
]

// 添加到UIRegisterInfos
_UIRegisterInfos.forEach(function( _UIRegisterInfo ) {
  UIRegisterInfos.push(_UIRegisterInfo)
})

// export
export {UIRegisterInfos as default}