<template>
	<div>
		<tab v-if="$route.params.id!=0"/>
		<list></list>
		
	</div>
</template>

<script>
	import list from './homelist.vue'
	import tab from './tab.vue'
	export default{
		name:'chnne',
		components:{
			tab,
			list
		},
		created() {
			console.log(this.$route);
		}
	}
</script>

<style>
</style>
