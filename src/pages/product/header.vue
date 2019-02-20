<template>
    <me-navbar class="header" title="商品详情">
      <i
        class="iconfont icon-back"
        slot="left"
        @click="goBack"
      ></i>
      <h1 class="mine-navbar-title" v-if="title">
        <span class="mine-navbar-text" v-text="title"></span>
      </h1>
      <i class="iconfont icon-cart" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'ProductHeader',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    components: {
      MeNavbar
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {

    &.mine-navbar {
      background-color: $header-bgc-translucent;
      transition: background-color .5s;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }  
  }
</style>
