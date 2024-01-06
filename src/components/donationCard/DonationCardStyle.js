import { Peach, Black400, Black100 } from '../../constants/colors'

const DonationCardStyles = (theme) => ({
  // list
  cardList: {
    marginLeft: '100px',
    marginRight: '100px',
    padding: '10px',
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
    transition: 'transform 0.3s ease-in-out', // Add a transition for smooth effect
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)', // Scale the card on hover
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
  },
  icon: {
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('md')]: {
      width: '60px',
      height: '60px',
    },
  },
  name: {
    fontWeight: 500,
    fontSize: '17px',
    textAlign: 'left',
  },
  photo: {
    width: '125px',
    height: '75px',
    borderRadius: '10px',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '150px',
      height: '100px',
      alignItems: 'right',
    },
  },
  title: {
    fontWeight: 500,
    color: Black400,
    fontSize: '18px',
    textAlign: 'left',
  },
  description: {
    fontWeight: 300,
    color: Black100,
    fontSize: '14px',
    textAlign: 'left',
  },
  date: {
    fontWeight: 500,
    color: Black400,
    fontSize: '16px',
    marginTop: 'auto',
    textAlign: 'left',
  },
})

export default DonationCardStyles
