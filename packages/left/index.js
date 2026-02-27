// 引入 组件 vue 文件
import hLeft from './index.vue'

hLeft.install = (app) => {
  app.component(hLeft.name, hLeft)
}

export default hLeft
