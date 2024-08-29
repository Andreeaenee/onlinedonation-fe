import React from 'react'
import { useState } from 'react'
import WrapperPage from '../../../components/WrapperPage'
import {
  Typography,
  Grid,
  Box,
  TextField,
  useMediaQuery,
  Select,
  MenuItem,
} from '@mui/material'
import { White400, PersianPink } from '../../../constants/colors'
import LoginStyles from '../LoginStyles'
import { useTheme } from '@mui/material/styles'
import MainButton from '../../../components/MainButton'
import { organisationList } from '../utils'
import CustomizedSnackbars from '../../../components/SnackBar'
import { postUserCredentials } from '../../../api/getUsers'

const Registration = () => {
  const theme = useTheme()
  const classes = LoginStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [organisation, setOrganisation] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorSnackbar, setErrorSnackbar] = useState('')
  const [successSnackbar, setSuccessSnackbar] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
    setTimeout(() => {
      setOpenSnackBar(false)
    }, 3000)
  }

  const handleOrganisationChange = (event) => {
    setOrganisation(event.target.value)
  }

  const handleOrganisationId = (organisation) => {
    let organisationId
    switch (organisation) {
      case 'Ong':
        organisationId = 1
        break
      case 'Restaurant':
        organisationId = 2
        break
      default:
        organisationId = 0
        break
    }
    return organisationId
  }
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password) => {
    return password.length >= 8
  }

  const handleUserCredentialsSubmit = async () => {
    try {
      if (!organisation || !email || !password) {
        throw new Error('Please fill in all fields.')
      }
      if (!validateEmail(email)) {
        throw new Error('Please enter a valid email address.')
      }
      if (!validatePassword(password)) {
        throw new Error('Password must be at least 8 characters long.')
      }

      const formData = new FormData()
      formData.append('user_type_id', handleOrganisationId(organisation)) // 1 for Ong, 2 for Restaurant
      formData.append('email', email)
      formData.append('password', password)

      const response = await postUserCredentials(formData)

      if (response === 201) {
        setSuccessSnackbar(
          'User created successfully. Please verify your email.'
        )
        handleOpenSnackBar()
      } else {
        throw new Error('Unexpected response from server.')
      }
    } catch (error) {
      let errorMessage
      if (error.response && error.response.status === 400) {
        errorMessage = 'Email already exists. Please try another email.'
      } else {
        errorMessage = error.message || 'Error posting user credentials.'
      }
      setErrorSnackbar(errorMessage)
      handleOpenSnackBar()
    }
  }

  return (
    <WrapperPage>
      <Box sx={classes.box}>
        <Box sx={classes.loginContainer}>
          <Typography sx={{ ...classes.header, marginBottom: '25px' }}>
            Sign up to HopeShare
          </Typography>
          <form>
            <Box sx={classes.form}>
              <Typography sx={classes.label}>Choose Organisation:</Typography>
              <Select
                value={organisation}
                onChange={handleOrganisationChange}
                displayEmpty
                variant="outlined"
                fullWidth
                sx={{ ...classes.field, marginBottom: '10px' }}
              >
                <MenuItem value="" disabled>
                  Select an organisation
                </MenuItem>
                {organisationList.map((organisation, index) => (
                  <MenuItem value={organisation} key={index}>
                    {organisation}
                  </MenuItem>
                ))}
              </Select>
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
                  // error={error}
                  sx={classes.field}
                />
              </Box>
              <Box sx={classes.signInButton}>
                <MainButton
                  buttonText="Sign up"
                  onClick={handleUserCredentialsSubmit}
                  width={'100%'}
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
            </Box>
          </form>
        </Box>
      </Box>
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
    </WrapperPage>
  )
}

export default Registration
