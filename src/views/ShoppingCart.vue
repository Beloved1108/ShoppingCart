<template>
    <div class="shopping-cart">
        <el-table :data="carData" stripe style="width: 100%" >
            <el-table-column prop="id" label="序号"   align="center"/>
            <el-table-column prop="title" label="商品名称"   align="center"/>
            <el-table-column prop="price" label="价格"  align="center"/>
            <el-table-column prop="number" label="数量"  align="center"/>
    </el-table>
    </div>

</template>

<script setup>
import { ref } from "vue";
import { useShoppingStore } from "../store";
const carData = ref([])
const store = useShoppingStore()
carData.value = store.ShoppingCart
console.log(carData)



</script>

<style lang="scss" scoped>

</style>