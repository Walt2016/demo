import * as actions from './actions'
import * as getters from './getters'
//* as  表示我们输出的文件返回时是一个对象

import mutations from './mutations'

//定义  state

const state={
	leftNavState:false,//左侧菜单的状态
	loading:false //获取数据的小图标的状态
}

//输出
export default { state, actions,getters, mutations}
