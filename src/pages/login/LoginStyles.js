import {
  Black800,
  Wenge,
  White400,
  PersianPink,
  Black400,
  White100,
  MountbattenPink,
} from '../../constants/colors'
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
  //registration complete-information styles
  labelR: {
    fontWeight: 'regular',
    marginTop: '20px',
    marginLeft: '20px',
    marginBottom: '10px',
    fontSize: '18px',
    color: Wenge,
  },
  textFieldsProp: {
    mb: 2,
    margin: 'auto',
    marginTop: '5px',
    marginLeft: '3.2%',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginLeft: '10%',
    },
  },
  regBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
      padding: '5px',
    },
  },
  regBox1: {
    backgroundColor: White100,
    border: '1px solid',
    borderColor: MountbattenPink,
    width: '90%',
    height: '90vh',
    borderRadius: '10px',
    position: 'relative',
    padding: '20px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'auto',
    },
  },
  regBox2: {
    position: 'absolute',
    top: '20px',
    left: '10px',
    width: '35%',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      width: '100%',
    },
  },
  regBox3: {
    position: 'absolute',
    left: '36%',
    top: '2%',
    width: '60%',
    height: '40%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      alignItems: 'left',
      position: 'relative',
      width: '50%',
      height: 'auto',
      flexDirection: 'column',
      gap: '10px',
    },
  },
  regBox4: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '250px',
    height: '250px',
    backgroundColor: White100,
    border: '1px dashed',
    borderColor: Black400,
    borderRadius: '10px',
    cursor: 'pointer',
  },
  regBox5: {
    position: 'absolute',
    left: '36%',
    top: '62%',
    width: '60%',
    height: '30%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      flexDirection: 'column',
    },
  },
  regBox6: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#D83F6D',
    color: White100,
    borderRadius: '12px',
    cursor: 'pointer',
    border: 'none',
    padding: '12px 14px',
    gap: '8px',
    display: 'flex',
    marginLeft: '20px',
    marginTop: '0px',
  },
  regTitle: {
    fontSize: '22px',
    fontWeight: 'medium',
    color: Black400,
    textAlign: 'center',
  },
})

export default LoginStyles
