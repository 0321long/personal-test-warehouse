/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-05 15:01:58
 * @LastEditors: long
 * @LastEditTime: 2022-05-06 18:24:51
 */
import { createRouter, createWebHashHistory } from 'vue-router';
const Home = () => import('../views/Home/index.vue')
const Music = () => import('../views/Music/index.vue')
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Music',
    component: Music
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})