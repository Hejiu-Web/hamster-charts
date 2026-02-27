<template>
  <button class="h-button" :style="styles">
    <slot>{{ props.txt }}</slot>
  </button>
</template>

<script>
export default {
  name: 'hButton'
}
</script>

<script setup>
import { ref } from 'vue'

let props = defineProps({
  display: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    default: ""
  },
  padding: {
    type: String,
    default: ""
  },
  margin: {
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  border: {
    type: String,
    default: "none"
  },
  txt: {
    type: String,
    default: "按钮"
  },
  fontSize: {
    type: String,
    default: ""
  },
  fontWeight: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  }
})

let styles = ref({
  width: props.width,
  height: props.height,
  display: props.display,
  padding: props.padding,
  margin: props.margin,
  border: props.border,
  backgroundImage: `url(${props.imgUrl})`,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  color: props.color,
})
</script> 

<style scoped>
@import url("./index.css");
</style>
