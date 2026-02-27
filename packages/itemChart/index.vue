<template>
  <div class="h-item-chart" ref="itemChartRef" :style="chartsCss"></div>
</template>

<script>
export default {
  name: "hItemChart"
}
</script>
<script setup>
// 在组件卸载时销毁图表实例
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { useResizeObserver } from '@vueuse/core'

let props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  chartsOption: {
    type: Object,
    default: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
  },
  padding: {
    type: String,
    default: '0'
  },
  flex: {
    type: Number,
    default: null
  },
})

let chartsCss = ref({
  width: props.width,
  height: 'calc(100% - ' + props.height + ')',
  padding: props.padding,
  flex: props.flex
})

// 初始化图表引用
const itemChartRef = ref(null)
let chartInstance = null

onMounted(() => {
  // 初始化图表实例
  chartInstance = echarts.init(itemChartRef.value)
  chartInstance.setOption(props.chartsOption)

  // 监听窗口大小变化并调整图表大小
  useResizeObserver(itemChartRef, entries => {
    for (const entry of entries) {
      if (chartInstance && entry.contentRect) {
        chartInstance.resize()
      }
    }
  })
})


onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
  }
})
</script> 

<style scoped>
@import url("./index.css");
</style>
