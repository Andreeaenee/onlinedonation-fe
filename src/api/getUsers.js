import axiosFetch from './Axios'
import { decodeToken } from './login/callback'

// Posts the user credentials to the server
export async function postUserCredentials(data) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + 'users/credentials',
      data: data,
    })
    return response.statusCode
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

// register user
export async function registerUser(data) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + 'users/register',
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
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
        'users/login?email=' +
        email +
        '&password=' +
        password,
    })
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
      url: process.env.REACT_APP_API_PORT + 'users/forgot-password',
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
      url: process.env.REACT_APP_API_PORT + 'users/reset-password',
      data: data,
    })
    return response
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

// get user email
export async function getUserEmail(id) {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url: process.env.REACT_APP_API_PORT + 'users/email/' + id,
    })
    return response
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

//get all users
export async function getUsers(filter, filterId) {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url:
        process.env.REACT_APP_API_PORT +
        'users?filter=' +
        filter +
        '&filterId=' +
        filterId,
    })
    return response.responseData
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

//get user by id
export async function getUserById(id) {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url: process.env.REACT_APP_API_PORT + 'users/' + id,
    })
    return response.responseData
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

//update user's status
export async function updateUser(data) {
  try {
    const response = await axiosFetch({
      method: 'PUT',
      url: process.env.REACT_APP_API_PORT + 'users/status',
      data: data,
    })
    return response.responseData
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

export async function updateUserProfile(id, data, isLogoFileFormat) {
  try {
    const response = await axiosFetch({
      method: 'PUT',
      url: process.env.REACT_APP_API_PORT + `users/${id}`,
      data: data,
      headers: {
        'Content-Type': isLogoFileFormat
          ? 'multipart/form-data'
          : 'application/json',
      },
    })
    return response.statusCode
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

export async function getUsersToday() {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url: process.env.REACT_APP_API_PORT + 'users/today',
    })
    return response.responseData
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

export async function deleteUser(id) {
  try {
    const response = await axiosFetch({
      method: 'DELETE',
      url: process.env.REACT_APP_API_PORT + 'users/' + id,
    })
    return response.statusCode
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}
