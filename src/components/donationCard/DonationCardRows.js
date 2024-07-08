import React, { useState } from 'react'
import {
  Box,
  Typography,
  IconButton,
  Grid,
  ButtonBase,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import dayjs from 'dayjs'
import ClaimDonationModal from '../nestedModalDonation/ClaimDonationModal'
import { useNavigate } from 'react-router-dom'
import { deleteDonationData } from '../../api/getDonations'
import CustomizedSnackbars from '../SnackBar'
import { useTheme } from '@mui/material/styles'
import DonationCardStyles from './DonationCardStyle'

const DonationCardRow = ({ donation }) => {
  const theme = useTheme()
  const classes = DonationCardStyles(theme)
  const [openModal, setOpenModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const date = dayjs(donation.post_date).format('DD.MM.YYYY')
  const nav = useNavigate()
  const getStatusColor = (status) => {
    switch (status) {
      case 'unclaimed':
        return 'orange'
      case 'claimed':
        return 'blue'
      case 'finished':
        return 'green'
      case 'canceled':
        return 'red'
      default:
        return 'gray'
    }
  }

  const handleClick = () => {
    setOpenModal(true)
  }

  const handleMenuClick = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleEdit = () => {
    nav(`/edit-donation/${donation.donation_id}`)
    handleMenuClose()
  }

  const handleDelete = (event) => {
    event.stopPropagation()
    deleteDonationData(donation.donation_id)
      .then((response) => {
        console.log('Donation deleted:', response)
        if (response === 200) {
          setSnackbarMessage('Donation deleted successfully!')
          handleOpenSnackBar()
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        }
      })
      .catch((error) => {
        console.error('Error deleting donation:', error)
      })
    handleMenuClose()
  }

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
    setTimeout(() => {
      setOpenSnackBar(false)
    }, 3000)
  }

  return (
    <>
      <ButtonBase onClick={handleClick} sx={{ width: '100%' }}>
        <Box sx={classes.rowCard}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                {donation.restaurant_name || 'Restaurant Name'}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                {date}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                {donation.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                {donation.description}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  backgroundColor: getStatusColor(donation.status_name),
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {donation.status_name}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <IconButton size="small" onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleEdit}>
                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem
                  onClick={(event) => {
                    handleDelete(event)
                  }}
                >
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Delete</ListItemText>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Box>
      </ButtonBase>
      {openModal && (
        <ClaimDonationModal
          donation={donation}
          open={openModal}
          onClose={() => {
            setOpenModal(false)
          }}
        />
      )}
      {openSnackBar && (
        <CustomizedSnackbars
          openSnackBar={openSnackBar}
          setOpenSnackBar={setOpenSnackBar}
          message={snackbarMessage}
          severity="success"
        />
      )}
    </>
  )
}

export default DonationCardRow
