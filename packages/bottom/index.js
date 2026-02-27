// 引入 组件 vue 文件
import hBottom from './index.vue'

hBottom.install = (app) => {
  app.component(hBottom.name, hBottom)
}

export default hBottom
