<template>
  <div class="h-grid" :style="styles">
    <template v-for="i in 6" :key="i">
      <div class="h-grid-item" :style="itemStyle">
        <div class="h-grid-item-left">
          <img src="" alt="">
        </div>
        <div class="h-grid-item-right"></div>
      </div>
    </template>
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: 'hGrid'
}
</script>

<script setup>
import { ref } from 'vue'

let props = defineProps({
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "100%"
  },
  gridWidth: {
    type: String,
    default: "1fr"
  },
  gridHeight: {
    type: String,
    default: "1fr"
  },
  display: {
    type: String,
    default: "grid"
  },
  gridTemplateColumns: {
    type: String,
    default: "3"
  },
  gridTemplateRows: {
    type: String,
    default: "2"
  },
  iwidth: {
    type: String,
    default: ""
  },
  iheight: {
    type: String,
    default: ""
  },
  idisplay: {
    type: String,
    default: "flex"
  }
})

let styles = ref({
  width: props.width,
  height: props.height,
  display: props.display,
  gridTemplateColumns: `repeat(${props.gridTemplateColumns}, ${props.gridWidth})`,
  gridTemplateRows: `repeat(${props.gridTemplateRows}, ${props.gridHeight})`,
})

let itemStyle = ref({
  width: props.iwidth,
  height: props.iheight,
  display: props.idisplay,
})
</script> 

<style scoped>
@import url("./index.css");
</style>
