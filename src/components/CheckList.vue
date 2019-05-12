<template>
  <div class="check-list">
    <div class="content">
      <div class="header border-1px">
        <span class="left">购物车</span>
        <span class="right">清空</span>
      </div>
      <div class="list-wrapper" ref="list">
        <ul class="list">
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
          <li class="item border-1px">
            <div class="food-name">莲子核桃黑米粥</div>
            <div class="check-info">
              <span class="price">￥<span class="price-num">10</span></span>
              <div class="count">
                <i class="iconfont icon-minus-circle"></i>
                <span class="num">0</span>
                <i class="iconfont icon-plus-circle-fill"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.list, {
        click: true
      })
    } else {
      this.scroll.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/css/mixin';
.check-list {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 48px;
  background-color: rgba(7, 17, 27, 0.6);
  // filter: blur(10px);
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
    .header {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      height: 40px;
      padding: 0 18px;
      box-sizing: border-box;
      @include border-1px(rgba(7, 17, 27, 0.1));
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
    .list-wrapper {
      max-height: 240px;
      .list {
        padding: 0 18px;
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 48px;
          padding: 12px 0;
          box-sizing: border-box;
          @include border-1px(rgba(7, 17, 27, 0.1));
          .food-name {
            font-size: 14px;
            line-height: 24px;
            color: rgb(7, 17, 27);
          }
          .check-info {
            display: flex;
            align-items: center;
            .price {
              color: rgb(240, 20, 20);
              font-size: 10px;
              font-weight: normal;
              padding: 0 18px 0 12px;
              .price-num {
                font-size: 14px;
                font-weight: 700;
              }
            }
            .count {
              display: flex;
              align-items: center;
              .iconfont {
                font-size: 24px;
                color: rgb(0, 160, 220);
              }
              .num {
                text-align: center;
                font-size: 10px;
                color: rgb(147, 153, 159);
                width: 24px;
              }
            }
          }
        }
      }
    }
  }
}

</style>
