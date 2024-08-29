import { White400 } from '../../../constants/colors'

const styles = (theme) => ({
  chartCard: {
    width: '50%',
    height: '300px',
    backgroundColor: White400,
    borderRadius: '10px',
    marginTop: '30px',
    marginLeft: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  chartTitle: {
    textAlign: 'left',
    marginTop: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  chartBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
