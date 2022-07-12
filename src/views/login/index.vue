<template>
  <div class="title_bgc">
    <h1>智慧服务平台</h1>

    <div class="Navlist">
      <h2>欢迎登录</h2>
      <el-form ref="form" :rules="rules" :model="loginform">
        <el-form-item prop="username">
          <el-input
            v-model.tirm="loginform.username"
            placeholder="请输入用户信息"
            class="el-icon-user-solid"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="password"
            v-model.tirm="loginform.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <div class="viercode">
            <el-input
              v-model.tirm="loginform.code"
              placeholder="请输入验证码"
            ></el-input>
            <el-image :src="codeImageUrl" @click="codeSelect" />
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleverifyForm"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <p>© 2022 浙ICP备16028135号-1 All Rights Reserved | DUCK</p>
  </div>
</template>

<script>
import UserApi from '@/api/user'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      codeImageUrl: '',

      loginform: {
        username: 'duck',
        password: 'admin888',
        code: '',
        token: ''
      },

      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 效验功能
    handleverifyForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleLoginSubmit()
        }
      })
    },

    codeSelect () {
      this.handleGetCaptcha()
    },

    // 获取验证码接口
    async handleGetCaptcha () {
      const { captchaImg, token } = await UserApi.getCaptcha()
      this.codeImageUrl = captchaImg
      this.loginform.token = token
    },

    // 登录提交的
    async handleLoginSubmit () {
      this.login(this.loginform)
      this.$router.push('/')
    },
    ...mapActions({
      login: 'user/login'
    })
  }, // 方法
  computed: {}, // 计算
  created () {
    this.handleGetCaptcha()
  }, // 实例创建后
  mounted () {} // 组件挂载后
}
</script>
<style lang="scss" scoped>
.title_bgc {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Verdana;
  background: url(../img/bg.970bc3a9.jpg) no-repeat 0 0;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-top: 50px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: normal;
}
h2 {
  font-size: 30px;
  color: #fff;
  margin-bottom: 30px;
}
.Navlist {
  margin: 8% auto 13%;
  width: 20%;
}
.el-image {
  width: 200px;
  height: 40px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
}
.el-form-item {
  margin-bottom: 50px;
}
.el-button {
  width: 100%;
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.viercode {
  display: flex;
  align-items: center;
}
p {
  font-size: 14px;
  line-height: 25px;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
}
</style>
