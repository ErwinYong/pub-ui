<!-- form-item -->
<template>
  <div class='pub-form-item'>
    <div class="pub-form-item_label" :style='labelStyle'>{{ label }}</div>
    <div class="pub-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script type='javascript/es6'>
export default {
  name: 'PubFormItem',
  inject: ['Form'],
  props: {
    label: String
  },
  data () {
    return {}
  },

  components: {},

  mounted () {},

  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  },

  methods: {}
}
</script>
<style lang='scss' scoped>
  .pub-form-item{
    margin-bottom: 25px;
    .pub-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .pub-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
