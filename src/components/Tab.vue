<template>
  <div class="tab border-1px">
    <router-link to="/goods" class="tab-item border-1px">商品</router-link>
    <router-link to="/ratings" class="tab-item border-1px">评价</router-link>
    <router-link to="/seller" class="tab-item border-1px">商家</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../static/css/mixin';
.tab {
  position: fixed;
  left: 0;
  right: 0;
  top: 130px;
  display: flex;
  text-align: center;
  height: 40px;
  background: #fff;
  z-index: 1;
  .tab-item {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    flex: 1;
    font-size: 14px;
    color: rgb(77,85,93);
    @include border-1px(rgba(7,17,27,0.1));
    box-sizing: border-box;
  }
  .router-link-active {
    color: rgb(240,20,20);
    border-bottom: 1px solid rgb(240,20,20);
  }
}
</style>
