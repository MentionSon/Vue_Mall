<template>
  <div class="slider-wrap">
    <me-loading v-if="!slides.length"></me-loading>
    <me-slider
    :direction="direction"
    :loop="loop"
    :interval="interval"
    :pagination="pagination"
    :data="slides"
    v-else
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt="image error" class="slider-img">
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getHomeSlides} from 'api/home';
  import MeLoading from 'base/loading';

  export default {
    name: 'HomeSlider',
    components: {
      MeSlider,
      swiperSlide,
      MeLoading
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination, 
        slides: []
      }
    },
    created() {
      this.getSlides();
    },
    methods: {
      /* 跟新 sliders 数据的 API */
      update() {
        return this.getSlides();
      },

      getSlides() {
        return getHomeSlides().then(data => {
          this.slides = data;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider-wrap {
    height: 183px;

    .slider-link {
      display: block;
    }

    .slider-link,
    .slider-img {
      max-width: 100%;
      height: 100%;
    }
  }
</style>
