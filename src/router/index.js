import Vue from 'vue'
import Router from 'vue-router'

//引入路由文件
import home from '../components/home'
import index from '../components/index'

import shopcar from '../components/shopcar'
import personal from '../components/personal'
import foods from '../components/index/foods'
import foodsdetail from '../components/index/foodsdetail'
import staydetail from '../components/index/staydetail'
import servicedetail from '../components/index/servicedetail'
import service from '../components/index/service'
import stay from '../components/index/stay'
//商铺
import shops from '../components/shops/shops'
import shopsMain from '../components/shops/shopsMain'
import shopsFoodList from '../components/shops/shopsFoodList'
import shopsServiceList from '../components/shops/shopsServiceList'
import shopsAccommodateList from '../components/shops/shopsAccommodateList'
//使用路由
Vue.use(Router)

export default new Router({
  routes: [
  	{
          //一级路由
    	path:"/home",
  		component:home,
        		//二级路由
        		children:[
        		{
        			path:"index",
        			component:index
        		},
        		{
        			path:"shops",
        			component:shops
        		},
        		{
        			path:"shopcar",
        			component:shopcar
        		},
        		{
        			path:"personal",
        			component:personal
        		},
        		{
        			path:"/home",
        			redirect:"/home/index"
        		}
        		]

  },
   //所有的一级路由都在这里添加
    /***********************一级路由*****************/
     {
        path:"/foods",
        component:foods
    },
    {
        path:"/service",
        component:service
    },
    {
        path:"/stay",
        component:stay
    },
    {
        path:"/staydetail",
        component:staydetail
    },
    {
        path:"/foodsdetail",
        component:foodsdetail
    },
    {
        path:"/servicedetail",
        component:servicedetail
    },
    {
        path:"/shopsMain",
        component:shopsMain
    },
    {
        path:"/shopsFoodList",
        component:shopsFoodList
    },
    {
        path:"/shopsServiceList",
        component:shopsServiceList
    },
    {
        path:"/shopsAccommodateList",
        component:shopsAccommodateList
    },










    /*********************一级路由*******************/
  //如果输入路由错误就会进行重定向
  	{
    	path:"*", //匹配所有的路径
  		redirect:"/home"
    }

  ]

})
