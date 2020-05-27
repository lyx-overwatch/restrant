import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: '', // api的base_url
  timeout: 10000 // 请求超时时间
})
service.interceptors.request.use(// request拦截器
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(// respone拦截器
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
