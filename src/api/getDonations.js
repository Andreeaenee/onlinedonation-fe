import axiosFetch from './Axios'

// Fetches the donations data from the server
export async function fetchDonationsData() {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url: process.env.REACT_APP_API_PORT+'donations',
    })
    return response.responseData
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

// Fetches the donation data by id from the server
export async function fetchDonationById(donationId) {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url: process.env.REACT_APP_API_PORT + `donations/${donationId}`,
    })
    return response.responseData
  } catch (error) {
    console.log('Error: ', error.response ? error.response : error.message)
    throw error
  }
}

// Posts the donation data to the server
export async function postDonationData(data) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + 'donation',
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

// Deletes the donation data from the server
export async function deleteDonationData(donationId) {
  try {
    const response = await axiosFetch({
      method: 'DELETE',
      url: process.env.REACT_APP_API_PORT + `donations/${donationId}`,
    })
    return response.statusCode
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

//Updates the donation data on the server with the address and ong_id
export async function updateDonationData(donationId, data) {
  try {
    const response = await axiosFetch({
      method: 'PUT',
      url: process.env.REACT_APP_API_PORT + `donations/${donationId}`,
      data: data,
    })
    return response.statusCode
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}
