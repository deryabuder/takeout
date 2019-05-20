<template>
  <div class="ratings-filter">
    <div class="ratings-buttons border-1px">
      <button class="all button" :class="{'active': selectType === 0}" @click="AllRatings">全部<span class="num">{{ratings.length}}</span></button>
      <button class="like button" :class="{'active': selectType === 1}" @click ="likeRatings">满意<span class="num">{{ratingsLikeNum}}</span></button>
      <button class="unlike button" :class="{'active': selectType === 2}" @click="unlikeRating">不满意<span class="num">{{ratingsUnlikeNum}}</span></button>
    </div>
    <div class="ratings-check" @click="filterRatings">
      <i :class="['iconfont','icon-check-circle-fill', isFilter ? 'filter':'']"></i>
      <span class="check-des">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratings: {
      type: Array,
      default: () => []
    },
    ratingsNum: {
      type: Number,
      default: 0
    },
    ratingsLikeNum: {
      type: Number,
      default: 0
    },
    ratingsUnlikeNum: {
      type: Number,
      default: 0
    },
    textArr: {
      type: Array,
      default: () => ['全部', '满意', '不满意']
    }
  },
  data () {
    return {
      currentRatings: null,
      isFilter: false,
      filterRatingArr: [],
      selectType: 0
    }
  },
  methods: {
    _filterRatings () {
      if (this.currentRatings === null) this.currentRatings = this.ratings
      this.filterRatingArr = this.isFilter ? this.currentRatings.filter((value, index) => {
        return value.text !== ''
      }) : this.currentRatings
      this.$emit('change', this.filterRatingArr)
    },
    filterRatings () {
      this.isFilter = !this.isFilter
      this._filterRatings()
    },
    AllRatings () {
      this.currentRatings = this.ratings
      this.selectType = 0
      this._filterRatings()
    },
    likeRatings () {
      this.currentRatings = this.ratings.filter((value, index) => {
        return value.rateType === 0
      })
      this.selectType = 1
      this._filterRatings()
    },
    unlikeRating () {
      this.currentRatings = this.ratings.filter((value, index) => {
        return value.rateType === 1
      })
      this.selectType = 2
      this._filterRatings()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/css/mixin';
.ratings-filter {
  .ratings-buttons {
    padding: 18px 0;
    @include border-1px(rgba(7,17,27,0.1));
    .button {
      padding: 10px 15px;
      font-size: 12px;
      margin-right: 5px;
      border-radius: 5px;
      .num {
        font-size: 8px;
        padding-left: 5px;
      }
    }
    .all {
      background: rgb(204,236,248);
      color: rgb(88,99,107);
      &.active {
        background: rgb(0, 160, 220);
        color: #fff;
      }
    }
    .like {
      background: rgb(204,236,248);
      color: rgb(88,99,107);
      &.active {
        background: rgb(0, 160, 220);
        color: #fff;
      }
    }
    .unlike {
      color: rgb(88,99,107);
      background: rgb(160, 160, 160);
      &.active {
        background: rgb(102, 102, 102);
        color: #fff;
      }
    }
  }
  .filter {
    color: rgb(0, 160, 220);
  }
  .ratings-check {
    display: flex;
    align-items: center;
    padding: 12px 0;
    color: rgb(147, 152,159);
    line-height: 24px;
    .icon-check-circle-fill {
      font-size: 24px;
      padding-right: 4px;
    }
    .check-des {
      font-size: 12px;
    }
  }
}
</style>
