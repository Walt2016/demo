import {  CHANGE_LEFTNAV_STATE, SHOW_LOADING, HIDE_LOADING} from './mutation-type'

const mutations = {
  // 切换左侧导航的显示状态
  [CHANGE_LEFTNAV_STATE] (state, isShow) { state.leftNavState = isShow },
  [SHOW_LOADING] (state, loadtype) { state.loading = loadtype },
  [HIDE_LOADING] (state, loadtype) { state.loading = loadtype }
}
export default mutations
