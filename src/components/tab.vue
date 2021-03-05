<template>
	<div>
		<van-tabs v-model:active="activ" class="topmargin" @change='med(activ)' >
			<van-tab v-for="item in items" :key="item" :title="item" ></van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import {
		watch,
		ref,
		reactive,
		toRefs
	} from 'vue'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	export default {
		props:{
			index:{
				type:Number,
				default(){return 0}
			},
			items:{
				type:Object,
				default(){return {}}
			}
		},
		setup(props) {
			const route = useRoute()
			const router = useRouter()
			let activ = ref(props.index);
			console.log(props.items);
			// axios 请求根据传过来的值确定title的内容
		
			const med =(e)=>{
				console.log(e);
			}
			// 监听上面大类tab变换 此tab回到初始值
			watch(()=>props.index,()=>{
				activ.value = 0
			})
			return {
				activ,
				med
			};
			
	},
	};
</script>

<style lang="less" scoped>
	.topmargin {
		border-top: solid 0.026667rem #f5f5f5;
		border-bottom: solid 0.026667rem #f5f5f5;
	}
</style>
