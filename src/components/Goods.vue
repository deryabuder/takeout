<template>
  <div class="goods">
    <div class="goods-left-wrapper" ref="wrapper1">
      <ul class="goods-left">
        <li class="left-item border-1px" :class="{'current': index === currentIndex}" v-for="(item, index) in goods" :key="index" @click="selectMenu(index)">
          <span class="item-des">
            <span v-if="item.type > 0" :class="['icon',iconMap(item.type)]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-right-wrapper" ref="wrapper2">
      <div class="goods-right">
        <dl class="goods-right-content" v-for="(item, index) in goods" :key="index">
          <dt class="foods-type">{{item.name}}</dt>
          <dd v-for="(food, num) in item.foods" :key="num" class="foods-item border-1px" @click="showFood(food)">
            <img :src="food.icon" class="food-avatar"/>
            <div class="food-info">
              <div class="name">{{food.name}}</div>
              <div class="info" v-if="food.description">{{food.description}}</div>
              <div class="food-des clearfix">
                <span class="sell-count">月销{{food.sellCount}}份</span>
                <span class="rating">好评率{{food.rating}}%</span>
              </div>
              <div class="price-info">
                <div class="price">
                  <span class="current-price">￥<span class="num">{{food.price}}</span></span>
                  <span class="old-price" v-if="food.oldPrice">￥<span class="num">{{food.oldPrice}}</span></span>
                </div>
                <cart-control :food="food"></cart-control>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <food :food="selectedFood" ref="food"></food>
    <seller-footer></seller-footer>
  </div>
</template>

<script>
import { getGoodsData } from '../api/api'
import CartControl from './CartControl'
import Food from './Food'
import SellerFooter from './SellerFooter'
import Bscroll from 'better-scroll'

export default {
  data () {
    return {
      goods: [],
      selectedFood: {},
      listHeight: [],
      scrollY: 0
    }
  },
  components: {
    CartControl,
    Food,
    SellerFooter
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      for (let i = 0; i < this.goods.length; i++) {
        let good = this.goods[i]
        if (good.count > 0) {
          foods.push(good)
        }
      }
      return foods
    }
  },
  created () {
    getGoodsData().then(res => {
      res = res.data
      this.goods = res.result
      this.$nextTick(() => {
        this._initScroll()
        this._calcHeight()
      })
    })
  },
  methods: {
    iconMap (index) {
      var iconArr = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return iconArr[index]
    },
    showFood (food) {
      this.selectedFood = food
      this.$refs.food.show()
    },
    _initScroll () {
      this.$nextTick(() => {
        if (!this.menuScroll) {
          this.menuScroll = new Bscroll(this.$refs.wrapper1, {
            // 默认响应的鼠标拖动
            click: true,
            mouseWheel: true
          })
        } else {
          this.menuScroll.refresh()
        }
        if (!this.goodsScroll) {
          this.goodsScroll = new Bscroll(this.$refs.wrapper2, {
            click: true,
            mouseWheel: true
          })
        } else {
          this.goodsScroll.refresh()
        }
        // 事件响应这样写
        this.goodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
        // if (!this.scroll3) {
        //   this.scroll3 = new Bscroll(this.$refs.food, {
        //     click: true,
        //     mouseWheel: true
        //   })
        // } else {
        //   this.scroll3.refresh()
        // }
      })
    },
    _calcHeight () {
      let foodList = this.$refs.wrapper2.getElementsByClassName('goods-right-content')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu (index) {
      let foodList = this.$refs.wrapper2.getElementsByClassName('goods-right-content')
      this.goodsScroll.scrollToElement(foodList[index], 300)
      this.scrollY = this.listHeight[index]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/css/mixin';
.goods {
  display: flex;
  .goods-left-wrapper {
    max-height: calc(100vh - 218px);
    overflow: hidden;
    .goods-left {
      width: 80px;
      color: rgb(7, 17, 27);
      background-color: #f3f5f7;
      // padding: 0 12px;
      box-sizing: border-box;
      .left-item {
        display: table;
        height: 54px;
        width: 100%;
        padding: 0 12px;
        font-size: 12px;
        line-height: 14px;
        font-weight: 200;
        box-sizing: border-box;
        vertical-align: middle;
        &.current {
          background-color: #fff;
          color: #000;
        }
        .item-des {
          // @include border-1px(rgba(7, 17, 27, 0.1));
          width: 100%;
          display: table-cell;
          vertical-align: middle;
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            background-size: 12px;
            background-repeat: no-repeat;
            background-position-y: 1px;
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
        }
      }
    }
  }
  .goods-right-wrapper {
    flex: 1;
    min-width:0;
    color: rgb(147, 153, 159);
    max-height: calc(100vh - 218px);
    overflow: hidden;
    .goods-right {
      .goods-right-content {
        .foods-type {
          height: 26px;
          font-size: 12px;
          line-height: 26px;
          color: rgb(147, 153, 159);
          background-color: #f3f5f7;
          border-left: 2px solid #d9dde1;
          padding-left: 14px;
        }
        .foods-item {
          display: flex;
          padding: 18px;
          @include border-1px(rgba(7, 17, 27, 0.1));
          .food-avatar {
            padding-right: 10px;
            width: 70px;
            height: 70px;
          }
          .food-info {
            flex: 1;
            min-width:0;
            padding-top: 2px;
            .name {
              color: rgb(7, 17, 27);
              font-size: 14px;
              line-height: 14px;
            }
            .info {
              @include no-wrap;
              font-size: 10px;
              padding-top: 8px;
            }
            .food-des {
              padding: 8px 0;
              font-size: 10px;
              line-height: 10px;
              .sell-count {
                float:left;
                padding-right: 12px;
              }
              .rating {
                float: left;
              }
            }
            .price-info {
              display: flex;
              justify-content: space-between;
              .price {
                line-height: 24px;
                font-size: 10px;
                font-weight: normal;
                .current-price {
                  color: rgb(240, 20, 20);
                  .num {
                    font-size: 14px;
                    font-weight: 700;
                  }
                }
                .old-price {
                  text-decoration: line-through;
                  .num {
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
