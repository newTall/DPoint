import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Type from '@/components/Type'
import Vip from '@/components/Vip'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import GoDetail from '@/components/type_goDetail'
import TypeSerch from '@/components/type_serch'
import Vipcomment from '@/components/vip-comment'
import Vipforetaste from '@/components/vip-foretaste'
import Vipenjoyact from '@/components/vip-enjoyact'
import Vipprefrenc from '@/components/vip-prefrenc'
import Vipallqy from '@/components/vip-allqy'
import Order from '@/components/Mine_order'
import Allpay from '@/components/Mine_allpay'
import Needpay from '@/components/Mine_needpay'
import Canc from '@/components/Mine_canc'
import Finish from '@/components/Mine_finish'
import Nofinish from '@/components/Mine_nofinish'
import Homenav from '@/components/home_nav'
import Help from '@/components/Help'
import Search from '@/components/search'
import Vipminevip from '@/components/vip-minevip'
import Point from '@/components/home_point'
import Global from '@/components/home_global'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children:[
            {
                path:'point',
                name:'Point',
                component:Point,
            },{
                path:'global',
                name:'Global',
                component:Global
            }
        ]
    },{
        path: '/',
        redirect:'/home/point'
    },{
        path: '/home_nav',
        name: 'Homenav',
        component: Homenav
    },{
        path: '/home/type',
        name: 'Type',
        component: Type
    },{
        path: '/typeSerch',
        name:"TypeSerch",
        component:TypeSerch
    },{
        path: '/home/vip',
        name: 'Vip',
        component: Vip
    },{
        path: '/home/cart',
        name: 'Cart',
        component: Cart
    },{
      path: '/home/mine',
      name: 'Mine',
      component: Mine
    },{
        path: '/goDetail',
        name: 'GoDetail',
        component: GoDetail
    },{
        // vip评论页
        path: '/vipcomment',
        name: 'Vipcomment',
        component: Vipcomment
    },{
        // vip试吃页面
        path: '/vipforetaste',
        name: 'Vipforetaste',
        component: Vipforetaste
    },{
        // vip会员尊享页面
        path: '/vipenjoyact',
        name: 'vipenjoyact',
        component: Vipenjoyact
    },{
        // vip会员尊享页面
        path: '/vipprefrenc',
        name: 'vipprefrenc',
        component: Vipprefrenc
    },{
        // vip全部权益页面
        path: '/vipallqy',
        name: 'vipallqy',
        component: Vipallqy
    },{
        // 会员中心跳转minevip
        path: '/vipminevip',
        name: 'vipminevip',
        component: Vipminevip
    },{
        path: '/order',
        name: 'Order',
        component: Order,
        children:[{
            path: '/order/allpay',
            name: 'Allpay',
            component: Allpay
        },{
            path: '/order/canc',
            name: 'Canc',
            component: Canc
        },{
            path: '/order/finish',
            name: 'Finish',
            component: Finish
        },{
            path: '/order/nofinish',
            name: 'Nofinish',
            component: Nofinish
        },{
            path: '/order/needpay',
            name: 'Needpay',
            component: Needpay
        }]
    },{
        path: '/help',
        name: 'Help',
        component: Help
    },{
        path:"/search",
        name:'Search',
        component:Search
    }
  ]
})

