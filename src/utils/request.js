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
// 配置请求拦截器
instance.interceptors.request.use(function (config) {
  if (store.state.user.token) {
    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
//配置响应拦截器
instance.interceptors.response.use(function (response) {
  try {
    return response.data.data
  } catch (error) {
    return response.data
  }
}, function (error) {
  if (error.response.status === 401) {
    // router.push('/login')
    // return一个空函数来防止报错
    return new Promise(function () { })
  }
  return Promise.reject(error);
});
//导出
export default instance