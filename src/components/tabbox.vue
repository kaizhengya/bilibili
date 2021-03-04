<template>
	<div>
		<div class="box">
			<van-tabs v-model:active="active" class="topmargin rigs">
				<van-tab v-for="(item, i) in data.cont" :key="i" :title="item.title" :to="'/chnne/'+item.id">{{
                  item.cont
                }}</van-tab>
				<div class="rig">
					<van-icon name="arrow-down" />
				</div>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import {
		reactive,
		ref
	} from 'vue'
	import chnne from './chnne.vue'
	export default {
		name: 'tabbox',
		components: {
			chnne,
		},
		setup() {
			let active = ref(0)
			const data = reactive({
				cont: [{
						id: 0,
						title: '首页'
					},
					{
						id: 1,
						title: '动画'
					},
					{
						id: 2,
						title: '番剧'
					},
					{
						id: 3,
						title: '国创'
					},
					{
						id: 4,
						title: '音乐'
					},
					{
						id: 5,
						title: '舞蹈'
					},
					{
						id: 6,
						title: '游戏'
					},
					{
						id: 7,
						title: '知识'
					},
					{
						id: 8,
						title: '数码'
					},
					{
						id: 9,
						title: '生活'
					},
					{
						id: 10,
						title: '美食'
					},
					{
						id: 11,
						title: '动物'
					},
					{
						id: 12,
						title: '鬼畜'
					},
					{
						id: 13,
						title: '时尚'
					},
				]
			})
			let goto = function(e) {
				console.log(e);
				console.log(111);
			}
			return {
				data,
				active
			}
		}
	}
</script>

<style lang="less" scoped>
	.box {
		width: 100vw;
		height: 1.2rem;
		background: #fff;
		font-size: 0.37333rem;

		ul {
			overflow-x: scroll;
			height: 100%;
			display: flex;
			align-items: center;
			// padding: 0 .266667rem;
		}

		.rigs {
			width: 90%;
			position: relative;
		}

		.rig {
			width: 10%;
			top: 50%;
			right: -10%;
			transform: translateY(-50%);
			position: absolute;
		}
	}
</style>
