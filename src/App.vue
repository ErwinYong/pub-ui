<template>
  <div id="app">
    <!-- <div class="row">
      <pub-button disabled @click='fn'>默认</pub-button>
      <pub-button type='success'>成功</pub-button>
      <pub-button type='info'>信息</pub-button>
      <pub-button type='primary'>常规</pub-button>
      <pub-button type='warning'>提醒</pub-button>
      <pub-button type='danger'>危险</pub-button>
    </div>
    <div class="row">
      <pub-button plain>默认</pub-button>
      <pub-button plain type='success'>成功</pub-button>
      <pub-button plain type='info'>信息</pub-button>
      <pub-button plain type='primary'>常规</pub-button>
      <pub-button plain type='warning'>提醒</pub-button>
      <pub-button plain type='danger'>危险</pub-button>
    </div>
    <div class="row">
      <pub-button round>默认</pub-button>
      <pub-button round type='success'>成功</pub-button>
      <pub-button plain round type='info'>信息</pub-button>
      <pub-button round type='primary'>常规</pub-button>
      <pub-button round type='warning'>提醒</pub-button>
      <pub-button round type='danger'>危险</pub-button>
    </div>
    <div class="row">
      <pub-button circle>哈</pub-button>
      <pub-button plain circle type='success'>哈</pub-button>
      <pub-button circle type='info'>哈</pub-button>
      <pub-button circle type='primary'>哈</pub-button>
      <pub-button circle type='warning'>哈</pub-button>
      <pub-button circle type='danger'>哈</pub-button>
    </div>
    <div class="row">
      <pub-button circle icon='pub-icon-DollarCoin'></pub-button>
      <pub-button plain circle type='success' icon='pub-icon-GoldMoney'></pub-button>
      <pub-button circle type='info' icon='pub-icon-DollarCoin'></pub-button>
      <pub-button circle type='primary' icon='pub-icon-DollarCoin'></pub-button>
      <pub-button circle type='warning' icon='pub-icon-DollarCoin'></pub-button>
      <pub-button circle type='danger' icon='pub-icon-DollarCoin'></pub-button>
    </div> -->

    <!-- <pub-button @click='show'>显示</pub-button>
    <pub-dialog title='你好啊，弹框' width='600px' top='200px' :visible.sync='visible'>
      content
      <template v-slot:footer>
        <pub-button type='primary'>ok</pub-button>
        <pub-button plain>close</pub-button>
      </template>
    </pub-dialog> -->

    <!-- <pub-input placeholder='please input a text' type='password' name='username'></pub-input>
    <pub-input placeholder='please input a text' disabled></pub-input>
    <pub-input placeholder='please input a text' v-model='username'></pub-input>
    <pub-input placeholder='please input a text' v-model='username' clearable></pub-input>
    <pub-input placeholder='please input a text' v-model='username' show-password></pub-input> -->

    <!-- <pub-switch v-model='active'></pub-switch><br>
    <pub-switch v-model='visible' active-color='red' inactive-color='green'></pub-switch> -->

    <!-- <pub-radio label='1' v-model='radio'>男</pub-radio>
    <pub-radio label='0' v-model='radio'>女</pub-radio>

    <pub-radio-group v-model='radioGroup'>
      <pub-radio label='1'>男</pub-radio>
      <pub-radio label='0'>女</pub-radio>
    </pub-radio-group> -->

    <!-- <pub-checkbox v-model='checkbox'>已选择</pub-checkbox>
    <pub-checkbox-group v-model='checkboxGroup'>
      <pub-checkbox label='抽烟'></pub-checkbox>
      <pub-checkbox label='喝酒'></pub-checkbox>
      <pub-checkbox label='烫头'></pub-checkbox>
    </pub-checkbox-group> -->

    <pub-form :model='model' labelWidth='100px'>
      <pub-form-item label='用户名'>
        <pub-input placeholder='请输入用户名' clearable v-model='model.username'></pub-input>
      </pub-form-item>
    </pub-form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    visible: false,
    username: 'erwin',
    active: false,
    radio: '0',
    radioGroup: '0',
    checkbox: false,
    checkboxGroup: ['抽烟'],
    model: {
      username: ''
    }
  }),
  components: {
  },
  methods: {
    fn () {
      console.log(1233)
    },
    show () {
      this.visible = true
    }
  }
}
</script>

<style lang="scss">
  #app {
    .row {
      margin: 20px;
      button {
        margin-left: 15px
      }
    }
  }
</style>
