<template>
  <div class="ratings-filter">
    <div class="ratings-buttons">
      <button class="all button" @click="AllRatings">全部<span class="num">{{ratings.length}}</span></button>
      <button class="like button" @click ="likeRatings">满意<span class="num">{{ratingsLikeNum}}</span></button>
      <button class="unlike button" @click="unlikeRating">不满意<span class="num">{{ratingsUnlikeNum}}</span></button>
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
    }
  },
  data () {
    return {
      currentRatings: [],
      isFilter: false
    }
  },
  methods: {
    filterRatings () {
      console.log(1111111111)
      this.currentRatings = this.ratings.filter((value, index) => {
        return value.text !== ''
      })
      this.$emit('change', this.currentRatings)
      this.isFilter = !this.isFilter
    },
    AllRatings () {
      this.currentRatings = this.ratings
      this.$emit('change', this.currentRatings)
    },
    likeRatings () {
      this.currentRatings = this.ratings.filter((value, index) => {
        return value.rateType === 1
      })
      this.$emit('change', this.currentRatings)
    },
    unlikeRating () {
      this.currentRatings = this.ratings.filter((value, index) => {
        return value.rateType === 0
      })
      this.$emit('change', this.currentRatings)
    }
  }
}
</script>

<style lang="scss" scoped>
.ratings-filter {
  .ratings-buttons {
    padding: 18px 0;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .button {
      padding: 10px 15px;
      font-size: 12px;
      margin-right: 5px;
      .num {
        font-size: 8px;
        padding-left: 5px;
      }
    }
    .all {
      background-color: rgb(0, 160, 220);
      color: #fff;
      font-weight: bold;
    }
    .like {
      background: rgb(204,236,248);
      color: rgb(88,99,107);
    }
    .unlike {
      color: rgb(88,99,107);
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
