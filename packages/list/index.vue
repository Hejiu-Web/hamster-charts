<template>
  <div class="h-list" :style="styles">
    <div class="data-list-header" v-if="props.htfshow">
      <template v-for="(item, index) in props.header" :key="index">
        <p :class="`data-list-header-${index}`">{{ item }}</p>
      </template>
    </div>

    <div v-if="props.tfshow" class="scroll-wrapper" :style="{
        transform: `translateY(-${currentIndex * itemHeight}px)`,
  transition: `transform ${scrollSpeed}ms ease-in-out`,
        paddingTop: props.swpaddingTop
      }">
      <div class="data-list">
        <div class="data-list-item" v-for="(item, index) in props.data" :key="index"
          :style="index === selectedId ? highlightStyle : {}" ref="listItems">
          <template v-for="(value, key) in item" :key="key">
            <p :class="['data-item-p', `data-item-p-${key}`]">{{ value }}</p>
          </template>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hList'
}
</script>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch, h } from 'vue'

let props = defineProps({
  width: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  display: {
    type: String,
    default: ""
  },
  colNum: {
    type: Number,
    default: 3
  },
  data: {
    type: Array,
    default: () => []
  },
  itemWidth: {
    type: String,
    default: ""
  },
  itemHeight: {
    type: String,
    default: ""
  },
  header: {
    type: Array,
    default: () => []
  },
  htfshow: {
    type: Boolean,
    default: false
  },
  tfshow: {
    type: Boolean,
    default: true
  },
  hw: {
    type: String,
    default: "100%"
  },
  hh: {
    type: String,
    default: "28px"
  },
  hdisplay: {
    type: String,
    default: "flex"
  },
  hflex: {
    type: Number,
    default: 1
  },
  colFlex: {
    type: Number,
    default: 1
  },
  colAlign: {
    type: String,
    default: "start"
  },
  collHeight: {
    type: String,
    default: "28px"
  },
  color: {
    type: String,
    default: "rgba(208, 222, 238, 1)"
  },
  scrollDuration: {
    type: Number,
    default: 2000
  },
  scrollSpeed: {
    type: Number,
    default: 500
  },
  highlightStyle: {
    type: Object,
    default: () => ({
      background: '#06f',
      color: '#fff',
      height: '50px'
    })
  },
  swpaddingTop: {
    type: String,
    default: "0"
  }
})

let styles = ref({
  width: props.width,
  height: `calc(100% - ${props.height})`,
  display: props.display,
})

let scrollwrapper = ref("50px")

const currentIndex = ref(0)
const selectedId = ref(null)
const itemHeight = ref(0)
const listItems = ref([])

// 自动高亮当前项
watch(currentIndex, (newVal) => {
  const actualIndex = newVal % props.data.length
  // selectedId.value = props.data[actualIndex]?.id
  selectedId.value = actualIndex
})

// 复制首条数据实现无缝滚动
// const duplicatedData = computed(() => {
//   return [...props.data, ...(props.data.length > 0 ? [props.data[0]] : [])]
// })

// 自动滚动逻辑
let timer = null
const startAutoScroll = () => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % (props.data.length || 1)
  }, props.scrollDuration)
}

// 计算行高
const calculateItemHeight = () => {
  if (listItems.value[0]) {
    itemHeight.value = listItems.value[0].offsetHeight
  }
}

// 生命周期
onMounted(() => {
  calculateItemHeight()
  if (props.data.length > 0) {
    startAutoScroll()
  }
  window.addEventListener('resize', calculateItemHeight)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  window.removeEventListener('resize', calculateItemHeight)
})

// 监听数据变化
watch(() => props.data, (newVal) => {
  if (newVal.length > 0) {
    currentIndex.value = 0
    calculateItemHeight()
    clearInterval(timer)
    startAutoScroll()
  }
})
</script> 

<style scoped>
@import url("./index.css");

.scroll-wrapper {
  position: relative;
  width: 100%;
}

.data-list {
  width: 100%;
}

.data-list-item {
  /* border: 1px solid blue; */
  display: flex;
  transition: background-color 0.3s;
}

.data-item-p {
  /* border-right: 1px solid #fff; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.highlight {
  background: #06f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(1.02);
  color: #fff;
}

.data-list-header {
  /* border: 1px solid red; */
  height: 50px;
  display: flex;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}

.data-list-header p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
