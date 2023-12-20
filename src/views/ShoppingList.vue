<template>
    <el-table :data="tableData" stripe style="width: 100%" >
      <el-table-column prop="id" label="序号"   align="center"/>
      <el-table-column prop="title" label="商品名称"   align="center"/>
      <el-table-column prop="price" label="价格"  align="center"/>
      <el-table-column prop="number" label="库存"  align="center"/>
      <el-table-column  label="操作" align="center">
        <template v-slot:default="scope">
            <el-button type="success" @click="handleAdd(scope.row)"> 添加到购物车</el-button>
        </template>
      </el-table-column>


    </el-table>
  </template>
  
  <script  setup>
import  {ref}  from "vue";
import {useShoppingStore} from '../store'
const store = useShoppingStore()
const tableData = ref([])

store.initList()
tableData.value = store.ShoppingList
  



const handleAdd  = async (row) =>{
  // 当前 shoppingList 应该变化
  // 购物车页面列表也会变化

  // 1.修改ShoppingList
  // 2.修改 carList

  // console.log(row)//Proxy(Object) {id: 0, title: 'iphone 15mini', price: 5999, number: 37}
  await store.addShoppingCart(row)
}
  </script>