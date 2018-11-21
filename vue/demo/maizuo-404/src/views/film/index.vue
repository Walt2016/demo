<template>
	<div class="film">
		<div class="filmContent">
			<ul>
				<li v-for="film in filmsdData">
					<div class="filmItem">   
					电影名称：{{film.name}}<br>
					电影简介：{{film.intro}}
					</div>
					
				</li>
			</ul>
		
		</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	
	export default{
		name:'film',
		data(){
			return{
				page:1//数据获取到了第几页
			}
		},
		computed:{
			...mapGetters({
				filmsdData:'getNowPlayingData' //getters
			})
		},
		created(){
			this.$store.dispatch('fetchNowPlayingLists',[1,10]);//actions
			this.addNextPage();
			
			console.log('影片_created_1');
		},
		methods:{
			addNextPage:function(){//上拉时添加下一页的数据
			//上拉的动作   三个参数   1.事件名称 2.回调函数 3.什么时候出发  默认是 false 冒泡时触发    true 捕获时出发 
			//addEventListener 特点就是可以同时给一个对象绑定这个事件多次
				let self = this;
				window.addEventListener('scroll',function(){
					//当滚动条和页面顶部的距离为大于100的时候就执行 dispatch
					
					//获取与顶部的滚动的高度
					let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop; 
					let count = parseInt(scrollHeight/100);
					
					if(count >1){
						for(let i=2;i<=count;i++){
							if(i > self.page){
								self.$store.dispatch('fetchNowPlayingLists',[i,10]);
								self.page++;
							}
						}
					}
					/*
					if(scrollHeight > 100){
						if(self.page < 2){
							self.$store.dispatch('fetchNowPlayingLists',[2,10]);
							self.page++;
						}
						
					}
					*/
				},false);
				
				
			}
		},
		
		mounted(){
			console.log('影片_mounted_2');
		},activated(){//当  keep_alive  时， 进入页面时触发
			console.log('影片_activated_3');
		},deactivated(){//当  keep_alive  时， 离开页面时触发
			console.log('影片_deactivated_4');
			
		}

	}
</script>

<style>
	.film{width:100%;height:2000px; background: pink;}
	.film .filmItem{ width: 100%; padding:10px; height:80px;border-bottom:1px dotted #9A9A9A }
</style>