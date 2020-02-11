<template>
  <div class="user-login">
    <van-nav-bar title="登录"></van-nav-bar>
    <van-cell-group>
      <van-field
        v-model="loginForm.mobile"
        type="text"
        placeholder="请输入手机号码"
        label="手机号"
        required
        clearable
      />
      <van-field
        v-model="loginForm.code"
        type="password"
        placeholder="请输入验证码"
        label="验证码"
        required
        clearable
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button type="info" size="small" round block>登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-login",
  data() {
    return {
      loginForm: {
        mobile: "",
        code: ""
      }
    };
  }
};
</script>

<style scoped lang='less'>
.login-btn {
  margin: 40px;
}
</style>