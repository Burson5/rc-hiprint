# GitHub Actions 工作流说明

本项目包含两个 GitHub Actions 工作流，用于自动化 CI/CD 流程。

## 工作流文件

### 1. CI 工作流 (`ci.yml`)

**触发条件：**
- 推送到 `main`、`master` 或 `develop` 分支
- 针对这些分支的 Pull Request

**功能：**
- 在多个 Node.js 版本 (16, 18, 20) 上测试
- 安装依赖
- TypeScript 类型检查
- 代码检查 (如果配置了 lint 脚本)
- 运行测试 (如果配置了 test 脚本)
- 构建项目
- 验证构建产物
- 上传构建产物作为 artifacts

### 2. 发布工作流 (`publish.yml`)

**触发条件：**
- 推送带有 `v*` 格式的 Git 标签 (如 `v1.0.0`)
- 手动触发 (可选择指定版本号)

**功能：**
- 安装依赖
- 运行测试 (如果有)
- 构建项目
- 发布到 NPM
- 创建 GitHub Release (仅限标签触发)

## 配置要求

### 必需的 Secrets

在 GitHub 仓库设置中添加以下 secrets：

1. **NPM_TOKEN**
   - 用于发布到 NPM
   - 获取方式：
     1. 登录 [npmjs.com](https://www.npmjs.com/)
     2. 点击头像 → Access Tokens
     3. 创建新的 Automation token
     4. 复制 token 并添加到 GitHub Secrets

2. **GITHUB_TOKEN** (自动提供)
   - 用于创建 GitHub Release
   - GitHub 自动提供，无需手动配置

### 配置 Secrets 步骤

1. 进入 GitHub 仓库页面
2. 点击 `Settings` 标签
3. 在左侧菜单中选择 `Secrets and variables` → `Actions`
4. 点击 `New repository secret`
5. 添加 `NPM_TOKEN`，值为你的 NPM token

## 使用方法

### 自动发布新版本

1. **更新版本号**
   ```bash
   # 更新 package.json 中的版本号
   pnpm version patch  # 或 minor, major
   ```

2. **推送标签**
   ```bash
   git push origin --tags
   ```

3. **自动流程**
   - GitHub Actions 会自动触发发布工作流
   - 构建项目并发布到 NPM
   - 创建 GitHub Release

### 手动发布

1. 进入 GitHub 仓库的 `Actions` 标签
2. 选择 `Publish to NPM` 工作流
3. 点击 `Run workflow`
4. 可选择指定版本号或使用当前 package.json 中的版本
5. 点击 `Run workflow` 按钮

## 开发建议

### 添加测试脚本

在 `package.json` 中添加测试脚本：

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 添加代码检查

在 `package.json` 中添加 lint 脚本：

```json
{
  "scripts": {
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix"
  }
}
```

### 版本管理最佳实践

1. **语义化版本控制**
   - `patch`: 修复 bug (1.0.0 → 1.0.1)
   - `minor`: 新功能，向后兼容 (1.0.0 → 1.1.0)
   - `major`: 破坏性变更 (1.0.0 → 2.0.0)

2. **发布流程**
   ```bash
   # 开发完成后
   git add .
   git commit -m "feat: add new feature"
   
   # 更新版本
   pnpm version minor
   
   # 推送代码和标签
   git push origin main
   git push origin --tags
   ```

3. **预发布版本**
   ```bash
   # 创建预发布版本
   pnpm version prerelease --preid=beta
   # 例如：1.0.0 → 1.0.1-beta.0
   ```

## 故障排除

### 常见问题

1. **NPM 发布失败**
   - 检查 NPM_TOKEN 是否正确配置
   - 确认 token 有发布权限
   - 检查包名是否已存在且无权限

2. **构建失败**
   - 检查 TypeScript 配置
   - 确认所有依赖都已正确安装
   - 查看构建日志中的具体错误信息

3. **版本冲突**
   - 确保要发布的版本号大于当前 NPM 上的版本
   - 检查 package.json 中的版本号格式

### 查看工作流状态

1. 进入 GitHub 仓库的 `Actions` 标签
2. 查看最近的工作流运行状态
3. 点击具体的运行记录查看详细日志
4. 如有失败，查看错误信息并进行相应修复

## 扩展配置

### 添加更多检查

可以在 CI 工作流中添加更多检查：

- 代码覆盖率检查
- 安全漏洞扫描
- 依赖更新检查
- 文档生成
- 性能测试

### 多环境发布

可以配置不同的发布环境：

- 开发环境：自动发布到 NPM 的 beta 标签
- 生产环境：发布到 NPM 的 latest 标签
- 私有仓库：发布到私有 NPM 仓库