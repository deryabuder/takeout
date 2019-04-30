<template>
  <div class="food">
    <div class="img-header">
      <img class="food-img" :src="good.image"/>
      <i class="iconfont icon-left" @click="back"></i>
    </div>
    <div class="food-info">
      <div class="food-name">
        {{good.name}}
      </div>
      <div class="food-sale">
        <span class="num">月售{{good.sellCount}}份</span>
        <span class="rate">好评率{{good.rating}}%</span>
      </div>
      <div class="food-price">
        <div class="price">
          <span class="current-price">￥<span>{{good.price}}</span></span>
          <span class="previous-price" v-if="good.oldPrice">￥{{good.oldPrice}}</span>
        </div>
        <div class="button">加入购物车</div>
      </div>
    </div>
    <div class="food-introduction border-1px" v-if="good.info">
      <div class="title">商品介绍</div>
      <p class="introduction">{{good.info}}</p>
    </div>
    <div class="food-ratings border-1px">
      <div class="filter-wrapper">
        <div class="title">商品评价</div>
        <ratings-filter class="filter" :ratings = "good.ratings" @change="changeRating"
        :ratingsNum="ratingsNum" :ratingsLikeNum="ratingsLikeNum" :ratingsUnlikeNum="ratingsUnlikeNum"></ratings-filter>
      </div>
      <ul class="ratings-list border-1px">
        <li class="ratings-item border-1px" v-for="(item, index) in currentRatings" :key="index">
          <div class="rating-info">
            <div class="time">
              <span class="date">{{formatDate(item.rateTime)}}</span>
            </div>
            <div class="user-info">
              <span class="tel">{{item.username}}</span>
              <img class="avatar" :src="item.avatar"/>
            </div>
          </div>
          <div class="rating-content">
            <i :class="['iconfont', item.rateType ? 'icon-like-fill':'icon-unlike-fill']"></i>
            <span class="content" v-if="item.text">{{item.text}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RatingsFilter from './RatingsFilter'
import { getGoodsData } from '../api/api'
import { formatDate } from '../../static/js/util'
export default {
  data () {
    return {
      good: {},
      currentRatings: [],
      ratingsNum: 0,
      ratingsLikeNum: 0,
      ratingsUnlikeNum: 0
    }
  },
  components: {
    RatingsFilter
  },
  created () {
    getGoodsData().then(res => {
      res = res.data
      var goods = res.result
      var index = this.$route.params.index
      var num = this.$route.params.num
      this.good = goods[index].foods[num]
      this.currentRatings = this.good.ratings
      this.ratingsInfo(this.good.ratings)
    })
  },
  methods: {
    changeRating (currentRatings) {
      this.currentRatings = currentRatings
    },
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    },
    ratingsInfo (ratings) {
      this.ratingsNum = ratings.length
      var ratingsLike = ratings.filter((value, index) => {
        return value.rateType === 1
      })
      this.ratingsLikeNum = ratingsLike.length
      var ratingsUnlike = ratings.filter((value, index) => {
        return value.rateType === 0
      })
      this.ratingsUnlikeNum = ratingsUnlike.length
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/css/mixin';
.food {
  background-color: rgb(243,245,247);
  color: rgb(7,17,27);
  .img-header {
    position: relative;
    width: 100%;
    height: 0;
    // padding-top取值百分比是相对于包含块的宽度而定
    padding-top: 100%;
    .food-img {
    // 手机宽度自适应，宽高相等
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    }
    .iconfont {
      z-index: 2;
      position: absolute;
      top: 20px;
      left: 10px;
      font-size: 20px;
      color: #fff;
    }
  }
  .food-info {
    padding: 18px;
    background-color: #fff;
    .food-title {
      font-size: 14px;
      line-height: 14px;
      font-weight: 700;
    }
    .food-sale {
      padding: 8px 0 18px;
      font-size: 10px;
      line-height: 10px;
      color: rgb(147,153,159);
      .num {
        padding-right: 12px;
      }
    }
    .food-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        font-size: 10px;
        line-height: 24px;
        font-weight: normal;
        .current-price {
          padding-right: 15px;
          color: rgb(240, 20, 20);
          span {
            font-size: 14px;
            font-weight: 700;
          }
        }
        .previous-price {
          color: rgb(147,153,159);
          text-decoration: line-through;
        }
      }
      .button {
        display: inline-block;
        font-size: 10px;
        text-align: center;
        width: 74px;
        height: 24px;
        line-height: 24px;
        background-color: rgb(0,160,220);
        color: #fff;
        border-radius: 24px;
      }
    }
  }
  .food-introduction {
    margin-top: 16px;
    @include border-top-1px(rgb(229,229,229));
    @include border-1px(rgb(229,229,229));
    padding: 18px;
    background-color: #fff;
    .title {
      font-size: 14px;
      line-height: 14px;
      padding-bottom: 6px;
    }
    .introduction {
      padding: 0 8px;
      font-size: 12px;
      line-height: 24px;
      font-weight: 200;
      color: rgb(77,85,93);
    }
  }
  .food-ratings {
    margin-top: 16px;
    @include border-top-1px(rgb(229,229,229));
    @include border-1px(rgb(229,229,229));
    background-color: #fff;
    .filter-wrapper {
      background-color: #fff;
      padding: 0 18px;
      .title {
        font-size: 14px;
        line-height: 14px;
        padding-top: 18px;
      }
    }
  }
  .ratings-list {
    @include border-top-1px(rgb(229,229,229));
    padding: 0 18px;
    .ratings-item {
      padding: 16px 0;
      @include border-1px(rgb(229,229,229));
      .rating-info {
        font-size: 10px;
        line-height: 12px;
        color: rgb(147,153,159);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 6px;
        .time {
          .date {
            padding-right: 10px;
          }
        }
        .user-info {
          .avatar {
            height: 12px;
            width: 12px;
            padding-left: 6px;
          }
        }
      }
      .rating-content {
        display: flex;
        align-items: center;
        .iconfont {
          font-size: 12px;
          line-height: 24px;
          padding-right: 4px;
        }
        .icon-like-fill {
          color: rgb(0, 160,220);
        }
        .icon-unlike-fill {
          color: rgb(183, 187,191);
        }
        .content {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
