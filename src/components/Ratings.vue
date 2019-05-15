<template>
  <div class="ratings">
    <div class="score-wrapper clearfix border-1px">
      <div class="score-total">
        <div class="score">{{seller.score}}</div>
        <div class="score-des">综合评分</div>
        <div class="score-info">高于周边商家{{seller.rankRate}}%</div>
      </div>
      <div class="score-list">
        <div class="score-item">
          <span class="score-item-des">服务态度</span>
          <star class="star" :star="seller.serviceScore"></star>
          <span class="score-num">{{seller.serviceScore}}</span>
        </div>
        <div class="score-item">
          <span class="score-item-des">食物积分</span>
          <star class="star" :star="seller.foodScore"></star>
          <span class="score-num">{{seller.foodScore}}</span>
        </div>
        <div class="score-item">
          <span class="score-item-des">送达时间</span>
          <span class="time">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
    <split></split>
    <div class="rating-wrapper">
      <ratings-filter :ratings="ratings" @change="changeRating"
      :ratingsNum="ratingsNum" :ratingsLikeNum="ratingsLikeNum" :ratingsUnlikeNum="ratingsUnlikeNum"/>
    </div>
    <ul class="ratings-list">
      <li class="rating-item border-1px" v-for="(item, index) in currentRatings" :key="index">
        <img class="user-avatar" :src="item.avatar">
        <div class="ratings-wrapper">
          <div class="user-name">{{item.username}}</div>
          <div class="star-info">
            <star class="star" :star="item.score"></star>
            <span class="time" v-if="item.deliveryTime">{{item.deliveryTime}}分钟送达</span>
          </div>
          <div class="ratings-content">{{item.text}}</div>
          <div class="foods clearfix" v-if="item.recommend.length">
            <i :class="['iconfont', item.rateType ? 'icon-unlike-fill':'icon-like-fill']"></i>
            <span v-for="(recommend, index) in item.recommend" :key="index" class="food-name">{{recommend}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Star from './Star'
import RatingsFilter from './RatingsFilter'
import Split from './Split'
import { getRatingsData, getSellerData } from '../api/api'
export default {
  data () {
    return {
      ratings: [],
      seller: {},
      currentRatings: [],
      ratingsNum: 0,
      ratingsLikeNum: 0,
      ratingsUnlikeNum: 0
    }
  },
  components: {
    Star,
    RatingsFilter,
    Split
  },
  created () {
    getRatingsData().then(res => {
      res = res.data
      this.ratings = res.result
      this.currentRatings = this.ratings
      this.ratingsInfo(this.ratings)
    })
    getSellerData().then(res => {
      res = res.data
      this.seller = res.result
    })
  },
  methods: {
    changeRating (currentRatings) {
      this.currentRatings = currentRatings
    },
    ratingsInfo (ratings) {
      this.ratingsNum = ratings.length
      var ratingsLike = ratings.filter((value, index) => {
        return value.rateType === 0
      })
      this.ratingsLikeNum = ratingsLike.length
      var ratingsUnlike = ratings.filter((value, index) => {
        return value.rateType === 1
      })
      this.ratingsUnlikeNum = ratingsUnlike.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
.ratings {
  background-color: #fff;
  .score-wrapper {
    display: flex;
    padding: 12px 0;
    .score-total {
      float: left;
      padding: 0 10px;
      border-right: 1px solid rgba(7,17,27,0.1);
      text-align: center;
      .score {
        font-size: 24px;
        line-height: 28px;
        color: rgb(255,153,0);
        padding-bottom: 6px;
      }
      .score-des {
        font-size: 12px;
        line-height: 12px;
        color: rgb(7,17,27);
        padding-bottom: 8px;
      }
      .score-info {
        font-size: 10px;
        line-height: 10px;
        color: rgb(147, 153, 159);
        padding-bottom: 6px;
      }
    }
    .score-list {
      float: right;
      padding: 0 20px;
      .score-item {
        display: flex;
        align-items: center;
        padding-bottom: 8px;
        .score-item-des {
          font-size: 12px;
          line-height: 18px;
          color: rgb(7,17,27);
        }
        .star {
          padding: 0 6px 0 12px;
        }
        .score-num {
          font-size: 12px;
          line-height: 18px;
          color: rgb(255,153,0);
        }
        .time {
          font-size: 12px;
          line-height: 18px;
          color: rgb(147,153,159);
          padding: 0 12px;
        }
      }
    }
  }
  .rating-wrapper {
    padding: 0 18px;
  }
  .ratings-list {
    padding: 0 18px;
    color: rgb(7,17,27);
    border: 1px solid rgba(7,17,27,0.1);
    .rating-item {
      padding: 18px 0;
      display: flex;
      @include border-1px(rgba(7,17,27,0.1));
      .user-avatar {
        width: 28px;
        height: 28px;
        padding-right: 12px;
      }
      .ratings-wrapper {
        flex: 1;
        .user-name {
          font-size: 10px;
          line-height: 12px;
        }
        .star-info {
          display: flex;
          align-items: center;
          padding: 0 4px 6px 0;
          line-height: 12px;
          .star {
            padding-right: 6px;
          }
          .time {
            flex: 1;
            font-size: 10px;
            font-weight: 200;
            color: rgb(147,153,159);
            padding-left: 6px;
          }
        }
        .ratings-content {
          font-size: 12px;
          line-height: 18px;
        }
        .foods {
          display: flex;
          align-items: center;
          text-align: center;
          flex-wrap: wrap;
          .iconfont {
            font-size: 12px;
            line-height: 16px;
            margin-top: 8px;
          }
          .icon-like-fill {
            color: rgb(0, 160,220);
          }
          .icon-unlike-fill {
            color: rgb(183, 187,191);
          }
          .food-name {
            @include no-wrap;
            color: rgb(147,153,159);
            font-size: 9px;
            line-height: 16px;
            padding: 0 6px;
            margin-top: 8px;
            margin-left: 8px;
            border: 1px solid rgba(7,17,27,0.1);
            border-radius: 1px;
            width: 60px;
          }
        }
      }
    }
  }
}

</style>
