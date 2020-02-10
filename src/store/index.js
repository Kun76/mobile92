import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// localStorage 存储用户信息的key名称，统一设置，方便后续使用
const USER_KEY = 'hm-toutiao-m-user'

export default new Vuex.Store({
  state: {
    // 通过 || 设定，如果localStorage没有数据，就返回{}空对象.必须使用字符串,负责parse报错
    user: JSON.parse(localStorage.getItem(USER_KEY) || "{}")
  },
  mutations: {
    //修改更新数据
    updateUser(state, data) {
      // vuex获取更新,使得拥有响应式
      state.user = data
      // localStorage做持久更新
      localStorage.setItem(USER_KEY, JSON.stringify(data))
    },
    clearUser(state) {
      // 1. vuex做清除，使得有响应式
      state.user = {}
      // 2. localStorage做持久清除
      localStorage.removeItem(USER_KEY)

    }
  },
  actions: {
  },
  modules: {
  }
})
