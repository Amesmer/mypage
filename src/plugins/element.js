import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Tabs, Message, MessageBox, TabPane, Menu, MenuItem,Breadcrumb,BreadcrumbItem } from 'element-ui'

// 重复引用会出错  不要重复引用!!!
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
