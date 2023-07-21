/*
 * @Author: Burson5
 * @Date: 2023-07-19 17:41:16
 * @LastEditTime: 2023-07-21 15:47:30
 * @LastEditors: Burson5
 * @Description:
 */

import {
  defaultElementTypeProvider,
  hiprint,
} from "./hiprint/hiprint.bundle.js";
// 调用浏览器打印js
import "./hiprint/plugins/jquery.hiwprint.js";
// 默认配置
import "./hiprint/hiprint.config";
// 样式
import "./hiprint/css/hiprint.css";
import "./hiprint/css/print-lock.css";

/**
 * 自动连接 / 连接
 * cb: 连接回调， (status, msg) {
 *   // status: true/false
 *   // msg: status == true 时 返回socket.connect回调 e
 * }
 */
let autoConnect = function (cb) {
  console.log("autoConnect");
  window.autoConnect = true;
  window.hiwebSocket &&
    window.hiwebSocket.hasIo() &&
    window.hiwebSocket.start(cb);
};

/**
 * 取消自动连接 / 断开连接
 */
let disAutoConnect = function () {
  console.log("disAutoConnect");
  window.autoConnect = false;
  window.hiwebSocket && window.hiwebSocket.hasIo() && window.hiwebSocket.stop();
};

disAutoConnect();

export { defaultElementTypeProvider, hiprint, disAutoConnect, autoConnect };
export default hiprint;
