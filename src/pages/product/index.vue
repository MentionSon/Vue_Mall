<template>
  <transition name="product">
    <div class="product">
      <product-header></product-header>
      <product-slider></product-slider>
    </div>
  </transition>
</template>

<script>
  import ProductHeader from './header';
  import ProductSlider from './slider';

  export default {
    components: {
      ProductHeader,
      ProductSlider
    }
  }
</script>



<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: #fff; 
  }

  .product-enter-active,
  .product-leave-active {
    transition: all .3s;
  }

  .product-enter,
  .product-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>

