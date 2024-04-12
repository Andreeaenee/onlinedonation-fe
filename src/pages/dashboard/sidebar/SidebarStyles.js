import { MountbattenPink, White400 } from '../../../constants/colors'

const SidebarStyles = (theme) => ({
  sidebar: {
    backgroundColor: MountbattenPink,
    width: '200px',
    height: '831px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 5,
  },
  mobileSidebar: {
    backgroundColor: MountbattenPink,
    width: '50px',
    height: '831px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 5,
  },
  button: {
    marginBottom: 2,
    width: '80%',
    textAlign: 'left',
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: White400,
      color: MountbattenPink,
    },
    //for mobile view
    [theme.breakpoints.down('md')]: {
      marginLeft: '5px',
      minWidth: '0px',
    },
  },
  buttonName: {
    textTransform: 'none',
    fontWeight: 'medium',
    fontSize: '16px',
  },
})

export default SidebarStyles
