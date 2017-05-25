import LgProgress from './src/progress'

LgProgress.install = function (Vue) {
  Vue.component(LgProgress.name, LgProgress)
}

export default LgProgress
