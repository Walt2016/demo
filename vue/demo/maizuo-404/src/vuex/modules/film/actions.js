import axios from 'axios'
//使用axios来获取异步数据
//公共获取后台数据的函数
/*
 参数：  url  地址信息
 query  搜索条件
 * */
const _get = ({ url, query }, commit) => {
	//显示  下载数据的小圆圈的动画
	commit('SHOW_LOADING',true);
	
  let _url
  if (query) {
    _url = `http://localhost:8080/v4/api${url}?${query}`
  } else {
    _url = `http://localhost:8080/v4/api${url}`
  }
  return axios.get(_url)//调用后台数据
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {//请求成功
      	
      	//隐藏 下载数据的小圆圈的动画
      	commit('HIDE_LOADING',false);
      	
      	//怎样判断接口数据请求成功   返回的状态值是200    ，  再看一下返回的数据和之前使用的json数据是否匹配
      	//接口错误：500 ，504（服务器端的错误），404（url地址写错），400（传输的参数出现问题，参数的长度过长），3** 错误  跳转
        return res.data//返回数据
      }
      return Promise.reject(new Error(res.status))//错误的返回
    })
}

//获取正在上映的电影内容
export const fetchNowPlayingLists = ({ commit }, pageArr) => {
	console.log(66);
	let count = pageArr[1];
	let page = pageArr[0];
  const url = '/film/now-playing'
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.status === 0) {
      	console.log(json.data);
        return commit('FETCH_NOW_PLAYING_FILMS', json.data)//调用  mutations  函数
      }
      return Promise.reject(new Error('FETCH_NOW_PLAYING failure'))
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}


/*
export const changeLeftNavState = ({commit}, isShow) => {
  commit('CHANGE_LEFTNAV_STATE', isShow)
}
*/