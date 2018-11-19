import Axios from 'axios'
import {Message} from 'element-ui'
import config from '@/utils/reqConfig'

const service = Axios.create(config);

service.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
    response => response,
    error => {
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    })

export default service
