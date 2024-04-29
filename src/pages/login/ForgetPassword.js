import React from 'react'
import { useState } from 'react'
import { Typography, Box, Button, TextField } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import LoginStyles from './LoginStyles'
import MainButton from '../../components/MainButton'
import { White400, PersianPink } from '../../constants/colors'
import CustomizedSnackbars from '../../components/SnackBar'
import { forgetPassword, resetPassword } from '../../api/getUsers'
import { setItem, getItem } from '../../utils/LocalStorageUtils'
import { set } from 'date-fns'

const ForgetPassword = () => {
  const theme = useTheme()
  const classes = LoginStyles(theme)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorSnackbar, setErrorSnackbar] = useState('')
  const [successSnackbar, setSuccessSnackbar] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [error, setError] = useState(false)
  //check if the current route has email-verified in the path
  const isEmailVerified = window.location.pathname.includes('email-verified')

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
  }

  const validatePassword = (password) => {
    return password.length >= 8
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleResetPassword = async () => {
    let email = getItem('email')
    try {
      if (!password || !confirmPassword) {
        throw new Error('Please fill in all fields.')
      }
      if (!validatePassword(password)) {
        throw new Error('Password must be at least 8 characters long.')
      }
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match.')
      }
      const response = await resetPassword({ password, email })
      if (response.statusCode === 200) {
        window.location.href = '/login'
      }
    } catch (error) {
      console.error(error)
      setError(true)
      setErrorSnackbar(error.message)
      handleOpenSnackBar()
    }
  }

  const handleForgotPasswordSubmit = async () => {
    try {
      if (!email) {
        throw new Error('Please fill in all fields.')
      }
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address.')
      }
      let storedEmail = getItem('email')
      if (!storedEmail) {
        setItem('email', email)
      }
      const response = await forgetPassword({ email })
      console.log('Response', response)
      if (response === 200) {
        setSuccessSnackbar('Email sent successfully. Please check your inbox.')
        handleOpenSnackBar()
      }
    } catch (error) {
      console.error(error)
      setError(true)
      setErrorSnackbar(error.message)
      setSuccessSnackbar('')
      handleOpenSnackBar()
    }
  }

  return (
    <Box
      sx={{
        ...classes.loginContainer,
        ...classes.forgotPasswordContainer,
      }}
    >
      <Typography sx={{ ...classes.typoFont20, textAlign: 'center' }}>
        {isEmailVerified
          ? 'Enter the new password'
          : "Enter your email and we'll send you a link to reset your password"}
      </Typography>
      <form
        style={{
          ...classes.form,
          alignItems: 'center',
          marginTop: '20px',
          width: '100%',
        }}
      >
        <Box sx={{ ...classes.fieldContainer, alignContent: 'center' }}>
          {isEmailVerified ? (
            <>
              <Typography sx={classes.label}>Password:</Typography>
              <TextField
                type="password"
                name="Password"
                variant="outlined"
                color="secondary"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                height="35px"
                required
                error={error}
                sx={classes.field}
              />
              <Typography sx={classes.label}>Confirm Password:</Typography>
              <TextField
                type="password"
                name="Confirm Password"
                variant="outlined"
                color="secondary"
                onChange={(event) => setConfirmPassword(event.target.value)}
                value={confirmPassword}
                height="35px"
                required
                error={error}
                sx={classes.field}
              />
            </>
          ) : (
            <>
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
                error={error}
                sx={classes.field}
              />
            </>
          )}
        </Box>
        <Box sx={{ alignContent: 'center' }}>
          <MainButton
            buttonText={isEmailVerified ? 'Reset Pass' : 'Send Link'}
            onClick={
              isEmailVerified ? handleResetPassword : handleForgotPasswordSubmit
            }
            width={'230px'}
            height={'35px'}
            fontSize={14}
            lineHeight={24}
            marginTop={'20px'}
            borderRadius={'7px'}
            backgroundColor={'#D83F6D'}
            backgroundColorHover={PersianPink}
            textColor={White400}
            mobileStyles={{ height: '20px', marginTop: '15px' }}
            mobileStylesText={{ fontSize: 12 }}
          />
        </Box>
      </form>
      {errorSnackbar && (
        <CustomizedSnackbars
          openSnackBar={openSnackBar}
          setOpenSnackBar={handleOpenSnackBar}
          message={errorSnackbar}
          severity="error"
        />
      )}
      {successSnackbar && (
        <CustomizedSnackbars
          openSnackBar={openSnackBar}
          setOpenSnackBar={handleOpenSnackBar}
          message={successSnackbar}
          severity="success"
        />
      )}
    </Box>
  )
}

export default ForgetPassword
