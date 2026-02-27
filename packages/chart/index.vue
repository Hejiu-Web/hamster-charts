<template>
  <div class="h-chart" :style="styles">
    <slot>

    </slot>
    <div class="chart" ref="charts" :style="chartsCss" v-show="props.showChart"></div>
  </div>
</template>

<script>
export default {
  name: "hChart"
}
</script>
<script setup>
// 在组件卸载时销毁图表实例
import * as echarts from 'echarts'
import { ref, onMounted, onBeforeUnmount, defineProps, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'

let props = defineProps({
  showChart: {
    type: Boolean,
    default: true
  },
  chartsh: {
    type: String,
    default: ""
  },
  chartsw: {
    type: String,
    default: "100%"
  },
  imgUrl: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '448px'
  },
  height: {
    type: String,
    default: '301px'
  },
  flex: {
    type: Number,
    default: null
  },
  chartsOption: {
    type: Object,
    required: true
  },
  onChartReady: {
    type: Function,
    default: null
  },
  padding: {
    type: String,
    default: '10px 10px'
  },
  marginLeft: {
    type: String,
    default: ""
  },
  marginRight: {
    type: String,
    default: ""
  },
  marginTop: {
    type: String,
    default: ""
  },
  marginBottom: {
    type: String,
    default: ""
  },
  position: {
    type: String,
    default: "relative"
  }
})

let styles = ref({
  width: props.width,
  height: props.height,
  padding: props.padding,
  backgroundImage: 'url(' + props.imgUrl + ')',
  flex: props.flex,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  position: props.position,
})

let chartsCss = ref({
  width: props.chartsw,
  height: 'calc(100% - ' + props.chartsh + ')',
})

// 初始化图表引用
const charts = ref(null)
let chartInstance = null

// 初始化图表
const initChart = () => {
  if (!charts.value) return

  // 确保配置有效性
  const validOption = props.chartsOption || {} // 默认空配置
  chartInstance = echarts.init(charts.value)
  chartInstance.setOption(validOption) // 使用安全值

  // 触发回调时添加空值保护
  props.onChartReady?.({
    instance: chartInstance,
    dom: charts.value
  })
}



// 窗口resize处理
const handleResize = () => {
  chartInstance?.resize()
}

// 生命周期
onMounted(() => {

  initChart()
  window.addEventListener('resize', handleResize)

  // 监听窗口大小变化并调整图表大小
  useResizeObserver(charts, entries => {
    for (const entry of entries) {
      if (chartInstance && entry.contentRect) {
        chartInstance.resize()
      }
    }
  })
})


onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  chartInstance?.dispose()
})

// 修改监听器
watch(() => props.chartsOption, (newVal) => {
  if (!newVal) return // 过滤空值
  chartInstance?.setOption(newVal)
}, { deep: true, immediate: true }) // 添加 immediate 确保初始化响应
</script> 

<style scoped>
@import url("./index.css");
</style>
