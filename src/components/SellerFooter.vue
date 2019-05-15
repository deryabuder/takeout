<template>
  <div class="footer-wrapper">
    <div class="footer" @click="showCheckList">
      <div tab="div" class="left">
        <div class="cart-wrapper">
          <div class="cart">
            <i class="iconfont icon-cart"></i>
          </div>
        </div>
        <div class="check">
          <div class="food-cost">￥0</div>
          <div class="delivery-cost">另需配送费￥4元</div>
        </div>
      </div>
      <div class="pay-button"><div class="pay">￥20起送</div></div>
    </div>
    <div class="check-list" v-show="show">
      <div class="content">
        <div class="header border-1px">
          <span class="left">购物车</span>
          <span class="right">清空</span>
        </div>
        <div class="list-wrapper" ref="list">
          <ul class="list">
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
            <li class="item border-1px">
              <div class="food-name">莲子核桃黑米粥</div>
              <div class="check-info">
                <span class="price">￥<span class="price-num">10</span></span>
                <div class="count">
                  <i class="iconfont icon-minus-circle"></i>
                  <span class="num">0</span>
                  <i class="iconfont icon-plus-circle-fill"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="pay" v-if="payFlag">
        <div class="pay-content clearfix">
          <div class="title">支付</div>
          <div class="des">您需要支付20元</div>
          <div class="confirm border-1px" @click="confirm">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import CartControl from './CartControl'
export default {
  data () {
    return {
      show: false,
      payFlag: true
    }
  },
  components: {
    CartControl
  },
  mounted () {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.list, {
        click: true
      })
    } else {
      this.scroll.refresh()
    }
  },
  methods: {
    showCheckList () {
      this.show = !this.show
    },
    confirm () {
      this.payFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/css/mixin';
.footer-wrapper {
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background-color: rgb(19, 29, 38);
  .footer {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      .cart-wrapper {
        position: relative;
        bottom: 11px;
        height: 56px;
        width: 56px;
        margin: 0 18px;
        background-color: rgb(19, 29, 38);
        border-radius: 50%;
        z-index: 2;
        .cart {
          position: absolute;
          height: 44px;
          width: 44px;
          background-color: rgb(43, 51, 59);
          border-radius: 50%;
          left: 6px;
          top: 6px;
          .icon-cart {
            display: inline-block;
            font-size: 24px;
            margin-top: 50%;
            margin-left: 50%;
            transform: translate(-50%, -50%);
            color: rgb(128, 138, 133);

          }
        }
      }
      .check {
        bottom: 8px;
        padding: 12px 0;
        display: flex;
        flex: 1;
        .food-cost {
          padding-right: 12px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        .delivery-cost {
          padding-left: 12px;
          font-size: 12px;
          line-height: 24px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
        }
      }
    }
    .pay-button {
      width: 105px;
      background-color: rgb(43, 51, 59);
      .pay {
        text-align: center;
        font-size: 12px;
        line-height: 24px;
        color: rgba(255,255,255,0.4);
        font-weight: 700;
        padding: 12px 0;
      }
    }
  }
  .check-list {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 48px;
    background-color: rgba(7, 17, 27, 0.6);
    // filter: blur(10px);
    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      background: #fff;
      .header {
        z-index: 1;
        display: flex;
        justify-content: space-between;
        height: 40px;
        padding: 0 18px;
        box-sizing: border-box;
        @include border-1px(rgba(7, 17, 27, 0.1));
        background-color: #f3f5f7;
        line-height: 40px;
        .left {
          font-size: 14px;
          font-weight: 200;
          color: rgb(7, 17, 27);
        }
        .right {
          color: rgb(0, 160, 220);
          font-size: 12px;
        }
      }
      .list-wrapper {
        max-height: 240px;
        .list {
          padding: 0 18px;
          .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 48px;
            padding: 12px 0;
            box-sizing: border-box;
            @include border-1px(rgba(7, 17, 27, 0.1));
            .food-name {
              font-size: 14px;
              line-height: 24px;
              color: rgb(7, 17, 27);
            }
            .check-info {
              display: flex;
              align-items: center;
              .price {
                color: rgb(240, 20, 20);
                font-size: 10px;
                font-weight: normal;
                padding: 0 18px 0 12px;
                .price-num {
                  font-size: 14px;
                  font-weight: 700;
                }
              }
              .count {
                display: flex;
                align-items: center;
                .iconfont {
                  font-size: 24px;
                  color: rgb(0, 160, 220);
                }
                .num {
                  text-align: center;
                  font-size: 10px;
                  color: rgb(147, 153, 159);
                  width: 24px;
                }
              }
            }
          }
        }
      }
    }
    .pay {
      z-index: 2;
      position: relative;
      width: 100%;
      height: 100%;
      background-color: rgba(7, 17, 27, 0.4);
      .pay-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 250px;
        font-size: 14px;
        border-radius: 3px;
        background-color: #fff;
        .title {
          color: #000;
          padding-top: 20px;
        }
        .des {
          font-size: 12px;
          color: rgb(218, 218, 218);
          padding: 10px 0;
        }
        .confirm {
          @include border-top-1px(#ccc);
          color: rgb(252, 145, 83);
          line-height: 40px;
        }
      }
    }
  }
}
</style>
