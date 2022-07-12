import axios from 'axios';
import { Message } from 'element-ui';
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://zh.9yuecloud.com/api',
  timeout: 5000
})

// 定义错误信息提示
const exceptionMessage = {
  1: '系统异常'
}

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  if (response.data.code === 200) {
    return response.data.data
  }
  _showErrorMessage(response.data.code, response.data.msg)
}, function (error) {
  return Promise.reject(error);
});

// 错误消息提示
const _showErrorMessage = (code, msg) => {
  const message = exceptionMessage[code] || msg || '未知错误'
  Message({ message, type: 'error' })
}

// 请求参数的问题
const request = (options) => {
  options.params = options.method.toLowerCase() === 'get' ? options.data : {}
  return service(options)
}

export default request
