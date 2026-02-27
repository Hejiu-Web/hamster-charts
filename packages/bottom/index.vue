<template>
  <div class="h-bottom" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hBottom"
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
  height: {
    type: String,
    default: "30%"
  },
  display: {
    type: String,
    default: "flex"
  },
  padding: {
    type: String,
    default: ""
  },
  gap: {
    type: String,
    default: ""
  },
  rowGap: {
    type: String,
    default: ""
  },
  columnGap: {
    type: String,
    default: ""
  },
})

let styles = ref({
  height: props.height,
  display: props.display,
  padding: props.padding,
  gap: props.gap,
  rowGap: props.rowGap,
  columnGap: props.columnGap,
})

</script> 

<style scoped>
@import url("./index.css");
</style>
