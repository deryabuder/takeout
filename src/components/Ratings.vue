<template>
  <div class="ratings">
    <div class="score-wrapper clearfix">
      <div class="score-total">
        <div class="score">3.9</div>
        <div class="score-des">综合评分</div>
        <div class="score-info">高于周边商家89.89%</div>
      </div>
      <div class="score-list">
        <div class="score-item">
          <span class="score-item-des">服务态度</span>
          <star class="star"></star>
          <span class="score-num">3.9</span>
        </div>
        <div class="score-item">
          <span class="score-item-des">服务态度</span>
          <star class="star"></star>
          <span class="score-num">3.9</span>
        </div>
        <div class="score-item">
          <span class="score-item-des">送达时间</span>
          <span class="time">44分钟</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from './Star'
export default {
  components: {
    Star
  }
}
</script>

<style lang="scss" scoped>
.ratings {
  background-color: rgb(243,245,247);
  .score-wrapper {
    background-color: #fff;
    padding: 18px 0;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .score-total {
      float: left;
      border-right: 1px solid rgba(7,17,27,0.1);
      .score {
        font-size: 48px;
        line-height: 56px;
        color: rgb(255,153,0);
      }
      .score-des {
        font-size: 24px;
        line-height: 24px;
        color: rgb(7,17,27);
      }
      .score-info {
        font-size: 20px;
        line-height: 20px;
        color: rgb(7,17,27);
      }
    }
    .score-list {
      float: left;
    }
  }
}

</style>
