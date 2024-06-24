import React, { useState, useEffect } from 'react'
import {
  Modal,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  useMediaQuery,
  ButtonBase,
  Select,
  MenuItem,
  FormControl,
  Button,
} from '@mui/material'
import MainButton from '../MainButton'
import { useTheme } from '@mui/material/styles'
import NestedModalStyles from './NestedModalStyles'
import { MountbattenPink, PersianPink, Wenge } from '../../constants/colors'
import { FormField } from '../../utils/FormField'
import Meal from '../../assets/photos/cardPhoto/meal.png'
import { IntervalIcon, LocationIcon } from '../../assets/icons'
import TransportIsProvidedModal from './TransportIsProvided'
import { postDonationDriversData } from '../../api/getDonationsDrivers'
import {
  fetchDonationStatus,
  updateDonationDataClaim,
  updateDonationStatus,
} from '../../api/getDonations'
import CustomizedSnackbars from '../SnackBar'
import dayjs from 'dayjs'
import { getUserId, getUserRole } from '../../api/login/utils'
import EditIcon from '@mui/icons-material/Edit'
import { USER_ROLES } from '../../constants/constants'

const ClaimDonationModal = ({ open, onClose, donation }) => {
  const userId = getUserId()
  const userRole = getUserRole()
  const theme = useTheme()
  const classes = NestedModalStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [boxHeight, setBoxHeight] = useState('60%')
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    aproxTime: '',
  })
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [isEditingStatus, setIsEditingStatus] = useState(false)
  const [statusData, setStatusData] = useState([])
  const [status, setStatus] = useState(donation.status_name)
  const [statusId, setStatusId] = useState(null)
  const isTransportProvided = donation.transport_provided

  useEffect(() => {
    const { firstName, lastName, contactNumber, aproxTime } = formState
    setIsFormComplete(
      firstName.length > 0 &&
        lastName.length > 0 &&
        /^\d{9}$/.test(contactNumber) &&
        /^\d*$/.test(aproxTime)
    )
  }, [formState])

  useEffect(() => {
    fetchDonationStatus().then(setStatusData).catch(console.error)
  }, [])

  const handleButtonClick = () => {
    setBoxHeight((prevHeight) =>
      prevHeight === '60%' ? (isTransportProvided ? '80%' : '95%') : '60%'
    )
  }

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
    setTimeout(() => {
      setOpenSnackBar(false)
    }, 3000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { firstName, lastName, contactNumber, aproxTime } = formState

    const formData = new FormData()
    formData.append('first_name', firstName)
    formData.append('last_name', lastName)
    formData.append('contact_number', contactNumber)
    formData.append('approx_time', aproxTime)

    const [response, response1] = await Promise.all([
      postDonationDriversData(donation.donation_id, formData),
      updateDonationDataClaim(donation.donation_id, { ong_id: userId }),
    ])

    if (response === 200 && response1 === 200) {
      handleOpenSnackBar()
    }
    setFormState({
      firstName: '',
      lastName: '',
      contactNumber: '',
      aproxTime: '',
    })
    setTimeout(() => {
      onClose()
      window.location.reload()
    }, 1000)
  }

  const handleStatusChange = (event) => {
    const selectedStatus = statusData.find(
      (statusItem) => statusItem.name === event.target.value
    )
    setStatus(selectedStatus.name)
    setStatusId(selectedStatus.id)
  }

  const handleSaveStatus = async () => {
    if (statusId) {
      const response = await updateDonationStatus(donation.donation_id, {
        status_id: statusId,
      })
      if (response === 200) {
        setIsEditingStatus(false)
        handleOpenSnackBar()
        setTimeout(() => {
          window.location.reload()
        }, 500)
      } else {
        console.error('Error updating status')
      }
    }
  }

  const textField = ({ label, name, value, onChange, helperText }) => (
    <>
      <Typography sx={classes.fieldTypo}>{label}:</Typography>
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label={`Type ${label}`}
        name={name}
        onChange={onChange}
        value={value}
        fullWidth
        required
        sx={{
          mb: 2,
          marginLeft: '20px',
          ...FormField.field,
          [theme.breakpoints.down('md')]: { width: '80%' },
        }}
        helperText={helperText}
      />
    </>
  )

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

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={classes.modal}
    >
      <Box
        sx={{
          ...classes.imagesBox,
          height: boxHeight,
          transition: 'height 0.3s ease',
          overflowY: 'auto',
        }}
      >
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <Typography sx={classes.title}>{donation.name}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 8px',
                marginLeft: '15px',
                marginTop: '10px',
              }}
            >
              {isEditingStatus ? (
                <FormControl sx={{ flexGrow: 1 }}>
                  <Select
                    value={status}
                    onChange={handleStatusChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                      backgroundColor: getStatusColor(status),
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      height: '30px',
                      minWidth: '120px',
                    }}
                  >
                    {statusData.map((statusItem) => (
                      <MenuItem value={statusItem.name} key={statusItem.id}>
                        {statusItem.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <Button
                    onClick={handleSaveStatus}
                    sx={{
                      mt: 1,
                      height: '25px',
                      lineHeight: '1.5',
                      padding: '0 8px',
                    }}
                    color="secondary"
                    variant="contained"
                  >
                    Save
                  </Button>
                </FormControl>
              ) : (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor: getStatusColor(status),
                      color: 'white',
                      fontWeight: 'bold',
                      flexGrow: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      Status: {status}
                    </Typography>
                  </Box>
                  <ButtonBase onClick={() => setIsEditingStatus(true)}>
                    <EditIcon fontSize="medium" sx={{ ml: 1, color: Wenge }} />
                  </ButtonBase>
                </>
              )}
            </Box>
            <Box
              sx={{ display: 'flex', marginLeft: '15px', alignItems: 'center' }}
            >
              <IntervalIcon
                width={isMobile ? '20px' : '25px'}
                height={isMobile ? '20px' : '25px'}
              />
              <Typography sx={classes.interval}>
                Interval:{' '}
                <span style={{ fontWeight: 300, fontSize: '16px' }}>
                  {dayjs(donation.start_date).format('HH:mm')} -{' '}
                  {dayjs(donation.end_date).format('HH:mm')}
                </span>
              </Typography>
            </Box>
            {!isTransportProvided && (
              <Box
                sx={{
                  display: 'flex',
                  marginLeft: '10px',
                  alignItems: 'center',
                }}
              >
                <LocationIcon
                  width={isMobile ? '30px' : '30px'}
                  height={isMobile ? '30px' : '30px'}
                />
                <Typography sx={classes.date}>
                  Pickup Point:{' '}
                  <span style={{ fontWeight: 300 }}>
                    {donation.pick_up_point}
                  </span>
                </Typography>
              </Box>
            )}
            <Typography sx={classes.description}>
              {donation.description}
            </Typography>
          </Grid>
          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            <Avatar src={donation.imageUrl || Meal} sx={classes.avatar} />
          </Grid>
        </Grid>
        {donation.status_name === 'unclaimed' &&
          (userRole === USER_ROLES.ONG || userRole === USER_ROLES.ADMIN) && (
            <MainButton
              buttonText="Claim this Donation"
              width="80%"
              marginLeft="10%"
              marginTop="20px"
              onClick={handleButtonClick}
              mobileStyles={{
                height: '30px',
                marginTop: '15px',
                margin: '0px 0px 20px 0px',
              }}
              mobileStylesText={{ fontSize: 12 }}
            />
          )}
        {boxHeight === '95%' && (
          <Box>
            <Typography
              sx={{
                ...classes.title,
                textAlign: 'center',
                color: Wenge,
                marginTop: '15px',
                fontSize: '18px',
                fontWeight: 500,
                padding: '0px',
              }}
            >
              Provide the details of the person who's gonna pick up the command
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={5.5}>
                  {textField({
                    label: 'First name',
                    name: 'firstName',
                    value: formState.firstName,
                    onChange: handleInputChange,
                    helperText: 'Type your first name',
                  })}
                  {textField({
                    label: 'Contact number',
                    name: 'contactNumber',
                    value: formState.contactNumber,
                    onChange: handleInputChange,
                    helperText: 'Type a valid 9-digit number',
                  })}
                </Grid>
                <Grid item xs={12} sm={5.5}>
                  {textField({
                    label: 'Last name',
                    name: 'lastName',
                    value: formState.lastName,
                    onChange: handleInputChange,
                    helperText: 'Type your last name',
                  })}
                  {textField({
                    label: 'Approx. time of arrival (min)',
                    name: 'aproxTime',
                    value: formState.aproxTime,
                    onChange: handleInputChange,
                    helperText: 'Type a valid number',
                  })}
                </Grid>
              </Grid>
              <MainButton
                buttonText="Confirm"
                width="80%"
                marginLeft="10%"
                margin="20px 0px 20px 0px"
                onClick={handleSubmit}
                backgroundColor={PersianPink}
                backgroundColorHover={MountbattenPink}
                disabled={!isFormComplete}
                mobileStyles={{ height: '30px', margin: '0px 0px 15px 0px' }}
                mobileStylesText={{ fontSize: 12 }}
              />
            </form>
          </Box>
        )}
        {boxHeight === '80%' && (
          <TransportIsProvidedModal
            donation={donation}
            theme={theme}
            onClose={onClose}
            classes={classes}
          />
        )}
        <CustomizedSnackbars
          openSnackBar={openSnackBar}
          setOpenSnackBar={setOpenSnackBar}
          message="The donation has been claimed successfully!"
          severity="success"
        />
      </Box>
    </Modal>
  )
}

export default ClaimDonationModal
