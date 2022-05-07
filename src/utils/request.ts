/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-07 11:14:04
 * @LastEditors: long
 * @LastEditTime: 2022-05-07 17:06:45
 */
import service from './http';

export const getBanner = (data: Object) => {
  return service({
    url: '/banner',
    method: 'get',
    data
  })
}