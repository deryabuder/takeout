<template>
  <div class="goods">
    <ul class="goods-left wrapper" ref="wrapper">
      <li class="left-item" v-for="(item, index) in goods" :key="index">
        <span v-if="item.type >= 0" :class="['icon',iconMap(item.type)]"></span>
        <span class="left-item-des">{{item.name}}</span>
      </li>
    </ul>
    <div class="goods-right wrapper">
      <dl class="goods-right-content" v-for="(item, index) in goods" :key="index">
        <dt class="foods-type">{{item.name}}</dt>
        <dd v-for="(food, num) in item.foods" :key="num" class="foods-item" @click="toFood(index, num)">
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
              <div class="count clearfix">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <seller-footer></seller-footer>
  </div>
</template>

<script>
import { getGoodsData } from '../api/api'
import SellerFooter from './SellerFooter'
import Bscroll from 'better-scroll'

export default {
  data () {
    return {
      goods: [],
      checkObj: {}
    }
  },
  components: {
    SellerFooter
  },
  created () {
    getGoodsData().then(res => {
      res = res.data
      this.goods = res.result
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          scrollX: true,
          scrollY: false
        })
      })
    })
  },
  methods: {
    iconMap (index) {
      var iconArr = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return iconArr[index]
    },
    toFood (index, num) {
      this.$router.push({name: 'food', params: {index: index, num: num}})
    }
  }
}
</script>

<style lang="scss" scoped>

.goods {
  display: flex;
  .goods-left {
    width: 80px;
    color: rgb(7, 17, 27);
    background-color: #f3f5f7;
    padding: 0 12px;
    box-sizing: border-box;
    .left-item {
      display: flex;
      align-items: center;
      height: 54px;
      font-size: 12px;
      line-height: 14px;
      font-weight: 200;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
  }
  .goods-right {
    flex: 1;
    color: rgb(147, 153, 159);
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
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .food-avatar {
          padding-right: 10px;
          width: 70px;
          height: 70px;
        }
        .food-info {
          flex: 1;
          padding-top: 2px;
          .name {
            color: rgb(7, 17, 27);
            font-size: 14px;
            line-height: 14px;
          }
          .info {
            font-size: 10px;
            line-height: 10px;
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
            .count {
              .iconfont {
                float: left;
                font-size: 24px;
                color: rgb(0, 160, 220);
              }
              .num {
                text-align: center;
                float: left;
                font-size: 10px;
                line-height: 24px;
                width: 24px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
