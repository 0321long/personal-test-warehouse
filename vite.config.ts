/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-04-25 10:37:42
 * @LastEditors: long
 * @LastEditTime: 2022-05-05 16:05:51
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    https: false, // 是否启用https
    cors: true, // 为开发服务器配置cors,默认启用并允许所有源
    open: false, // 服务启动时自动在浏览器打开应用
    port: 3000,
    strictPort: false, // 设置为true时端口被占用直接退出，不会尝试其他可用端口
    force: true, // 是否强制依赖预构建
    hmr: true, // 禁用或配置HMR连接（是否开启热更新）
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
