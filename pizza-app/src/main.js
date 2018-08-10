import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register' 
//二级路由
import Contact from './components/about/Contact' 
import Document from './components/about/Document' 
import Express from './components/about/Express' 
import News from './components/about/News' 
//三级路由
/* import PersonName from './components/about/PersonName'  */
import Phone from './components/about/Phone' 
import Person from './components/about/Person' 
Vue.use(VueRouter)
const routes=[
  //路由复用
  {path:'/',components:{
    default:Home,
    'contact':Contact,
    'express':Express,
    'document':Document
  }
    

  },
  {path:'/menu',component:Menu},
  //路由独享守卫
   {path:'/admin',component:Admin/* ,beforeEnter:((to,from,next)=>{
     alert("123");
   }) */},
  {path:'/about',redirect:'/news',component:About,children:[
    {path:'/contact',component:Contact},
    {path:'/document',component:Document},
    {path:'/express',component:Express},
    {path:'/news',redirect:'/person',component:News,children:[
     /*  {path:'/personname',component:PersonName}, */
      {path:'/phone',component:Phone},
      {path:'/person',component:Person}
    ]}
]},
  {path:'/login',component:Login},
  {path:'/register',component:Register}, 
  {path:'*',redirect:'/'}
]
const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 100 }
  }
})
//全局守卫
/*
router.beforeEach((to,from,next)=>{
     if(to.path=="/login"||to.path=="/register"){
                next();
     }
     else
     {
      alert("还没有登录，请先登录！");
      next("/login");
     }
     
})

*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
