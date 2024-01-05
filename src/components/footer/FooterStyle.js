import { Wenge } from '../../constants/colors'
const FooterStyle = (theme) => ({
  mainText: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 600,
    lineHeight: '55px',
    color: Wenge,
    marginTop: '10px',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
    },
  },
  smallText: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '45px',
    color: Wenge,
    marginTop: '10px',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
      margin: '15px 10px',
      lineHeight: '20px',
    },
  },
})

export default FooterStyle
