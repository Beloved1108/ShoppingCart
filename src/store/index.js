import {defineStore} from 'pinia'
import { getProducts } from '../api/product'
const useShoppingStore = defineStore('shopping-store',()=>{
    // 商品列表
    const ShoppingList = ref([])
    //初始化商品列表的方法
    const initList = async ()=>{
      const res =  await getProducts()
      console.log(res);
    }
})

export {useShoppingStore}