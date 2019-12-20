import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // Loading.open()
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      let result = response.data
      return result
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
