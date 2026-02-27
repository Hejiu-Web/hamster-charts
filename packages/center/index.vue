<template>
  <div class="h-center" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hCenter"
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
  width: {
    type: String,
    default: "50%"
  },
  height: {
    type: String,
    default: "100%"
  },
})

let styles = ref({
  width: props.width,
  height: props.height,
})

</script> 

<style scoped>
@import url("./index.css");
</style>
