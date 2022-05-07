<!--
 * @Descripttion: music顶部banner
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-06 16:49:23
 * @LastEditors: long
 * @LastEditTime: 2022-05-07 18:20:58
-->
<template>
  <swiper
    class="swiper"
    :modules="modules"
    :space-between="30"
    :effect="'fade'"
    :loop="true"
    :autoplay="autoplay"
    :navigation="true"
    @slideChange="changeSlide"
    :pagination="{ clickable: true }"
  >
    <swiper-slide
      class="slide"
      v-for="(item, index) in imgData"
      :key="index + 1"
    >
      <img :src="item" ref="ele" />
    </swiper-slide>
    <img class="banner-right-img" src="../../assets/download.png" />
  </swiper>
</template>

<script lang="ts">
import { defineComponent, defineProps, ref } from 'vue';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default defineComponent({
  name: 'swiper-example-fade-effect',
  title: 'Fade effect',
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    imgData: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  setup() {
    // 动态改变当前轮播图
    const changeSlide = (val: any) => {
      // console.log(val);
      const ele = document.querySelectorAll(
        '.swiper-slide.slide img'
      ) as NodeListOf<HTMLImageElement>;
      let el = document.querySelector(
        '.swiper-pointer-events'
      ) as HTMLImageElement;

      ele.forEach((item, index) => {
        if (index + 1 == val.activeIndex) {
          el.style.setProperty('background-image', `url(${item.src})`);
        }
      });

      // console.log(arr);

      // 超出图片最大数量时初始化为1
      // if (val.activeIndex == 5) {
      //   val.activeIndex = 1;
      // }
      // 根据当前切换图片动态设置背景图
    };
    const autoplay = {
      disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
      delay: 3000, // 自动切换的时间间隔（单位ms）
    };
    return {
      changeSlide,
      autoplay,
      modules: [Pagination, Navigation, EffectFade, Autoplay],
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper {
  .slide {
    img {
      display: block;
      width: 100%;
    }
  }
}

::deep(.swiper-button-prev) {
  left: 15%;
  color: #fff!important;
}
.swiper-button-next {
  right: 15%;
  color: #fff;
}
.swiper-pointer-events {
  width: 100%;
  background-image: url('../../src/assets/banner01.jpg');
  background-size: 6000px;
}
.swiper .slide img {
  width: 60%;
  margin: 0 auto;
  margin-left: 10%;
}
.banner-right-img {
  width: 20%;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 10%;
}
</style>
