import axiosFetch from './Axios'

// Fetches the donations data from the server
export async function fetchDonationsData() {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url: 'http://localhost:3000/api/donations',
    })
    console.log('Response: ', response)
    return response
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
      url: `http://localhost:3000/api/donations/${donationId}`,
    })
    return response
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
      url: 'http://localhost:3000/api/donation',
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response
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
      url: `http://localhost:3000/api/donations/${donationId}`,
    })
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}
