// 导入axios模块
import request from '@/utils/request.js'

//对登录账户信息进行校验，是一个es6按需导出动作
export function apiUserLogin({ mobile, code }) {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data: {
      // 对象成员简易赋值
      mobile, // mobile:mobile
      code // code:code
    }
  })
}
