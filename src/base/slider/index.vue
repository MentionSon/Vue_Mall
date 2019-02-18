<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" :key="keyId">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  import {swiper} from "vue-awesome-swiper";

  export default {
    name: 'MeSlider',
    components: {
      swiper
    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return [
            'horizontal',
            'vertical'
          ].indexOf(value) > -1;
        }
      },
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        keyId: Math.random(),
      }
    },
    watch: {
      data(newData) {
        if (newData.length === 0) {
          return;
        }

        this.swiperOption.loop = newData.length === 1 ? false : this.loop;
        this.keyId = Math.random();
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.swiperOption = {
          watchOverflow: true,  // 只有1个slide (非loop),swiper会失效且隐藏导航等
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false  // 有交互时终止 loop
          } : false,
          slidesPerView: 1,  // 设置slider容器能够同时显示的slides数量
          loop: this.data.length === 1 ? false : this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
</style>
