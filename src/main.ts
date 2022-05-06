/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-04-25 10:37:42
 * @LastEditors: long
 * @LastEditTime: 2022-05-05 18:00:00
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import directive from "./common/directives";

const app = createApp(App)

// console.log(import.meta.env.VITE_APP_TITLE);

// app.use(ElementPlus)
app.use(router)
Object.keys(directive).forEach(item => app.directive(item, directive[item]))
app.mount('#app')