<!--
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-06 14:47:03
 * @LastEditors: long
 * @LastEditTime: 2022-05-07 17:23:52
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="app-menu-logo">
          <!-- <el-image src="../../src/assets/favicon.ico"></el-image>
          <p>我的音乐</p> -->
        </div>
        <el-menu
          :default-active="viewData.activeIndex"
          class="app-menu-box"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1">发现音乐</el-menu-item>
          <el-menu-item index="2">我的音乐</el-menu-item>
          <el-menu-item index="3">关注</el-menu-item>
          <el-menu-item index="4">商城</el-menu-item>
          <el-menu-item index="5">音乐人</el-menu-item>
        </el-menu>
        <div class="menu-right-box">
          <el-input class="menu-search-input" placeholder="音乐/视频/电台/用户">
            <template #prefix>
              <el-icon class="el-input__icon"><Search /></el-icon>
            </template>
          </el-input>
          <button class="menu-creator-btn" size="small">创作者中心</button>
        </div>
      </el-header>
      <el-main>
        <MyBanner :imgData="viewData.bannerImgData"></MyBanner>
        <div class="music-list-box">
          <div class="discover-left-module">
            <div class="music-list-head">
              <div class="music-list-head-left">
                <div class="large-circle">
                  <div class="small-ciecle"></div>
                </div>
                <p>热门推荐</p>
                <ul class="music-list-head-center">
                  <li>华语</li>
                  <li>流行</li>
                  <li>摇滚</li>
                  <li>民谣</li>
                  <li>电子</li>
                </ul>
              </div>
              <div class="music-list-head-right">
                <p>更多-></p>
              </div>
            </div>
            <ul class="music-list-content">
              <li class="music-list-content-box">
                <div class="music-info-img">
                  <img src="../../assets/banner01.jpg" alt="" />
                </div>
                <div class="music-info-text">
                  <span>乐团世代 | 台湾乐团编年史(1980-2021)</span>
                </div>
              </li>
              <li class="music-list-content-box">
                <div class="music-info-img">
                  <img src="../../assets/banner01.jpg" alt="" />
                </div>
                <div class="music-info-text">
                  <span>乐团世代 | 台湾乐团编年史(1980-2021)</span>
                </div>
              </li>
              <li class="music-list-content-box">
                <div class="music-info-img">
                  <img src="../../assets/banner01.jpg" alt="" />
                </div>
                <div class="music-info-text">
                  <span>乐团世代 | 台湾乐团编年史(1980-2021)</span>
                </div>
              </li>
              <li class="music-list-content-box">
                <div class="music-info-img">
                  <img src="../../assets/banner01.jpg" alt="" />
                </div>
                <div class="music-info-text">
                  <span>乐团世代 | 台湾乐团编年史(1980-2021)</span>
                </div>
              </li>
              <li class="music-list-content-box">
                <div class="music-info-img">
                  <img src="../../assets/banner01.jpg" alt="" />
                </div>
                <div class="music-info-text">
                  <span>乐团世代 | 台湾乐团编年史(1980-2021)</span>
                </div>
              </li>
              <li class="music-list-content-box">
                <div class="music-info-img">
                  <img src="../../assets/banner01.jpg" alt="" />
                </div>
                <div class="music-info-text">
                  <span>乐团世代 | 台湾乐团编年史(1980-2021)</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="discover-right-module"></div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
import { Search } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import MyBanner from 'components/MyBanner/index.vue';
import { getBanner } from '../../utils/request';
export default {
  components: {
    Search,
    MyBanner,
  },
  setup() {
    getBanner('').then((res: any) => {
      viewData.bannerImgData = res.banners.map((item: any) => {
        return item.imageUrl;
      });
    });

    // 点击切换当前选中菜单
    const handleSelect = (val: any) => {
      sessionStorage.setItem('top-menu-tab', val);
    };
    // 页面数据
    const viewData = reactive({
      // 当前选中菜单
      activeIndex: sessionStorage.getItem('top-menu-tab')
        ? sessionStorage.getItem('top-menu-tab')
        : '1',
        bannerImgData: []
    });
    return {
      handleSelect,
      viewData,
    };
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background: #000;
  .app-menu-logo {
    width: 180px;
    height: 100%;
    margin-top: -10px;
    background-image: url('assets/topbar.png');
  }
  .el-menu--horizontal {
    border-bottom: none;
  }
}
.app-menu-box {
  min-width: 40%;
  justify-content: center;
  background-color: rgba(0, 0, 0);
}
.menu-right-box {
  margin-left: 16px;
  .menu-creator-btn {
    background: rgba(0, 0, 0, 0);
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    margin-left: 16px;
    height: 32px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.4);
  }
  .menu-creator-btn:hover {
    border-color: #fff;
  }
  .menu-search-input {
    width: 180px;
    height: 32px;
    border-radius: 20px;
    overflow: hidden;
  }
}

.el-main {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}

// 热门推荐模块
.music-list-box {
  width: 80%;
  margin: 0 auto;
  border: 1px solid;
  display: flex;

  .discover-left-module {
    width: 71%;
    padding: 0 20px;
  }
  .discover-right-module {
    width: 25%;
    background-color: #eee;
  }
  .music-list-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 12px;
    border-bottom: 2px solid;
    .music-list-head-left {
      display: flex;
      align-items: center;
      p {
        font-size: 20px;
      }
      .music-list-head-center {
        display: flex;
        align-items: center;
        li {
          padding: 0 10px;
          border-right: 1px solid;
          cursor: pointer;
        }
        li:hover {
          text-decoration: underline;
        }
        li:last-child {
          border: none;
          padding-right: 0;
        }
      }
    }
  }
  .music-list-content {
    margin: 20px 0 0 -42px;
    .music-list-content-box {
      float: left;
      display: block;
      padding-left: 48px;
      width: 140px;
      margin-bottom: 40px;
      .music-info-img {
        width: 140px;
        height: 140px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .music-info-text {
        font-size: 14px;
        text-align: left;
        margin-top: 8px;
      }
    }
  }
}
// 自定义空心圆
.large-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: red;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .small-ciecle {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
  }
}
</style>
