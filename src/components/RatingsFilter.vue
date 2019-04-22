<template>
  <div class="ratings-filter">
    <div class="ratings-buttons">
      <button class="all button">全部<span class="num">56</span></button>
      <button class="like button">满意<span class="num">24</span></button>
      <button class="unlike button">不满意<span class="num">6</span></button>
    </div>
    <div class="ratings-check">
      <span class="check-icon"></span>
      <span class="check-des">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
export default {

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
  .ratings-check {
    padding: 12px 0;
    .check-des {
      font-size: 12px;
      color: rgb(180,184,187);
    }
  }
}
</style>
