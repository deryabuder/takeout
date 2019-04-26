<template>
  <div class="food">
    <img class="food-img" :src="good.image"/>
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
    <div class="food-introduction" v-if="good.info">
      <div class="title">商品介绍</div>
      <p class="introduction">{{good.info}}</p>
    </div>
    <div class="food-ratings">
      <div class="filter-wrapper">
        <div class="title">商品评价</div>
        <ratings-filter class="filter" :ratings = "good.ratings" @change="changeRating"
        :ratingsNum="ratingsNum" :ratingsLikeNum="ratingsLikeNum" :ratingsUnlikeNum="ratingsUnlikeNum"></ratings-filter>
      </div>
      <ul class="ratings-list">
        <li class="ratings-item" v-for="(item, index) in currentRatings" :key="index">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.food {
  background-color: rgb(243,245,247);
  color: rgb(7,17,27);
  .food-img {
    width: 100%;
    height: 375px;
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
    border-top: 2px solid rgb(229,229,229);
    border-bottom: 2px solid rgb(229,229,229);
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
    border-top: 2px solid rgb(229,229,229);
    border-bottom: 2px solid rgb(229,229,229);
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
    border-top: 1px solid rgb(229,229,229);
    padding: 0 18px;
    .ratings-item {
      padding: 16px 0;
      border-bottom: 1px solid rgb(229,229,229);
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
