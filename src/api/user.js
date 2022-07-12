import request from '../utils/request'

// 获取登录的接口
const login = (data) => {
  return request({
    url: '/login?username=' + data.username + '&password=' + data.password + '&code=' + data.code + '&token=' + data.token,
    method: 'POST',
    data
  })
}

// 获取验证码的接口
const getCaptcha = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}

export default {
  login,
  getCaptcha
}
