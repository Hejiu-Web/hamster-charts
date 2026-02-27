// 引入 组件 vue 文件
import hButton from './index.vue'

hButton.install = (app) => {
  app.component(hButton.name, hButton)
}

export default hButton
