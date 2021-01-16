import Vue from 'vue'
import App from './App.vue'
// import './assets/fonts/font.css'
// import PubButton from './components/button'
// import PubDialog from './components/dialog'
// import PubInput from './components/input'
// import PubSwitch from './components/switch'
// import PubRadio from './components/radio'
// import PubRadioGroup from './components/radio-group'
// import PubCheckbox from './components/checkbox'
// import PubCheckboxGroup from './components/checkbox-group'
// import PubForm from './components/form'
// import PubFormItem from './components/form-item'

// Vue.component(PubButton.name, PubButton)
// Vue.component(PubDialog.name, PubDialog)
// Vue.component(PubInput.name, PubInput)
// Vue.component(PubSwitch.name, PubSwitch)
// Vue.component(PubRadio.name, PubRadio)
// Vue.component(PubRadioGroup.name, PubRadioGroup)
// Vue.component(PubCheckbox.name, PubCheckbox)
// Vue.component(PubCheckboxGroup.name, PubCheckboxGroup)
// Vue.component(PubForm.name, PubForm)
// Vue.component(PubFormItem.name, PubFormItem)
import PubUI from '../packages'
Vue.use(PubUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
