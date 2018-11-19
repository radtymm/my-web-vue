import request from '@/utils/request'
import * as Interface from './interface'

const Test = {
    actions: {
        // post 请求示例
        testPost({}, params: Interface.testParams) {
            return request.post(`/test`, params)
        },
        // get 请求示例
        testGet({}, params: Interface.testParams) {
            return request.get(`/test/${params}`)
        },
    }
}

export default Test
 