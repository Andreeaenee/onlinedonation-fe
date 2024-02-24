import React from 'react'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Typography,
  TextField,
  Grid,
  Switch,
  FormControlLabel,
  useMediaQuery,
} from '@mui/material'
import NewDonationStyles from './NewDonationStyles'
import WrapperPage from '../../components/WrapperPage'
import {
  Black100,
  MountbattenPink,
  PersianPink,
  Wenge,
  White100,
} from '../../constants/colors'
import { FormField } from '../../utils/FormField'
import MainButton from '../../components/MainButton'
import { UploadIcon } from '../../assets/icons'
import dayjs from 'dayjs'
import axiosFetch from '../../api/Axios'
import { postDonationData } from '../../api/getDonations'

const NewDonation = () => {
  const theme = useTheme()
  const classes = NewDonationStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [title, setTitle] = useState('')
  const [quantity, setQuantity] = useState(null)
  const [description, setDescription] = useState('')
  const [checked, setChecked] = useState(false)
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const [pickupPoint, setPickupPoint] = useState('')
  const [contactNumber, setContactNumber] = useState('')

  const textField = ({ label, textValue, onChangeAction, helperText }) => {
    return (
      <Box
        sx={{
          marginTop:
            !isMobile && !checked && label === 'Contact Number'
              ? '60px'
              : '0px',
          transition:
            !isMobile && !checked && label === 'Contact Number'
              ? 'marginTop 0.3s ease'
              : 'none',
        }}
      >
        <Typography
          sx={{
            ...classes.fieldTypo,
            fontSize: label === 'From' || label === 'To' ? '14px' : '20px',
            color: label === 'From' || label === 'To' ? Black100 : Wenge,
          }}
        >
          {label}:
        </Typography>
        <TextField
          type="text"
          name={`${label}`}
          variant="outlined"
          color="secondary"
          label={'Type ' + label}
          onChange={onChangeAction}
          value={textValue}
          fullWidth
          required
          sx={{
            mb: 2,
            marginLeft: '50px',
            ...FormField.field,
            width: '80%',
          }}
          helperText={helperText}
        />
      </Box>
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const dataToSend = {
      name: title,
      description: description,
      quantity: parseInt(quantity),
      start_date: dayjs(from).format('YYYY-MM-DD'),
      end_date: dayjs(to).format('YYYY-MM-DD'),
      transport_provided: checked,
      phone: contactNumber,
      pick_up_point: pickupPoint,
    }
    postDonationData(dataToSend);
    setChecked(false)
    setTitle('')
    setQuantity(null)
    setDescription('')
    setFrom(null)
    setTo(null)
    setPickupPoint('')
    setContactNumber('')
  }

  return (
    <WrapperPage>
      <Box sx={classes.box}>
        <form
          style={{ ...classes.formBox, width: isMobile ? '90%' : '60%' }}
          onSubmit={handleSubmit}
        >
          <Typography sx={classes.title}>Create a Donation</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {textField({
                label: 'Title',
                textValue: title,
                onChangeAction: (e) => setTitle(e.target.value),
              })}
            </Grid>
            <Grid item xs={12} sm={6}>
              {textField({
                label: 'Quantity/menu',
                textValue: quantity,
                onChangeAction: (e) => setQuantity(e.target.value),
              })}
            </Grid>
          </Grid>
          <MainButton
            icon={<UploadIcon width={'20px'} height={'20px'} />}
            buttonText="Upload Image"
            onClickAction={() => {
              console.log('Create')
            }}
            width={'90%'}
            height={'50px'}
            fontSize={20}
            lineHeight={24}
            marginLeft={'5%'}
            marginTop={'20px'}
            backgroundColor={PersianPink}
            backgroundColorHover={MountbattenPink}
            textColor={White100}
            mobileStyles={{ height: '30px', marginTop: '15px' }}
            mobileStylesText={{ fontSize: 12 }}
          />
          <Typography
            sx={{
              ...classes.fieldTypo,
              marginTop: '20px',
              color: Wenge,
              fontSize: '20px',
            }}
          >
            Description:
          </Typography>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            color="secondary"
            label={'Menu Name, Ingredients, etc.'}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            sx={{
              mb: 2,
              margin: 'auto',
              marginTop: '5px',
              marginLeft: '5%',
              width: '90%',
              ...FormField.field,
            }}
          />
          <Typography
            sx={{
              ...classes.fieldTypo,
              marginTop: '20px',
              color: Wenge,
              fontSize: '20px',
            }}
          >
            Available time slot:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {textField({
                label: 'From',
                textValue: from,
                onChangeAction: (e) => setFrom(e.target.value),
              })}
              {isMobile ? (
                textField({
                  label: 'To',
                  textValue: to,
                  onChangeAction: (e) => setTo(e.target.value),
                })
              ) : (
                <>
                  <FormControlLabel
                    sx={{
                      marginLeft: '50px',
                      marginTop: '10px',
                      color: Wenge,
                      fontSize: '14px',
                      marginBottom: '10px',
                    }}
                    control={
                      <Switch
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="secondary"
                      />
                    }
                    label="Transport Provided?"
                  />
                  {!checked &&
                    textField({
                      label: 'Pickup Point',
                      textValue: pickupPoint,
                      onChangeAction: (e) => setPickupPoint(e.target.value),
                    })}
                </>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {isMobile ? (
                <>
                  <FormControlLabel
                    sx={{
                      marginLeft: '50px',
                      marginTop: '10px',
                      color: Wenge,
                      fontSize: '14px',
                      marginBottom: '10px',
                    }}
                    control={
                      <Switch
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="secondary"
                      />
                    }
                    label="Transport Provided?"
                  />
                  {!checked &&
                    textField({
                      label: 'Pickup Point',
                      textValue: pickupPoint,
                      onChangeAction: (e) => setPickupPoint(e.target.value),
                    })}
                </>
              ) : (
                textField({
                  label: 'To',
                  textValue: to,
                  onChangeAction: (e) => setTo(e.target.value),
                })
              )}
              {textField({
                label: 'Contact Number',
                textValue: contactNumber,
                onChangeAction: (e) => setContactNumber(e.target.value),
              })}
            </Grid>
          </Grid>
          <MainButton
            buttonText="Post Donation"
            onClick={handleSubmit}
            width={'90%'}
            height={'50px'}
            fontSize={20}
            lineHeight={24}
            marginLeft={'5%'}
            marginTop={'25px'}
            margin={'0px 0px 50px 0px'}
            backgroundColor={PersianPink}
            backgroundColorHover={MountbattenPink}
            textColor={White100}
            mobileStyles={{ height: '30px', marginTop: '15px' }}
            mobileStylesText={{ fontSize: 12 }}
          />
        </form>
      </Box>
    </WrapperPage>
  )
}

export default NewDonation
