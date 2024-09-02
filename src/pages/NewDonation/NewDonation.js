import React, { useState } from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  Typography,
  TextField,
  Grid,
  Switch,
  FormControlLabel,
} from '@mui/material'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider, StaticTimePicker } from '@mui/x-date-pickers'
import NewDonationStyles from './NewDonationStyles'
import WrapperPage from '../../components/WrapperPage'
import MainButton from '../../components/MainButton'
import CustomizedSnackbars from '../../components/SnackBar'
import TextFieldWithLabel from '../../components/TextFieldWithLabel'
import { postDonationData } from '../../api/getDonations'
import { CancelIcon, UploadIcon } from '../../assets/icons'
import { FormField } from '../../utils/FormField'
import './styles.css'
import { White100, PersianPink, MountbattenPink } from '../../constants/colors'
import { getUserId } from '../../api/login/utils'
import { useTranslation } from 'react-i18next'

const NewDonation = () => {
  const { t } = useTranslation()
  const userId = getUserId()
  const theme = useTheme()
  const classes = NewDonationStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [title, setTitle] = useState('')
  const [quantity, setQuantity] = useState(null)
  const [description, setDescription] = useState('')
  const [checked, setChecked] = useState(false)
  const [from, setFrom] = useState(new Date())
  const [to, setTo] = useState(new Date())
  const [pickupPoint, setPickupPoint] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [error_complete_fileds, setError_complete_fileds] = useState(false)
  const [errors, setErrors] = useState({
    title: false,
    quantity: false,
    description: false,
    from: false,
    to: false,
    contactNumber: false,
    image: false,
    pickupPoint: false,
  })

  const validateForm = () => {
    const newErrors = {
      title: !title || title.length > 100,
      quantity: !quantity || isNaN(quantity) || quantity < 1 || quantity > 1000,
      description: !description || description.length > 500,
      from: !from,
      to: !to || to < from,
      contactNumber: !contactNumber || contactNumber.length !== 10,
      image: !image,
      pickupPoint: checked ? false : !pickupPoint,
    }
    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    if (!validateForm()) {
      handleErrorCompleteFields()
      return
    }

    const formattedFromDate = dayjs(from).format('YYYY-MM-DD HH:mm:ss')
    const formattedToDate = dayjs(to).format('YYYY-MM-DD HH:mm:ss')

    formData.append('name', title)
    formData.append('description', description)
    formData.append('quantity', quantity)
    formData.append('start_date', formattedFromDate)
    formData.append('end_date', formattedToDate)
    formData.append('transport_provided', checked)
    formData.append('phone', contactNumber)
    formData.append('pick_up_point', pickupPoint)
    formData.append('restaurant_id', userId)
    if (image) {
      formData.append('image', image, fileName)
    }
    const response = await postDonationData(formData)
    if (response === 201) {
      handleOpenSnackBar()
    } else {
      console.log('Error posting donation')
    }
    setChecked(false)
    setTitle('')
    setQuantity('')
    setDescription('')
    setFrom(null)
    setTo(null)
    setPickupPoint('')
    setContactNumber('')
    setImage(null)
    setFileName('')
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setImage(file)
      setFileName(file.name)
    }
  }

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
  }

  const handleErrorCompleteFields = () => {
    setError_complete_fileds(true)
  }

  const hoursPicker = (label, time, setTime) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography sx={classes.fieldTypo}>{label}:</Typography>
        <DemoContainer components={['TimePicker']} sx={classes.demoContainer}>
          <StaticTimePicker
            components={{
              ActionBar: () => null,
            }}
            label={label}
            value={time ? dayjs(time) : null}
            onChange={(newValue) =>
              setTime(newValue ? newValue.toDate() : null)
            }
            sx={classes.timePicker}
          />
        </DemoContainer>
      </LocalizationProvider>
    )
  }
  return (
    <WrapperPage>
      <Box sx={classes.box}>
        <form
          style={{ ...classes.formBox, width: isMobile ? '90%' : '60%' }}
          onSubmit={handleSubmit}
        >
          <Typography sx={classes.title}>{t('createDonation')}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldWithLabel
                label={t('title')}
                textValue={title}
                onChangeAction={(e) => setTitle(e.target.value)}
                error={errors.title}
                classes={classes}
              ></TextFieldWithLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldWithLabel
                label={t('quantity/menu')}
                textValue={quantity}
                onChangeAction={(e) => setQuantity(e.target.value)}
                error={errors.quantity}
                classes={classes}
              ></TextFieldWithLabel>
            </Grid>
          </Grid>
          <label htmlFor="upload-input" style={classes.labelPhoto}>
            <div style={{ ...classes.uploadPhoto, ...classes.divPhoto }}>
              <UploadIcon width={'20px'} height={'20px'} />
              <span style={classes.spanPhoto}>{t('uploadImage')}</span>
            </div>
          </label>
          <input
            id="upload-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          {fileName && (
            <div style={classes.divPhoto}>
              <Typography>{fileName}</Typography>
              <CancelIcon
                width={'20px'}
                height={'20px'}
                cursor={'pointer'}
                sx={{ marginLeft: '30px' }}
                onClick={() => {
                  setFileName('')
                  setImage(null)
                }}
              />
            </div>
          )}

          <Typography sx={classes.fieldTypo}>{t('description')}:</Typography>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            color="secondary"
            label={'Menu Name, Ingredients, etc.'}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            error={errors.description}
            sx={{
              mb: 2,
              margin: 'auto',
              marginTop: '5px',
              marginLeft: '5%',
              width: '90%',
              ...FormField.field,
            }}
          />
          <Typography sx={classes.fieldTypo}>
            {t('availableTimeSlot')}:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box>{hoursPicker(t('from'), from, setFrom)}</Box>

              {isMobile ? (
                <Box>{hoursPicker(t('to'), to, setTo)}</Box>
              ) : (
                <>
                  <FormControlLabel
                    sx={classes.switch}
                    control={
                      <Switch
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="secondary"
                      />
                    }
                    label={t('transportProvided')}
                  />
                  {!checked && (
                    <TextFieldWithLabel
                      label={t('pickUpPoint')}
                      textValue={pickupPoint}
                      onChangeAction={(e) => setPickupPoint(e.target.value)}
                      error={errors.pickupPoint}
                      classes={classes}
                    ></TextFieldWithLabel>
                  )}
                </>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {isMobile ? (
                <>
                  <FormControlLabel
                    sx={classes.switch}
                    control={
                      <Switch
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="secondary"
                      />
                    }
                    label={t('transportProvided')}
                  />
                  {!checked && (
                    <TextFieldWithLabel
                      label={t('pickUpPoint')}
                      textValue={pickupPoint}
                      onChangeAction={(e) => setPickupPoint(e.target.value)}
                      error={errors.pickupPoint}
                      classes={classes}
                    ></TextFieldWithLabel>
                  )}
                </>
              ) : (
                <Box>{hoursPicker(t('to'), to, setTo)}</Box>
              )}
              <TextFieldWithLabel
                label={t('contactNumber')}
                textValue={contactNumber}
                onChangeAction={(e) => setContactNumber(e.target.value)}
                error={errors.contactNumber}
                classes={classes}
                isMobile={isMobile}
                checked={checked}
              ></TextFieldWithLabel>
            </Grid>
          </Grid>
          <MainButton
            buttonText={t('postDonation')}
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
      <CustomizedSnackbars
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        message={t('dCreateSuccess')}
        severity="success"
      ></CustomizedSnackbars>
      <CustomizedSnackbars
        openSnackBar={error_complete_fileds}
        setOpenSnackBar={setError_complete_fileds}
        message={t('errorValideFields')}
        severity="error"
      ></CustomizedSnackbars>
    </WrapperPage>
  )
}

export default NewDonation
