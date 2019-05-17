<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="seller-header clearfix">
        <img class="seller-img" :src="seller.avatar"/>
        <div class="seller-info">
          <div class="title clearfix"><span class="seller-img"/><span class="seller-name">{{seller.name}}</span></div>
          <div class="delivery">{{seller.description}} / {{seller.deliveryTime}}分钟送达</div>
          <div class="discount-wrapper">
            <div class="discount"><span :class="['discount-img', iconMap(seller.supports[0].type)]"></span><span class="discount-content">{{seller.supports[0].description}}</span></div>
          </div>
        </div>
        <div class="discount-num" @click="show">5个<i class="iconfont icon-right"></i></div>
      </div>
      <div class="notice-wrapper" @click="show">
        <span class="notice-img"/>
        <span class="notice-content">{{seller.bulletin}}</span>
        <i class="iconfont icon-right"></i>
      </div>
      <!-- <router-view/> -->
      <div class="background">
        <img :src="seller.avatar"/>
      </div>
    </div>
    <div class="notice" v-show="showFlag">
      <div class="notice-content-wrapper clearfix">
        <div class="notice-content">
          <div class="notice-header">
            <div class="title">{{seller.name}}</div>
            <star class="star" :size="48" :star="seller.score"></star>
          </div>
          <div class="discount">
            <div class="discount-title">
              <div class="line"></div>
              <div class="title">优惠信息</div>
              <div class="line"></div>
            </div>
            <div class="discount-list">
              <div class="discount-item" v-for="(item, index) in seller.supports" :key="index">
                <span :class="['discount-img', iconMap(item.type)]"></span>
                <span class="discount-des">{{item.description}}</span>
              </div>
            </div>
          </div>
          <div class="advertisement">
            <div class="advertisement-title">
              <div class="line"></div>
              <div class="title">商家广告</div>
              <div class="line"></div>
            </div>
            <div class="des">{{seller.bulletin}}</div>
          </div>
        </div>
      </div>
      <div @click="hide" class="close"><i class="iconfont icon-close"></i></div>
    </div>
  </div>
</template>

<script>
import Star from './Star.vue'
export default {
  components: {
    Star
  },
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      icon: '',
      des: '',
      showFlag: false,
      firstIcon: ''
    }
  },
  methods: {
    iconMap (index) {
      var iconArr = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return iconArr[index]
    },
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
.header-wrapper {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 130px;
    z-index: 1;
    background-color: rgba(7, 17,27, 0.5);
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
              background-size: 12px;
              background-repeat: no-repeat;
              &.decrease {
                @include bg-img("header/" + "decrease_2");
              }
              &.discount {
                @include bg-img("header/" + "discount_2");
              }
              &.special {
                @include bg-img("header/" + "special_2");
              }
              &.invoice {
                @include bg-img("header/" + "invoice_2");
              }
              &.guarantee {
                @include bg-img("header/" + "guarantee_2");
              }
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
    .notice-wrapper {
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
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(5px);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .notice {
    z-index: 3;
    margin-top: 0;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-color: rgba(7,17,27,0.8);
    .notice-content-wrapper {
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: center;
      .notice-content {
        padding:64px 0;
        width: 80%;
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
          .discount-title {
            display: flex;
            align-items: center;
            .line {
              flex: 1;
              height: 0;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }
            .title {
              padding: 0 12px;
              text-align: center;
              font-size: 14px;
              line-height: 14px;
              font-weight: 700;
            }
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
                background-size: 16px;
                background-repeat: no-repeat;
                margin-right: 12px;
                &.decrease {
                  @include bg-img("header/" + "decrease_2");
                }
                &.discount {
                  @include bg-img("header/" + "discount_2");
                }
                &.special {
                  @include bg-img("header/" + "special_2");
                }
                &.invoice {
                  @include bg-img("header/" + "invoice_2");
                }
                &.guarantee {
                  @include bg-img("header/" + "guarantee_2");
                }
              }
              .discount-des {
                flex: 1;
              }
            }
          }
        }
        .advertisement {
          .advertisement-title {
            display: flex;
            align-items: center;
            .line {
              flex: 1;
              height: 0;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }
            .title {
              padding: 0 12px;
              text-align: center;
              font-size: 14px;
              line-height: 14px;
              font-weight: 700;
            }
          }
          .des {
            padding: 24px 12px;
            font-size: 12px;
            line-height: 24px;
            font-weight: 200;
          }
        }
      }
    }
    .close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
      font-size: 32px;
      color: rgba(255,255,255,0.5);
    }
  }
}
</style>
