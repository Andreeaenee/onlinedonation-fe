import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../MainLayout'
import Header from '../Header'
import { getUserId, getUserRole } from '../../../api/login/utils'
import { getUserById, updateUser } from '../../../api/getUsers'
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
} from '@mui/material'
import { White800 } from '../../../constants/colors'
import { getItem } from '../../../utils/LocalStorageUtils'
import MainButton from '../../../components/MainButton'
import EditIcon from '@mui/icons-material/Edit'

const UserProfilePage = () => {
  const params = useParams()
  const userId = params.userId || getUserId()
  const userRole = getUserRole()
  const [user, setUser] = useState(null)
  const userPicture = getItem('payload').picture

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
        <Header title="User Profile" />
        <Typography sx={{ textAlign: 'center', mt: 4 }}>Loading...</Typography>
      </MainLayout>
    )
  }
  const handleContractClick = () => {
    console.log('Contract ID clicked')
  }

  const handleDocumentClick = () => {
    console.log('Document ID clicked')
  }

  const handleEditClick = () => {
    console.log('Edit clicked')
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

  return (
    <MainLayout>
      <Header title="User Profile" />
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
                      buttonText={'Accept'}
                      width={'150px'}
                      height={'35px'}
                      fontSize={16}
                      onClick={acceptUser}
                    />
                    <MainButton
                      backgroundColor={'red'}
                      buttonText={'Cancel'}
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
                </Box>
              </Box>
            }
            title={
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {user.name}
              </Typography>
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
              Contact Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Email" secondary={user.email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary={user.phone || 'N/A'} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Address"
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
              Additional Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Description"
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
                          View Document
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
                          View Contract
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
                  <Typography variant="body2">No Logo Available</Typography>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </MainLayout>
  )
}

export default UserProfilePage
