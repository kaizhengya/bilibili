<template>
  <div class="box">
    <div class="title">
      <div class="lef">
        <slot name="lef" />
      </div>
      <div class="rig">
        <slot name="rig"></slot>
      </div>
    </div>
    <div class="cont">
      <div class="content">
        <div class="img">
          <img src="../assets/q.jpeg" alt="" />
        </div>
        <p>1111</p>
      </div>
      <div class="content">
        <div class="img">
          <img src="../assets/q.jpeg" alt="" />
        </div>
        <p>1111</p>
      </div>
	  <div class="content">
        <div class="img">
          <img src="../assets/q.jpeg" alt="" />
        </div>
        <p>1111</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homelist",
  created() {
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 0.266667rem;
  background: #fff;
  .title {
    width: 100%;
    display: flex;
    justify-content: space-around;
    
    box-sizing: border-box;
    font-size: 0.4rem;
	.solt{
padding: 0.133333rem;
	}
    .lef,
    .rig {
      flex: 1;
	  
	  span{
padding: .133333rem;
	  }
    }
    .lef {
      text-align: left;
    }
    .rig {
      text-align: right;
    }
  }
  .cont {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .content {
      width: 50%;
	  box-sizing: border-box;
      .img {
        box-sizing: border-box;
        padding-bottom: 56.25%;
        width: 100%;
        height: 0;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 0.133333rem;
        }
      }
	  p{
		  padding: .133333rem;
		  text-align: left;
	  }
	  &:nth-child(odd){
		  padding-right: .133333rem;
	  }
	  &:nth-child(even){
		  padding-left: .133333rem;
	  }
    }
  }
}
</style>
