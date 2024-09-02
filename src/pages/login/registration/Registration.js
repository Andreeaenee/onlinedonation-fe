import React from 'react'
import { useState } from 'react'
import WrapperPage from '../../../components/WrapperPage'
import { Typography, Box, TextField, Select, MenuItem } from '@mui/material'
import { White400, PersianPink } from '../../../constants/colors'
import LoginStyles from '../LoginStyles'
import { useTheme } from '@mui/material/styles'
import MainButton from '../../../components/MainButton'
import { organisationList } from '../utils'
import CustomizedSnackbars from '../../../components/SnackBar'
import { postUserCredentials } from '../../../api/getUsers'
import { useTranslation } from 'react-i18next'

const Registration = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = LoginStyles(theme)
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
        throw new Error(t('errorFillAllFields'))
      }
      if (!validateEmail(email)) {
        throw new Error(t('errorValidEmail'))
      }
      if (!validatePassword(password)) {
        throw new Error(t('errorValidPassword'))
      }

      const formData = new FormData()
      formData.append('user_type_id', handleOrganisationId(organisation)) // 1 for Ong, 2 for Restaurant
      formData.append('email', email)
      formData.append('password', password)

      const response = await postUserCredentials(formData)

      if (response === 201) {
        setSuccessSnackbar(t('userCreated'))
        handleOpenSnackBar()
      } else {
        throw new Error('Unexpected response from server.')
      }
    } catch (error) {
      let errorMessage
      if (error.response && error.response.status === 400) {
        errorMessage = t('errorEmailExists')
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
            {t('signUp')}
          </Typography>
          <form>
            <Box sx={classes.form}>
              <Typography sx={classes.label}>
                {t('chooseOrganization')}
              </Typography>
              <Select
                value={organisation}
                onChange={handleOrganisationChange}
                displayEmpty
                variant="outlined"
                fullWidth
                sx={{ ...classes.field, marginBottom: '10px' }}
              >
                <MenuItem value="" disabled>
                  {t('selectOrganization')}
                </MenuItem>
                {organisationList(t).map((organisation, index) => (
                  <MenuItem value={organisation} key={index}>
                    {organisation}
                  </MenuItem>
                ))}
              </Select>
              <Typography sx={classes.label}>{t('email')}:</Typography>
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
                <Typography sx={classes.label}>{t('password')} : </Typography>
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
                  buttonText={t('signUp')}
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
