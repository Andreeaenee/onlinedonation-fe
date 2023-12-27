import { White100, Black400, Black800 } from '../../constants/colors'

const NavbBarStyles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
    width: '100%',
    backgroundColor: '#ffffff',
    position: 'relative',
    zIndex: 1000,
  },
  logoBox: {
    marginLeft: '25px',
    display: 'flex',
    alignItems: 'center',
  },
  buttonsBox: {
    marginRight: '40px',
    display: 'flex',
    alignItems: 'center',
  },
  drawer: {
    width: '200px',
    paddingTop: '20px',
    backgroundColor: White100,
  },
  button: {
    width: '100px',
    textTransform: 'capitalize',
    marginBottom: '10px',
    fontWeight: 'normal',
    cursor: 'pointer',
    marginRight: '20px',
  },
  buttonHover: {
    '&:hover': {
      //   fontSize: '22px',
      color: Black800,
      backgroundColor: '#ffffff',
    },
  },
  hr: {
    width: 'auto',
    color: Black400,
    marginTop: '5px',
  },
  divHr: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export default NavbBarStyles
