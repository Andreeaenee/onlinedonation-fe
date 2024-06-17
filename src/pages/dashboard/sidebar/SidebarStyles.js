import { MountbattenPink, White400, White100, Black400 } from '../../../constants/colors';

const SidebarStyles = (theme) => ({
  sidebar: {
    backgroundColor: MountbattenPink,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 5,
    overflowY: 'auto',
    position: 'relative',
  },
  mobileSidebar: {
    backgroundColor: MountbattenPink,
    width: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 5,
    overflowY: 'auto',
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
    [theme.breakpoints.down('md')]: {
      marginLeft: '5px',
      minWidth: '0px',
    },
  },
  buttonExpanded: {
    marginBottom: 2,
    width: '80%',
    textAlign: 'center', // Center the icon when sidebar is collapsed
    justifyContent: 'center', // Center the icon when sidebar is collapsed
    '&:hover': {
      backgroundColor: White400,
      color: MountbattenPink,
    },
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
  toggleButton: {
    position: 'sticky',
    top: '20px',
    marginLeft: 'auto',
    marginRight: '10px',
    minWidth: '3px',  // Smaller width
    minHeight: '3px',  // Smaller height
    padding: '1px',  // Reduced padding
    backgroundColor: MountbattenPink,
    color: White100,
    '&:hover': {
      backgroundColor: White400,
      color: Black400,
    },
  },
});

export default SidebarStyles;
