<template>
  <div class="score" >
    <span :class="['star', res[0]]"></span>
    <span :class="['star', res[1]]"></span>
    <span :class="['star', res[2]]"></span>
    <span :class="['star', res[3]]"></span>
    <span :class="['star', res[4]]"></span>
  </div>
</template>

<script>
export default {
  props: {
    star: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      res: []
    }
  },
  created () {
    console.log(this.star)
    this.initStar()
  },
  methods: {
    initStar () {
      this.star = Number(this.star)
      if (this.star > 5) {
        this.star = 5
      }
      for (var i = 1; i <= 5; i++) {
        if (this.star >= i) {
          this.res.push('on')
        } else if (this.star < i && this.star >= (i - 0.5)) {
          this.res.push('half')
        } else {
          this.res.push('off')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin";
.score {
  .star {
    display: inline-block;
    padding-left: 2px;
    height: 18px;
    width: 18px;
    background-size: 18px 18px;
    background-repeat: no-repeat;
    &.on {
      @include bg-img("star/star36_on")
    }
    &.off {
      @include bg-img("star/star36_off")
    }
    &.half {
      @include bg-img("star/star36_half")
    }
  }
}
</style>
