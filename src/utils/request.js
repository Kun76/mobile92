import axios from 'axios' // 引入axios插件
import JSONBig from 'json-bigint' // 处理大数字插件
import store from '@/store' // 引入vuex中的store实例
// 创建axios实例对象
const instance = axios.create({
  // 设置请求地址常量
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0', 
  //设置大数据转换器
  transformResponse: [function (data) { 
    try {
      return JSONBig.parse(data)
    } catch (error) {
      return data
    }
  }]
})
//导出
export default instance