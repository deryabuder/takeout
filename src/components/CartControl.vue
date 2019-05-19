<template>
  <div class="count clearfix">
    <transition name="decrease"><i class="iconfont icon-minus-circle" @click.stop="decrease" v-show="food.count >= 1"></i></transition>
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
    add (event) {
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('increment', event.target)
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
  .decrease-enter-active {
    animation: bounce-in 0.5s linear;
  }
  .decrease-leave-active {
    animation: bounce-in 0.5s linear reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: translateX(100%) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translateX(50%) rotate(-90deg);
      opacity: 0.5;
    }
    100% {
      transform: translateX(0%) rotate(-180deg);
      opacity: 1;
    }
  }
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
