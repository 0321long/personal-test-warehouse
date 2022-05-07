/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-07 16:12:41
 * @LastEditors: long
 * @LastEditTime: 2022-05-07 16:24:02
 */
import { createStore } from 'vuex';
import appStore from "./modules/app";


// 调用createStore
export default createStore({
    modules: {
        appStore,
    }
})