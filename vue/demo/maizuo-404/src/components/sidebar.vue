<template>
	<aside class="application-sidebar" @click="hidebar">
	    <transition name="sidebar">
	    <div class="sidebar-container"  v-show="show" >
	      <div class="sidebar-overlay">
	        <transition name="leftNav">
	        <nav v-show="show">
	          <ul>
	            <li v-for="menu in menuList">
	            	<router-link :to="menu.url">{{menu.name}}</router-link>
	            
	            </li>
	          </ul>
	        </nav>
	          </transition>
	      </div>
	    </div>
	    </transition>
	</aside>
</template>

<script>
	import {mapGetters} from 'vuex'  //引入vuex里面的mapGetters
	
	export default {
		name:'sidebar',
		data(){
			return{
				//show:false,
				menuList:[
					{'name':'首页','url':'/'},
					{'name':'影片','url':'/film'},
					{'name':'影院','url':'/filmaera'},
					{'name':'商城','url':'/shop'},
					{'name':'演出','url':'/ticket'},
					{'name':'我的','url':'/login'},
					{'name':'卖座卡','url':'/card'},
				]
			}
		},
		computed:{//发生变化时执行
			...mapGetters({
				show:'getLeftNavState'//将getters里面的值映射给 show 变量
			})
		},
		methods:{
			hidebar:function(){
				this.$store.dispatch('changeLeftNavState',false);
			}
		},
		mounted:function(){
			//let that = this;
			//setInterval(function(){
				//console.log(666);
			//	that.show = !that.show;
			//},3000);
		}
	}
	//mounted
</script>

<style lang="less">
	.application-sidebar{
		.sidebar-enter-active,.sidebar-leave-active{
			transition: all ease 1s;
			-webkit-transition: all ease 1s;
		}
		.sidebar-enter,.sidebar-leave-active{opacity: 0;}
		
		.sidebar-container{
		    position: fixed;
		    top: 0;
		    bottom: 0;
		    left: 0;
		    right: 0;
		    color: #9a9a9a;
		    z-index: 501;
		    .sidebar-overlay{
		    	background: rgba(0,0,0,0.5);
			    position: absolute;
			    top: 50px;
			    right: 0;
			    bottom: 0;
			    left: 0;
			    .leftNav-enter-active,.leftNav-leave-active{
			    	transition: right ease 1s;
			    	-webkit-transition: right ease 1s;
			    }
			    .leftNav-enter,.leftNav-leave-active{right: 380px;}
			    nav{
		    	    border-top: 1px solid #222;
				    box-shadow: 0 1px 1px #363636 inset;
				    background: #282828;
				    position: absolute;
				    display: block;
				    top: 0;
				    right: 110px;
				    bottom: 0;
				    left: 0;
				    ul{
				    	li{
				    		height:50px;
				    		line-height: 50px;
				    		border-bottom:1px solid #333;
				    		text-align: left;
				    		padding-left: 20px;
				    	}
				    }
			    }
		    }
		}
		
		
	}
</style>