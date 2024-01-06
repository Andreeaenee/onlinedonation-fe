import { MountbattenPink, Black400, Wenge } from '../../constants/colors'

const PlatformStyles = (theme) => ({
  // filtering and sorting buttons
  filterGrid: {
    border: '0.8px solid',
    borderColor: MountbattenPink,
    width: '250px',
    height: '50px',
    padding: '0px',
    borderRadius: '10px',
    margin: '50px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '150px',
      height: '50px',
      margin: '20px',
    },
  },
  gridButton: {
    display: 'flex',
    padding: '0px',
    marginTop: '12px',
    marginLeft: '15px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5px',
    },
  },
  gridTypo: {
    marginLeft: '5px',
    textTransform: 'capitalize',
    fontWeight: 400,
    fontSize: '18px',
    color: Black400,
    [theme.breakpoints.down('md')]: {
      marginLeft: '2px',
      fontSize: '14px',
    },
  },
  mainText: {
    textAlign: 'left',
    fontSize: '28px',
    fontWeight: 400,
    lineHeight: '55px',
    color: Wenge,
    marginTop: '0px',
    marginBottom: '20px',
    marginLeft: '100px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      marginLeft: '50px',
    },
  },
})

export default PlatformStyles
