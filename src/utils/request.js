import axios from 'axios';

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://zh.9yuecloud.com/api',
  timeout: 5000
})

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
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 请求参数的问题
const request = (options) => {
  options.params = options.method.toLowerCase() === 'get' ? options.data : {}
  return service(options)
}

export default request
