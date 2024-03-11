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
import { CancelIcon, UploadIcon } from '../../assets/icons'
import dayjs from 'dayjs'
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
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState('')
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
      from: !from || !dayjs(from).isValid(),
      to: !to || !dayjs(to).isValid() || dayjs(to).isBefore(dayjs(from)),
      contactNumber:
        !contactNumber || contactNumber.length !== 8 || isNaN(contactNumber),
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
      alert('Please fill in all required fields correctly.')
      return
    }

    // Append the text fields to formData
    formData.append('name', title)
    formData.append('description', description)
    formData.append('quantity', quantity)
    formData.append('start_date', dayjs(from).format('YYYY-MM-DD'))
    formData.append('end_date', dayjs(to).format('YYYY-MM-DD'))
    formData.append('transport_provided', checked)
    formData.append('phone', contactNumber)
    formData.append('pick_up_point', pickupPoint)
    // Append the file to formData, the 'image' is the key expected by the multer middleware on the backend
    if (image) {
      formData.append('image', image, fileName) // Assuming 'image' is the file and 'fileName' is the name of the file
    }
    const response = await postDonationData(formData)
    console.log(response.data)

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

  const textField = ({
    label,
    textValue,
    onChangeAction,
    helperText,
    error,
  }) => {
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
          error={error}
          placeholder={label === 'From' || label === 'To' ? 'YYYY-MM-DD' : ''}
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
                error: errors.title,
              })}
            </Grid>
            <Grid item xs={12} sm={6}>
              {textField({
                label: 'Quantity/menu',
                textValue: quantity,
                onChangeAction: (e) => setQuantity(e.target.value),
                error: errors.quantity,
              })}
            </Grid>
          </Grid>
          <label
            htmlFor="upload-input"
            style={{ display: 'inline-block', width: '100%' }}
          >
            <div
              style={{
                marginTop: '20px',
                marginLeft: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '88%',
                height: '100%',
                backgroundColor: PersianPink,
                color: White100,
                borderRadius: '12px',
                cursor: 'pointer',
                border: 'none',
                padding: '12px 14px',
                gap: '8px',
              }}
            >
              <UploadIcon width={'20px'} height={'20px'} />
              <span
                style={{
                  fontSize: '20px',
                  lineHeight: '24px',
                  marginLeft: '10px',
                }}
              >
                Upload Image
              </span>
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
            <div
              style={{ display: 'flex', marginLeft: '50px', marginTop: '20px' }}
            >
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
                error: errors.from,
              })}
              {isMobile ? (
                textField({
                  label: 'To',
                  textValue: to,
                  onChangeAction: (e) => setTo(e.target.value),
                  error: errors.to,
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
                      error: errors.pickupPoint,
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
                      error: errors.pickupPoint,
                    })}
                </>
              ) : (
                textField({
                  label: 'To',
                  textValue: to,
                  onChangeAction: (e) => setTo(e.target.value),
                  error: errors.to,
                })
              )}
              {textField({
                label: 'Contact Number',
                textValue: contactNumber,
                onChangeAction: (e) => setContactNumber(e.target.value),
                error: errors.contactNumber,
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
