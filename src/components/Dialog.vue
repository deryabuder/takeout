<template>
  <div class="dialog">
    <div class="dialog-content">
      <div class="title">{{title}}</div>
      <div class="button">
        <div class="cancle" @click="cancle">取消</div>
        <div class="affirm" @click="affirm">确定</div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    cancle () {
      this.$emit('cancle')
    },
    affirm () {
      this.$emit('affirm')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/css/mixin';
  .dialog {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 48px;
    background-color: rgba(7, 17, 27, 0.7);
    text-align: center;
    .dialog-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 270px;
      font-size: 14px;
      border-radius: 3px;
      background-color: #fff;
      line-height: 50px;
      .title {
        height: 50px;
        color: rgb(102, 102, 102);
        border-bottom: 1px solid #ccc;
      }
      .button {
        display: flex;
        .cancle {
          flex: 1;
          color: rgb(215, 215, 215);
          border-right: 1px solid #ccc;
        }
        .affirm {
          flex: 1;
          color: rgb(252, 145, 82);
        }
      }
    }
  }
</style>
