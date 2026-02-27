// 引入 组件 vue 文件
import hItemChart from './index.vue'

hItemChart.install = (app) => {
  app.component(hItemChart.name, hItemChart)
}

export default hItemChart
