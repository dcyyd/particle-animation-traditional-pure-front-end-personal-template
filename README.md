<div align="center">
    <h1>🚀 Personal Homepage</h1>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white" alt="TailwindCSS"></a>
    <a href="https://greensock.com/gsap/"><img src="https://img.shields.io/badge/-GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP"></a>
    <!-- 添加 MIT 许可证图标 -->
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License"></a>
</div>

> 基于纯前端技术栈的轻量化响应式个人主页，融合传统设计美学与动态粒子交互效果，适用于设计师、开发者或自由职业者的在线作品集 / 简历展示。

## 功能特性

- 🎨 **主题切换**：支持深色/浅色主题一键切换，使用CSS变量实现平滑过渡
- 📱 **响应式设计**：采用移动优先策略，完美适配各种屏幕尺寸
- ✨ **视觉特效**：包含粒子背景动画、3D卡片翻转、打字机效果等交互元素
- 📊 **数据可视化**：动态技能进度条展示专业技能水平
- 🎯 **项目展示**：支持分类筛选的3D项目卡片展示
- 📝 **表单验证**：完整的联系表单前端验证功能
- ⚡ **PWA支持**：可安装为渐进式Web应用

## 技术栈

### 核心框架

- **HTML5**：语义化标签，结构化内容
- **CSS3**：CSS变量、Flexbox/Grid布局、动画过渡
- **JavaScript**：ES6+语法，模块化开发

### 主要库/工具

- **Tailwind CSS**：实用优先的CSS框架
- **GSAP**：高性能动画库（ScrollTrigger/ScrollToPlugin）
- **Particles.js**：粒子背景效果
- **Typed.js**：打字机动画效果
- **Three.js**：3D渲染引擎（用于高级视觉效果）

### 构建与优化

- **PWA架构**：离线缓存、添加到主屏幕
- **SEO优化**：完整的元标签、结构化数据
- **性能优化**：懒加载、资源压缩

## 主题系统

项目使用CSS变量管理主题样式，主要变量包括：

```css
:root {
    /* 主色调 */
    --primary: #6366f1;
    --secondary: #8b5cf6;
  
    /* 背景色 */
    --bg-dark: #0f172a;
    --bg-light: #f8fafc;
  
    /* 文字色 */
    --text-dark: #e2e8f0;
    --text-light: #1e293b;
  
    /* 特殊效果 */
    --glass: rgba(255, 255, 255, 0.1);
    --backdrop-blur: 10px;
}
```

## 文件结构

```markdown
particle-animation-traditional-pure-front-end-personal-template/
├── README.md           # 项目说明文件
├── copyright.html      # 版权声明页面
├── index.html          # 项目主页
├── particles.json      # 粒子效果配置文件
├── privacy-policy.html # 隐私政策页面
├── rss.xml             # RSS 订阅源文件
├── sitemap.xml         # 网站地图文件
└── assets/             # 静态资源目录
    ├── css/            # 存放 CSS 样式文件
    ├── fonts/          # 存放字体文件
    ├── images/         # 存放图片资源
    └── js/             # 存放 JavaScript 脚本文件
```

## 开发指南

### 本地运行

```bash
# 克隆仓库
git clone https://gitee.com/fy_group/particle-animation-traditional-pure-front-end-personal-template.git
# 进入项目目录
cd home
# 无需构建，直接打开index.html即可
start index.html
```

### 自定义主题

1. 修改 `styles.css`中的CSS变量值
2. 调整 `particles.json`配置改变粒子效果
3. 更新 `manifest.json`中的PWA元数据

### 添加新功能

1. **添加页面**：创建新的HTML文件并更新导航菜单
2. **扩展多语言**：在JS中添加语言包并实现切换逻辑
3. **添加动画**：使用GSAP或Three.js创建新效果

## 最佳实践

- 使用语义化HTML5标签
- 遵循BEM命名规范
- 移动优先的响应式设计
- 渐进增强的用户体验
- 无障碍访问支持

## 许可证

本项目遵循开放且宽松的 MIT 许可证。该许可证赋予您极大的自由，您可以自由地使用、复制、修改、合并、发布、分发、再授权和/或出售本项目的副本。只需在所有副本或重要部分中包含版权声明和许可声明即可。

如需查看完整的许可证文本，请点击 [LICENSE](LICENSE) 文件。
