<template>
  <div>
    <nav class="nav">
      <img class="logo" src="../assets/logo.png" />
      <div class="search">
        <van-icon name="search" class="searchMap"  @click="routerto"/>
      </div>
      <div class="heardimg"></div>
      <van-button class="xzapp" color="#FB7299" size="small"
        >下载App</van-button
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "chome",
  methods:{
    routerto(){
      this.$emit('routerto')
    }
  }
};

</script>

<style lang="less" scoped>
.nav {
  padding: 0 0.266667rem;
  box-sizing: border-box;
  width: 100vw;
  height: 1.333333rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 2.026667rem;
    height: 1.093333rem;
  }
  .search {
    flex: 1;
    font-size: 0.56rem;
    color: #ccc;
    .searchMap {
      display: flex;
      justify-content: flex-end;
      margin-right: 0.533333rem;
    }
  }
  .heardimg {
    width: 0.6824rem;
    height: 0.6824rem;
    border-radius: 50%;
    background: #f3f3f3;
    margin-right: 0.533333rem;
  }
  .xzapp {
    border-radius: 10%;
  }
}
</style>