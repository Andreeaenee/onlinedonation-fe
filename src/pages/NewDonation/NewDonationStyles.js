import {
  White100,
  Wenge,
  PersianPink,
  MountbattenPink,
} from '../../constants/colors'

const NewDonationStyles = (theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: White100,
  },
  formBox: {
    marginTop: '50px',
    marginBottom: '50px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    marginTop: '50px',
    marginBottom: '50px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      margin: '0 10px',
      lineHeight: '30px',
    },
  },
  fieldTypo: {
    fontWeight: 'regular',
    marginTop: '20px',
    marginLeft: '50px',
    marginBottom: '10px',
    fontSize: '20px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '30px',
    },
  },
  demoContainer: {
    marginLeft: '50px',
    width: '80%',
    height: '80%',
  },
  timePicker: {
    '& .MuiSvgIcon-root': {
      color: PersianPink,
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: PersianPink,
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: MountbattenPink,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: MountbattenPink,
    },
  },
  labelPhoto: {
    display: 'inline-block',
    width: '100%',
  },
  uploadPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '88%',
    height: '100%',
    backgroundColor: PersianPink,
    color: White100,
    borderRadius: '12px',
    cursor: 'pointer',
    border: 'none',
    padding: '12px 14px',
    gap: '8px',
    
  },
  spanPhoto: {
    fontSize: '20px',
    lineHeight: '24px',
    marginLeft: '10px',
  },
  divPhoto: {
    display: 'flex',
    marginLeft: '50px',
    marginTop: '20px',
  },
  switch:{
    marginLeft: '50px',
    marginTop: '10px',
    color: Wenge,
    fontSize: '14px',
    marginBottom: '10px',
  }
})

export default NewDonationStyles
