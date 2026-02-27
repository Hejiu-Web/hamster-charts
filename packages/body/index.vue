<template>
  <div class="h-body" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hBody"
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
  imgUrl: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: "relative"
  }
})

let styles = ref({
  position: props.position,
  backgroundImage: 'url(' + props.imgUrl + ')'
})

</script> 

<style scoped>
@import url("./index.css");
</style>
