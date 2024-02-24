import axiosFetch from './Axios'

// Fetches the donations data from the server
export async function fetchDonationsData() {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url: 'http://localhost:3000/api/donations',
    })
    return response
  } catch (error) {
    console.log('Error: ', error)
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
