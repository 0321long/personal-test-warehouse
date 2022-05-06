<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-05 16:18:59
 * @LastEditors: long
 * @LastEditTime: 2022-05-05 16:51:33
-->
<template>
  <div class="custom-table-box">
    <el-table
      :data="viewData.tableData"
      style="width: 100%"
    >
      <el-table-column
        v-for="item in viewData.columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      />
    </el-table>
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
          label: 'Date',
        },
        {
          prop: 'name',
          label: 'Name',
        },
        {
          prop: 'address',
          label: 'Address',
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
