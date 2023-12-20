<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h1>购物车首页</h1>
         <div>
          <router-link to="/"><el-button type="primary" class="btn">商品列表</el-button></router-link>
          <router-link to="/cart"><el-button type="primary" class="btn">购物车</el-button></router-link>
         </div>
      </div>
    </template>
    <router-view></router-view>
    
  </el-card>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .btn{
      margin-right: 20px;
  }
}
</style>