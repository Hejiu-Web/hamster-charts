<template>
  <div class="h-content" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hContent"
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
  height: {
    type: String,
    default: ""
  },
  display: {
    type: String,
    default: "flex"
  }
})

let styles = ref({
  height: 'calc(100% - ' + props.height + ')',
  display: props.display,
})

</script> 

<style scoped>
@import url("./index.css");
</style>
