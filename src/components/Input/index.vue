<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <div class="common-content">
          <el-form inline>
            <el-scrollbar maxHeight="200px">
              <div  class="flex-form-box" v-for="( item, index ) in data.inputData">
                <el-input
                :key="index"
                  v-model="item.inputValue"
                  @input="changeInputValue"
                >
                  <template #suffix>
                    <el-icon :size="20" @click.stop="addInput" ><circle-plus /></el-icon>
                    <el-icon :size="20" v-if="index" @click.stop="delInput(index)">
                      <remove />
                    </el-icon>
                  </template>
                </el-input>
              </div>
            </el-scrollbar>
            <el-button type="primary" @click="getFormData">提交</el-button>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { CirclePlus, Remove } from '@element-plus/icons-vue' 
export default {
  components: {
    [CirclePlus.name]: CirclePlus,
    [Remove.name]: Remove
  },
  setup() {
    const data = reactive({
      inputData: [
        {
          inputValue: '',
        }
      ]
    });
    // 当前input值变更
    const changeInputValue = (val:any) => {
      // console.log(val);
    };
    // 增加一行
    const addInput = () => {
      data.inputData.push({inputValue: ''})
    }
    // 删除一行
    const delInput = (index:number) => {
      console.log(index);
      data.inputData.splice(index, 1)
    }
    const getFormData = () => {
      const reqData = data.inputData.map(item => {
        return item
      })
      console.log(reqData);
      
    }
    return {
      data,
      changeInputValue,
      addInput,
      delInput,
      getFormData
    };
  },
};
</script>

<style lang="scss" scoped>
.el-scrollbar {
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  border-radius: 8px;
  padding: 10px 0;
  margin-bottom: 10px;
}
.flex-form-box:first-child{
  margin-top: 0;
}
.flex-form-box{
  display: flex;
  align-items: center;
  margin-top: 16px;
  .el-input {
    width: 80%;
    margin: 0 auto;
    .el-icon {
      margin-right: 8px;
    }
  }
}
</style>
