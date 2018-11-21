<template>
	<div class="nowplaying">
		
		<filmitem v-for="film in films" :film="film" type="NOW_PLAYING"></filmitem>
		<morebtn></morebtn>
	</div>
	
	
</template>

<script>
	import filmitem from '../../components/film-item.vue'
	import morebtn from '../../components/morebtn.vue'
	export default {
		name:'nowplaying',
		props:{
			films:{
				type: Array,  //数据类型
				required:true  //验证，看传过来的数据类型是否匹配
			}
		},
		components:{
			filmitem,morebtn
		}
	}
	
</script>

<style>


</style>