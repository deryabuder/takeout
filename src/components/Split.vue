<template>
  <div class="split border-1px">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../../static/css/mixin';
  .split {
    width: 100%;
    height: 16px;
    background-color: rgb(243, 245, 247);
    @include border-1px(rgb(230, 231, 232));
    @include border-top-1px(rgb(230, 231, 232));
  }
</style>
