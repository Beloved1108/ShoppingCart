import {createRouter,createWebHashHistory} from "vue-router"
// 定义一个routes数组，在里面定义路由规则
import ShoppingList from '../views/ShoppingList.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
const routes = [{
    path: '/',
    name:"home",
    component:ShoppingList
},
{
    path:'/cart',
    name:"cart",
    component:ShoppingCart

}]

// 使用createRouter创建路由实例，并配置路由模式和上面定义的路由规则
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

// 使用export default 将上面创建的路由实例导出
export default router