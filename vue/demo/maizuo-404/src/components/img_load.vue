<template>
	<div class="img-responsive" :style="{'background-image':'url('+placeholder+')'}" style="background-size: 100%;">
		<img :src="src" style="width:100%;transition: all 1.2s ease;"
	@load="loaded" :style="{'opacity':finish?1:0}"/>
	</div>
</template>

<script>
	export default{
		name:'imgload',
		data(){
			return{
				finish:false //组件在刚进入时，图片的默认状态是透明 的
			}
		},
		props:{//接收从父组件中传递过来的值
			src:{
				type:String,
				required:true
			},
			placeholder:{
				type:String,
				required:true
			}
		},
		methods:{
			loaded:function(){
				let self = this;
				setTimeout(function(){
					self.finish = true;
				},100);
			}
		},
		created(){
			this.loaded();
		}
		
	}
</script>

<style>
</style>