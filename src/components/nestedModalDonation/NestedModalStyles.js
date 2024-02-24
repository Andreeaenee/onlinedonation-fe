import { Black100, Black400, White100 } from '../../constants/colors'

const NestedModalStyles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagesBox: {
    width: '700px',
    backgroundColor: White100,
    alignItems: 'center',
    borderRadius: '10px',
    transition: 'height 0.3s ease',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  title: {
    fontWeight: 500,
    color: Black400,
    fontSize: '24px',
    textAlign: 'left',
    padding: '30px',
    transition: 'color 0.3s ease',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      padding: '15px',
    },
  },
  description: {
    fontWeight: 300,
    color: Black100,
    fontSize: '16px',
    textAlign: 'left',
    padding: '20px',
    transition: 'color 0.3s ease',
    marginLeft: '20px',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      padding: '5px',
    },
  },
  date: {
    fontWeight: 600,
    color: Black400,
    fontSize: '16px',
    marginTop: 'auto',
    textAlign: 'left',
    padding: '15px',
    transition: 'color 0.3s ease',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      padding: '5px',
    },
  },
  interval: {
    fontWeight: 500,
    color: Black400,
    fontSize: '18px',
    marginTop: 'auto',
    textAlign: 'left',
    padding: '15px',
    transition: 'color 0.3s ease',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      padding: '5px',
    },
  },
  avatar: {
    width: '100%',
    height: '350px',
    borderRadius: '10px',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      height: '150px',
    },
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    [theme.breakpoints.down('md')]: {
      padding: '5px',
    },
  },
  fieldTypo: {
    fontWeight: 500,
    color: Black400,
    fontSize: '16px',
    textAlign: 'left',
    padding: '20px',
    transition: 'color 0.3s ease',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      padding: '5px',
    },
  },
  tooltipTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 'regular',
    fontSize: '14px',
    color: White100,
    transition: 'background-color 0.3s, color 0.3s',
  },
})

export default NestedModalStyles
