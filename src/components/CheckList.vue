<template>
  <div class="check-list">
    <div class="content">
      <div class="header">
        <span class="left">购物车</span>
        <span class="right">清空</span>
      </div>
      <ul class="list">
        <li class="item">
          <div class="food-name">莲子核桃黑米粥</div>
          <div class="check-info">
            <span class="price">￥<span class="price-num">10</span></span>
            <div class="count clearfix">
              <i class="iconfont icon-minus-circle"></i>
              <span class="num">0</span>
              <i class="iconfont icon-plus-circle-fill"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.check-list {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 47px;
  background-color: rgba(7, 17, 27, 0.6);
  z-index: 2;
  filter: blur(10px);
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    .header {
      display: flex;
      justify-content: space-between;
      height: 40px;
      padding: 0 18px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      background-color: #f3f5f7;
      line-height: 40px;
      .left {
        font-size: 14px;
        font-weight: 200;
        color: rgb(7, 17, 27);
      }
      .right {
        color: rgb(0, 160, 220);
        font-size: 12px;
      }
    }
    .list {
      padding: 0 18px;
      .item {
        display: flex;
        justify-content: space-between;
        height: 48px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        line-height: 24px;
        .food-name {
          font-size: 24px;
          color: rgb(7, 17, 27);
        }
        .check-info {
          .price {
            color: rgb(240, 20, 20);
            font-size: 10px;
            font-weight: normal;
            .price-num {
              font-size: 14px;
              font-weight: 700;
            }
          }
          .count {
            .iconfont {
              float: left;
              font-size: 12px;
              color: rgb(0, 160, 220);
              line-height: 40px;
            }
            .num {
              font-size: 10px;
              color: rgb(147, 153, 159);
              width: 24px;
              float: left;
            }
          }
        }
      }
    }
  }
}

</style>
