import axios from 'axios'
import { getItem } from '../utils/LocalStorageUtils'

export default function axiosFetch(options) {
  // get jwt from cookie
  const loggedIn = getItem('loggedIn')
  let jwt = ''
  if (loggedIn) {
    jwt = document.cookie
      .split('; ')
      .find((row) => row.startsWith('jwt='))
      .split('=')[1]
    console.log('JWT:', jwt)
  }


  if (!options.headers) {
    options.headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: 'Bearer ' + jwt,
    }
  }

  if (!options.method) {
    options.method = 'get'
  }

  return axios(options)
    .then((response) => {
      return { statusCode: response.status, responseData: response.data }
    })
    .catch((error) => {
      console.error('Error:', error)

      throw error
    })
}
