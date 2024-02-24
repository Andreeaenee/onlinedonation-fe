import { White100, Wenge } from '../../constants/colors'

const NewDonationStyles = (theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: White100,
  },
  formBox: {
    marginTop: '50px',
    marginBottom: '50px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    marginTop: '50px',
    marginBottom: '50px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      margin: '0 10px',
      lineHeight: '30px',
    },
  },
  fieldTypo: {
    fontWeight: 'regular',
    marginLeft: '50px',
    marginBottom: '10px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '30px',
    },
  },
})

export default NewDonationStyles
