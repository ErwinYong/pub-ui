<!-- input -->
<template>
  <div :class='["pub-input", {"pub-input_suffix": showSuffix}]'>
    <input
      :type="showPassword ? (passwordVisiable ? 'text' : 'password') : type"
      :placeholder='placeholder'
      :name='name'
      :class='["pub-input_inner", { "is-disabled": disabled }]'
      :disabled='disabled'
      :value='value'
      @input='handleInput'>
    <span class="pub-input_suffix" v-if='showSuffix'>
      <i class='pub-icon-DollarCoin' v-if='clearable && value' @click='handleClear'></i>
      <i :class='[passwordVisiable ? "pub-icon-BlankMonitor" : "pub-icon-BankMoney"]' v-if='showPassword' @click='handleToggle'></i>
    </span>
  </div>
</template>

<script type='javascript/es6'>
export default {
  name: 'PubInput',
  props: {
    placeholder: {
      type: String,
      default: 'a tip'
    },
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisiable: false // 默认关闭
    }
  },

  components: {},

  mounted () {},

  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },

  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClear () {
      this.$emit('input', '')
    },
    handleToggle () {
      this.passwordVisiable = !this.passwordVisiable
    }
  }
}
</script>
<style lang='scss' scoped>
  .pub-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .pub-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }
  .pub-input_suffix{
    .pub-input_inner{
      padding-right: 30px;
    }
    .pub-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
</style>
