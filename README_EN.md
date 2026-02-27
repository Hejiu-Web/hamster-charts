# Hamster Charts

![hamster-charts](https://gitee.com/hejiu45/hamster-charts/raw/master/public/logo.png)

> A visualization component library developed based on Vite and Vue3

[Official Documentation](https://gitee.com/link?target=http%3A%2F%2Fhamster-charts.hejiu45.top) | [GitHub](https://gitee.com/hejiu45/hamster-charts)

## Introduction

Hamster Charts (Hamster Chart) is a minimalist, simple, and easy-to-use visualization component library, independently developed by hejiu45. This component library is built based on Vite and Vue3, providing rich visual charts and layout components, suitable for scenarios such as data visualization large screens and monitoring system dashboards.

### Features

- 🚀 Built with Vite + Vue3, smooth development experience
- 📦 Rich components, covering various visualization scenarios
- 🎨 The theme style is flexible and customizable
- Responsive design, compatible with multiple screens
- Plug-in architecture, easy to expand

## Effect Display

| Full Component Usage Demonstration![img](https://gitee.com/hejiu45/hamster-charts/raw/master/doc/img/hejiu45_2026-02-27_15-29-14.png) | Body Component Usage Demonstration![img](https://gitee.com/hejiu45/hamster-charts/raw/master/doc/img/hejiu45_2026-02-27_15-30-05.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Header Title Component Usage Demonstration![img](https://gitee.com/hejiu45/hamster-charts/raw/master/doc/img/hejiu45_2026-02-27_15-30-24.png) | Scrollable Data List Component Usage Demonstration![img](https://gitee.com/hejiu45/hamster-charts/raw/master/doc/img/hejiu45_2026-02-27_15-30-40.png) |

## Component list

| Component                         | Description                        |
| --------------------------------- | ---------------------------------- |
| `h-body`                          | Main page container                |
| `h-header`                        | Header Component                   |
| `h-content`                       | Content Area Component             |
| `h-bottom`                        | Bottom Component                   |
| `h-left` / `h-right` / `h-center` | Left Middle Right Layout Component |
| `h-top`                           | Top Component                      |
| `h-chart`                         | Chart Container                    |
| `h-chart-title`                   | Chart Title                        |
| `h-item-chart`                    | Single Chart                       |
| `h-counters`                      | Digital Counter                    |
| `h-data-label`                    | data label                         |
| `h-button`                        | Button Component                   |
| `h-button-group`                  | Button group                       |
| `h-grid`                          | Grid Layout                        |
| `h-list`                          | List Component                     |
| `h-diy`                           | Custom Component                   |

## Install

### NPM

```
npm i hamster-charts
```

### PNPM

```
pnpm i hamster-charts
```

## Uninstall

```
npm uninstall hamster-charts
```

## Quick Start

### Global reference

```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 手动引用样式
import HamsterCharts from 'hamster-charts'
import 'hamster-charts/dist/hamster-charts.css'

createApp(App).use(HamsterCharts).mount('#app')
```

### Partial citation

```
<script setup>
import bg01 from "./assets/bg.png"
import header from "./assets/header.png"
import bg02 from "./assets/bg01.png"
// 局部引入
import { hBody, hHeader, hContent } from "hamster-charts"
</script>

<template>
  <h-body :imgUrl="bg01">
    <h-header :imgUrl="header"></h-header>
    <h-content :imgUrl="bg02"></h-content>
  </h-body>
</template>
```

## Project Structure

```
hamster-charts/
├── packages/              # 组件源码
│   ├── body/             # 主体容器
│   ├── header/           # 头部组件
│   ├── content/          # 内容区域
│   ├── chart/            # 图表组件
│   ├── counters/         # 数字计数器
│   ├── dataLabel/        # 数据标签
│   ├── grid/             # 网格布局
│   ├── list/             # 列表组件
│   └── ...               # 其他组件
├── public/               # 静态资源
├── src/                  # 示例代码
└── vite.config.js        # Vite 配置
```

## Developer Guide

```
# 克隆项目
git clone https://gitee.com/hejiu45/hamster-charts.git

# 安装依赖
npm install
# 或
pnpm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## Browser Support

Supports modern browsers (Chrome, Firefox, Safari, Edge) and browsers supported by Vue3.

## Extended plugin

**Plugin Name**  : dgpx-to-viewport

**URL**：[http://hamster-charts.hejiu45.top](https://gitee.com/link?target=http%3A%2F%2Fhamster-charts.hejiu45.top)

**Plugin Introduction**:

## PostCSS dgpx Adaptive Unit Plugin Detailed Explanation

### 1. Plugin Function

Customize units `dgpx` Convert to `vw`(viewport width unit) or `vh`(VH unit) to achieve responsive layout for large screens (such as 1920x1080).

------

### 2. Conversion Formula

#### 2.1 Basic Formulas

- `dgpx` → `px`

  1d gpx=dgpxRatio×p x

  - Default：`dgpxRatio = 2`that is `1dgpx = 2px`。

- `px` → `vw`(Width-related properties)

  v w=(pxValuedesignWidth)×100

  - `designWidth`: Design draft width (default" `1920px`）。

- `px` → `vh`(Highly Relevant Attributes)

  v h=(pxValuedesignHeight)×100

  - `designHeight`: Design draft height (default `1080px`）。

------

#### 2.2 Complete Formula

- Width-related properties (such as `width`、`font-size`）

  v w=(dgpxValue×dgpxRatiodesignWidth)×100

- Highly relevant attributes (such as `height`、`top`）

  v h=(dgpxValue×dgpxRatiodesignHeight)×100

------

#### 2.3 Example Calculation

| dgpx value | Convert to px | Convert to vw (designWidth=1920) | Convert to vh (designHeight=1080) |
| ---------- | ------------- | -------------------------------- | --------------------------------- |
| 50dgpx     | 100px         | 100/1920×100=5.2083*v**w*        | 100/1080×100=9.2593*v**h*         |
| 16dgpx     | 32px          | 32/1920×100=1.6667*v**w*         | 32/1080×100=2.9630*v**h*          |

------

### 3. Plugin Installation

#### 3.1 Installing via npm

```
pnpm add vite-plugin-dgpx-viewport
```

#### 3.2 Configure in Vite Project

```
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createDgpxViewportPlugin } from 'vite-plugin-dgpx-viewport';

export default defineConfig({
  plugins: [
    vue(),
    createDgpxViewportPlugin({
      designWidth: 1920,    // 设计稿宽度
      designHeight: 1080,   // 设计稿高度
      dgpxRatio: 2,         // 1dgpx = 2px
      unitPrecision: 4,     // 保留4位小数
      widthProps: ['font-size', 'width', 'left', 'right'], // 使用 vw 的属性
      heightProps: ['height', 'top', 'bottom']             // 使用 vh 的属性
    })
  ]
});
```

------

### 4. Usage Example

#### 4.1 Writing CSS in Vue Components

```
<template>
  <div class="container">
    <h1 class="title">大屏标题</h1>
    <div class="content"></div>
  </div>
</template>

<style scoped>
.title {
  font-size: 16dgpx;  /* 转换为 1.6667vw */
  margin: 8dgpx;      /* 转换为 0.8333vw */
}

.content {
  width: 960dgpx;     /* 转换为 100vw */
  height: 540dgpx;    /* 转换为 100vh */
  padding-top: 16dgpx;/* 转换为 1.4815vh */
}
</style>
```

#### 4.2 Converted CSS

```
.title {
  font-size: 1.6667vw;
  margin: 0.8333vw;
}

.content {
  width: 100vw;
  height: 100vh;
  padding-top: 1.4815vh;
}
```

------

### 5. Configuration Parameter Explanation

| Parameter Name  | Type     | Default value                                                | Explanation                                                  |
| --------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `designWidth`   | number   | 1920                                                         | Design draft width (unit: px), for `vw` Convert.             |
| `designHeight`  | number   | 1080                                                         | Design draft height (unit: px), for `vh` Convert.            |
| `dgpxRatio`     | number   | 2                                                            | `dgpx` To `px` the conversion ratio (1 dgpx = dgpxRatio * px. |
| `unitPrecision` | number   | 4                                                            | Converted `vw`/`vh` The number of decimal places to retain.  |
| `widthProps`    | string[] | `['font-size', 'width', 'left', 'right', 'margin', 'padding']` | Use `vw` List of CSS properties for the unit.                |
| `heightProps`   | string[] | `['height', 'top', 'bottom']`                                | Use `vh` List of CSS properties for the unit.                |

------

### 6. Advanced Usage

#### 6.1 Dynamic Design Draft Size (At Build Time)

Dynamically set the design draft size through environment variables：

```
// vite.config.js
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      createDgpxViewportPlugin({
        designWidth: parseInt(env.VITE_DESIGN_WIDTH) || 1920,
        designHeight: parseInt(env.VITE_DESIGN_HEIGHT) || 1080,
      })
    ]
  };
});
```

#### 6.2 Dynamic Adjustment at Runtime (Combined with VueUse)

Real-time response to screen changes in Vue components：

```
<script setup>
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const { width: screenWidth, height: screenHeight } = useWindowSize();

// 动态计算 dgpx 转换比例
const dgpxToVw = (value) => ((value * 2) / screenWidth.value) * 100;
const dgpxToVh = (value) => ((value * 2) / screenHeight.value) * 100;

const elementStyle = computed(() => ({
  width: `${dgpxToVw(960)}vw`, // 960dgpx → 100vw
  height: `${dgpxToVh(540)}vh` // 540dgpx → 100vh
}));
</script>

<template>
  <div class="dynamic-box" :style="elementStyle"></div>
</template>
```

------

### 7. Notes

1. **Attribute Classification**  : Ensure `widthProps` and `heightProps` Include all attributes that need to be converted.

2. **Extreme Screen Adaptation**  : Use media queries to set a minimum for small screens:

   ```
   .title {
     font-size: 16dgpx;
   }
   
   @media (max-width: 768px) {
     .title {
       font-size: 24px; /* 小屏幕固定值兜底 */
     }
   }
   ```

3. **Unit conflict**  : Avoid other CSS units (such as `rem`) mixing may lead to calculation confusion.

------

### 8. Plugin Source Code and Extensions

- **GitHub repository**：[vite-plugin-dgpx-viewport](https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fvite-plugin-dgpx-viewport)

- Feature Expansion Suggestions

  ：

  - support `dgrpx`(Custom units based on height).
  - Add CSS variable pattern (such as `--dgpx-ratio`）。

------

With the above configuration and formulas, you can easily achieve an adaptive layout for large screen scenarios!

## Contribution Guidelines

Welcome to submit Issues and Pull Requests!

## License

AGPL-3.0 License

## About Us

### Crane Wine Open Source

Hello everyone, I am Hejiu, from the "Hejiu Open Source" team. We are a group of tech enthusiasts, focusing on exploring various development technologies and best practices from front-end to back-end.

As an independent developer, my obsession with technology has reached the point of neglecting food and sleep. Whether it's delving into algorithm optimization, discussing the latest web frameworks, or solving complex system architecture problems, I am always enthusiastic about it.

In the "Crane Wine Open Source" team, we adhere to the concept of openness and sharing, and are committed to contributing our efforts through open source projects, while actively participating in various technical community activities.https://gitee.com/link?target=http%3A%2F%2Fhamster-charts.hejiu45.top)

------

Made with ❤️ by [Crane Wine Open Source](https://gitee.com/link?target=http%3A%2F%2Fhamster-charts.hejiu45.top%2Fsrc%2Fteam%2F%23%E9%B9%A4%E9%85%92%E5%BC%80%E6%BA%90)