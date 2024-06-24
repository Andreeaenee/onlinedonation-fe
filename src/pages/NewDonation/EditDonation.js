import React, { useEffect, useState } from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  Typography,
  TextField,
  Grid,
  Switch,
  FormControlLabel,
  CardMedia,
  Button,
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
import { fetchDonationById, updateDonationData } from '../../api/getDonations'
import { CancelIcon, UploadIcon } from '../../assets/icons'
import { FormField } from '../../utils/FormField'
import './styles.css'
import { White100, PersianPink, MountbattenPink } from '../../constants/colors'
import { getUserId } from '../../api/login/utils'
import { useParams } from 'react-router-dom'

const EditDonation = () => {
  const userId = getUserId()
  const theme = useTheme()
  const classes = NewDonationStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { id: donationId } = useParams()
  const [isImageFileFormat, setIsImageFileFormat] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const [form, setForm] = useState({
    title: '',
    quantity: '',
    description: '',
    checked: false,
    from: new Date(),
    to: new Date(),
    pickupPoint: '',
    contactNumber: '',
    image: null,
  })
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [errorCompleteFields, setErrorCompleteFields] = useState(false)
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

  useEffect(() => {
    const fetchDonationData = async () => {
      const response = await fetchDonationById(donationId)
      if (response) {
        setForm({
          title: response.name,
          quantity: response.quantity,
          description: response.description,
          checked: response.transport_provided,
          from: dayjs(response.start_date).toDate(),
          to: dayjs(response.end_date).toDate(),
          pickupPoint: response.pick_up_point,
          contactNumber: response.phone,
          image: null,
        })
        if (response.imageUrl) {
          setImagePreview(response.imageUrl)
        }
      }
    }

    fetchDonationData()
  }, [donationId])

  const validateForm = () => {
    const newErrors = {
      title: !form.title || form.title.length > 100,
      quantity:
        !form.quantity ||
        isNaN(form.quantity) ||
        form.quantity < 1 ||
        form.quantity > 1000,
      description: !form.description || form.description.length > 500,
      from: !form.from,
      to: !form.to || form.to < form.from,
      contactNumber: !form.contactNumber || form.contactNumber.length !== 10,
      image: !form.image && !imagePreview,
      pickupPoint: form.checked ? false : !form.pickupPoint,
    }
    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateForm()) {
      handleErrorCompleteFields()
      return
    }

    const formattedFromDate = dayjs(form.from).format('YYYY-MM-DD HH:mm:ss')
    const formattedToDate = dayjs(form.to).format('YYYY-MM-DD HH:mm:ss')

    if (isImageFileFormat) {
      const formData = new FormData()
      formData.append('name', form.title)
      formData.append('description', form.description)
      formData.append('quantity', form.quantity)
      formData.append('start_date', formattedFromDate)
      formData.append('end_date', formattedToDate)
      formData.append('transport_provided', form.checked)
      formData.append('phone', form.contactNumber)
      formData.append('pick_up_point', form.pickupPoint)
      formData.append('restaurant_id', userId)
      formData.append('image', form.image)

      const response = await updateDonationData(
        donationId,
        formData,
        isImageFileFormat
      )
      if (response === 200) {
        handleOpenSnackBar()
      } else {
        console.log('Error updating donation')
      }
    } else {
      const data = {
        name: form.title,
        description: form.description,
        quantity: form.quantity,
        start_date: formattedFromDate,
        end_date: formattedToDate,
        transport_provided: form.checked,
        phone: form.contactNumber,
        pick_up_point: form.pickupPoint,
        restaurant_id: userId,
      }

      const response = await updateDonationData(
        donationId,
        data,
        isImageFileFormat
      )
      if (response === 200) {
        handleOpenSnackBar()
      } else {
        console.log('Error updating donation')
      }
    }
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    setForm((prevForm) => ({
      ...prevForm,
      image: file,
    }))
    setImagePreview(URL.createObjectURL(file))
    setIsImageFileFormat(true)
  }

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
    setTimeout(() => {
      setOpenSnackBar(false)
    }, 3000)
  }

  const handleErrorCompleteFields = () => {
    setErrorCompleteFields(true)
  }

  const hoursPicker = (label, time, setTime) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography sx={classes.fieldTypo}>{label}:</Typography>
      <DemoContainer components={['TimePicker']} sx={classes.demoContainer}>
        <StaticTimePicker
          components={{
            ActionBar: () => null,
          }}
          label={label}
          value={time ? dayjs(time) : null}
          onChange={(newValue) => setTime(newValue ? newValue.toDate() : null)}
          sx={classes.timePicker}
        />
      </DemoContainer>
    </LocalizationProvider>
  )

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <WrapperPage>
      <Box sx={classes.box}>
        <form
          style={{ ...classes.formBox, width: isMobile ? '90%' : '60%' }}
          onSubmit={handleSubmit}
        >
          <Typography sx={classes.title}>Edit Donation</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldWithLabel
                label="Title"
                textValue={form.title}
                onChangeAction={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                error={errors.title}
                classes={classes}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldWithLabel
                label="Quantity/menu"
                textValue={
                  form.quantity !== null ? form.quantity.toString() : ''
                }
                onChangeAction={(e) =>
                  setForm({ ...form, quantity: e.target.value })
                }
                error={errors.quantity}
                classes={classes}
              />
            </Grid>
          </Grid>
          {imagePreview && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={imagePreview}
                alt="Donation Image"
                sx={{ maxWidth: 200, maxHeight: 200, mt: 2 }}
              />
              <Button variant="contained" component="label" sx={{ mt: 1 }}>
                Change Image
                <input type="file" hidden onChange={handleImageUpload} />
              </Button>
            </Box>
          )}
          <Typography sx={classes.fieldTypo}>Description:</Typography>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            color="secondary"
            label="Menu Name, Ingredients, etc."
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            value={form.description}
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
          <Typography sx={classes.fieldTypo}>Available time slot:</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box>
                {hoursPicker('From', form.from, (newFrom) =>
                  setForm({ ...form, from: newFrom })
                )}
              </Box>
              {isMobile ? (
                <Box>
                  {hoursPicker('To', form.to, (newTo) =>
                    setForm({ ...form, to: newTo })
                  )}
                </Box>
              ) : (
                <>
                  <FormControlLabel
                    sx={classes.switch}
                    control={
                      <Switch
                        checked={form.checked}
                        onChange={handleChange}
                        name="checked"
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="secondary"
                      />
                    }
                    label="Transport Provided?"
                  />
                  {!form.checked && (
                    <TextFieldWithLabel
                      label="Pickup Point"
                      textValue={form.pickupPoint}
                      onChangeAction={(e) =>
                        setForm({ ...form, pickupPoint: e.target.value })
                      }
                      error={errors.pickupPoint}
                      classes={classes}
                    />
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
                        checked={form.checked}
                        onChange={handleChange}
                        name="checked"
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="secondary"
                      />
                    }
                    label="Transport Provided?"
                  />
                  {!form.checked && (
                    <TextFieldWithLabel
                      label="Pickup Point"
                      textValue={form.pickupPoint}
                      onChangeAction={(e) =>
                        setForm({ ...form, pickupPoint: e.target.value })
                      }
                      error={errors.pickupPoint}
                      classes={classes}
                    />
                  )}
                </>
              ) : (
                <Box>
                  {hoursPicker('To', form.to, (newTo) =>
                    setForm({ ...form, to: newTo })
                  )}
                </Box>
              )}
              <TextFieldWithLabel
                label="Contact Number"
                textValue={form.contactNumber}
                onChangeAction={(e) =>
                  setForm({ ...form, contactNumber: e.target.value })
                }
                error={errors.contactNumber}
                classes={classes}
                isMobile={isMobile}
                checked={form.checked}
              />
            </Grid>
          </Grid>
          <MainButton
            buttonText="Update Donation"
            onClick={handleSubmit}
            width="90%"
            height="50px"
            fontSize={20}
            lineHeight={24}
            marginLeft="5%"
            marginTop="25px"
            margin="0px 0px 50px 0px"
            backgroundColor={PersianPink}
            backgroundColorHover={MountbattenPink}
            textColor={White100}
            mobileStyles={{ height: '30px', marginTop: '15px' }}
            mobileStylesText={{ fontSize: 12 }}
          />
        </form>
      </Box>
      {openSnackBar && (
        <CustomizedSnackbars
          openSnackBar={openSnackBar}
          setOpenSnackBar={setOpenSnackBar}
          message="The donation has been successfully updated!"
          severity="success"
        />
      )}
      {errorCompleteFields && (
        <CustomizedSnackbars
          openSnackBar={errorCompleteFields}
          setOpenSnackBar={setErrorCompleteFields}
          message="Please fill in all required fields correctly."
          severity="error"
        />
      )}
    </WrapperPage>
  )
}

export default EditDonation
