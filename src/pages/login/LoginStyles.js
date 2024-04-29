import { Black800, Wenge, White400, PersianPink, Black400 } from '../../constants/colors'
import { FormField } from '../../utils/FormField'

const LoginStyles = (theme) => ({
  loginContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1000px',
    height: '550px',
    borderTop: '1px dashed #e0e0e0',
    borderBottom: '1px dashed #e0e0e0',
    borderRight: '1px dashed #e0e0e0',
    margin: 'auto',
    marginTop: '50px',
  },
  signupBox: {
    display: 'flex',
    justifyContent: 'right',
  },
  notAMember: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.75,
    padding: '10px',
    paddingRight: 'unset',
    color: Black800,
  },
  signupButton: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.75,
    padding: '10px',
    color: '#A160FF',
  },
  signinContainer: {
    height: '90%',
    width: '100%',
    marginTop: '20px',
  },
  header: {
    textAlign: 'left',
    marginTop: '100px',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.25,
    padding: '5px',
    color: Black800,
  },
  button: {
    width: '90%',
    height: '35px',
    backgroundColor: '#447CEC',
    marginTop: '10px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#2864DD',
    },
  },
  buttonComponents: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteTypo: {
    marginLeft: '15px',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: 1.75,
    color: White400,
  },
  dividerBox: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
    width: '90%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  label: {
    fontWeight: 500,
    marginBottom: '5px',
    fontSize: '14px',
    color: Wenge,
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '30px',
    },
  },
  field: {
    height: '35px',
    ...FormField.field,
    '& .MuiOutlinedInput-root': {
      height: '35px',
      borderRadius: '5px',
      '&:hover fieldset': {
        borderColor: PersianPink,
        borderRadius: '5px',
      },
    },
  },
  passwordBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    marginTop: '20px',
  },
  forgotPassword: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.75,
    color: '#A160FF',
  },
  boxCenterPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
  },
  typoFont20: {
    fontSize: '20px',
    color: Black800,
    lineHeight: 1.75,
    fontWeight: 500,
  },
  typoFont16ColorBlack400: {
    fontSize: '16px',
    color: Black400,
    lineHeight: 1.75,
    fontWeight: 400,
  },
  // forget password styles
  forgotPasswordContainer: {
    flexDirection: 'column',
    height: '225px',
    display: 'block',
    width: '600px',
    borderLeft: '1px dashed #e0e0e0',
    padding: '30px',
    alignContent: 'flex-start',
  },
  
})

export default LoginStyles
