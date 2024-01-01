import { Wenge } from '../../constants/colors'

const styles = (theme) => ({
  title: {
    margin: '200px 200px 0 50px',
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '55px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      margin: '0 10px',
      lineHeight: '20px',
    },
  },
  smallText: {
    margin: '10px 200px 0 55px',
    fontSize: '26px',
    fontWeight: 550,
    lineHeight: '45px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      margin: '15px 10px',
      lineHeight: '20px',
    },
  },
  typoBox: {
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  },
  mainText: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '55px',
    color: Wenge,
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
    },
  },
})

export default styles
