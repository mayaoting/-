import hello from './components/HelloWorld'
import page2 from './components/page2'
import page3 from './components/page3'
import imageDemo3 from './components/imageDemo3'
import imageDemo5 from './components/imageDemo5'
import page4 from './components/page4'
import setting from './components/setting'



const routes = [
  {
    path:'/',
    component:hello
  },
  {
    path:'/page2',
    component:page2
  },
  {
    path:'/page3',
    component:page3
  },
  {
    path:"/imageDemo3",
    component:imageDemo3
  },
  {
    path:"/imageDemo5",
    component:imageDemo5
  },
  {
    path:"/page4",
    component:page4
  },
  {
    path:"/setting",
    component:setting
  }
];

export default routes
