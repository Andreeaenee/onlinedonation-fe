import { Peach, Black400, Black100 } from '../../constants/colors';

const DonationCardStyles = (theme) => ({
  // list
  cardList: {
    marginLeft: '50px',
    marginRight: '50px',
    padding: '0px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      width: '50%',
      marginLeft: '20px',
      marginRight: '0px',
      padding: '10px',
    },
  },
  // card
  card: {
    width: '300px',
    height: '200px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
    borderColor: Peach,
    border: `1px solid ${Peach}`,
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down('md')]: {
      width: '400px',
      marginLeft: '0px',
      marginRight: '0px',
      padding: '10px',
    },
  },
  imagesBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('md')]: {
      width: '60px',
      height: '60px',
    },
  },
  nameBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
  name: {
    fontWeight: 500,
    fontSize: '17px',
    textAlign: 'left',
  },
  photoContainer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  photo: {
    width: '80px',
    height: '80px',
    borderRadius: '12px',
    marginLeft: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    color: Black400,
    fontSize: '18px',
    textAlign: 'left',
  },
  description: {
    fontWeight: 400,
    color: Black100,
    fontSize: '14px',
    textAlign: 'left',
  },
  date: {
    fontWeight: 500,
    color: Black400,
    fontSize: '16px',
    textAlign: 'left',
  },
  // row card
  rowCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 24px',
    borderBottom: '1px solid #e0e0e0',
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    marginBottom: '16px',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  imagesBox: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: '8px',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: '12px',
    marginLeft: theme.spacing(2),
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: theme.palette.text.primary,
    textAlign: 'left',
    marginRight: theme.spacing(2),
  },
  description: {
    fontSize: 16,
    color: theme.palette.text.secondary,
    textAlign: 'left',
    marginRight: theme.spacing(2),
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  name: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
  },
});

export default DonationCardStyles;
