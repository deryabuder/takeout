<template>
  <div class="footer-wrapper">
    <div class="footer" @click="showCheckList">
      <div tab="div" class="left">
        <div class="cart-wrapper">
          <div class="cart" :style="{'background-color': selectNum > 0 ? 'rgb(0, 160, 220)' : '' }">
            <i class="iconfont icon-cart" :style="{'color': selectNum > 0 ? '#fff' : '' }"></i>
            <bubble class="total-num" v-if="selectNum > 0" :num="selectNum"></bubble>
          </div>
        </div>
        <div class="check">
          <div class="food-cost">￥{{totalPrice}}</div>
          <div class="delivery-cost">另需配送费￥{{deliveryPrice}}元</div>
        </div>
      </div>
      <div class="pay-button"><div class="pay" :class="buyClass" @click.stop="pay">{{buydes}}</div></div>
    </div>
    <div class="check-list" v-show="show" @click="closeList">
      <transition name="list">
        <div class="content">
          <div class="header border-1px">
            <span class="left">购物车</span>
            <span class="right" @click="clear">清空</span>
          </div>
          <div class="list-wrapper" ref="list">
            <ul class="list">
              <li class="item border-1px" v-for="(food, index) in selectFoods" :key="index">
                <div class="food-name">{{food.name}}</div>
                <div class="check-info">
                  <span class="price">￥<span class="price-num">{{food.count * food.price}}</span></span>
                  <cart-control :food="food"></cart-control>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <div class="pay-tips" v-if="payFlag">
      <div class="pay-content clearfix">
        <div class="title">支付</div>
        <div class="des">您需要支付20元</div>
        <div class="confirm border-1px" @click="confirm">确定</div>
      </div>
    </div>
    <v-dialog v-if="showDialog" :title="title" @cancle="cancle" @affirm="affirm"></v-dialog>
  </div>
</template>

<script>
import CartControl from './CartControl'
import Bubble from './Bubble'
import Dialog from './Dialog'
import BScroll from 'better-scroll'
export default {
  components: {
    CartControl,
    Bubble,
    'v-dialog': Dialog
  },
  props: {
    minPrice: {
      type: Number,
      default: 0
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      show: false,
      payFlag: false,
      showDialog: false,
      title: '清空购物车'
    }
  },
  watch: {
    selectNum (val, oldVal) {
      if (val === 0) {
        this.show = false
      }
    }
  },
  computed: {
    selectNum () {
      let count = 0
      this.selectFoods.forEach(food => {
        count += food.count
      })
      return count
    },
    totalPrice () {
      let price = 0
      this.selectFoods.forEach(food => {
        price += food.count * food.price
      })
      return price
    },
    buydes () {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        return `还差￥${this.minPrice - this.totalPrice}元起送`
      } else {
        return '去结算'
      }
    },
    buyClass () {
      if (this.totalPrice < this.minPrice) {
        return 'not-buy'
      } else {
        return 'buy'
      }
    }
  },
  mounted () {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.list, {
        click: true,
        mouseWheel: true
      })
    } else {
      this.scroll.refresh()
    }
  },
  methods: {
    showCheckList () {
      if (this.selectNum === 0) {
        return
      }
      this.show = !this.show
    },
    confirm () {
      this.payFlag = false
    },
    clear () {
      this.showDialog = true
    },
    pay () {
      if (this.totalPrice >= this.minPrice) {
        this.payFlag = true
      }
    },
    closeList (e) {
      let checkList = document.querySelector('.check-list')
      if (e.target === checkList) {
        this.show = false
      }
    },
    cancle () {
      this.showDialog = false
    },
    affirm () {
      this.showDialog = false
      this.selectFoods.forEach(food => {
        food.count = 0
      })
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
          .total-num {
            position: absolute;
            top: -10px;
            right: 0;
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
      .pay {
        text-align: center;
        font-size: 12px;
        line-height: 24px;

        font-weight: 700;
        padding: 12px 0;
        &.not-buy {
          background-color: rgb(43, 51, 59);
          color: rgba(255,255,255,0.4);
        }
        &.buy {
          background-color: #31c56a;
          color: #fff;
        }
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
    .list-enter-active, .list-leave-active {
      transition: all 3s linear;
    }
    .list-enter, .list-leave-to {
      transform: translateY(100%);
      opacity: 0;
    }
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
  }
    .pay-tips {
      z-index: 2;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(7, 17, 27, 0.7);
      .pay-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 270px;
        font-size: 16px;
        border-radius: 3px;
        background-color: #fff;
        .title {
          color: #000;
          padding-top: 30px;
        }
        .des {
          font-size: 14px;
          color: rgb(156, 156, 156);
          padding: 20px 0;
        }
        .confirm {
          @include border-top-1px(#ccc);
          color: rgb(252, 145, 83);
          line-height: 50px;
        }
      }
  }
}
</style>
