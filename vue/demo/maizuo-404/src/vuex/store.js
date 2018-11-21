import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import film from './modules/film' //引入后台数据的状态管理树

//使用 vuex
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{//状态模块
		app,film
	}
})
