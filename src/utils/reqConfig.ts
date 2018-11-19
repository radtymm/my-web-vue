import {AxiosRequestConfig} from "axios";
import qs from 'qs'

const AxiosConfig: AxiosRequestConfig = {
  baseURL: '',
  paramsSerializer: (params: any) => {
    return qs.stringify(params, {arrayFormat: 'brackets'})
  },
  timeout: 5000,
  withCredentials: false,
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxRedirects: 5,
  maxContentLength: 2000,
  validateStatus: (status: number) => {
    return status >= 200 && status < 500
  }
}

export default AxiosConfig
