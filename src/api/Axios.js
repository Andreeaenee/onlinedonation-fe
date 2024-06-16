import axios from 'axios'
import { getCookie } from '../utils/CookieManager'

export default function axiosFetch(options) {
  // get jwt from cookie
  let cookie = document.cookie
  let jwt = ''
  if (cookie) {
    jwt = getCookie('jwt');
  }

  if (!options.headers) {
    options.headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: 'Bearer ' + jwt,
    }
  }
  else {
    options.headers = {
      ...options.headers,
      Authorization: 'Bearer ' + jwt,
    }
  }

  if (!options.method) {
    options.method = 'get'
  }

  return axios(options)
    .then((response) => {
      if (response.status === 401) {
        window.location.href = '/login'
      }
      return { statusCode: response.status, responseData: response.data }
    })
    .catch((error) => {
      console.error('Error:', error)
      throw error
    })
}
