import axios from 'axios'
import repository from './index.js'

export default {
  getSponsoredChildrenDisplay (apiRoute) {
    return axios.get(repository.url() + apiRoute, {
      headers: repository.header()
    })
  }
}
