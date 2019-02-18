<template>
  <div>
    <nav class="nav">
      <ul class="nav-list">
        <li v-for="(item, index) in navs" :key="index" class="nav-item">
          <a :href="item.linkUrl" class="nav-link">
            <img :src="item.picUrl" alt="" class="nav-pic">
            <span>{{item.text}}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import {navs} from './config';

  export default {
    name: 'HomeNav',
    created() {
      this.navs = navs;
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .nav {
    width: 100%;
    padding-top: 10px;
    background-color: #fff;

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: 20%;
      margin-bottom: 15px;    
    }

    &-link {
      @include flex-center(column);
    }

    &-pic {
      max-width: 60%;
      margin-bottom: 8px;
    }
  }
</style>
