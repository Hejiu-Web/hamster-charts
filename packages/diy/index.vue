<template>
  <div class="h-diy" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hDiy'
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
  width: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  position: {
    type: String,
    default: ""
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
    type: String,
    default: ""
  },
  display: {
    type: String,
    default: ""
  },
  border: {
    type: String,
    default: "1px solid red"
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
  border: props.border
})
</script> 

<style scoped>
@import url("./index.css");
</style>
