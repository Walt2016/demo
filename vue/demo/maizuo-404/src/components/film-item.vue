<template>
	<div class="film-item">
		<div v-if="type == 'NOW_PLAYING'">{{film.name}}--{{film.scheduleCount}}家影院上映--{{film.watchCount}}人购票</div>
		<div  >{{film.name}}--{{film.premiereAt}}--{{mytime}}时间上映</div>
	</div>
	
</template>

<script>
	import moment from 'moment'
	export default{
		name:'filmitem',
		data(){
			return{
				mytime:''
			}
		},
		props:{
			film:{
				type:Object,
				required:true
			},
			type:{
				type:String,
				default:'NOW_PLAYING'
			}
			
		},
		created(){
			this.changeTime();
		},
		methods:{
			changeTime:function(){
				console.log(11);
				this.mytime = moment().format("M月DD日",this.film.premiereAt)
			}
		}
		
	}
</script>

<style>
	.film-item{
		width: 90%; height: 200px;border:1px solid #ccc; margin: 15px; background: #fff;
	}
	
</style>