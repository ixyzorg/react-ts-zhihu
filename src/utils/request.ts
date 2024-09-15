import axios from 'axios'
import { Toast } from 'antd-mobile'
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    Toast.show({
      content: '网络异常,请稍后再试',
      duration: 2,
      icon:'fail'
    })
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    let message
    switch (error.response.status) {
      case 401:
        message = '授权令牌过期,请重新登录'
        break
      case 403:
        message = '权限不够,拒绝访问'
        break
      case 404:
        message = '请求地址不存在'
        break
      case 500:
        message = '服务器异常,请稍后再试'
        break
      default:
        message = '网络异常,请联系管理员'
        break
    }
    Toast.show({
      content: message,
      duration: 2,
      icon:'fail'
    })
    return Promise.reject(error)
  }
)

export default instance
