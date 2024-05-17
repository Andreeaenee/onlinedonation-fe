import axiosFetch from './Axios'
import { decodeToken } from './login/callback'

// Posts the user credentials to the server
export async function postUserCredentials(data) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + 'user/credentials',
      data: data,
    })
    return response.statusCode
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

// login user
export async function loginUser(email, password) {
  console.log('Data', email, password)
  try {
    const response = await axiosFetch({
      method: 'GET',
      url:
        process.env.REACT_APP_API_PORT +
        'user/login?email=' +
        email +
        '&password=' +
        password,
    })
    console.log('Response Login:', response)
    if (response.statusCode === 200) {
      decodeToken(response.responseData.token)
    }
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

// forget password
export async function forgetPassword(data) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + 'user/forgot-password',
      data: data,
    })
    return response.statusCode
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

// reset password
export async function resetPassword(data) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + 'user/reset-password',
      data: data,
    })
    return response
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}
