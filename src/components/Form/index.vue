<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: long
 * @Date: 2022-05-05 14:54:17
 * @LastEditors: long
 * @LastEditTime: 2022-05-06 14:16:48
-->
<template>
  <div class="custom-index-box">
    <el-form :form="formData" label-width="120px">
      <el-form-item label="姓名：" :drag="true">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄：">
        <el-input v-model="formData.age"></el-input>
      </el-form-item>
      <el-form-item label="性别：">
        <el-select v-model="formData.sex">
          <el-option value="男">男</el-option>
          <el-option value="女">女</el-option>
        </el-select>
        <!-- <el-input v-model="formData.sex"></el-input> -->
      </el-form-item>
      <el-form-item label="身高：">
        <el-input v-model="formData.height">
          <template #append>cm</template>
        </el-input>
      </el-form-item>
      <el-form-item label="体重：">
        <el-input v-model="formData.heavy" v-clickAgain @input="changeHeavy">
          <template #append>kg</template>
        </el-input>
      </el-form-item>
      <!-- <p v-ellipsis :arg="'aaa'">测试自定义指令是否生效生效不生效不生效也生效</p> -->
    </el-form>
  </div>
</template>
<script lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
    const formData = reactive({
      name: '小明',
      age: '22',
      sex: '男',
      height: 175,
      heavy: 65,
    });
    /**
     * changeHeavy 修改体重
     * @param val 
     */
    const changeHeavy = (val: string) => {
      val = val.replace(/^\d+$/, '')
    }
    
    // 用户名正则（4-16位字母、数字、下划线、减号）
    let nameReg = /^[a-zA-Z0-9_-]{4,16}$/ 
    // 密码强度 最少6位且包含（大写字母、小写字母、数字和特殊字符）
    let pswReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
    // 正整数正则
    let posIntReg = /^\d+$/
    // 负整数正则
    let negIntReg = /^-\d+$/
    // 整数正则
    let intReg = /^-?\d+$/

    return {
      formData,
      changeHeavy
    };
  },
};
</script>
<style lang="scss">
.custom-index-box{
  padding: 16px 0;
  height: calc(100% - 32px);
  .el-input-group__append{
    width: 20px;
  }
}
</style>