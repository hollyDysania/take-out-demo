<template>
  <div class="home">
    <headTop signIn="home">
      <span slot="logo" class="headLogo" @click="reload">holly</span>
    </headTop>
    <nav class="cityNav">
      <div class="cityTip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guessCity">
        <span>{{guessCity}}</span>
          <svg class="arrowRight">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
      </router-link>
    </nav>
  </div>
</template>

<script>
import headTop from '@/components/header/head'
import { cityGuess, hotcity, groupcity } from '../../service/getData'
export default {
  name: 'home',
  components: {
    headTop
  },
  data() {
    return {
      guessCity: '', //当前城市
      guessCityid: '' //当前城市id
    }
  },
  mounted() {
    // 获取当前城市
    cityGuess().then(res => {
      this.guessCity = res.name
      this.guessCityid = res.id
    })
  },
  methods: {
    reload() {
      window.location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../style/mixin';
.headLogo {
  left: 0.4rem;
  font-weight: 400;
  @include sc(0.7rem, #fff);
  @include wh(2.3rem, 0.7rem);
  @include ct;
}
.cityNav {
  padding-top: 2.35rem;
  border-top: 1px solid $bc;
  background-color: #fff;
  margin-bottom: 0.4rem;
  .cityTip {
    @include fj;
    line-height: 1.45rem;
    padding: 0 0.45rem;
    span:nth-of-type(1) {
      @include sc(0.55rem, #666);
    }
    span:nth-of-type(2) {
      font-weight: 900;
      @include sc(0.475rem, #9f9f9f);
    }
  }
  .guessCity {
    @include fj;
    align-items: center;
    height: 1.8rem;
    padding: 0 0.45rem;
    border-top: 1px solid $bc;
    border-bottom: 2px solid $bc;
    @include font(0.75rem, 1.8rem);
    span:nth-of-type(1) {
      color: $blue;
    }
    .arrowRight {
      @include wh(0.6rem, 0.6rem);
      fill: #999;
    }
  }
}
#hotCityContainer {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.cityListul {
  li {
    float: left;
    text-align: center;
    color: $blue;
    border-bottom: 0.025rem solid $bc;
    border-right: 0.025rem solid $bc;
    @include wh(25%, 1.75rem);
    @include font(0.6rem, 1.75rem);
  }
  li:nth-of-type(4n) {
    border-right: none;
  }
}
.cityTitle {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  border-top: 2px solid $bc;
  border-bottom: 1px solid $bc;
  @include font(0.55rem, 1.45rem, 'Helvetica Neue');
  span {
    @include sc(0.475rem, #999);
  }
}

.letterClassifyli {
  margin-bottom: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid $bc;
  .groupCityNameContainer {
    li {
      color: #666;
    }
  }
}
</style>
</style>
