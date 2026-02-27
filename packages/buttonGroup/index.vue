<template>
  <div class="h-button-group" :style="buttonGroup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hButtonGroup'
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
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
  display: {
    type: String,
    default: "flex"
  },
  gap: {
    type: String,
    default: "10px"
  },
})

let buttonGroup = ref({
  position: props.position,
  left: props.left,
  right: props.right,
  top: props.top,
  bottom: props.bottom,
  display: props.display,
  gap: props.gap,
})
</script> 

<style scoped>
@import url("./index.css");
</style>
