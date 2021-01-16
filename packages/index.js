import './fonts/font.css'
const path = require('path')

const files = require.context('../src/components', false, /\.vue$/)

const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})

const install = (Vue) => {
  for (const k in modules) {
    Vue.component(modules[k].name, modules[k])
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
