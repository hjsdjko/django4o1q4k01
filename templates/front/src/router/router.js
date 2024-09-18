import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import mzfsList from '../pages/mzfs/list'
import mzfsDetail from '../pages/mzfs/detail'
import mzfsAdd from '../pages/mzfs/add'
import shujutongjiList from '../pages/shujutongji/list'
import shujutongjiDetail from '../pages/shujutongji/detail'
import shujutongjiAdd from '../pages/shujutongji/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussmzfsList from '../pages/discussmzfs/list'
import discussmzfsDetail from '../pages/discussmzfs/detail'
import discussmzfsAdd from '../pages/discussmzfs/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'mzfs',
					component: mzfsList
				},
				{
					path: 'mzfsDetail',
					component: mzfsDetail
				},
				{
					path: 'mzfsAdd',
					component: mzfsAdd
				},
				{
					path: 'shujutongji',
					component: shujutongjiList
				},
				{
					path: 'shujutongjiDetail',
					component: shujutongjiDetail
				},
				{
					path: 'shujutongjiAdd',
					component: shujutongjiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussmzfs',
					component: discussmzfsList
				},
				{
					path: 'discussmzfsDetail',
					component: discussmzfsDetail
				},
				{
					path: 'discussmzfsAdd',
					component: discussmzfsAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
