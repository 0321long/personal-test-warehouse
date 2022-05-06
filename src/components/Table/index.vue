<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-05 16:18:59
 * @LastEditors: long
 * @LastEditTime: 2022-05-06 10:27:04
-->
<template>
  <div class="custom-table-box">
    <el-table :data="viewData.tableData" style="width: 100%">
      <el-table-column
        v-for="item in viewData.columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      />
    </el-table>
    <!-- 波浪球 -->
    <!-- <div class="wave-box">
      <div class="wave"></div>
    </div> -->
  </div>
</template>
<script lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
    const viewData = reactive({
      columns: [
        {
          prop: 'date',
          label: '日期',
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'address',
          label: '地址',
        },
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    });
    return {
      viewData,
    };
  },
};
</script>
<style lang="scss">
// 波浪球
.wave-box {
  position: relative;
  border: 1px solid silver;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  animation: water-wave linear infinite;
}
.wave {
  position: absolute;
  top: 55%;
  left: -55%;
  background: #33cfff;
  opacity: 0.6;
  width: 200%;
  height: 200%;
  border-radius: 40%;
  animation: inherit;
  animation-duration: 5s;
}
@keyframes water-wave {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
// 波浪球
</style>
