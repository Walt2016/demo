<template>
	<div class="main">
		<div  class="slideimg">
			<swiper :options="swiperOption" ref="mySwiper" class="swiper">
			    <!-- slides -->
			    <swiper-slide v-for="banner in banners" class="swiper-slide">
			    	
			    	<imgload :src="banner" placeholder="http://static.m.maizuo.com/v4/static/app/asset/1598cc489be15707b86e501996a81c6d.png"></imgload>
			    </swiper-slide>
			   
			 </swiper>
			
		</div>
		<div  class="now-playing-data">
			
			<nowplaying  :films = "nowPlayingdata"></nowplaying>
			<!--:films   冒号  表示绑定的是一个变量，-->
		</div>
		<div  class="coming-soon-data">
			<!--<comingsoon></comingsoon>-->
		</div>
	</div>
	
	
</template>

<script>
	import nowplaying from './now-playing'
	import comingsoon from './coming-soon'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import {mapGetters} from 'vuex'
	import imgload from '../../components/img_load.vue'
	
	export default {
		name:'main',
		data(){
			return {
				banners:['/static/img/1.jpg','/static/img/2.jpg','/static/img/3.jpg','/static/img/4.jpg'],
				swiperOption:{
					autoplay: 3000,
					autoHeight: true,
					loop:true
				}
			}
		},
		computed:{
			...mapGetters({
				nowPlayingdata:'getNowPlayingData'
			})
		},
		created(){
			//页面加载后，所做的操作，  钩子函数
			this.$store.dispatch('fetchNowPlayingLists',[1,5])
			console.log('主页_created_1');
		},
		components:{
			nowplaying,comingsoon,swiper,swiperSlide,imgload
		},
		mounted(){
			console.log('主页_mounted_2');
		}
		,activated(){//当  keep_alive  时， 进入页面时触发
			console.log('主页_activated_3');
		}
		,deactivated(){//当  keep_alive  时， 离开页面时触发
			console.log('主页_deactivated_4');
			
		}
	}
	
</script>

<style>
	.slideimg .swiper{width: 100%; height:200px;}
	
	.slideimg .swiper .swiper-slide img{height: 200px;}
</style>