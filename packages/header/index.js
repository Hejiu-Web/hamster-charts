// 引入 组件 vue 文件
import hHeader from './index.vue'

hHeader.install = (app) => {
  app.component(hHeader.name, hHeader)
}

export default hHeader
