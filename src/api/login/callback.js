import axiosFetch from '../Axios'
import { jwtDecode } from 'jwt-decode'
import { initLocalStorage, setItem } from '../../utils/LocalStorageUtils'
import { setCookie } from '../../utils/CookieManager'

export async function exchangeCodeForToken(code) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + `login`,
      data: JSON.stringify({ code }),
    })
    if (response.statusCode === 200) {
      const data = response.responseData
      decodeToken(data.token)
    } else {
      console.error('Error during login:', await response.text())
    }
  } catch (error) {
    console.error('Error during login:', error)
  }
}

export async function decodeToken(token) {
  const decodedToken = verifyToken(token)
  console.log('Decoded token:', decodedToken)
  if (decodedToken) {
    setCookie('jwt', token, 3600)
    setCookie('profile', decodedToken, 3600)
    setItem('loggedIn', true)
    initLocalStorage()
    window.location.href = '/'
  } else {
    console.error('Invalid token signature')
  }
}

export function verifyToken(token) {
  try {
    const decoded = jwtDecode(token)
    return decoded
  } catch (error) {
    console.error('Error decoding JWT:', error)
    return null
  }
}
