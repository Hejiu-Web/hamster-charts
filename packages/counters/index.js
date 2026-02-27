// 引入 组件 vue 文件
import hCounters from './index.vue'

hCounters.install = (app) => {
  app.component(hCounters.name, hCounters)
}

export default hCounters
