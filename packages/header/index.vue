<template>
  <div class="h-header" :style="styles">
    <slot>大屏测试</slot>
  </div>
</template>

<script>
export default {
  name: "hHeader"
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
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
    default: '70px'
  },
  position: {
    type: String,
    default: 'absolute'
  },
  zIndex: {
    type: Number,
    default: 1
  },
  left: {
    type: String,
    default: '0'
  },
  right: {
    type: String,
    default: ''
  },
  bottom: {
    type: String,
    default: ''
  },
  top: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: "#fff"
  },
  fontSize: {
    type: String,
    default: "36px"
  },
  fontWeight: {
    type: String,
    default: ""
  },
  textAlign: {
    type: String,
    default: "start"
  },
  lineHeight: {
    type: String,
    default: ""
  },
})

let styles = ref({
  width: props.width,
  height: props.height,
  backgroundImage: 'url(' + props.imgUrl + ')',
  color: props.color,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  textAlign: props.textAlign,
  lineHeight: props.lineHeight,
})

</script> 

<style scoped>
@import url("./index.css");
</style>
