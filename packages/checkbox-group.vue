<!-- checkbox-group -->
<template>
  <div class='pub-checkbox-group'>
    <slot></slot>
  </div>
</template>

<script type='javascript/es6'>
export default {
  name: 'PubCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: () => ([])
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
