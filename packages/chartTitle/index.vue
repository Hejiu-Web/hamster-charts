<template>
  <div class="h-chart-title" :style="styles">
    {{ props.txt }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hChartTitle"
}
</script>
<script setup>
// 在组件卸载时销毁图表实例
import { ref, onMounted } from 'vue'

let props = defineProps({
  color: {
    type: String,
    default: '#fff'
  },
  fontSize: {
    type: String,
    default: '16px'
  },
  textAlign: {
    type: String,
    default: 'start'
  },
  lineHeight: {
    type: String,
    default: ''
  },
  txt: {
    type: String,
    default: '测试图表'
  },
  left: {
    type: String,
    default: ""
  },
  top: {
    type: String,
    default: ""
  },
  imgUrl: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '14px'
  },
  padding: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: "relative"
  },
  margin: {
    type: String,
    default: ""
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
  padding: {
    type: String,
    default: ""
  },
  paddingLeft: {
    type: String,
    default: ""
  },
  paddingRight: {
    type: String,
    default: ""
  },
  paddingTop: {
    type: String,
    default: ""
  },
  paddingBottom: {
    type: String,
    default: ""
  },
})

let styles = ref({
  width: props.width,
  height: props.height,
  padding: props.padding,
  backgroundImage: 'url(' + props.imgUrl + ')',
  position: props.position,
  left: props.left,
  top: props.top,
  color: props.color,
  fontSize: props.fontSize,
  textAlign: props.textAlign,
  lineHeight: props.lineHeight,
  margin: props.margin,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  padding: props.padding,
  paddingLeft: props.paddingLeft,
  paddingRight: props.paddingRight,
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
})


</script> 

<style scoped>
@import url("./index.css");
</style>
