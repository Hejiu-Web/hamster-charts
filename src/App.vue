<template>
  <h-body :imgUrl="bg">
    <h-header :imgUrl="header" :height="'164px'" color="#369efe" textAlign="center" lineHeight="74px"></h-header>
    <h-content :height="'164px'">
      <!-- 图表封装 -->
      <!-- <h-chart :imgUrl="charts01" :chartsOption="chartOptions"></h-chart> -->
      <h-left paddingLeft="20px">
        <h-chart :showChart="false" flex="1" chartsh="40px" marginBottom="20px" width="100%" :imgUrl="charts01"
          :chartsOption="chartOptions">
          <h-chart-title paddingLeft="40px" marginTop="20px" height="20px" :imgUrl="charts02"></h-chart-title>
          <h-content height="40px">
            <h-item-chart flex="1" height="0px" :chartsOption="chartOptions"></h-item-chart>
            <h-item-chart flex="1" width="50%" height="0px" :chartsOption="chartOptions"></h-item-chart>
          </h-content>
        </h-chart>

        <h-chart flex="1" chartsh="40px" marginBottom="20px" width="100%" :imgUrl="charts01"
          :chartsOption="chartOptions">
          <h-chart-title paddingLeft="40px" marginTop="20px" height="20px" :imgUrl="charts02"></h-chart-title>
        </h-chart>

        <h-chart flex="1" chartsh="40px" marginBottom="20px" width="100%" :imgUrl="charts01"
          :chartsOption="chartOptions">
          <h-chart-title paddingLeft="40px" marginTop="20px" height="20px" :imgUrl="charts02"></h-chart-title>
        </h-chart>

      </h-left>
      <h-center>
        <h-top></h-top>
        <h-bottom padding="0 0 10px 0" columnGap="10px">

          <h-chart height="100%" chartsh="40px" width="50%" :imgUrl="charts01" :chartsOption="chartOptions">
            <h-chart-title paddingLeft="40px" marginTop="20px" height="20px" :imgUrl="charts02"></h-chart-title>
          </h-chart>

          <h-chart height="100%" flex="1" chartsh="40px" width="50%" :imgUrl="charts01" :chartsOption="chartOptions">
            <h-chart-title paddingLeft="40px" marginTop="20px" height="20px" :imgUrl="charts02"></h-chart-title>
          </h-chart>
        </h-bottom>
        <!-- <img src="./assets/bg02.png" alt=""> -->
      </h-center>

      <h-right paddingRight="20px">

      </h-right>
    </h-content>
  </h-body>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import bg from "@/assets/bg00.png"
// import bg1 from "@/assets/bg01.png"
import header from "@/assets/header.png"
import charts01 from "@/assets/charts01.png"
import charts02 from "@/assets/charts02.png"

let chartOptions = ref({
  color: '#f40',
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [250, 130, 124, 318, 435, 247, 160],
      type: 'line'
    }
  ]
})
</script> 

<style scoped>
.imgs {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgs img {
  height: 254px;
}
</style>
