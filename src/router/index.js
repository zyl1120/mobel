import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import My from "@/components/My"
import Train from "@/components/Train"
import Vip from "@/components/Vip"
import Find from "@/components/Find"
import State from "@/components/State"
import Mydetail from "@/components/Mydetail"
import Mytrain from "@/components/Mytrain"
import Mymethod from "@/components/Mymethod"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:"/my",
      component: HelloWorld,
      children:[       
        {
          path:"/my",
          component:My
        },
        {
          path:"/train",
          component:Train
        },
        {
          path:"/vip",
          component:Vip
        },
        {
          path:"/find",
          component:Find
        },
        {
          path:"/state",
          component:State
        }
      ]
      
    },
    {
      path:"/mydetail",
      component:Mydetail
    },
    {
      path:"/mytrain/:id",
      component:Mytrain
    },
    {
      path:"/mymethod/:id",
      component:Mymethod
    }
  ]
})
