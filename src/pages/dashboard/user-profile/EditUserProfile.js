import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { getUserById, updateUserProfile } from '../../../api/getUsers'
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  Divider,
  Grid,
  Button,
  TextField,
} from '@mui/material'
import { White800 } from '../../../constants/colors'
import { getItem } from '../../../utils/LocalStorageUtils'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import CustomizedSnackbars from '../../../components/SnackBar'
import { useTranslation } from 'react-i18next'

const UserProfileEditMode = () => {
  const { t } = useTranslation()
  const params = useParams()
  const userId = params.userId
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({})
  const [logoPreview, setLogoPreview] = useState(null)
  const userPicture = getItem('payload').picture
  const [isLogoFileFormat, setIsLogoFileFormat] = useState(false)
  const [openSnackBar, setOpenSnackBar] = useState(false)

  useEffect(() => {
    fetchUser(userId)
  }, [userId])

  const fetchUser = async (id) => {
    getUserById(id)
      .then((response) => {
        setUser(response)
        setFormData(response)
        if (response.logoUrl) {
          setLogoPreview(response.logoUrl)
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileUpload = (field) => (event) => {
    const file = event.target.files[0]
    setFormData({ ...formData, [field]: file })
    setLogoPreview(URL.createObjectURL(file))
    setIsLogoFileFormat('true')
  }

  const handleSaveClick = async () => {
    try {
      const fieldsToUpdate = [
        'name',
        'address',
        'phone',
        'link',
        'cif',
        'description',
      ]

      if (formData.newPassword) {
        fieldsToUpdate.push('newPassword')
      }

      const updatedData = {}

      fieldsToUpdate.forEach((field) => {
        if (formData[field] !== undefined) {
          updatedData[field] = formData[field]
        }
      })

      if (isLogoFileFormat) {
        const form = new FormData()
        fieldsToUpdate.forEach((field) => {
          form.append(field, formData[field])
        })
        await updateUserProfile(userId, form, true)
      } else {
        await updateUserProfile(userId, updatedData, false)
      }

      await fetchUser(userId)
      handleOpenSnackBar()
    } catch (error) {
      console.error('Error updating user data:', error)
    }
  }

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
    setTimeout(() => {
      setOpenSnackBar(false)
    }, 3000)
  }

  const handleCancelClick = () => {
    setFormData(user)
    setLogoPreview(user.logoUrl)
  }


  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending Registration':
        return 'blue'
      case 'Email Confirmed':
        return 'violet'
      case 'In Progress':
        return 'orange'
      case 'Complete':
        return 'green'
      case 'Rejected':
        return 'red'
      default:
        return 'gray'
    }
  }

  if (!user) {
    return (
      <MainLayout>
        <Header title={t('userProfile')} />
        <Typography sx={{ textAlign: 'center', mt: 4 }}>Loading...</Typography>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Header title={t('userProfile')} />
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ width: 72, height: 72, bgcolor: 'secondary' }}
                src={userPicture ? userPicture : '/default-avatar.png'}
              />
            }
            title={
              <Box sx={{ display: 'flex', gap: '15px' }}>
                <TextField
                  name="name"
                  label={t('firstName') + t('lastName')}
                  value={formData.name || ''}
                  onChange={handleInputChange}
                  sx={{ flexGrow: 1 }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2px 4px',
                    borderRadius: '4px',
                    backgroundColor: getStatusColor(user.status_name),
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    {user.status_name}
                  </Typography>
                </Box>
              </Box>
            }
            subheader={
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', textTransform: 'capitalize' }}
              >
                {user.user_type_name}
              </Typography>
            }
            sx={{ bgcolor: White800, color: 'primary.contrastText' }}
          />
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              {t('contactInformation')}
            </Typography>
            <List>
              <ListItem>
                <TextField
                  name="email"
                  label={t('email')}
                  value={formData.email || ''}
                  onChange={handleInputChange}
                  fullWidth
                  disabled
                />
              </ListItem>
              <ListItem>
                <TextField
                  name="phone"
                  label={t('phone')}
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  fullWidth
                />
              </ListItem>
              <ListItem>
                <TextField
                  name="address"
                  label={t('address')}
                  value={formData.address || ''}
                  onChange={handleInputChange}
                  fullWidth
                />
              </ListItem>
              <ListItem>
                <TextField
                  name="link"
                  label="Link"
                  value={formData.link || ''}
                  onChange={handleInputChange}
                  fullWidth
                />
              </ListItem>
            </List>
            <Divider sx={{ my: 2 }} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              {t('additionalInfo')}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <TextField
                      name="description"
                      label={t('description')}
                      value={formData.description || ''}
                      onChange={handleInputChange}
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      name="cif"
                      label="CIF"
                      value={formData.cif || ''}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        // Add logic to handle document viewing
                        console.log('Document ID clicked')
                      }}
                      sx={{ mt: 1 }}
                    >
                      {t('viewDocument')}
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        // Add logic to handle contract viewing
                        console.log('Contract ID clicked')
                      }}
                      sx={{ mt: 1 }}
                    >
                      {t('viewContract')}
                    </Button>
                  </ListItem>
                </List>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  marginTop: '2.5%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {logoPreview ? (
                    <>
                      <CardMedia
                        component="img"
                        image={logoPreview}
                        alt="User logo"
                        sx={{ maxWidth: 200, maxHeight: 200 }}
                      />
                      <Button
                        variant="contained"
                        component="label"
                        sx={{ mt: 1 }}
                      >
                        {t('changeLogo')}
                        <input
                          type="file"
                          hidden
                          onChange={handleFileUpload('logo_id')}
                        />
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      component="label"
                      sx={{ mt: 1 }}
                    >
                      {t('uploadLogo')}
                      <input
                        type="file"
                        hidden
                        onChange={handleFileUpload('logo')}
                      />
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<CancelIcon />}
                onClick={handleCancelClick}
                sx={{ mr: 2 }}
              >
                {t('cancel')}
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                onClick={handleSaveClick}
              >
                {t('save')}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {openSnackBar && (
        <CustomizedSnackbars
          openSnackBar={openSnackBar}
          setOpenSnackBar={handleOpenSnackBar}
          message={t('userUpdated')}
          severity="success"
        />
      )}
    </MainLayout>
  )
}

export default UserProfileEditMode
