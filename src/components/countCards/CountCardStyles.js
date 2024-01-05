import { White100 } from '../../constants/colors'

const CountCardStyles = (theme) => ({
  countCard: {
    width: '500px',
    height: '150px',
    borderRadius: '10px',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  title: {
    color: White100,
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '46px',
    padding: '10px',
    marginLeft: '25px',
  },
  number: {
    color: White100,
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '46px',
    textAlign: 'center',
    marginTop: '10px',
  },
  icon: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: '20px',
    marginTop: '-30px',
  },
})
export default CountCardStyles
