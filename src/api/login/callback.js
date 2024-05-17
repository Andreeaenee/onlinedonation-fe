import axiosFetch from '../Axios'
import { jwtDecode } from 'jwt-decode'
import { setItem } from '../../utils/LocalStorageUtils'

export async function exchangeCodeForToken(code) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + `login`,
      data: JSON.stringify({ code }),
    })
    if (response.statusCode === 200) {
      const data = response.responseData
      console.log('Data:', data)
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
    document.cookie = `jwt=${token}; path=/; max-age=3600; Secure`
    setItem('loggedIn', true)
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
