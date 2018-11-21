<template>
  <div id="app">
    <navbar></navbar>
    
		<!--<keep-alive include="main,film"><router-view ></router-view></keep-alive>-->
		<keep-alive>
		    <router-view v-if="!$route.meta.notKeepAlive"></router-view>
		</keep-alive>
		<router-view v-if="$route.meta.notKeepAlive"></router-view>
    
    <mysidebar></mysidebar>
    
    <!--获取后台数据时显示的右上角的小图标-->
    <div id="nprogress">
    	<div class="spinner" role="spinner" v-show="loading" >
    		<div class="spinner-icon"></div>
    	</div>
    </div>

    <!--回到顶部的小图标-->
    <div class="cpn-back-to-top " id="topimg" @click = "toTop">
    	<div class="circle">
    		<i class="iconfont icon-top"></i>
    	</div>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'	
import mysidebar from './components/sidebar.vue'	
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  data(){
  	return{
  		//loading:true
  	}
  },
  computed:{
  	...mapGetters({
  		loading:'getLoadingState'    //getters 中的值
  	})
  },
	methods:{
		showtopimg:function(){
			//当滚动条离最上面有定义距离时，显示 小图标
			//滚动条滚动事件
			window.onscroll = function(){
				//console.log(11);
				//获取和顶部的距离
				let heightToTop = document.documentElement.scrollTop || document.body.scrollTop;
				//console.log(heightToTop);
				if(heightToTop >=150){
						document.getElementById('topimg').style.bottom = 0;	
				}else{
						document.getElementById('topimg').style.bottom = '-100px';	
				}
				
			}
		},
		toTop:function(){
			document.documentElement.scrollTop = document.body.scrollTop = 0;
		}
	},
	created(){
		this.showtopimg();
	},
  components:{
  	navbar,mysidebar
  }
}
</script>

<style>
	@import 'assets/styles/reset.css';
	@import 'assets/styles/icon.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
body{
	background: #eee;
}

/*旋转图标*/
.spinner { display: block;position: fixed; z-index: 1031; top: 15px; right: 15px; }
.spinner-icon { 
	width: 18px;height: 18px;box-sizing: border-box; border: solid 2px transparent;
      border-top-color: #29d; border-left-color: #29d; border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite; }
/* 两帧动画建议使用 from to   ;两帧以上  使用 百分比 */      
@-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
 }
 @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

/*回到顶部的图标*/
.cpn-back-to-top{
	  -webkit-transition: 800ms all ease;
    transition: 800ms all ease;
    position: fixed;
    bottom: -100px;
    right: 0;
    padding: 10px;
    z-index: 400;
}
.cpn-back-to-top .circle{
	width: 48px; height: 48px; background-color: rgba(0,0,0,0.7); border-radius: 50%; line-height: 48px;
} 
.cpn-back-to-top .circle  .icon-top{ font-size: 24px; color: #fff;}
</style>
