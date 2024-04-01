import React from 'react'
import { useState } from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { Wenge, PersianPink, MountbattenPink } from '../../constants/colors'
import MainButton from '../MainButton'
import { FormField } from '../../utils/FormField'
import { updateDonationData } from '../../api/getDonations'
import CustomizedSnackbars from '../SnackBar'

const TransportIsProvidedModal = ({ classes, theme, onClose, donation }) => {
  const [ong_id, setOngId] = useState(1)
  const [address, setAddress] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('ong_id', ong_id)
    formData.append('delivery_address', address)
    const response = await updateDonationData(donation.donation_id, formData)
    console.log(response)
    if (response === 200) {
      handleOpenSnackBar()
    }
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
            mb: 4,
            marginLeft: '20px',
            width: '95%',
            ...FormField.field,
            [theme.breakpoints.down('md')]: { width: '80%' },
          }}
          helperText={helperText}
        />
      </>
    )
  }

  return (
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
        Transportation is provided by the restaurant
      </Typography>
      <form>
        {textField({
          label: 'Adress',
          textValue: address,
          onChangeAction: (e) => setAddress(e.target.value),
          helperText: 'Type the address where the food will be delivered',
        })}
      </form>
      <MainButton
        buttonText={'Confirm'}
        width={'80%'}
        marginLeft={'10%'}
        margin={'20px 0px 20px 0px'}
        onClick={handleSubmit}
        backgroundColor={PersianPink}
        backgroundColorHover={MountbattenPink}
        mobileStyles={{ height: '30px', margin: '0px 0px 15px 0px' }}
        mobileStylesText={{ fontSize: 12 }}
      />
      <CustomizedSnackbars
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        message="The donation has been claimed successfully!"
        severity="success"
      ></CustomizedSnackbars>
    </Box>
  )
}

export default TransportIsProvidedModal
