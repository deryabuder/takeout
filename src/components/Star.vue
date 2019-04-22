<template>
  <div class="score">
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
    <span class="star"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin";
.score {
  .star {
    display: inline-block;
    padding-left: 2px;
    height: 24px;
    width: 24px;
    @include bg-img("star/" + "star48_on");
    background-size: 24px 24px;
    background-repeat: no-repeat;
  }
}
</style>
