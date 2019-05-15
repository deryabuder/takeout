<template>
  <div class="count clearfix">
    <i class="iconfont icon-minus-circle" @click.stop="decrease" v-show="food.count >= 1"></i>
    <span class="num" v-show="food.count >= 1">{{food.count}}</span>
    <i class="iconfont icon-plus-circle-fill" @click.stop="add"></i>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    add () {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decrease () {
      if (this.food.count >= 1) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
