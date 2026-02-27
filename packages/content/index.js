// 引入 组件 vue 文件
import hContent from './index.vue'

hContent.install = (app) => {
  app.component(hContent.name, hContent)
}

export default hContent
