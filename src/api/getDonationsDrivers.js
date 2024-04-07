import axiosFetch from './Axios'

// Posts the donation drivers data to the server
export async function postDonationDriversData(donation_id, data) {
  try {
    const response = await axiosFetch({
      method: 'POST',
      url: process.env.REACT_APP_API_PORT + `donations/${donation_id}/drivers`,
      data: data,
    })

    return response.statusCode
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}
