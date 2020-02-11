<template>
  <div class="user-login">
    <van-nav-bar title="登录"></van-nav-bar>
    <van-cell-group>
      <ValidationObserver ref="loginFormRef">
        <ValidationProvider name="手机号" rules="required|phone" v-slot="{ errors }">
          <van-field
            v-model="loginForm.mobile"
            type="text"
            placeholder="请输入手机号码"
            label="手机号"
            required
            clearable
            :error-message="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider name="验证码" rules="required" v-slot="{ errors }">
          <van-field
            v-model="loginForm.code"
            type="password"
            placeholder="请输入验证码"
            label="验证码"
            required
            clearable
            :error-message="errors[0]"
          >
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </ValidationProvider>
      </ValidationObserver>
    </van-cell-group>
    <div class="login-btn">
      <van-button type="info" size="small" round block @click="login()">登录</van-button>
    </div>
  </div>
</template>

<script>
import { apiUserLogin } from "@/api/user.js";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "user-login",
  components: {
    // 注册
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      loginForm: {
        mobile: "13911111111",
        code: "246810"
      }
    };
  },
  methods: {
    async login() {
      // 对表单全部项目做校验，没有问题再向下执行
      // ValidationObserver
      // validate()返回promise对象
      // valid=true  校验成功    valid=false  校验失败
      const valid = await this.$refs.loginFormRef.validate();
      if (!valid) {
        return false;
      }
      try {
        // 执行封装好的axios的方法
        const result = await apiUserLogin(this.loginForm);
        //通过vuex维护好服务器端返回的token
        this.$store.commit("updateUser", result);
        // 登录成功提示
        this.$toast.success("登录成功");
        // 页面跳转到首页
        this.$router.push("/");
      } catch (error) {
        // 登录错误提示
        this.$toast.fail("手机号或验证码错误" + error);
      }
    }
  }
};
</script>

<style scoped lang='less'>
.login-btn {
  margin: 40px;
}
</style>