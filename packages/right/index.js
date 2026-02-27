// 引入 组件 vue 文件
import hRight from './index.vue'

hRight.install = (app) => {
  app.component(hRight.name, hRight)
}

export default hRight
