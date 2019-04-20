<template>
  <div class="notice">
    <div class="notice-content">
      <div class="notice-header">
        <div class="title">粥品香坊（大运村）</div>
        <star class="star"></star>
      </div>
      <div class="discount">
        <div class="line-left"></div>
        <div class="line-right"></div>
        <div class="title">
          优惠信息
        </div>
        <div class="discount-list">
          <div class="discount-item">
            <span class="discount-img"></span>
            <span class="discount-des">单人精彩赛</span>
          </div>
          <div class="discount-item">
            <span class="discount-img"></span>
            <span class="discount-des">单人精彩赛</span>
          </div>
          <div class="discount-item">
            <span class="discount-img"></span>
            <span class="discount-des">单人精彩赛</span>
          </div>
          <div class="discount-item">
            <span class="discount-img"></span>
            <span class="discount-des">单人精彩赛</span>
          </div>
          <div class="discount-item">
            <span class="discount-img"></span>
            <span class="discount-des">单人精彩赛</span>
          </div>
        </div>
      </div>
      <div class="advertisement">
        <div class="line-left"></div>
        <div class="line-right"></div>
        <div class="title">商家广告</div>
        <div class="des">粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方粥品香方方粥品香方粥品香方粥品香方粥品香</div>
      </div>
    </div>
    <div @click="back" class="close">×</div>
  </div>
</template>

<script>
import Star from './Star.vue'
export default {
  components: {
    Star
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
.notice {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(7,17,27,0.8);
  .notice-content {
    padding: 64px 36px 32px;
    color: #fff;
    .notice-header {
      text-align: center;
      .title {
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
      }
      .star {
        padding: 16px 0 28px;
      }
    }
    .discount {
      position: relative;
      .line-left {
        position: absolute;
        background-color: rgba(255,255,255,0.2);
        height: 2px;
        width: 112px;
        top: 6px;
        left: 0;
      }
      .line-right {
        position: absolute;
        background-color: rgba(255,255,255,0.2);
        height: 2px;
        width: 112px;
        top: 6px;
        right: 0;
      }
      .title {
        z-index: 2;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
      }
      .discount-list {
        padding: 24px 12px;
        .discount-item {
          display: flex;
          align-items: center;
          padding-bottom: 6px;
          .discount-img {
            height: 16px;
            width: 16px;
            @include bg-img("header/" + "decrease_1");
            background-size: 16px;
            background-repeat: no-repeat;
            margin-right: 12px;
          }
          .discount-des {
            flex: 1;
          }
        }
      }
    }
    .advertisement {
      position: relative;
      .line-left {
        position: absolute;
        background-color: rgba(255,255,255,0.2);
        height: 2px;
        width: 112px;
        top: 6px;
        left: 0;
      }
      .line-right {
        position: absolute;
        background-color: rgba(255,255,255,0.2);
        height: 2px;
        width: 112px;
        top: 6px;
        right: 0;
      }
      .title {
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
      }
      .des {
        padding: 24px 12px;
        font-size: 12px;
        line-height: 24px;
        font-weight: 200;
      }
    }
  }
  .close {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 32px;
    font-size: 32px;
    color: rgba(255,255,255,0.5);
  }
}
</style>
