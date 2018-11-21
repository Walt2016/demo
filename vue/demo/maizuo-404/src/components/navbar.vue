<template>
	<div class="mynavbar">
		<nav id="toolbar">
			<a href="javascript: void 0;">
		        <div class="toolbar-title-icon" @click="showNav">
		          <i class="iconfont icon-list"></i>
		        </div>
		        <div class="toolbar-title">
		          	卖座电影
		        </div>
		     </a>
		</nav>	
	</div>
</template>

<script>
	export default{
		name:'navbar',
		data(){
			return{}
		},
		methods:{
			showNav:function(){
				//状态的提交
				this.$store.dispatch('changeLeftNavState',true);
			}
		}
	}
</script>

<style>
	.mynavbar{
	    background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    height: 1.562rem;
	    line-height: 50px;
	    overflow: hidden;
	}
	.mynavbar div{
		float:left;
	}
	
	.mynavbar .toolbar-title-icon .icon-list{
		color: #9a9a9a; padding-left:0.937rem;
	}
	.mynavbar .toolbar-title{
		padding-left:40px; font-size:14px; color:#fff;
	}
	
</style>