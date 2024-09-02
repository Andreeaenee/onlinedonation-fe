import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { getUserId, getUserRole } from '../../../api/login/utils'
import { getUserById, updateUser, deleteUser } from '../../../api/getUsers'
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
  ListItemText,
  Divider,
  Grid,
  Button,
  Modal,
} from '@mui/material'
import { White800 } from '../../../constants/colors'
import { getItem } from '../../../utils/LocalStorageUtils'
import MainButton from '../../../components/MainButton'
import EditIcon from '@mui/icons-material/Edit'
import PDFViewer from '../../../components/PDFViewer'
import { Delete } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const UserProfilePage = () => {
  const { t } = useTranslation()
  const params = useParams()
  const userId = params.userId || getUserId()
  const userRole = getUserRole()
  const [user, setUser] = useState(null)
  const userPicture = getItem('payload').picture
  const navigate = useNavigate()
  const [showPdfViewer, setShowPdfViewer] = useState(false)
  const [pdfUrl, setPdfUrl] = useState('')

  useEffect(() => {
    fetchUser(userId)
  }, [userId])

  const fetchUser = async (id) => {
    getUserById(id)
      .then((response) => {
        setUser(response)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }

  if (!user) {
    return (
      <MainLayout>
        <Header title={t('userProfile')} />
        <Typography sx={{ textAlign: 'center', mt: 4 }}>Loading...</Typography>
      </MainLayout>
    )
  }

  const handleContractClick = () => {
    setPdfUrl(user.contract)
    setShowPdfViewer(true)
  }

  const handleDocumentClick = () => {
    setPdfUrl(user.documentUrl)
    setShowPdfViewer(true)
  }

  const handleEditClick = () => {
    navigate(`/dashboard/user-profile/edit-profile/${userId}`)
  }

  const handleDeleteClick = () => {
    deleteUser(userId)
      .then(() => {
        navigate('/dashboard/users')
      })
      .catch((error) => {
        console.error('Error deleting user:', error)
      })
  }

  const acceptUser = async () => {
    try {
      await updateUser({ id: user.user_id, status_id: 4 })
      fetchUser(userId)
    } catch (error) {
      console.error('Error accepting user:', error)
    }
  }

  const rejectUser = async () => {
    try {
      await updateUser({ id: user.user_id, status_id: 5 })
      fetchUser(userId)
    } catch (error) {
      console.error('Error accepting user:', error)
    }
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

  const handleClose = () => {
    setShowPdfViewer(false)
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
            action={
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'right',
                  width: '100%',
                }}
              >
                {userRole === 3 && user.status_id === 3 && (
                  <Box sx={{ display: 'flex', gap: 1, marginTop: '3%' }}>
                    <MainButton
                      backgroundColor={'green'}
                      buttonText={t('accept')}
                      width={'150px'}
                      height={'35px'}
                      fontSize={16}
                      onClick={acceptUser}
                    />
                    <MainButton
                      backgroundColor={'red'}
                      buttonText={t('reject')}
                      width={'150px'}
                      height={'35px'}
                      fontSize={16}
                      onClick={rejectUser}
                    />
                  </Box>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button onClick={handleEditClick}>
                    <EditIcon />
                  </Button>
                  {userRole === 3 && user.user_type_id !== 3 && (
                    <Button onClick={handleDeleteClick}>
                      <Delete sx={{ padding: '0px' }} />
                    </Button>
                  )}
                </Box>
              </Box>
            }
            title={
              <Box sx={{ display: 'flex', gap: '15px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {user.name}
                </Typography>
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
              {t('contactInfo')}
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={t('email')} secondary={user.email} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={t('phone')}
                  secondary={user.phone || 'N/A'}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={t('address')}
                  secondary={user.address || 'N/A'}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Link" secondary={user.link || 'N/A'} />
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
                    <ListItemText
                      primary={t('description')}
                      secondary={user.description || 'N/A'}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="CIF" secondary={user.cif || 'N/A'} />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Document"
                      secondary={
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleDocumentClick}
                          sx={{ mt: 1 }}
                        >
                          {t('viewDocument')}
                        </Button>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Contract"
                      secondary={
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleContractClick}
                          sx={{ mt: 1 }}
                        >
                          {t('viewContract')}
                        </Button>
                      }
                    />
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
                {user.logo_id ? (
                  <CardMedia
                    component="img"
                    image={`${user.logoUrl}`}
                    alt="User logo"
                    sx={{ maxWidth: 200, maxHeight: 200 }}
                  />
                ) : (
                  <Typography variant="body2">{t('noLogo')}</Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Modal
        open={showPdfViewer}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '45%',
            height: '80%',
            bgcolor: 'background.paper',
            p: 4,
            overflow: 'auto',
          }}
        >
          <PDFViewer pdfUrl={pdfUrl} />
        </Box>
      </Modal>
    </MainLayout>
  )
}

export default UserProfilePage
