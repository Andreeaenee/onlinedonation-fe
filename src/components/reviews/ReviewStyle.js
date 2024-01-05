import { Wenge } from '../../constants/colors'

const ReviewStyles = (theme) => ({
  horHr: {
    borderTop: '1px solid',
    borderColor: Wenge,
    width: '100%',
    maxWidth: '800px',
    margin: '20px auto',
    cursor: 'pointer',
  },
  avatar: {
    width: '70px',
    height: '70px',
  },
  name: {
    fontSize: '20px',
    fontWeight: 800,
    lineHeight: '20px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      marginRight: '0px',
    },
  },
  date: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    color: Wenge,
    marginTop: '-20px',
    marginRight: '30px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      marginRight: '0px',
    },
  },
  review: {
    maxWidth: '50ch',
    wordWrap: 'break-word',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    color: Wenge,
    marginTop: '30px',
    marginBottom: '50px',
    alignSelf: 'center',
    marginX: 'auto',
  },
})

export default ReviewStyles
