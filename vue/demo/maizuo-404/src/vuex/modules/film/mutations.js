import {  FETCH_NOW_PLAYING_FILMS} from './mutation-type'

const mutations = {
  // 获取 正在上映的电影的数据
  [FETCH_NOW_PLAYING_FILMS] (state, data) { 
  	//state.nowPlayingFilms = data.films
  	//数组的连接   将两个或两个以上的数组连接为一个数组
  	state.nowPlayingFilms = state.nowPlayingFilms.concat(data.films);
  	
  }
}
export default mutations
