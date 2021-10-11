import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 */
const config = defineConfig({
  build: {
    target: "es2020",
  },
  plugins: [vue()],
  resolve: {
    alias: {
      // Compile templates at runtime
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
  cacheDir: '.cache/vite',
})

export default config
