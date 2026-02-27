// 引入 组件 vue 文件
import hChart from './index.vue'

hChart.install = (app) => {
  app.component(hChart.name, hChart)
}

export default hChart
