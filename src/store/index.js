import {defineStore} from 'pinia'
import { getProducts } from '../api/product'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const useShoppingStore = defineStore('shopping-store',()=>{
    // 商品列表
    const ShoppingList = ref([])
    // 购物车列表
    const ShoppingCart = ref([])
    //初始化商品列表的方法
    const initList = async ()=>{
      const res = await getProducts()
      ShoppingList.value = res
    };

    // 添加购物车的方法
    const addShoppingCart = (row)=>{
      // 通过 row.Id 确认选择要操作的商品,然后让其库存减一 如果库存为 0 无法继续减少 同时给出一个消息提示(没有库存)
      const item = ShoppingList.value.find(item=>{
        return item.id === row.id
      })
      console.log(item,'add-item')
      
      if(item.number < 1){
        item.number = 0 
        ElMessage({
          message:'当前商品没有库存了!',
          type:'error',
          duration:1000
        })
        return
      }
        item.number --
      
      // console.log(item)
      // 修改购物车列表
      // 如果购物车已经有了这个商品,让这个商品数量自增
      const _item = ShoppingCart.value.find((item)=>{
        return item.id === row.id
      })
      if(_item){
        _item.number ++
      }else {
        // 如果购物车没有这个 则添加这个商品
        ShoppingCart.value.push({
          id:row.id,
          title:row.title,
          price:row.price,
          number:1
        })
       }
      //  根据 id 对购物车的列表进行一个排列
       ShoppingCart.value.sort((a,b)=>{
        return a.id-b.id
       })
    }
    return{
      ShoppingList,
      ShoppingCart,
      initList,
      addShoppingCart
    }
})

export {useShoppingStore}