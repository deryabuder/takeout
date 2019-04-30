<template>
  <div class="footer">
    <div tab="div" class="left" @click="showCheckList">
      <div class="cart-wrapper">
        <div class="cart">
          <i class="iconfont icon-cart"></i>
        </div>
      </div>
      <div class="check">
        <div class="food-cost">￥0</div>
        <div class="delivery-cost">另需配送费￥4元</div>
      </div>
    </div>
    <router-view></router-view>
    <div class="pay-button"><div class="pay">￥20起送</div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    showCheckList () {
      if (this.show) {
        this.$router.back()
      } else {
        this.$router.push('/goods/checklist')
      }
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background-color: #141d27;
  .left {
    display: flex;
    .cart-wrapper {
      position: relative;
      bottom: 11px;
      height: 56px;
      width: 56px;
      margin: 0 18px;
      background-color: #f00;
      border-radius: 50%;
      z-index: 2;
      .cart {
        position: absolute;
        height: 44px;
        width: 44px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        left: 6px;
        top: 6px;
        .icon-cart {
          font-size: 24px;
          line-height: 24px;
          color: rgba(255,255,255,0.4);

        }
      }
    }
    .check {
      bottom: 8px;
      padding: 12px 0;
      display: flex;
      flex: 1;
      .food-cost {
        padding-right: 12px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: rgba(255,255,255,0.4);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
      }
      .delivery-cost {
        padding-left: 12px;
        font-size: 12px;
        line-height: 24px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
  .pay-button {
    width: 105px;
    background-color: rgba(0, 0, 0, 0.2);
    .pay {
      text-align: center;
      font-size: 12px;
      line-height: 24px;
      color: rgba(255,255,255,0.4);
      font-weight: 700;
      padding: 12px 0;
    }
  }
}
</style>
