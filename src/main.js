import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'boxicons'
import App from './App.vue'
import router from './router'
import vue3videoPlay from 'vue3-video-play/dist/index.umd.js' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

// 引入 highlight.js 相关依赖和语言
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from "highlight.js/lib/core"
import hljsVuePlugin from "@highlightjs/vue-plugin"
// 按需引入语言
import javascript from "highlight.js/lib/languages/javascript"
import java from "highlight.js/lib/languages/java"
import sql from "highlight.js/lib/languages/sql"
import xml from "highlight.js/lib/languages/xml"
import html from "highlight.js/lib/languages/vbscript-html"
import json from "highlight.js/lib/languages/json"
import yaml from "highlight.js/lib/languages/json"

hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("java", java)
hljs.registerLanguage("yaml", yaml)
hljs.registerLanguage("json", json)
hljs.registerLanguage("sql", sql)
hljs.registerLanguage("xml", xml)
hljs.registerLanguage("html", html)

const app = createApp(App) // 创建 app 实例

// 使用各类插件
app.use(ElementPlus) // 使用 ElementPlus
app.use(router) // 使用 router
app.use(vue3videoPlay) // 使用 vue3-video-play
app.use(hljsVuePlugin) // 使用 highlight.js 插件

app.mount('#app') // 挂载 app 实例
