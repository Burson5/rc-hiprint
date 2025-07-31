# rc-hiprint

一个基于 React 的 hiprint 打印组件库，提供强大的可视化打印设计和打印功能。

[![NPM Version](https://img.shields.io/npm/v/rc-hiprint.svg)](https://www.npmjs.com/package/rc-hiprint)
[![NPM Downloads](https://img.shields.io/npm/dm/rc-hiprint.svg)](https://www.npmjs.com/package/rc-hiprint)
[![GitHub Actions](https://github.com/Burson5/rc-hiprint/workflows/CI/badge.svg)](https://github.com/Burson5/rc-hiprint/actions)
[![GitHub Actions](https://github.com/Burson5/rc-hiprint/workflows/Publish%20to%20NPM/badge.svg)](https://github.com/Burson5/rc-hiprint/actions)
[![License](https://img.shields.io/npm/l/rc-hiprint.svg)](https://github.com/Burson5/rc-hiprint/blob/main/LICENSE)

## 📦 安装

```bash
npm install rc-hiprint
# 或
yarn add rc-hiprint
# 或
pnpm add rc-hiprint
```

## 🚀 快速开始

### 基础使用

```javascript
import hiprint, { defaultElementTypeProvider, autoConnect, disAutoConnect } from 'rc-hiprint';

// 初始化 hiprint
hiprint.init();

// 添加默认元素类型提供者
hiprint.PrintElementTypeManager.addElementTypes("default", defaultElementTypeProvider);

// 创建打印模板
const template = hiprint.PrintTemplate();

// 设计打印模板
template.design('#hiprint-printTemplate');

// 打印预览
template.print(data);
```

### 连接打印服务

```javascript
// 自动连接打印服务
autoConnect((status, msg) => {
  if (status) {
    console.log('连接成功', msg);
  } else {
    console.log('连接失败', msg);
  }
});

// 断开连接
disAutoConnect();
```

## 📋 功能特性

- ✅ **可视化设计器**: 拖拽式打印模板设计
- ✅ **多种元素类型**: 支持文本、图片、表格、条形码、二维码等
- ✅ **打印预览**: 实时预览打印效果
- ✅ **网络打印**: 支持远程打印服务连接
- ✅ **自定义配置**: 丰富的配置选项
- ✅ **插件扩展**: 支持水印、二维码等插件
- ✅ **TypeScript**: 完整的类型定义支持

## 🔧 API 参考

### 主要导出

| 导出项 | 类型 | 描述 |
|--------|------|------|
| `hiprint` | Object | hiprint 核心对象 |
| `defaultElementTypeProvider` | Object | 默认元素类型提供者 |
| `autoConnect` | Function | 自动连接打印服务 |
| `disAutoConnect` | Function | 断开打印服务连接 |

### hiprint 核心方法

#### `hiprint.init(options?)`
初始化 hiprint

**参数:**
- `options` (可选): 初始化配置选项

#### `hiprint.PrintTemplate(options?)`
创建打印模板实例

**参数:**
- `options` (可选): 模板配置选项

**返回:**
- `PrintTemplate`: 打印模板实例

#### `hiprint.PrintElementTypeManager`
元素类型管理器

**方法:**
- `addElementTypes(name, provider)`: 添加元素类型提供者
- `getElementTypes(name)`: 获取元素类型提供者

### PrintTemplate 实例方法

#### `template.design(selector, options?)`
在指定容器中启动设计器

**参数:**
- `selector`: CSS 选择器或 DOM 元素
- `options` (可选): 设计器配置选项

#### `template.print(data, options?)`
打印模板

**参数:**
- `data`: 打印数据
- `options` (可选): 打印配置选项

#### `template.preview(data, options?)`
预览模板

**参数:**
- `data`: 预览数据
- `options` (可选): 预览配置选项

#### `template.getJson()`
获取模板 JSON 配置

**返回:**
- `Object`: 模板配置对象

#### `template.setJson(json)`
设置模板 JSON 配置

**参数:**
- `json`: 模板配置对象

## ⚙️ 配置选项

### 全局配置 (HIPRINT_CONFIG)

```javascript
window.HIPRINT_CONFIG = {
  movingDistance: 1.5,        // 鼠标拖动距离
  paperHeightTrim: 1,         // 纸张高度修正
  showPosition: true,         // 显示坐标位置
  positionLineMode: false,    // 坐标线模式
  positionUnit: true,         // 显示坐标单位
  showSizeBox: true,          // 显示尺寸框
  adsorbMin: 3,              // 吸附最小距离
  showAdsorbLine: true,       // 显示吸附线
  adsorbLineMin: 6,          // 吸附线最小距离
  paperNumberContinue: true,  // 连续页码
  // ... 更多配置选项
};
```

### 设计器配置

```javascript
const designOptions = {
  width: 800,           // 设计器宽度
  height: 600,          // 设计器高度
  scaleLevel: 1,        // 缩放级别
  showGrid: true,       // 显示网格
  gridSize: 10,         // 网格大小
  // ... 更多选项
};

template.design('#container', designOptions);
```

## 🔌 插件系统

### 内置插件

#### 水印插件
```javascript
// 水印插件已自动加载
// 在元素类型中可以使用水印功能
```

#### 二维码插件
```javascript
// 二维码插件已自动加载
// 支持生成各种格式的二维码
```

#### 浏览器打印插件
```javascript
// jquery.hiwprint.js 提供浏览器打印功能
// 自动集成，无需额外配置
```

## 📱 元素类型

### 默认元素类型

- **文本元素**: 支持富文本、字体设置、对齐方式等
- **图片元素**: 支持图片插入、缩放、定位等
- **表格元素**: 支持动态表格、表头设置、数据绑定等
- **条形码元素**: 支持多种条形码格式
- **二维码元素**: 支持二维码生成和自定义
- **线条元素**: 支持直线、虚线等
- **矩形元素**: 支持边框、填充等

### 自定义元素类型

```javascript
// 创建自定义元素类型提供者
const customProvider = {
  title: '自定义元素',
  printElementTypes: [
    {
      title: '自定义文本',
      type: 'text',
      options: {
        // 元素配置
      }
    }
  ]
};

// 注册自定义元素类型
hiprint.PrintElementTypeManager.addElementTypes('custom', customProvider);
```

## 🎨 样式定制

### CSS 变量

```css
:root {
  --hiprint-primary-color: #1890ff;
  --hiprint-border-color: #d9d9d9;
  --hiprint-background-color: #ffffff;
  /* 更多 CSS 变量 */
}
```

### 自定义样式

```css
/* 覆盖默认样式 */
.hiprint-printTemplate {
  /* 自定义设计器样式 */
}

.hiprint-printElement {
  /* 自定义元素样式 */
}
```

## 🔧 开发

### 环境要求

- Node.js >= 14
- npm/yarn/pnpm

### 开发命令

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 构建依赖
pnpm build:deps

# 发布前检查
pnpm prepublishOnly
```

### 项目结构

```
rc-hiprint/
├── src/
│   ├── index.ts                    # 主入口文件
│   ├── global.d.ts                 # 全局类型定义
│   └── hiprint/
│       ├── hiprint.bundle.js       # hiprint 核心库
│       ├── hiprint.config.js       # 默认配置
│       ├── css/                    # 样式文件
│       │   ├── hiprint.css         # 主样式
│       │   ├── print-lock.css      # 打印锁定样式
│       │   └── image/              # 图片资源
│       ├── plugins/                # 插件目录
│       │   ├── jquery.hiwprint.js  # 浏览器打印插件
│       │   ├── qrcode.js          # 二维码插件
│       │   └── watermark.js       # 水印插件
│       └── etypes/                 # 元素类型
│           └── default-etyps-provider.js
├── dist/                           # 构建输出
├── .fatherrc.ts                   # Father 配置
├── tsconfig.json                  # TypeScript 配置
└── package.json                   # 项目配置
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 🔧 开发

### 本地开发

```bash
# 克隆项目
git clone https://github.com/Burson5/rc-hiprint.git
cd rc-hiprint

# 安装依赖
pnpm install

# 启动开发模式
pnpm dev

# 构建项目
pnpm build

# 类型检查
pnpm typecheck
```

### 发布流程

本项目使用 GitHub Actions 自动化发布流程：

#### 自动发布（推荐）

1. **更新版本并发布**
   ```bash
   # 补丁版本 (1.0.0 → 1.0.1)
   pnpm release:patch
   
   # 次要版本 (1.0.0 → 1.1.0)
   pnpm release:minor
   
   # 主要版本 (1.0.0 → 2.0.0)
   pnpm release:major
   
   # 预发布版本 (1.0.0 → 1.0.1-0)
   pnpm release:prerelease
   ```

2. **仅更新版本号**
   ```bash
   pnpm version:patch  # 或 version:minor, version:major
   git push origin --tags
   ```

#### 手动发布

1. 进入 [GitHub Actions](https://github.com/Burson5/rc-hiprint/actions)
2. 选择 "Publish to NPM" 工作流
3. 点击 "Run workflow" 手动触发发布

#### 发布要求

- 需要配置 `NPM_TOKEN` secret（仓库管理员已配置）
- 推送的标签格式为 `v*`（如 `v1.0.0`）
- 确保所有测试通过
- 确保构建成功

### CI/CD 流程

- **持续集成**：每次推送和 PR 都会触发 CI 检查
- **自动发布**：推送版本标签时自动发布到 NPM
- **多版本测试**：在 Node.js 16, 18, 20 上测试
- **构建验证**：确保包可以正确构建和打包

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情

## 🔗 相关链接

- [GitHub 仓库](https://github.com/Burson5/rc-hiprint)
- [NPM 包](https://www.npmjs.com/package/rc-hiprint)
- [问题反馈](https://github.com/Burson5/rc-hiprint/issues)

## 📞 联系方式

- 作者: Burson5
- 邮箱: burson5@qq.com

---

如果这个项目对你有帮助，请给个 ⭐️ Star 支持一下！