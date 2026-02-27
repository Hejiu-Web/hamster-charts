import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import HamsterCharts from '../packages/index.js'

createApp(App).use(HamsterCharts).mount('#app')
