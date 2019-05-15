<template>
  <div class="score" :class="starSize">
    <span v-for="(itemClass, index) in itemClasses" :class="['star', itemClass]" :key="index"></span>
  </div>
</template>

<script>
export default {
  props: {
    star: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 36
    }
  },
  created () {
    this._initStar()
  },
  watch: {
    star () {
      this._initStar()
    }
  },
  data () {
    return {
      itemClasses: []
    }
  },
  computed: {
    starSize () {
      return 'star-' + this.size
    }
  },
  methods: {
    _initStar () {
      if (this.star > 5) {
        this.star = 5
      }
      this.itemClasses = []
      for (let i = 1; i <= 5; i++) {
        if (this.star >= i) {
          this.itemClasses.push('on')
        } else if (this.star < i && this.star >= (i - 0.5)) {
          this.itemClasses.push('half')
        } else {
          this.itemClasses.push('off')
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
    background-repeat: no-repeat;
  }
  &.star-24 {
      // 自定义
    .star {
      margin-right: 2px;
      height: 12px;
      width: 12px;
      background-size: 12px 12px;
      &.on {
        @include bg-img("star/star24_on")
      }
      &.off {
        @include bg-img("star/star24_off")
      }
      &.half {
        @include bg-img("star/star24_half")
      }
    }
  }
  &.star-36 {
    .star {
      margin-right: 6px;
      height: 18px;
      width: 18px;
      background-size: 18px 18px;
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
  &.star-48 {
    .star {
      margin-right: 22px;
      height: 24px;
      width: 24px;
      background-size: 24px 24px;
      &.on {
        @include bg-img("star/star48_on")
      }
      &.off {
        @include bg-img("star/star48_off")
      }
      &.half {
        @include bg-img("star/star48_half")
      }
    }
  }
}
</style>
