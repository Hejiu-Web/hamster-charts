// 引入 组件 vue 文件
import hBody from './index.vue'

hBody.install = (app) => {
  app.component(hBody.name, hBody)
}

export default hBody
