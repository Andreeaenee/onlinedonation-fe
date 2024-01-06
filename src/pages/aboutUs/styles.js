import { Wenge, PersianPink } from '../../constants/colors'

const styles = (theme) => ({
  title: {
    margin: '200px 200px 0 50px',
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '55px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      margin: '0 10px',
      lineHeight: '30px',
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
      margin: '25px 5px',
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
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
    },
  },
  gridBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  gridTitle: {
    fontSize: '26px',
    fontWeight: 600,
    lineHeight: '55px',
    color: Wenge,
    marginLeft: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  gridText: {
    fontSize: '22px',
    fontWeight: 500,
    lineHeight: '46px',
    color: Wenge,
    marginRight: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '22px',
      marginTop: '10px',
      textAlign: 'center',
    },
  },
  verticalHr: {
    marginLeft: '20px',
    marginRight: '10px',
    borderLeft: '1.5px solid',
    borderColor: Wenge,
    alignSelf: 'stretch',
  },
  tabStyles: {
    width: '50%',
    maxWidth: 'none',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: PersianPink,
    textTransform: 'capitalize',
    fontSize: '18px',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  tabs: {
    width: '68%',
    marginLeft: '15%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '0%',
    },
  },
})

export default styles
