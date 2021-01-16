<!-- switch -->
<template>
  <div class='pub-switch' :class='{ "is-checked": value }' @click='handleSwitch'>
    <span class="pub-switch_core" ref='core'>
      <span class="pub-switch_button"></span>
    </span>
    <input type="checkbox" class="pub-switch_input" :name="name" ref="input">
  </div>
</template>

<script type='javascript/es6'>
export default {
  name: 'PubSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },

  components: {},

  mounted () {
    this.setColor()
  },

  computed: {},

  methods: {
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.inactiveColor : this.activeColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
        this.$refs.input.checked = this.value
      }
    },
    async handleSwitch () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
    }
  }
}
</script>
<style lang='scss' scoped>
  .pub-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .pub-switch_core{
      margin: 0;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color .3s,background-color .3s;
      vertical-align: middle;
      .pub-switch_button{
        position:absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
        }
      }
  }
  // 选中样式
  .is-checked {
    .pub-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .pub-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  .pub-switch_input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>
