<template>
	<div>
		<van-tabs v-model:active="activ" class="topmargin" @change='med(activ)'>
			<van-tab v-for="(item, i) in title" :key="i" :title="item.title" ></van-tab>
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
		setup() {
			const route = useRoute()
			const router = useRouter()
			let activ = ref(0);
			// axios 请求根据传过来的值确定title的内容
			const title = reactive({
				title: [{
						title: "标签1",
						cont: "标签1"
					},
					{
						title: "标签2",
						cont: "标签2"
					},
					{
						title: "标签3",
						cont: "标签3"
					},
					{
						title: "标签4",
						cont: "标签4"
					},
					{
						title: "标签5",
						cont: "标签5"
					},
					{
						title: "标签6",
						cont: "标签6"
					},
					{
						title: "标签6",
						cont: "标签6"
					},
				]
			})
			const med =(e)=>{
				console.log(e);
			}
			// 监听路由
			watch(()=>route.params,(newid)=>{
				console.log(5154);
				activ = newid
			},matchMedia)
			return {
				activ,
				...toRefs(title),
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
