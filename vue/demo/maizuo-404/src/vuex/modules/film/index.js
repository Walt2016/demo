import * as actions from './actions'
import * as getters from './getters'
//* as  表示我们输出的文件返回时是一个对象

import mutations from './mutations'

//定义  state

const state={
	nowPlayingFilms:[]//正在上映的电影初始值
}

//输出
export default { state, actions,getters, mutations}
