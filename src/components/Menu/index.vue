<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-05 15:43:30
 * @LastEditors: long
 * @LastEditTime: 2022-05-06 13:58:07
-->
<template>
  <div class="home-menu-box">
    <el-menu
      mode="vertical"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">菜单一</el-menu-item>
      <el-menu-item index="2">菜单二</el-menu-item>
      <el-menu-item index="3">菜单三</el-menu-item>
      <el-menu-item index="4">菜单四</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
};
</script>
<style lang="scss">
.home-menu-box {
  position: absolute;
  left: 0;
  height: 100%;
  width: 150px;
}
</style>
