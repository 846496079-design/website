# 袁梦 - AI产品经理个人网站

这是一个基于 React 构建的个人网站，展示了 AI 产品经理的专业背景和作品。

## 功能特点

- **主页展示**：个人介绍、联系方式和作品展示
- **PRD 提示词模态框**：点击"控制开发的PRD"卡片可查看完整的 PRD 提示词
- **智猪博弈页面**：点击相关卡片可跳转到智猪博弈理论介绍页面
- **响应式设计**：适配不同屏幕尺寸
- **交互动画**：按钮悬停效果、平滑过渡

## 项目结构

```
.
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home/              # 主页组件
│   │   │   ├── index.jsx
│   │   │   └── index.module.scss
│   │   ├── PrdModal/          # PRD模态框组件
│   │   │   ├── index.jsx
│   │   │   └── index.module.scss
│   │   └── ZhiZhuBoYi/        # 智猪博弈页面组件
│   │       ├── index.jsx
│   │       └── index.module.scss
│   ├── images/                # 图片资源
│   ├── styles/
│   │   └── global.css         # 全局样式
│   ├── App.jsx                # 主应用组件
│   └── index.js               # 入口文件
├── package.json
├── webpack.config.js
├── .babelrc
└── README.md
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看效果

### 生产构建

```bash
npm run build
```

构建产物将生成在 `dist/` 目录中

## 技术栈

- **React 18** - 前端框架
- **Webpack 5** - 模块打包器
- **SCSS** - CSS 预处理器
- **Babel** - JavaScript 编译器

## 交互逻辑

1. 点击"查看作品"或"逻辑起点"/"提示词"卡片 → 跳转到智猪博弈页面
2. 点击"控制开发的PRD"卡片 → 打开 PRD 提示词模态框
3. 点击模态框的关闭按钮或背景 → 关闭模态框
4. 点击智猪博弈页面的返回按钮 → 返回主页
