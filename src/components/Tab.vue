<template>
  <div class="tab">
    <router-link to="/goods" class="tab-item">商品</router-link>
    <router-link to="/ratings" class="tab-item">评价</router-link>
    <router-link to="/seller" class="tab-item">商家</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  align-items: center;
  text-align: center;
  height: 40px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  .tab-item {
    flex: 1;
    font-size: 14px;
    line-height: 14px;
    color: rgb(77,85,93);
  }
  .router-link-active {
    color: rgb(240,20,20);
  }
}
</style>
