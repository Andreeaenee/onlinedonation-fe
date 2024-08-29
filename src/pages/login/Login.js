import React from 'react'
import { useState } from 'react'
import WrapperPage from '../../components/WrapperPage'
import {
  Typography,
  Box,
  Link,
  Button,
  Divider,
  TextField,
  useMediaQuery,
} from '@mui/material'
import { White400, Black100, PersianPink } from '../../constants/colors'
import { GoogleIcon } from '../../assets/icons'
import LoginStyles from './LoginStyles'
import { useTheme } from '@mui/material/styles'
import MainButton from '../../components/MainButton'
import { loginUser } from '../../api/getUsers'
import CustomizedSnackbars from '../../components/SnackBar'
import { loginWithGoogle } from '../../api/login/login'

const Login = () => {
  const theme = useTheme()
  const classes = LoginStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorSnackbar, setErrorSnackbar] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
    setTimeout(() => {
      setOpenSnackBar(false)
    }, 3000)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password) => {
    return password.length >= 8
  }

  const handleLogInSubmit = async () => {
    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields.')
      }
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address.')
      }
      if (!validatePassword(password)) {
        throw new Error('Password must be at least 8 characters long.')
      }
      await loginUser(email, password)
    } catch (error) {
      let errorMessage
      switch (error.response?.status) {
        case 400:
          errorMessage = handleBadRequest(error.response.data)
          break
        default:
          errorMessage = error.message || 'Error posting user credentials.'
          break
      }
      setErrorSnackbar(errorMessage)
      handleOpenSnackBar()
    }
  }

  const handleBadRequest = (data) => {
    switch (data) {
      case 'Email not verified':
        return 'Email not verified. Please verify your email before logging in.'
      case `The registration process isn't complete yet`:
        return `The registration process isn't complete yet. Please complete the registration process before logging in.`
      case 'Invalid credentials':
        return 'Invalid credentials. Please check your email and password and try again.'
      case `The registration process isn't complete yet. Wait for the admin approval`:
        return `The registration process isn't complete yet. Wait for the admin approval.`
      default:
        return 'Error posting user credentials.'
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogInSubmit()
    }
  }

  return (
    <WrapperPage>
      <Box sx={classes.box}>
        <Box sx={classes.loginContainer}>
            <Typography sx={classes.header}>Sign in to HopeShare</Typography>
            <Button sx={classes.button} onClick={loginWithGoogle}>
              <Box sx={classes.buttonComponents}>
                <GoogleIcon width={'14px'} height={'14px'} />
                <Typography sx={classes.whiteTypo}>
                  Sign in with Google
                </Typography>
              </Box>
            </Button>
            <Box sx={classes.dividerBox}>
              <Divider sx={{ flexGrow: 1 }} />
              <Typography sx={{ margin: '0 10px', color: Black100 }}>
                Or
              </Typography>
              <Divider sx={{ flexGrow: 1 }} />
            </Box>
            <form onKeyPress={handleKeyPress}>
              <Box sx={classes.form}>
                <Typography sx={classes.label}>Email Address:</Typography>
                <TextField
                  type="text"
                  name="Email Address"
                  variant="outlined"
                  color="secondary"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  height="35px"
                  required
                  // error={error}
                  sx={classes.field}
                />
                <Box sx={classes.passwordBox}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography sx={classes.label}>Password:</Typography>
                    <Link
                      href="/login/reset-password"
                      sx={classes.forgotPassword}
                    >
                      Forgot password?
                    </Link>
                  </Box>

                  <TextField
                    type="password"
                    name="Password"
                    variant="outlined"
                    color="secondary"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    height="35px"
                    required
                    // error={error}
                    sx={classes.field}
                  />
                </Box>
                <Box sx={classes.signInButton}>
                  <MainButton
                    buttonText="Sign in"
                    onClick={handleLogInSubmit}
                    width={'100%'}
                    height={'35px'}
                    fontSize={14}
                    lineHeight={24}
                    borderRadius={'7px'}
                    backgroundColor={'#D83F6D'}
                    backgroundColorHover={PersianPink}
                    textColor={White400}
                    mobileStyles={{ height: '20px', marginTop: '15px' }}
                    mobileStylesText={{ fontSize: 12 }}
                  />
                </Box>

                <Box sx={classes.signupBox}>
                  <Typography sx={classes.notAMember}>
                    Not a member?{' '}
                  </Typography>
                  <Link href="/login/register" sx={classes.signupButton}>
                    Sign up now
                  </Link>
                </Box>
              </Box>
            </form>
        </Box>
        {errorSnackbar && (
          <CustomizedSnackbars
            openSnackBar={openSnackBar}
            setOpenSnackBar={handleOpenSnackBar}
            message={errorSnackbar}
            severity="error"
          />
        )}
      </Box>
    </WrapperPage>
  )
}

export default Login
