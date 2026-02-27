<template>
  <div class="h-right" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hRight"
}
</script>
<script setup>
import { ref, onMounted } from 'vue'

let props = defineProps({
  width: {
    type: String,
    default: "25%"
  },
  height: {
    type: String,
    default: "100%"
  },
  paddingLeft: {
    type: String,
    default: ""
  },
  paddingTop: {
    type: String,
    default: ""
  },
  paddingBottom: {
    type: String,
    default: ""
  },
  paddingRight: {
    type: String,
    default: ""
  },
  display: {
    type: String,
    default: "flex"
  },
  flexWrap: {
    type: String,
    default: "wrap"
  },
  flexDirection: {
    type: String,
    default: "column"
  },
  justifyContent: {
    type: String,
    default: "space-around"
  },
  // marginLeft: {
  //   type: String,
  //   default: ""
  // },
  // marginRight: {
  //   type: String,
  //   default: ""
  // },
  // marginTop: {
  //   type: String,
  //   default: ""
  // },
  // marginBottom: {
  //   type: String,
  //   default: ""
  // },
})

let styles = ref({
  width: props.width,
  height: props.height,
  paddingLeft: props.paddingLeft,
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
  paddingRight: props.paddingRight,
  display: props.display,
  flexWrap: props.flexWrap,
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  // marginLeft: props.marginLeft,
  // marginRight: props.marginRight,
  // marginTop: props.marginTop,
  // marginBottom: props.marginBottom,
})

</script> 

<style scoped>
@import url("./index.css");
</style>
