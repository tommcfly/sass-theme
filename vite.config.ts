import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'

const absolutePath = (pathStr) => path.resolve(__dirname, pathStr)



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': absolutePath('./src')
    }
  }
})
