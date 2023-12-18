<template>
  <div class="content">
    <div class="header">
      <h1 class="title">购物车首页</h1>
      <div class="link">
        <router-link to="/list">
          <el-button type="primary">商品列表</el-button>
        </router-link>
        <router-link to="/cart">
          <el-button type="primary">购物车</el-button>
        </router-link>
      </div>
      
    </div>
    <el-card class="box-card">
      <div class="info">
        <router-view></router-view>
      </div>
    </el-card>
    
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content{
  // width: 1536px;
  height: 630px;
  .header{
    width: 100%;
    height: 130px;
    background: #edeff6;
    text-align: center;
    line-height: 60px;
    margin-bottom: 30px;
    .title{
      margin-bottom: 10px;
    }
    .link{
      width: 100%;
      height: 60px;
      button{
        margin-right: 10px;
      }
    }

  }
  .box-card {
  
    // width: 480px;
    width: 100%;
    
}
}
</style>