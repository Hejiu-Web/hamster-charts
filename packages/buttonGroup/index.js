// 引入 组件 vue 文件
import hButtonGroup from './index.vue'

hButtonGroup.install = (app) => {
  app.component(hButtonGroup.name, hButtonGroup)
}

export default hButtonGroup
