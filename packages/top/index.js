// 引入 组件 vue 文件
import hTop from './index.vue'

hTop.install = (app) => {
  app.component(hTop.name, hTop)
}

export default hTop
