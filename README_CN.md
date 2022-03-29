# sass-theme

一个基于 sass 的前端多主题方案

[English](README.md) | 中文文档

## Install

将 styles 下的 scss 复制到 项目中。

本项目是 vue+vite 的示例，可下载到本地，安装依赖后，直接执行命令预览效果

```sh
npm run dev
// 或者
yarn dev
```

## Use

在你需要使用主题的地方引入 scss 文件

```html
<style>
  @import "@/assets/styles/variables";
</style>
```

在你需要支持多主题样式 include 主题样式

```html
<style>
  img {
    @include theme("dark") {
      background-color: yellow;
    }
  }
</style>
```

切换主题处，动态设置 html 根节点的 data-theme 属性值

```js
document.documentElement.setAttribute("data-theme", "主题名")
```

## API

需要设置特定主题的样式。比如需要设置 dark 主题下 img 样式的背景颜色

```html
<style>
  img {
    @include theme("dark") {
      background-color: yellow;
    }
  }
</style>
```

使用变量，不同的主题自动加载不同的样式。 比如 dark 和 light 主题下 img 样式的背景颜色:

variables.scss 中添加变量

```scss
$themeVals: (
  dark: (
    img: (
      bgColor: yellow,
    ),
  ),
  light: (
    img: (
      bgColor: blue,
    ),
  ),
);
```

设置样式就不需要传递特殊的主题名称

```scss
<style>
  img {
    @include theme {
      background-color: themeVal('img.bgColor');
    }
  }
</style>
```

可以结合 css 变量 var，实现动态颜色主题效果。

在你要使用主题样式地方，这样定义。当然你也可以限制只有在某一个主题下才可以使用变量 var

```scss
<style>
h1 {
  color: var(--title-color);
}

// 限制只有 dark 主题才会生效
h1 {
  @include theme('dark') {
    color: var(--title-color);
  }
}
</style>
```

在页面上添加选择颜色输入框

```html
<input type="color" v-model="titleColor" @input="handleTitleColor" />
```

当颜色改变时，修改 var 变量的值

```js
document.documentElement.style.setProperty("--title-color", "输入框的颜色值")
```
