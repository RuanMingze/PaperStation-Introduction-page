# PaperStation Browser 介绍页面

这是 PaperStation Browser 的官方介绍网站，基于 Next.js 14 构建，展示了浏览器的核心功能、技术栈和使用方法。

## 项目特点

- **现代化设计**：响应式布局，支持多种设备尺寸
- **平滑动画**：集成 AOS 动画库，提升用户体验
- **文字轮播**：动态展示浏览器的核心特性
- **性能优化**：Next.js 自动代码拆分和静态生成
- **技术栈展示**：清晰展示浏览器的技术架构

## 核心功能

1. **知识捕获**：智能识别和保存网页中的重要信息
2. **智能总结**：自动生成网页内容的摘要
3. **结构化导出**：支持多种格式导出知识内容
4. **现代化界面**：基于 Electron + Chromium 的流畅体验
5. **高度可定制**：支持主题切换和插件扩展

## 技术栈

### 前端
- **框架**：Next.js 14
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **动画**：AOS (Animate On Scroll)
- **图标**：Lucide React

### 浏览器核心
- **基础**：Electron 40 + Chromium
- **渲染**：WebView2 (Windows)
- **存储**：IndexedDB
- **网络**：自定义网络栈

## 开发指南

### 环境要求
- Node.js 18+
- pnpm 8+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm run dev
```

### 构建生产版本

```bash
pnpm run build
```

### 预览生产版本

```bash
pnpm run start
```

## 部署

### Netlify 部署（推荐）
1. 登录 Netlify 账号
2. 导入 GitHub 仓库
3. 配置构建命令：`pnpm run build`
4. 配置发布目录：`.next`
5. 点击部署

### Vercel 部署
1. 登录 Vercel 账号
2. 导入 GitHub 仓库
3. Vercel 会自动检测 Next.js 项目
4. 点击部署

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

### 贡献步骤
1. Fork 本仓库
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- **GitHub**：[https://github.com/RuanMingze/PaperStation-browser](https://github.com/RuanMingze/PaperStation-browser)
- **官方网站**：[https://paperstation.app](https://paperstation.app)

---

**PaperStation Browser** - 更聪明的浏览器，为知识而生
