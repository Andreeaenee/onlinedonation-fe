import * as React from 'react'
import { useState, useEffect } from 'react'
import {
  Modal,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  useMediaQuery,
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
import { updateDonationData } from '../../api/getDonations'
import CustomizedSnackbars from '../SnackBar'
import dayjs from 'dayjs'

const ClaimDonationModal = ({ open, onClose, donation }) => {
  const theme = useTheme()
  const classes = NestedModalStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [boxHeight, setBoxHeight] = useState('60%')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [aproxTime, setAproxTime] = useState(null)
  const [ong_id, setOngId] = useState(1)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [openSnackBar, setOpenSnackBar] = useState(false)
  let isTransportProvided = donation.transport_provided

  useEffect(() => {
    console.log('Donation:', donation)
    setIsFormComplete(
      firstName.length > 0 &&
        lastName.length > 0 &&
        /^\d{9}$/.test(contactNumber) &&
        /^\d*$/.test(aproxTime)
    )
  }, [firstName, lastName, contactNumber, aproxTime])

  const handleButtonClick = () => {
    setBoxHeight((prevHeight) => {
      if (prevHeight === '60%') {
        return isTransportProvided ? '80%' : '95%'
      } else if (prevHeight === '80%') {
        return '60%'
      } else {
        return '60%'
      }
    })
  }
  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value)
  }

  const handleAproxTimeChange = (e) => {
    setAproxTime(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('first_name', firstName)
    formData.append('last_name', lastName)
    formData.append('contact_number', contactNumber)
    formData.append('approx_time', aproxTime)

    const response = await postDonationDriversData(
      donation.donation_id,
      formData
    )
    const response1 = await updateDonationData(donation.donation_id, {
      ong_id: ong_id,
    })
    // deleteDonationData(donation.donation_id)
    if (response === 200 && response1 === 200) {
      handleOpenSnackBar()
    }
    setAproxTime('')
    setContactNumber('')
    setLastName('')
    setFirstName('')
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  const textField = ({ label, textValue, onChangeAction, helperText }) => {
    return (
      <>
        <Typography sx={classes.fieldTypo}>{label}:</Typography>
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label={'Type ' + label}
          onChange={onChangeAction}
          value={textValue}
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
            {donation.transport_provided ? null : (
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
            <Avatar
              src={donation.imageUrl || Meal}
              sx={classes.avatar}
            ></Avatar>
          </Grid>
        </Grid>

        <MainButton
          buttonText={'Claim this Donation'}
          width={'80%'}
          marginLeft={'10%'}
          marginTop={'20px'}
          onClick={handleButtonClick}
          mobileStyles={{
            height: '30px',
            marginTop: '15px',
            margin: '0px 0px 20px 0px',
          }}
          mobileStylesText={{ fontSize: 12 }}
        />
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
                    textValue: firstName,
                    onChangeAction: handleFirstNameChange,
                    helperText: 'Type your first name',
                  })}
                  {textField({
                    label: 'Contact number',
                    textValue: contactNumber,
                    onChangeAction: handleContactNumberChange,
                    helperText: 'Type a valid 9-digit number',
                  })}
                </Grid>
                <Grid item xs={12} sm={5.5}>
                  {textField({
                    label: 'Last name',
                    textValue: lastName,
                    onChangeAction: handleLastNameChange,
                    helperText: 'Type your last name',
                  })}
                  {textField({
                    label: 'Approx. time of arrival (min)',
                    textValue: aproxTime,
                    onChangeAction: handleAproxTimeChange,
                    helperText: 'Type a valid number',
                  })}
                </Grid>
              </Grid>
              <MainButton
                buttonText={'Confirm'}
                width={'80%'}
                marginLeft={'10%'}
                margin={'20px 0px 20px 0px'}
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
        ></CustomizedSnackbars>
      </Box>
    </Modal>
  )
}

export default ClaimDonationModal
