<template>
  <div>
	  <div class="search-t">
		  <div class="inp-box">
			  <input type="text">
			  <van-icon name="search" size="20" class="sear-ico"/>
			  <span>取消</span>
		  </div>
	  </div>
	  <div class="search-m">
		  
	  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped="scoped" lang="less">
	.search-t{
		background-color: #fff;
		height: 5.3rem;
		margin-bottom: .3rem;
		float: left;
		width: 100vw;
		padding:.2rem .26667rem;
		box-sizing: border-box;
		.inp-box{
			width: 100%;
			height: 1rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			input{
				background-color: rgb(244,244,244);
				height: 90%;
				padding: .2rem 1rem;
				font-size: 0.37333rem;
				box-sizing: border-box;
				flex: 1;
				color: rgb(117,117,117);
				border-radius: .1rem;
				position: relative;
				
			}
			span{
				padding: .2rem;
				font-size: 0.37333rem;
				color: #FB7299;
			}
			.sear-ico{
				position:absolute;
				left: .5rem;
				
			}
		}
		
	}
	.search-m{
		width: 100vw;
		background-color: #fff;
		float: left;
		height: calc(100vh - 5.3rem - .3rem);
	}
	
</style>