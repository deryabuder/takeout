<template>
  <div class="header">
    <div class="seller-header clearfix">
      <img class="seller-img" src="../../img/header-img.png"/>
      <div class="seller-info">
        <div class="title clearfix"><span class="seller-img"/><span class="seller-name">粥品香坊（大运村）</span></div>
        <div class="delivery">蜂鸟专送 / 30分钟送达</div>
        <div class="discount-wrapper">
          <div class="discount"><span class="discount-img"></span><span class="discount-content">在线满28减5，满50减10</span></div>
        </div>
      </div>
      <div class="discount-num">5个<i class="iconfont icon-right"></i></div>
    </div>
    <router-link to="/goods/notice" class="notice">
      <span class="notice-img"/>
      <span class="notice-content">粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方</span>
      <i class="iconfont icon-right"></i>
    </router-link>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  methods: {
    notice () {
      this.$router.push('/goods/notice')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
.header {
  background-color: rgba(7,17,27,0.5);
  .seller-header {
    position: relative;
    padding: 20px 12px 18px 24px;
    .seller-img {
      float: left;
      width: 64px;
      height: 64px;
      padding-right: 16px;
    }
    .seller-info {
      float: left;
      padding: 2px 0;
      .title {
        padding-bottom: 8px;
        .seller-img {
          float: left;
          padding-right: 6px;
          height: 18px;
          width: 30px;
          @include bg-img("/header/"+"brand");
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .seller-name {
          float: left;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
          color: #fff;
        }
      }
      .delivery {
        font-size: 12px;
        line-height: 12px;
        font-weight: 200;
        color: #fff;
        padding-bottom: 10px;
      }
      .discount-wrapper {
        display: flex;
        justify-content: space-between;
        .discount {
          display: flex;
          .discount-img {
            width: 12px;
            height: 12px 12px;
            @include bg-img("/header/"+"decrease_1");
            background-size: 12px;
            background-repeat: no-repeat;
          }
          .discount-content {
            flex: 1;
            font-size: 10px;
            line-height: 12px;
            font-weight: 200;
            color: #fff;
            padding: 0 4px;
          }
        }
      }
    }
    .discount-num {
      position: absolute;
      bottom: 18px;
      right: 12px;
      padding: 7px 8px;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 10px;
      line-height: 12px;
      color: #fff;
      font-weight: 200;
      border-radius: 12px;
      .icon-right {
        padding-left: 4px;
        font-size: 8px;
      }
    }
  }
  .notice {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 28px;
    line-height: 28px;
    padding: 0 12px;
    background-color: rgba(7, 17,27, 0.2);
    .notice-img {
      width: 22px;
      height: 12px;
      padding-right: 8px;
      @include bg-img("/header/"+"bulletin");
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .notice-content {
      flex: 1;
      font-size: 10px;
      line-height: 28px;
      font-weight: 200;
      color: #fff;
      @include no-wrap;
    }
    .icon-right {
      font-size: 8px;
      color: #fff;
    }
  }
}
</style>
