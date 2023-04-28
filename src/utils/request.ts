import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const service = axios.create()

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
    console.log(response)
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  }
)

export default service