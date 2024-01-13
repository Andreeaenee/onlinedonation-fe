import { Wenge } from '../../constants/colors'

const MainCardStyles = (theme) => ({
  card: {
    width: '250px',
    height: '350px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
    margin: '0px 20px 20px 20px',
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out', 
    '&:hover': {
      transform: 'scale(1.1)', 
    },
    [theme.breakpoints.down('md')]: {
      width: '200px',
      height: '275px',
    },
  },
  avatar: {
    width: '80px',
    height: '80px',
    alignContent: 'center',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      width: '60px',
      height: '60px',
    },
  },
  imageBox: {
    width: '225px',
    height: '125px',
    alignContent: 'center',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      width: '200px',
      height: '100px',
    },
  },
  title: {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '46px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
})

export default MainCardStyles
