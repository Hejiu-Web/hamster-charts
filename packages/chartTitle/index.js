// 引入 组件 vue 文件
import hChartTitle from './index.vue'

hChartTitle.install = (app) => {
  app.component(hChartTitle.name, hChartTitle)
}

export default hChartTitle
