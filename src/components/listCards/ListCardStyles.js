import { White100 } from '../../constants/colors'

const ListCardStyles = (theme) => ({
  cardsBox: {
    backgroundColor: White100,
    borderRadius: '10px',
    marginLeft: '100px',
    marginRight: '100px',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      marginLeft: '-5pxpx',
      marginRight: '0px',
      padding: '0px',
    },
  },
  cardsBoxPlatform: {
    backgroundColor: '#ffffff',
    marginLeft: '50px',
    marginRight: '50px',
    padding: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '0px',
      marginRight: '0px',
      padding: '0px',
    },
  },
  card: {
    width: '25%',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
  cardPlatform: {
    width: '20%',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
})

export default ListCardStyles
