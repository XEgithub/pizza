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
export const routes=[
    {path:'/',component:Home},
    {path:'/menu',component:Menu},
    //路由独享守卫
     {path:'/admin',component:Admin/* ,beforeEnter:((to,from,next)=>{
       alert("123"); 
     })*/},
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