# sass-theme

A front-end multi-theme solution based on sass

English | [中文文档](README_CN.md)

## Install

Copy the scss under styles into the project.

This project is an example of vue+vite, which can be downloaded locally. After installing the dependencies, directly execute the command to preview the effect

```sh
npm run dev
// or
yarn dev
```

##Use

Import the scss file where you need to use the theme

```html
<style>
  @import "@/assets/styles/variables";
</style>
```

When you need to support multiple theme styles include theme styles

```html
<style>
  img {
    @include theme("dark") {
      background-color: yellow;
    }
  }
</style>
```

When switching themes, dynamically set the value of the data-theme attribute of the html root node

```js
document.documentElement.setAttribute("data-theme", "theme name")
```

##API

Needs to be styled for a specific theme. For example, you need to set the background color of the img style under the dark theme

```html
<style>
  img {
    @include theme("dark") {
      background-color: yellow;
    }
  }
</style>
```

Using variables, different themes automatically load different styles. For example, the background color of img style under dark and light themes:

Add variables to variables.scss

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

Setting styles doesn't require passing a special theme name

```scss
<style>
  img {
    @include theme {
      background-color: themeVal('img.bgColor');
    }
  }
</style>
```

It can be combined with css variable var to achieve dynamic color theme effect.

Where you want to use the theme style, define it like this. Of course, you can also restrict the use of variable var only under a certain theme

```scss
<style>
h1 {
  color: var(--title-color);
}

// Restriction only applies to dark themes
h1 {
  @include theme('dark') {
    color: var(--title-color);
  }
}
</style>
```

Add a select color input box on the page

```html
<input type="color" v-model="titleColor" @input="handleTitleColor" />
```

When the color changes, modify the value of the var variable

```js
document.documentElement.style.setProperty(
  "--title-color",
  "The color value of the input box"
)
```
