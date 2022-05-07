<template>
  <el-container>
    <el-main class="transform-box">
      <div class="logo-box">
        <img src="@/assets/logo.png" />
      </div>
      <div class="title-box">
        <img src="@/assets/title.png" />
      </div>
      <div class="space-title-box">
        <p>中国科学院职工百日健步走活动</p>
      </div>
      <div class="activity-time-box">
        <span>活动时间：2022年7月1日~10月8日</span>
      </div>
      <div class="img-box">
        <img
          class="transform-img"
          v-for="(item, index) in 16"
          :src="'src/assets/' + item + '.png'"
          :key="index"
          alt=""
        />
      </div>
      <div class="bottom-text-box">
        <p>中国科学院工会委员会</p>
        <p>中国科学院体育协会</p>
      </div>
      <div class="bottom-back-box">
        <img src="@/assets/bottom-back.png" alt="" />
      </div>
    </el-main>
  </el-container>
</template>
<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  color: #fff;
}
.logo-box {
  width: 100%;
  text-align: left;
  margin: 20px auto 15px;
  padding-left: 30px;
  img {
    zoom: 0.5;
  }
}
.title-box {
  width: 80%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.space-title-box {
  width: 65%;
  margin-top: 15px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  p {
    margin: 5px auto;
  }
}
.activity-time-box {
  margin-top: 10px;
  font-size: 12px;
}
.bottom-text-box {
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  position: absolute;
  bottom: 95px;
  z-index: 10;
  p {
    margin: 0;
    margin-top: 5px;
  }
}
// .bottom-back-box{
//   background-image: url('../../assets/bottom-back.png');
// }
.transform-box {
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
  padding: 0;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('assets/background.png');
  .img-box {
    margin: 0 auto;
    height: 240px;
    width: 100%;
    position: relative;
    .transform-img {
      margin-bottom: -80px;
      position: absolute;
      z-index: 10;
    }
    .transform-img:nth-child(1) {
      left: 0;
      top: -10px;
    }
    .transform-img:nth-child(2) {
      right: 50px;
      top: -30px;
    }
    .transform-img:nth-child(3) {
      left: 0;
      top: 70px;
      margin-left: -10px;
    }
    .transform-img:nth-child(4) {
      left: 45px;
      top: 30px;
    }
    .transform-img:nth-child(5) {
      top: 80px;
      right: 75px;
    }
    .transform-img:nth-child(6) {
      right: 0;
      top: 20px;
      margin-right: -35px;
    }
    .transform-img:nth-child(7) {
      left: 0;
      top: 110px;
    }
    .transform-img:nth-child(8) {
      left: 45px;
      top: 115px;
    }
    .transform-img:nth-child(9) {
      top: 110px;
      left: 100px;
    }
    .transform-img:nth-child(10) {
      top: 110px;
      right: 60px;
    }
    .transform-img:nth-child(11) {
      right: 0;
      top: 160px;
      margin-right: -20px;
    }
    .transform-img:nth-child(12) {
      left: 0;
      bottom: -10px;
      margin-left: -30px;
    }
    .transform-img:nth-child(13) {
      right: 80px;
      bottom: 10px;
    }
    .transform-img:nth-child(14) {
      right: 15px;
      bottom: 25px;
    }
    .transform-img:nth-child(15) {
      bottom: 10px;
      right: 0;
      margin-right: -15px;
    }
    .transform-img:nth-child(16) {
      left: 95px;
      top: -20px;
    }
  }
  .transform-img {
    border-radius: 8px;
    animation: scaleLoop 3s infinite;
    animation-timing-function: linear;
    // animation-direction: alternate;
  }
}
.bottom-back-box {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
}
@media screen and(width: 414px) {
  .transform-box .img-box {
    width: 90% !important;
  }
}
@media screen and(width: 390px) {
  .transform-box .img-box {
    width: 95% !important;
  }
}
@media screen and(min-height: 800px) {
  .transform-box .img-box {
    margin-top: 40px !important;
  }
  .bottom-text-box {
    bottom: 130px;
  }
}
@media screen and(width: 414px) and(height: 736px) {
  .logo-box {
    margin: 20px auto 15px;
  }
  .bottom-text-box {
    position: absolute;
    bottom: 110px;
  }
}
@media screen and(max-height: 800px) {
  .transform-box {
    .img-box {
      .transform-img {
        margin-bottom: -80px;
        position: absolute;
      }
      .transform-img:nth-child(1) {
        left: 0;
        top: -10px;
      }
      .transform-img:nth-child(2) {
        right: 50px;
        top: -30px;
      }
      .transform-img:nth-child(3) {
        left: 0;
        top: 70px;
        margin-left: -10px;
      }
      .transform-img:nth-child(4) {
        left: 45px;
        top: 30px;
      }
      .transform-img:nth-child(5) {
        top: 80px;
        right: 75px;
      }
      .transform-img:nth-child(6) {
        right: 0;
        top: 20px;
        margin-right: -35px;
      }
      .transform-img:nth-child(7) {
        left: 0;
        top: 110px;
      }
      .transform-img:nth-child(8) {
        left: 45px;
        top: 115px;
      }
      .transform-img:nth-child(9) {
        top: 110px;
        left: 100px;
      }
      .transform-img:nth-child(10) {
        top: 110px;
        right: 60px;
      }
      .transform-img:nth-child(11) {
        right: 0;
        top: 160px;
        margin-right: -20px;
      }
      .transform-img:nth-child(12) {
        left: 0;
        bottom: -10px;
        margin-left: -30px;
      }
      .transform-img:nth-child(13) {
        right: 80px;
        bottom: 10px;
      }
      .transform-img:nth-child(14) {
        right: 15px;
        bottom: 25px;
      }
      .transform-img:nth-child(15) {
        bottom: 10px;
        right: 0;
        margin-right: -15px;
      }
      .transform-img:nth-child(16) {
        left: 95px;
        top: -20px;
      }
    }
  }

  @keyframes scaleLoop {
    0% {
      transform: scale(0.5, 0.5);
    }
    100% {
      // transform: scale(0.5, 0.5);
      transform: scale(0.4, 0.4);
    }
  }
}
@media screen and(min-height: 800px) {
  .bottom-text-box {
    position: absolute;
    bottom: 140px;
  }

  .transform-box {
    .img-box {
      .transform-img {
        margin-bottom: -80px;
        position: absolute;
      }
      .transform-img:nth-child(1) {
        left: 0;
        top: -10px;
      }
      .transform-img:nth-child(2) {
        right: 50px;
        top: -30px;
      }
      .transform-img:nth-child(3) {
        left: 0;
        top: 70px;
        margin-left: -10px;
      }
      .transform-img:nth-child(4) {
        left: 45px;
        top: 30px;
      }
      .transform-img:nth-child(5) {
        top: 80px;
        right: 75px;
      }
      .transform-img:nth-child(6) {
        right: 0;
        top: 20px;
        margin-right: -35px;
        animation: scaleLoop 2400ms infinite;
      }
      .transform-img:nth-child(7) {
        left: 0;
        top: 110px;
        animation: scaleLoop 2400ms infinite;
      }
      .transform-img:nth-child(8) {
        left: 45px;
        top: 115px;
        animation: scaleLoop 2400ms infinite;
      }
      .transform-img:nth-child(9) {
        top: 110px;
        left: 100px;
      }
      .transform-img:nth-child(10) {
        top: 110px;
        right: 55px;
      }
      .transform-img:nth-child(11) {
        right: 0;
        top: 160px;
        margin-right: -20px;
      }
      .transform-img:nth-child(12) {
        left: 0;
        bottom: -10px;
        margin-left: -30px;
      }
      .transform-img:nth-child(13) {
        right: 80px;
        bottom: 10px;
      }
      .transform-img:nth-child(14) {
        right: 15px;
        bottom: 25px;
        animation: scaleLoop 2200ms infinite;
      }
      .transform-img:nth-child(15) {
        bottom: 10px;
        right: 0;
        margin-right: -15px;
        animation: scaleLoop 2200ms infinite;
      }
      .transform-img:nth-child(16) {
        left: 95px;
        top: -20px;
        animation: scaleLoop 2200ms infinite;
      }
    }
  }

  @keyframes scaleLoop {
    0% {
      opacity: 0.2;
      transform: scale(0.4, 0.4);
    }
    50% {
      opacity: 1;
      transform: scale(0.45, 0.45);
    }
    100% {
      opacity: 0;
      transform: scale(0.55, 0.55);
    }
  }
}
@media screen and(max-height: 700px) {
  .transform-box {
    .img-box {
      position: relative;
      .transform-img {
        margin-bottom: -80px;
        position: absolute;
      }
      .transform-img:nth-child(1) {
        left: 0;
        top: -10px;
      }
      .transform-img:nth-child(2) {
        right: 50px;
        top: -30px;
      }
      .transform-img:nth-child(3) {
        left: 0;
        top: 70px;
        margin-left: -10px;
      }
      .transform-img:nth-child(4) {
        left: 45px;
        top: 30px;
      }
      .transform-img:nth-child(5) {
        top: 80px;
        right: 75px;
      }
      .transform-img:nth-child(6) {
        right: 0;
        top: 20px;
        margin-right: -35px;
      }
      .transform-img:nth-child(7) {
        left: 0;
        top: 110px;
      }
      .transform-img:nth-child(8) {
        left: 45px;
        top: 115px;
      }
      .transform-img:nth-child(9) {
        top: 110px;
        left: 100px;
      }
      .transform-img:nth-child(10) {
        top: 110px;
        right: 55px;
      }
      .transform-img:nth-child(11) {
        right: 0;
        top: 160px;
        margin-right: -20px;
      }
      .transform-img:nth-child(12) {
        left: 0;
        bottom: -10px;
        margin-left: -30px;
      }
      .transform-img:nth-child(13) {
        right: 80px;
        bottom: 10px;
      }
      .transform-img:nth-child(14) {
        right: 15px;
        bottom: 25px;
      }
      .transform-img:nth-child(15) {
        bottom: 10px;
        right: 0;
        margin-right: -15px;
      }
      .transform-img:nth-child(16) {
        left: 95px;
        top: -20px;
      }
    }
    .transform-img {
      border-radius: 8px;
      animation: scaleLoop 3s infinite;
      animation-timing-function: linear;
      animation-direction: alternate;
      // animation-iteration-count: 1;
    }
  }

  @keyframes scaleLoop {
    0% {
      transform: scale(0.4, 0.4);
    }
    100% {
      transform: scale(0.3, 0.3);
    }
  }
}
@media screen and(max-height: 668px) and(max-width: 376px) {
  .logo-box {
    margin: 20px auto 15px !important;
  }
  .transform-box .img-box {
    width: 95%;
  }
  .transform-box {
    .img-box {
      .transform-img:nth-child(1) {
        left: 5px;
        top: -10px;
      }
      .transform-img:nth-child(2) {
        right: 40px;
        top: -30px;
      }
      .transform-img:nth-child(3) {
        left: 0;
        top: 70px;
        margin-left: 0;
      }
      .transform-img:nth-child(4) {
        left: 45px;
        top: 30px;
      }
      .transform-img:nth-child(5) {
        top: 70px;
        right: 70px;
      }
      .transform-img:nth-child(6) {
        right: 0;
        top: 20px;
        margin-right: -35px;
      }
      .transform-img:nth-child(7) {
        left: 0;
        top: 110px;
      }
      .transform-img:nth-child(8) {
        left: 45px;
        top: 115px;
      }
      .transform-img:nth-child(9) {
        top: 110px;
        left: 100px;
      }
      .transform-img:nth-child(10) {
        top: 110px;
        right: 55px;
      }
      .transform-img:nth-child(11) {
        right: 0;
        top: 160px;
        margin-right: -10px;
      }
      .transform-img:nth-child(12) {
        left: 0;
        bottom: -5px;
        margin-left: -20px;
      }
      .transform-img:nth-child(13) {
        right: 70px;
        bottom: 20px;
      }
      .transform-img:nth-child(14) {
        right: 15px;
        bottom: 25px;
      }
      .transform-img:nth-child(15) {
        bottom: 20px;
        right: 0;
        margin-right: -5px;
      }
      .transform-img:nth-child(16) {
        left: 90px;
        top: -20px;
      }
    }
  }
  .bottom-text-box {
    position: absolute;
    bottom: 90px;
  }
  @keyframes scaleLoop {
    0% {
      transform: scale(0.45, 0.45);
    }
    100% {
      transform: scale(0.35, 0.35);
    }
  }
}
</style>
