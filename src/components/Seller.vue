<template>
  <div class="seller">
    <div class="seller-introduction">
      <div class="introduction-top">
        <div class="seller-des">
          <div class="title">粥品香坊（大运村）</div>
          <div class="sales-info">
            <star class="star"></star>
            <span class="ratings-num">(661)</span>
            <span class="sales-num">月售690单</span>
          </div>
        </div>
        <div class="collection">
          <div class="heart"><i class="iconfont icon-heart-fill"></i></div>
          <div class="collection-des">已收藏</div>
        </div>
      </div>
      <div class="introduction-bottom">
        <div class="introduction-content">
          <div class="des">起送价</div>
          <div class="num">20<span class="unit">元</span></div>
        </div>
        <div class="introduction-content">
          <div class="des">商家配送</div>
          <div class="num">4<span class="unit">元</span></div>
        </div>
        <div class="introduction-content last-introduction-content">
          <div class="des">平均配送时间</div>
          <div class="num">39<span class="unit">分钟</span></div>
        </div>
      </div>
    </div>
    <div class="seller-notices">
      <div class="notices-title">
        <div class="title">公告与活动</div>
        <p class="content">粥品香坊其烹饪粥料的秘方 源于中国千年古法,在融和现代+制作工艺,由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深的消费者青睐,发展至今成为粥类弓|领品牌。是2008年 奥运会和2013年园博会指定餐饮服务商。</p>
      </div>
      <div class="notices-content">
        <span class="icon"></span>
        <span class="des">单人精彩赛</span>
      </div>
      <div class="notices-content">
        <span class="icon"></span>
        <span class="des">单人精彩赛</span>
      </div>
      <div class="notices-content">
        <span class="icon"></span>
        <span class="des">单人精彩赛</span>
      </div>
      <div class="notices-content">
        <span class="icon"></span>
        <span class="des">单人精彩赛</span>
      </div>
      <div class="notices-content">
        <span class="icon"></span>
        <span class="des">单人精彩赛</span>
      </div>
      <div class="notices-content">
        <span class="icon"></span>
        <span class="des">单人精彩赛</span>
      </div>
      <div class="notices-content">
        <span class="icon"></span>
        <span class="des">单人精彩赛</span>
      </div>
    </div>
    <div class="seller-imgs">
      <div class="title">商家实景</div>
      <div class="imgs">
        <img class="img" src="../../static/img/seller/seller.png"/>
        <img class="img" src="../../static/img/seller/seller.png"/>
        <img class="img" src="../../static/img/seller/seller.png"/>
        <img class="img" src="../../static/img/seller/seller.png"/>
      </div>
    </div>
    <div class="seller-info">
      <div class="title">商家信息</div>
      <div class="info">该商家支持开发票,请在下单时填写好发票抬头</div>
      <div class="info">品类:其他菜系、包子粥店</div>
      <div class="info">地址:北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340</div>
      <div class="info">营业时间: 10:00 - 20:30</div>
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
@import "../../static/css/mixin";
.seller {
  background-color: rgb(243,243,243);
  .seller-introduction {
    padding: 0 18px;
    background: #fff;
    border-top: 2px solid rgb(229,229,229);
    border-bottom: 2px solid rgb(229,229,229);
    .introduction-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(243,243,243);
      .seller-des {
        padding: 18px 0;
        color: rgb(77,85,93);
        .title {
          font-size: 14px;
          line-height: 14px;
          color: rgb(7,17,27);
        }
        .sales-info {
          display: flex;
          align-items: center;
          padding-top: 8px;
          .star {
            height: 18px;
            overflow: hidden;
          }
          .ratings-num {
            font-size: 10px;
            line-height: 18px;
            padding: 0 8px 0 12px;
          }
          .sales-num {
            flex: 1;
            font-size: 10px;
            line-height: 18px;
          }
        }
      }
      .collection {
        text-align: center;
        .heart {
          line-height: 24px;
          color: rgb(240,20,20);
          padding-bottom: 4px;
          .icon-heart-fill {
            font-size: 24px;
          }
        }
        .collection-des {
          font-size: 10px;
          line-height: 10px;
        }
      }
    }
    .introduction-bottom {
      display: flex;
      padding: 18px 0;
      text-align: center;
      .introduction-content {
        flex: 1;
        border-right: 1px solid rgb(243,243,243);
        .des {
          font-size: 10px;
          line-height: 10px;
          color: rgb(147,153,159);
        }
        .num {
          font-size: 24px;
          line-height: 24px;
          color: rgb(7,17,27);
          font-weight: 200;
          .unit {
            font-size: 10px;
          }
        }
      }
      .last-introduction-content {
        border: 0;
      }
    }
  }
  .seller-notices {
    margin-top: 16px;
    padding: 0 18px;
    border-top: 2px solid rgb(229,229,229);
    border-bottom: 2px solid rgb(229,229,229);
    background-color: #fff;
    color: rgb(7,17,27);
    .notices-title {
      padding: 18px 0 16px;
      .title {
        font-size: 14px;
        line-height: 14px;
        padding-bottom: 8px;
      }
      .content {
        padding: 0 12px;
        font-size: 12px;
        line-height: 24px;
        font-weight: 200;
        color: rgb(240,20,20);
      }
    }
    .notices-content {
      display: flex;
      padding: 16px 12px;
      border-top: 1px solid rgba(7,17,27,0.1);
      .icon {
        width: 16px;
        height: 16px;
        @include bg-img("header/" + "decrease_2");
        background-size: 16px;
        background-repeat: no-repeat;
        padding-right: 6px;
      }
      .des {
        flex: 1;
        font-size: 12px;
        line-height: 16px;
        font-weight: 200;
      }
    }
  }
  .seller-imgs {
    padding: 16px;
    margin-top: 16px;
    border-top: 2px solid rgb(229,229,229);
    border-bottom: 2px solid rgb(229,229,229);
    background: #fff;
    .title {
      font-size: 14px;
      line-height: 14px;
      padding-bottom: 12px;
    }
    .imgs {
      display: flex;
      .img {
        width: 120px;
        height: 90px;
        padding-right: 6px;
      }
    }
  }
  .seller-info {
    padding: 16px;
    margin-top: 16px;
    border-top: 2px solid rgb(229,229,229);
    border-bottom: 2px solid rgb(229,229,229);
    background: #fff;
    .title {
      font-size: 14px;
      line-height: 14px;
      padding-bottom: 12px;
    }
    .info {
      border-top: 1px solid rgba(7,17,27,0.1);
      padding: 16px 12px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 200;
    }
  }
}
</style>
