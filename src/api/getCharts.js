import axiosFetch from './Axios'

export async function getChartStatusData(id) {
  try {
    const response = await axiosFetch({
      method: 'GET',
      url: process.env.REACT_APP_API_PORT + 'users/status/' + id,
    })
    return response.responseData
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}

export async function getTodaysDonations() {
  try {
    const response = await axiosFetch({
      url: process.env.REACT_APP_API_PORT + 'donations/chartCount',
    })
    return response.responseData
  } catch (error) {
    console.log('Error: ', error)
    throw error
  }
}
