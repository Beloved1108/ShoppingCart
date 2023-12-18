const products =[{
    id:0,
    title:'iphone 15mini',
    price:5999,
    Number:37
},{
    id:1,
    title:'iphone 15',
    price:6999,
    Number:6
},{
    id:2,
    title:'iphone 15pro',
    price:8999,
    Number:18
},{
    id:3,
    title:'iphone 15proMax',
    price:10999,
    Number:50
}]

export const getProducts = async ()=>{
    // 为了模拟真实的接口请求
    await wait(1000)
    return products
}

export const butProducts = async ()=>{
    await wait(1000)
    // 如果返回true 页面显示结算成功 否则显示结算失败
    return Math.random()>0.5
}
function wait(delay){
    // 实现一个wait方法 模拟了 一秒后再执行后面的函数
    return new Promise(res=>{
        setTimeout(res,delay)
    })
}