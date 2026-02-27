// 引入 组件 vue 文件
import hList from './index.vue'

hList.install = (app) => {
  app.component(hList.name, hList)
}

export default hList
