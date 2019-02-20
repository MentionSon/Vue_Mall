<template>
  <div class="swiper-wrap">
    <me-slider
    :direction="direction"
    :loop="loop"
    :interval="interval"
    :pagination="pagination"
    :data="slides"
    >
      <swiper-slide
        v-for="item of picSlides"
      > 
        <img :src="item" alt="">
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';

  export default {
    name: 'ProductSlider',
    components: {
      MeSlider,
      swiperSlide
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination, 
        slides: [],
        picSlides: null
      }
    },
    created() {
      this.picInit();
    },
    methods: {
      picInit() {
        this.picSlides = this.$route.params.picInfo;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-wrap {
    width: 100%;
    height: 375px;
       
    img {
      display: block;
      max-width: 100%; 
    } 
  }
</style>
