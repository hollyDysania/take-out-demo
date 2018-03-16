<template>
  <header id="headTop">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section class="headGoBack" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
    </section>
    <router-link :to="userInfo ? '/profile' : '/login'" v-if="signIn" class="headLogin">  
      <svg class="userAvatar" v-if="userInfo">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span class="loginSpan" v-else>登录|注册</span>
    </router-link>
    <section class="titleHead ellipsis" v-if="headTitle">
      <span class="titleText">{{headTitle}}</span>
    </section>
    <slot name="edit"></slot>
    <slot name="msiteTitle"></slot>
    <slot name="changecity"></slot>
    <slot name="changeLogin"></slot>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  mounted() {
    //获取用户信息
    // this.getUserInfo()
  },
  props: ['goBack', 'signIn', 'headTitle'],
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['getUserInfo'])
  }
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #headTop{
        background-color: $blue;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
    }
    .headGoback{
        left: 0.4rem;
        @include wh(0.6rem, 1rem);
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .headLogin{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .loginSpan{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .titleHead{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .titleText{
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }
</style>
