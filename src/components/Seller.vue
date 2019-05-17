<template>
  <div class="seller">
    <div class="seller-introduction">
      <div class="introduction-top border-1px">
        <div class="seller-des">
          <div class="title">{{seller.name}}</div>
          <div class="sales-info">
            <star class="star" :star="seller.score"></star>
            <span class="ratings-num">({{seller.ratingCount}})</span>
            <span class="sales-num">月售{{seller.sellCount}}单</span>
          </div>
        </div>
        <div class="collection">
          <div class="heart"><i class="iconfont icon-heart-fill" :class="favoriteClass" @click="changeCollection"></i></div>
          <div class="collection-des">{{favoriteText}}</div>
        </div>
      </div>
      <div class="introduction-bottom">
        <div class="introduction-content">
          <div class="des">起送价</div>
          <div class="num">{{seller.minPrice}}<span class="unit">元</span></div>
        </div>
        <div class="introduction-content">
          <div class="des">商家配送</div>
          <div class="num">{{seller.deliveryPrice}}<span class="unit">元</span></div>
        </div>
        <div class="introduction-content last-introduction-content">
          <div class="des">平均配送时间</div>
          <div class="num">{{seller.deliveryTime}}<span class="unit">分钟</span></div>
        </div>
      </div>
    </div>
    <split></split>
    <div class="seller-notices border-1px">
      <div class="notices-title">
        <div class="title">公告与活动</div>
        <p class="content">{{seller.bulletin}}</p>
      </div>
      <div v-for="(item, index) in seller.supports" :key="index" class="notices-content border-1px">
        <span :class="['icon',iconMap(item.type)]" ></span>
        <span class="des">{{item.description}}</span>
      </div>
    </div>
    <split></split>
    <div class="seller-imgs border-1px">
      <div class="title">商家实景</div>
      <div class="imgs wrapper" ref="wrapper">
        <div class="content" ref="content">
          <img class="img" v-for="(item, index) in seller.pics" :src="item" :key="index"/>
        </div>
      </div>
    </div>
    <split></split>
    <div class="seller-info border-1px">
      <div class="title">商家信息</div>
      <div class="info border-1px" v-for="(item, index) in seller.infos" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
import Star from './Star'
import Split from './Split'
import Bscroll from 'better-scroll'

export default {
  components: {
    Star,
    Split
  },
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      collection: false
    }
  },
  watch: {
    seller (val, oldVal) {
      if (val) {
        this._initPicScroll()
      }
    }
  },
  computed: {
    favoriteText () {
      return this.collection ? '已收藏' : '收藏'
    },
    favoriteClass () {
      return this.collection ? 'red-heart' : ''
    }
  },
  created () {
    if (localStorage.getItem('collection') !== null) {
      this.collection = JSON.parse(localStorage.getItem('collection'))
    }
  },
  methods: {
    iconMap (index) {
      var iconArr = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return iconArr[index]
    },
    changeCollection () {
      this.collection = !this.collection
      let jsonCollection = JSON.stringify(this.collection)
      localStorage.setItem('collection', jsonCollection)
    },
    _initPicScroll () {
      if (this.seller.pics) {
        let picWidth = 120
        let margin = 6
        let width = (picWidth + margin) * this.seller.pics.length - margin
        this.$refs.content.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.wrapper, {
              scrollX: true,
              scrollY: false,
              // 纵向的滚动还是保留原生滚动
              eventPassthrough: 'vertical'
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin";
.seller {
  background-color: #fff;
  .seller-introduction {
    padding: 0 18px;
    .introduction-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include border-1px(rgb(243,243,243));
      .seller-des {
        padding: 18px 0;
        color: rgb(77,85,93);
        .title {
          font-size: 14px;
          line-height: 14px;
          color: rgb(7,17,27);
        }
        .sales-info {
          display: flex;
          align-items: center;
          padding-top: 8px;
          .ratings-num {
            font-size: 10px;
            line-height: 18px;
            padding: 0 8px 0 12px;
          }
          .sales-num {
            flex: 1;
            font-size: 10px;
            line-height: 18px;
          }
        }
      }
      .collection {
        width: 50px;
        text-align: center;
        .heart {
          line-height: 24px;
          padding-bottom: 4px;
          color: rgb(147,153,159);
          .icon-heart-fill {
            font-size: 24px;
          }
          .red-heart {
            color: rgb(240,20,20);
          }
        }
        .collection-des {
          font-size: 10px;
          line-height: 10px;
        }
      }
    }
    .introduction-bottom {
      display: flex;
      padding: 18px 0;
      text-align: center;
      .introduction-content {
        flex: 1;
        border-right: 1px solid rgb(243,243,243);
        .des {
          font-size: 10px;
          line-height: 10px;
          color: rgb(147,153,159);
          padding-bottom: 4px;
        }
        .num {
          font-size: 24px;
          line-height: 24px;
          color: rgb(7,17,27);
          font-weight: 200;
          .unit {
            font-size: 10px;
          }
        }
      }
      .last-introduction-content {
        border: 0;
      }
    }
  }
  .seller-notices {
    padding: 0 18px;
    color: rgb(7,17,27);
    .notices-title {
      padding: 18px 0 16px;
      .title {
        font-size: 14px;
        line-height: 14px;
        padding-bottom: 8px;
      }
      .content {
        padding: 0 12px;
        font-size: 12px;
        line-height: 24px;
        font-weight: 200;
        color: rgb(240,20,20);
      }
    }
    .notices-content {
      display: flex;
      padding: 16px 12px;
      @include border-top-1px(rgba(7,17,27,0.1));
      .icon {
        width: 16px;
        height: 16px;
        background-size: 16px;
        background-repeat: no-repeat;
        padding-right: 6px;
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
      .des {
        flex: 1;
        font-size: 12px;
        line-height: 16px;
        font-weight: 200;
      }
    }
  }
  .seller-imgs {
    padding: 16px;
    .title {
      font-size: 14px;
      line-height: 14px;
      padding-bottom: 12px;
    }
    .imgs {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      .content {
        font-size: 0;
        .img {
          // flex: 1;
          width: 120px;
          height: 90px;
          margin-right: 6px;
        }
      }
    }
  }
  .seller-info {
    padding: 16px;
    padding-bottom: 0;
    .title {
      font-size: 14px;
      line-height: 14px;
      padding-bottom: 12px;
    }
    .info {
      @include border-top-1px(rgba(7,17,27,0.1));
      padding: 16px 12px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 200;
    }
  }
}
</style>
