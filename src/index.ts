/*
 * @Author: Burson5
 * @Date: 2023-07-19 17:41:16
 * @LastEditTime: 2023-07-20 10:50:26
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

export { defaultElementTypeProvider, hiprint };
export default hiprint;
