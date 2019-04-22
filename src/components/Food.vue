<template>
  <div class="food">
    <img class="food-img" src="../../static/img/food/food.jpg"/>
    <div class="food-info">
      <div class="food-name">
        皮蛋瘦肉粥
      </div>
      <div class="food-sale">
        <span class="num">月售1132份</span>
        <span class="rate">好评率100%</span>
      </div>
      <div class="food-price">
        <div class="price">
          <span class="current-price">￥<span>24</span></span>
          <span class="previous-price">￥28</span>
        </div>
        <div class="button">加入购物车</div>
      </div>
    </div>
    <div class="food-introduction">
      <div class="title">商品介绍</div>
      <p class="introduction">皮蛋瘦肉粥是一种广东省的地方传统著名小吃。皮蛋瘦肉粥营养丰富，以切成小块的皮蛋及咸瘦肉为配料。不同地区的配料有所不同，有人会在进食前加上香油及葱花，或者加葱花及薄脆。</p>
    </div>
    <div class="food-ratings">
      <div class="filter-wrapper">
        <div class="title">商品评价</div>
        <ratings-filter class="filter"></ratings-filter>
      </div>
      <ul class="ratings-list">
        <li class="ratings-item">
          <div class="rating-info">
            <div class="time">
              <span class="date">2016-07-07</span>
              <span class="datetime">12:34</span>
            </div>
            <div class="user-info">
              <span class="tel">3*******4</span>
              <img class="avatar"/>
            </div>
          </div>
          <div class="rating-content">
            <span class="praise"></span>
            <span class="content">太少了，不够一个人吃！！</span>
          </div>
        </li>
        <li class="ratings-item">
          <div class="rating-info">
            <div class="time">
              <span class="date">2016-07-07</span>
              <span class="datetime">12:34</span>
            </div>
            <div class="user-info">
              <span class="tel">3*******4</span>
              <img class="avatar" src="../../static/img/ratings/avatar.png"/>
            </div>
          </div>
          <div class="rating-content">
            <span class="praise"></span>
            <span class="content">太少了，不够一个人吃！！</span>
          </div>
        </li>
        <li class="ratings-item">
          <div class="rating-info">
            <div class="time">
              <span class="date">2016-07-07</span>
              <span class="datetime">12:34</span>
            </div>
            <div class="user-info">
              <span class="tel">3*******4</span>
              <img class="avatar"/>
            </div>
          </div>
          <div class="rating-content">
            <span class="praise"></span>
            <span class="content">太少了，不够一个人吃！！</span>
          </div>
        </li>
        <li class="ratings-item">
          <div class="rating-info">
            <div class="time">
              <span class="date">2016-07-07</span>
              <span class="datetime">12:34</span>
            </div>
            <div class="user-info">
              <span class="tel">3*******4</span>
              <img class="avatar"/>
            </div>
          </div>
          <div class="rating-content">
            <span class="praise"></span>
            <span class="content">太少了，不够一个人吃！！</span>
          </div>
        </li>
        <li class="ratings-item">
          <div class="rating-info">
            <div class="time">
              <span class="date">2016-07-07</span>
              <span class="datetime">12:34</span>
            </div>
            <div class="user-info">
              <span class="tel">3*******4</span>
              <img class="avatar"/>
            </div>
          </div>
          <div class="rating-content">
            <span class="praise"></span>
            <span class="content">太少了，不够一个人吃！！</span>
          </div>
        </li>
        <li class="ratings-item">
          <div class="rating-info">
            <div class="time">
              <span class="date">2016-07-07</span>
              <span class="datetime">12:34</span>
            </div>
            <div class="user-info">
              <span class="tel">3*******4</span>
              <img class="avatar"/>
            </div>
          </div>
          <div class="rating-content">
            <span class="praise"></span>
            <span class="content">太少了，不够一个人吃！！</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RatingsFilter from './RatingsFilter'
export default {
  components: {
    RatingsFilter
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
        .content {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
