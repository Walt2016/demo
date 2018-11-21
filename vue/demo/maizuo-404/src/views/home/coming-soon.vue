<template>
	<div class="comingsoon">
		<p class="com-text">更多即将上映电影</p>
		<hr>
		<filmitem v-for=" i in 5" ></filmitem>
		<morebtn></morebtn>
	</div>
	
	
</template>

<script>
	
	import filmitem from '../../components/film-item.vue'
	import morebtn from '../../components/morebtn.vue'
	export default {
		name:'comingsoon',
		components:{
			filmitem,morebtn
			
		}
	}
	
</script>

<style scoped>
	.comingsoon{clear:both;}
	.com-text{border-bottom: 1px solid #282828;}
</style>