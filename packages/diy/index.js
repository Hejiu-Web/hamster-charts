// 引入 组件 vue 文件
import hDiy from './index.vue'

hDiy.install = (app) => {
  app.component(hDiy.name, hDiy)
}

export default hDiy
