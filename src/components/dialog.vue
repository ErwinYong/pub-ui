<!-- dialog -->
<template>
  <transition name='pub-dialog_fade'>
    <div class='pub-dialog_wrapper' v-show='visible' @click.self='handleClose'>
      <div class="pub-dialog" :style='{ width, marginTop: top }'>
        <div class="pub-dialog_header">
          <slot name='title'>
            <span class="pub-dialog_title">{{ title }}</span>
          </slot>
          <button class='pub-dialog_headerbtn' @click='handleClose'>
            <i class='pub-icon-close'>X</i>
          </button>
        </div>
        <div class="pub-dialog_body">
          <slot></slot>
        </div>
        <div class="pub-dialog_footer" v-if='$slots.footer'>
          <slot name='footer'></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type='javascript/es6'>
export default {
  name: 'PubDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },

  components: {},

  mounted () {},

  computed: {},

  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang='scss' scoped>
  .pub-dialog_wrapper{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0,0.5);
    .pub-dialog{
      position: relative;
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      box-sizing: border-box;
      width: 30%;
      &_header{
        padding: 20px 20px 10px;
        .pub-dialog_title{
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .pub-dialog_headerbtn{
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
          .pub-icon-close{
            color:909399
          }
        }
      }
      &_body{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      &_footer{
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        ::v-deep .pub-button:first-child{
          margin-right: 20px;
        }
      }
    }
  }
  .pub-dialog_fade-enter-active {
    animation: fade .3s
  }
  .pub-dialog_fade-leave-active {
    animation: fade .3s reverse
  }
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px)
    }
    100% {
      opacity: 1;
      transform: translateY(0)
    }
  }
</style>
