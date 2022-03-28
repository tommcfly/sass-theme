<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"
import { onMounted, ref } from "vue"

// 设置 主题属性
const setThemeElAttr = () => {
  document.documentElement.setAttribute("data-theme", themeName.value)
}
onMounted(() => {
  setThemeElAttr()
})

const themeName = ref("dark")
const handleTheme = () => {
  themeName.value = themeName.value === "dark" ? "light" : "dark"
  setThemeElAttr()
}

const titleColor = ref("#fff")
const handleTitleColor = () => {
  document.documentElement.style.setProperty("--title-color", titleColor.value)
}
</script>

<template>
  <div>
    <button @click="handleTheme">
      {{ themeName == "dark" ? "白色主题" : "黑色主题" }}
    </button>
    <div>
      <span>修改标题文字</span>
      <input type="color" v-model="titleColor" @input="handleTitleColor" />
    </div>
  </div>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style lang="scss">
@import "@/assets/styles/variables";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
img {
  @include theme("dark") {
    background-color: yellow;
  }
}
</style>
