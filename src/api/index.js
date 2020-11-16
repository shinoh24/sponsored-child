import axios from 'axios'

export default {
  url () {
    axios.default.baseURL = process.env.VUE_APP_API
    return axios.default.baseURL
  },

  header () {
    return {
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
}
