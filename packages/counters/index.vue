<template>
  <div class="h-counters" :style="styles">
    <template v-for="(item, index) in dataSplit(props.data)" :key="index">
      <p class="h-counters-item" :style="stylesItem">
        {{ item }}</p>
    </template>
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: 'hCounters'
}
</script>

<script setup>
import { ref } from 'vue'

let props = defineProps({
  width: {
    type: String,
    default: ""
  },
  position: {
    type: String,
    default: "relative"
  },
  height: {
    type: String,
    default: ""
  },
  display: {
    type: String,
    default: "flex"
  },
  justifyContent: {
    type: String,
    default: ""
  },
  alignItems: {
    type: String,
    default: ""
  },
  position: {
    type: String,
    default: "absolute"
  },
  left: {
    type: String,
    default: ""
  },
  right: {
    type: String,
    default: ""
  },
  top: {
    type: String,
    default: ""
  },
  bottom: {
    type: String,
    default: ""
  },
  zIndex: {
    type: Number,
    default: 1
  },
  iwidth: {
    type: String,
    default: ""
  },
  iheight: {
    type: String,
    default: ""
  },
  imgUrl: {
    type: String,
    default: ""
  },
  data: {
    type: Number,
    default: 121381
  },
  icolor: {
    type: String,
    default: "#fff"
  },
  ijustifyContent: {
    type: String,
    default: "center"
  },
  ialignItems: {
    type: String,
    default: "center"
  },
  idisplay: {
    type: String,
    default: "flex"
  },
  columnGap: {
    type: String,
    default: "5px"
  },
  rowGap: {
    type: String,
    default: ""
  },
  ifontSize: {
    type: String,
    default: ""
  },
  ifontWeight: {
    type: String,
    default: ""
  },
})

let styles = ref({
  width: props.width,
  height: props.height,
  position: props.position,
  left: props.left,
  right: props.right,
  top: props.top,
  bottom: props.bottom,
  zIndex: props.zIndex,
  display: props.display,
  columnGap: props.columnGap,
  rowGap: props.rowGap,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  position: props.position
})

let stylesItem = ref({
  width: props.iwidth,
  height: props.iheight,
  backgroundImage: `url(${props.imgUrl})`,
  color: props.icolor,
  display: props.idisplay,
  justifyContent: props.ijustifyContent,
  alignItems: props.ialignItems,
  fontSize: props.ifontSize,
  fontWeight: props.ifontWeight,
})

function dataSplit(data) {
  // 转换成字符串然后分割成数组
  let stringArray = String(data).split('');

  // 将字符串数组转换为数字数组
  let numberArray = stringArray.map(Number);
  return numberArray
}
</script> 

<style scoped>
@import url("./index.css");
</style>
