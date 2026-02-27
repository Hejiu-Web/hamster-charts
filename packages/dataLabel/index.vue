<template>
  <div class="h-data-label" :style="styles">
    <span v-if="show" class="h-data-label-num" :style="numStyle">{{num}}</span>
    <span v-if="show" class="h-data-label-text" :style="textStyle">{{text}}</span>
    <span v-if="titleShow" class="h-data-label-title" :style="titleStyle">{{someText}}</span>
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: 'hDataLabel'
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
  imgUrl: {
    type: String,
    default: ""
  },
  num: {
    type: Number,
    default: null
  },
  text: {
    type: String,
    default: "测试"
  },
  someText: {
    type: String,
    default: "测试"
  },
  show: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: "230px"
  },
  height: {
    type: String,
    default: "54px"
  },
  position: {
    type: String,
    default: "absolute"
  },
  left: {
    type: String,
    default: "0"
  },
  right: {
    type: String,
    default: ""
  },
  top: {
    type: String,
    default: "0"
  },
  bottom: {
    type: String,
    default: ""
  },
  zIndex: {
    type: String,
    default: "1"
  },
  display: {
    type: String,
    default: ""
  },
  border: {
    type: String,
    default: "none"
  },
  display: {
    type: String,
    default: "flex"
  },
  flexDirection: {
    type: String,
    default: "column"
  },
  justifyContent: {
    type: String,
    default: "center"
  },
  alignItems: {
    type: String,
    default: "center"
  },
  color: {
    type: String,
    default: "#fff"
  },
  numFontSize: {
    type: String,
    default: "20px"
  },
  numFontWeight: {
    type: String,
    default: "600"
  },
  numColor: {
    type: String,
    default: "#fff"
  },
  textFontSize: {
    type: String,
    default: "10px"
  },
  textFontWeight: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: "#fff"
  },
  titlelineHeight: {
    type: String,
    default: ""
  },
  titletextAlign: {
    type: String,
    default: ""
  },
  titleFontSize: {
    type: String,
    default: "10px"
  },
  titleFontWeight: {
    type: String,
    default: ""
  },
  titleColor: {
    type: String,
    default: "#fff"
  },
  titleShow: {
    type: Boolean,
    default: false
  }
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
  border: props.border,
  backgroundImage: `url(${props.imgUrl})`,
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  color: props.color,
})

let numStyle = ref({
  fontSize: props.numFontSize,
  fontWeight: props.numFontWeight,
  color: props.numColor
})

let textStyle = ref({
  fontSize: props.textFontSize,
  fontWeight: props.textFontWeight,
  color: props.textColor
})

let titleStyle = ref({
  fontSize: props.titleFontSize,
  fontWeight: props.titleFontWeight,
  color: props.titleColor,
  lineHeight: props.titlelineHeight,
  textAlign: props.titletextAlign,
})
</script> 

<style scoped>
@import url("./index.css");
</style>
