// 引入 组件 vue 文件
import hGrid from './index.vue'

hGrid.install = (app) => {
  app.component(hGrid.name, hGrid)
}

export default hGrid
