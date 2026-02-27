<template>
  <div class="h-top" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hTop"
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
  height: {
    type: String,
    default: "70%"
  },
  display: {
    type: String,
    default: "block"
  },
  padding: {
    type: String,
    default: ""
  },
  position: {
    type: String,
    default: "relative"
  },
  // left: {
  //   type: String,
  //   default: ""
  // },
  // right: {
  //   type: String,
  //   default: ""
  // },
  // top: {
  //   type: String,
  //   default: ""
  // },
  // bottom: {
  //   type: String,
  //   default: ""
  // },
})

let styles = ref({
  height: props.height,
  display: props.display,
  padding: props.padding,
  position: props.position,
})

</script> 

<style scoped>
@import url("./index.css");
</style>
