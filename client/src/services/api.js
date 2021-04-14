import axios from 'axios'
import config from '@/config/config'

export default () => {
    return axios.create({
        baseURL: config.url
    })
}