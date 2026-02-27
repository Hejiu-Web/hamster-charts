// 引入 组件 vue 文件
import hCenter from './index.vue'

hCenter.install = (app) => {
  app.component(hCenter.name, hCenter)
}

export default hCenter
