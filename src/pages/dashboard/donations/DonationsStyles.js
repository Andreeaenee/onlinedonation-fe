import { MountbattenPink, Black400 } from '../../../constants/colors'

const DonationsRestPageStyles = (theme) => ({
  filterGrid: {
    border: '0.8px solid',
    borderColor: MountbattenPink,
    width: '200px',
    height: '40px',
    padding: '3px',
    borderRadius: '10px',
    margin: '30px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '150px',
      height: '38px',
      marginTop: '28px',
    },
  },
  gridButton: {
    display: 'flex',
    padding: '0px',
    marginTop: '4px',
    marginLeft: '2px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5px',
    },
  },
  gridTypo: {
    marginLeft: '5px',
    textTransform: 'capitalize',
    fontWeight: 400,
    fontSize: '16px',
    color: Black400,
    [theme.breakpoints.down('md')]: {
      marginLeft: '2px',
      fontSize: '14px',
    },
  },
})

export default DonationsRestPageStyles
