/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author:
 * @Date: 2022-04-25 10:37:42
 * @LastEditors: long
 * @LastEditTime: 2022-05-07 17:05:10
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
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
    proxy: {
      '/reqAPI': {
        target: 'https://music.qier222.com/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/reqAPI/, ''),
      },
    },
  },
  // 配置文件路径别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: 'components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, './src/assets'),
      },
    ],
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
