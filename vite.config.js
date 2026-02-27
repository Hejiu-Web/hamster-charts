import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 自定义路劲简写
import { resolve } from 'path'
import banner from './banner.txt'

/**
 * 项目banner开启方法
 */
function logBnner(tf) {
  if (tf) {
    return {
      name: 'startup-message-plugin',
      configResolved(config) {
        console.log('\x1B[32m%s\x1B[0m', banner)
        console.log(
          '\x1B[31m',
          '==============================================='
        )
        console.log('\x1B[34m', '项目：仓鼠图表')
        console.log('\x1B[34m', '作者：鹤酒(hejiu45)')
        console.log('\x1B[34m', '单位：鹤酒开源')
        console.log('\x1B[34m', '版本：node 18.x vue 3.x')
        console.log(
          '\x1B[31m',
          '==============================================='
        )
      },
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), logBnner(true)],

  // 配置项目打包
  build: {
    lib: {
      name: 'HamsterCharts',
      entry: './packages/index.js',
    },
    // 抛出 vue 依赖
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  // vite服务设置
  server: {
    // 项目启动端口
    port: 8081,
    // 启动后自动开启网页
    open: '/',
    // 本地代理
    proxy: {
      '/api': {
        target: 'http://localhost:45',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 自定义路劲简写
  resolve: {
    alias: {
      // 将 @ 符号指向项目的 src 目录
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './packages'),
    },
  },
})
