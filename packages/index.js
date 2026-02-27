// packages 统一管理组件 js
import hBody from '#/body/index.js'
import hContent from '#/content/index.js'
import hHeader from '#/header/index.js'
import hChart from '#/chart/index.js'
import hLeft from '#/left/index.js'
import hRight from '#/right/index.js'
import hCenter from '#/center/index.js'
import hTop from '#/top/index.js'
import hBottom from '#/bottom/index.js'
import hChartTitle from '#/chartTitle/index.js'
import hItemChart from '#/itemChart/index.js'
import hList from '#/list/index.js'
import hDiy from '#/diy/index.js'
import hDataLabel from '#/dataLabel/index.js'
import hButton from '#/button/index.js'
import hGrid from '#/grid/index.js'
import hCounters from '#/counters/index.js'
import hButtonGroup from '#/buttonGroup/index.js'

const install = (app) => {
  app.use(hBody)
  app.use(hContent)
  app.use(hHeader)
  app.use(hChart)
  app.use(hLeft)
  app.use(hRight)
  app.use(hCenter)
  app.use(hTop)
  app.use(hBottom)
  app.use(hChartTitle)
  app.use(hItemChart)
  app.use(hList)
  app.use(hDiy)
  app.use(hDataLabel)
  app.use(hButton)
  app.use(hGrid)
  app.use(hCounters)
  app.use(hButtonGroup)
}

// 自定义 组件对象
const hCharts = {
  install,
}

export {
  hBody,
  hContent,
  hHeader,
  hChart,
  hLeft,
  hRight,
  hCenter,
  hTop,
  hBottom,
  hChartTitle,
  hItemChart,
  hList,
  hDiy,
  hDataLabel,
  hButton,
  hGrid,
  hCounters,
  hButtonGroup,
}
export default hCharts
