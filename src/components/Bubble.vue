<template>
  <span class="bubble">{{num}}</span>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.bubble {
  display: inline-block;
  font-size: 12px;
  color: #fff;
  line-height: 16px;
  width: 16px;
  text-align: center;
  border-radius: 50%;
  background: linear-gradient(90deg,#fc9153,#f01414)
}
</style>
