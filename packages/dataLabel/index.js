// 引入 组件 vue 文件
import hDataLabel from './index.vue'

hDataLabel.install = (app) => {
  app.component(hDataLabel.name, hDataLabel)
}

export default hDataLabel
