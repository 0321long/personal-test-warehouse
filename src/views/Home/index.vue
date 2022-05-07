<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: long
 * @Date: 2022-05-05 14:54:17
 * @LastEditors: long
 * @LastEditTime: 2022-05-06 18:18:43
-->
<template>
  <div class="home-menu-box">
    <el-menu
      mode="vertical"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      :default-active="viewData.nowTab"
      class="el-menu-vertical-demo"
      @select="changeMenu"
    >
      <el-menu-item index="1">表单</el-menu-item>
      <el-menu-item index="2">表格</el-menu-item>
      <el-menu-item index="3">树形</el-menu-item>
      <el-menu-item index="4">动画</el-menu-item>
    </el-menu>
  </div>
  <myFrom v-if="viewData.nowTab == 1"></myFrom>
  <myTable v-if="viewData.nowTab == 2"></myTable>
  <myTree v-if="viewData.nowTab == 3"></myTree>
  <div v-if="viewData.nowTab == 4" class="transform-box">
    <Tansform></Tansform>
  </div>
</template>
<script lang="ts">
import myMenu from 'components/Menu/index.vue';
import myFrom from 'components/Form/index.vue';
import myTable from 'components/Table/index.vue';
import myTree from 'components/Tree/index.vue';
import Tansform from 'components/Transform/index.vue';
import { reactive } from 'vue';
export default {
  components: {
    myMenu,
    myFrom,
    myTable,
    myTree,
    Tansform
  },
  setup() {
    const viewData = reactive({
      nowTab: sessionStorage.getItem('nowTab')
        ? sessionStorage.getItem('nowTab')
        : '2', // 菜单选中项
    });
    // 更改左侧菜单选中项
    const changeMenu = (index, path, item, routerRes) => {
      viewData.nowTab = index;
      sessionStorage.setItem('nowTab', index);
    };

    return {
      viewData, // 页面数据
      changeMenu,
    };
  },
};
</script>
<style lang="scss" scoped>
.transform-box{
  width: 375px;
  height: 818px;
}
.home-menu-box {
  position: absolute;
  left: 0;
  height: 100%;
  width: 120px;
  .el-menu {
    height: 100%;
  }
}
</style>
