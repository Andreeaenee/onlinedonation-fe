import * as React from 'react'
import { useState, useEffect } from 'react'
import { Modal, Box, Avatar, Typography, Grid, TextField } from '@mui/material'
import MainButton from '../MainButton'
import { useTheme } from '@mui/material/styles'
import NestedModalStyles from './NestedModalStyles'
import { MountbattenPink, PersianPink, Wenge } from '../../constants/colors'
import { FormField } from '../../utils/FormField'

const ClaimDonationModal = ({ open, onClose, donation, interval }) => {
  const theme = useTheme()
  const classes = NestedModalStyles(theme)
  const [boxHeight, setBoxHeight] = useState('60%')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [aproxTime, setAproxTime] = useState('')
  const [isFormComplete, setIsFormComplete] = useState(false)

  useEffect(() => {
    setIsFormComplete(
      firstName.length > 0 &&
        lastName.length > 0 &&
        /^\d{10}$/.test(contactNumber) &&
        /^\d*$/.test(aproxTime)
    )
  }, [firstName, lastName, contactNumber, aproxTime])

  const handleButtonClick = () => {
    setBoxHeight((prevHeight) => (prevHeight === '60%' ? '95%' : '60%'))
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, contactNumber, aproxTime)
    setAproxTime('')
    setContactNumber('')
    setLastName('')
    setFirstName('')
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
          sx={{ mb: 2, marginLeft: '20px', ...FormField.field }}
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
          transition: 'height 0.3s ease', // Smooth transition for height change
        }}
      >
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <Typography sx={classes.title}>{donation.title}</Typography>
            <Typography sx={classes.interval}>Interval: {interval}</Typography>
            <Typography sx={classes.date}>
              Date: <span style={{ fontWeight: 300 }}>{donation.date}</span>
            </Typography>
            <Typography sx={classes.description}>
              {donation.description}
            </Typography>
          </Grid>
          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            <Avatar src={donation.photo} sx={classes.avatar}></Avatar>
          </Grid>
        </Grid>

        <MainButton
          buttonText={'Claim this Donation'}
          width={'80%'}
          marginLeft={'10%'}
          marginTop={'20px'}
          onClick={handleButtonClick}
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
            <form onSubmit={handleSubmit}>
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
                    label: 'Approximate time of arrival (min)',
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
                marginTop={'20px'}
                onClick={handleSubmit}
                backgroundColor={PersianPink}
                backgroundColorHover={MountbattenPink}
                disabled={!isFormComplete}
              />
            </form>
          </Box>
        )}
      </Box>
    </Modal>
  )
}

export default ClaimDonationModal
