<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-05 16:19:38
 * @LastEditors: long
 * @LastEditTime: 2022-05-05 17:15:39
-->
<template>
  <div class="custom-tree-box">
    <el-tree :data="data" :props="defaultProps" draggable @node-click="handleNodeClick" />
    <el-tree-v2 :data="dataV2" :props="props" />
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    interface Tree {
      label: string;
      children?: Tree[];
    }
    const data: Tree[] = [
      {
        label: 'Level one 1',
        children: [
          {
            label: 'Level two 1-1',
            children: [
              {
                label: 'Level three 1-1-1',
              },
            ],
          },
        ],
      },
      {
        label: 'Level one 2',
        children: [
          {
            label: 'Level two 2-1',
            children: [
              {
                label: 'Level three 2-1-1',
              },
            ],
          },
          {
            label: 'Level two 2-2',
            children: [
              {
                label: 'Level three 2-2-1',
              },
            ],
          },
        ],
      },
      {
        label: 'Level one 3',
        children: [
          {
            label: 'Level two 3-1',
            children: [
              {
                label: 'Level three 3-1-1',
              },
            ],
          },
          {
            label: 'Level two 3-2',
            children: [
              {
                label: 'Level three 3-2-1',
              },
            ],
          },
        ],
      },
    ];
    const handleNodeClick = (data: Tree) => {
      console.log(data);
    };
    const defaultProps = {
      children: 'children',
      label: 'label',
    };

    // 虚拟化树形数据
    interface TreeV2 {
      id: string;
      label: string;
      children?: TreeV2[];
    }

    const getKey = (prefix: string, id: number) => {
      return `${prefix}-${id}`;
    };

    const createData = (
      maxDeep: number,
      maxChildren: number,
      minNodesNumber: number,
      deep = 1,
      key = 'node'
    ): TreeV2[] => {
      let id = 0;
      return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
          const childrenNumber =
            deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
          const nodeKey = getKey(key, ++id);
          return {
            id: nodeKey,
            label: nodeKey,
            children: childrenNumber
              ? createData(
                  maxDeep,
                  maxChildren,
                  childrenNumber,
                  deep + 1,
                  nodeKey
                )
              : undefined,
          };
        });
    };

    const props = {
      value: 'id',
      label: 'label',
      children: 'children',
    };
    const dataV2 = createData(4, 30, 40);
    return {
      data,
      dataV2,
      props,
      defaultProps,
      handleNodeClick,
    };
  },
};
</script>
<style lang="scss">
.custom-tree-box {
  display: flex;
  padding: 16px 0;
  height: calc(100% - 32px);
  justify-content: space-around;
  .el-tree {
    width: 33%;
  }
}
</style>
