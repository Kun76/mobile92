//vue表单验证

// 1. 导入localize模块函数
import { extend, localize } from 'vee-validate'
// 导入全部的规则
import * as rules from 'vee-validate/dist/rules'

// 2.导入要使用的语言
import zhCN from 'vee-validate/dist/locale/zh_CN.json'

localize({
  // 对象成员简易赋值
  zhCN
})
localize('zhCN')

// 遍历、注册全部的规则
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
// 自定义校验规则
extend('phone', {
  validate: value => {
    const reg = /^1[3456789]\d{9}$/
    return reg.test(value)
  },
  message: '{_field_}格式不正确'
})