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
