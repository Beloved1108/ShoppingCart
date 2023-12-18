<template>
    <el-table :data="tableData" stripe style="width: 100%" >
      <el-table-column prop="id" label="序号"   align="center"/>
      <el-table-column prop="title" label="商品名称"   align="center"/>
      <el-table-column prop="price" label="价格"  align="center"/>
      <el-table-column prop="number" label="数量"  align="center"/>
      <el-table-column  label="操作" align="center">
        <templete #default="scope">
            <el-button type="success"> 添加到购物车</el-button>
        </templete>
      </el-table-column>


    </el-table>
  </template>
  
  <script lang="ts" setup>
import { ref } from "vue";
// const tableData =[{
//     id:0,
//     title:'iphone 15mini',
//     price:5999,
//     number:37
// },{
//     id:1,
//     title:'iphone 15',
//     price:6999,
//     number:6
// },{
//     id:2,
//     title:'iphone 15pro',
//     price:8999,
//     number:18
// },{
//     id:3,
//     title:'iphone 15proMax',
//     price:10999,
//     number:50
// }]
  const tableData = ref([])
  </script>