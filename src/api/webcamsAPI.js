import axios from 'axios'
import webcamstravel from './webcamstravel'

export default axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
  headers: {
    'X-Mashape-Key': webcamstravel.key,
    'X-Mashape-Host': webcamstravel.host
  }
})
