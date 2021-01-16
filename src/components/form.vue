<!-- form -->
<template>
  <div class='pub-form'>
    <slot></slot>
  </div>
</template>

<script type='javascript/es6'>
export default {
  name: 'PubForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  },
  data () {
    return {}
  },

  components: {},

  mounted () {},

  computed: {},

  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
