import React, { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Modal,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import CustomizedSnackbars from '../../../components/SnackBar'

const ChangePasswordModal = ({ open, onClose, onSave }) => {
  const { t } = useTranslation()
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  })

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target
    setPasswordData({ ...passwordData, [name]: value })
  }

  const toggleShowPassword = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }))
  }

  const handleSave = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setErrorMessage(t('errorpasswordMatch'))
      handleOpenSnackBar()
      return
    } else if (passwordData.newPassword.length < 8) {
      setErrorMessage(t('errorValidPassword'))
      handleOpenSnackBar()
      return
    }
    onSave(passwordData.newPassword)
    onClose()
  }

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
    setTimeout(() => {
      setOpenSnackBar(false)
    }, 3000)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="change-password-modal-title"
        aria-describedby="change-password-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            mx: 'auto',
            my: 'auto',
          }}
        >
          <Typography
            id="change-password-modal-title"
            variant="h6"
            gutterBottom
          >
            {t('changePassword')}
          </Typography>
          <TextField
            name="newPassword"
            label={t('newPassword')}
            type={showPassword.newPassword ? 'text' : 'password'}
            value={passwordData.newPassword}
            onChange={handlePasswordInputChange}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => toggleShowPassword('newPassword')}
                  edge="end"
                >
                  {showPassword.newPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              ),
            }}
          />
          <TextField
            name="confirmPassword"
            label={t('confirmPassword')}
            type={showPassword.confirmPassword ? 'text' : 'password'}
            value={passwordData.confirmPassword}
            onChange={handlePasswordInputChange}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => toggleShowPassword('confirmPassword')}
                  edge="end"
                >
                  {showPassword.confirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              ),
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              {t('save')}
            </Button>
          </Box>
        </Box>
      </Modal>
      <CustomizedSnackbars
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        message={errorMessage}
        severity="error"
      />
    </>
  )
}

export default ChangePasswordModal
