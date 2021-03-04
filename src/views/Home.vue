<template>
	<div class="home">
		<chome @routerto="search"></chome>
		<keep-alive include="tabbox">
			<tabbox></tabbox>
		    <component :is="Component"/>
		  </keep-alive>
		<router-view></router-view>
		<list v-if="$route.path == '/'"></list>
		

	</div>
</template>

<script>
	import {gethome,getmode} from '../assets/https.js'
	import list from'../components/homelist.vue'
	import tabbox from '../components/tabbox.vue'
	import chome from '../components/c_home.vue'
	import {onMounted,watch} from 'vue'
	import{useRoute,useRouter} from 'vue-router'
	export default {
		name: 'Home',
		components: {
			chome,
			tabbox,
			list
		},
		setup(){
			const route = useRoute()
			const router = useRouter()
			function search(){
				router.push('/search')
				console.log(router);
			}
			watch(()=>route.params,(news)=>{
				console.log(news);
			})
			onMounted:{
				gethome().then(res=>{
					console.log(res);
				})
			}
			return {search}
		}
		
	}
</script>
