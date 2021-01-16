<!-- radioGroup -->
<template>
  <div class='pub-radio-group'>
    <slot></slot>
  </div>
</template>

<script type='javascript/es6'>
export default {
  name: 'PubRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
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
