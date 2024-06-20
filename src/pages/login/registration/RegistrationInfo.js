import React, { useState, useEffect } from 'react'
import WrapperPage from '../../../components/WrapperPage'
import { Box, Divider, Typography, TextField } from '@mui/material'
import {
  Wenge,
  PersianPink,
  Black100,
  White400,
} from '../../../constants/colors'
import { FormField } from '../../../utils/FormField'
import { useTheme } from '@mui/material/styles'
import LoginStyles from '../LoginStyles'
import { UploadIcon, CancelIcon, CurbeIcon } from '../../../assets/icons'
import MainButton from '../../../components/MainButton'
import CustomizedSnackbars from '../../../components/SnackBar'
import { registerUser } from '../../../api/getUsers'
import { useNavigate, useParams } from 'react-router-dom'
import ContractModal from './ContractModal'
import { getUserById } from '../../../api/getUsers'

const RegistrationInfo = () => {
  const { userId } = useParams()
  const nav = useNavigate()
  const theme = useTheme()
  const classes = LoginStyles(theme)
  const [email, setEmail] = useState('')
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [errorSnackbar, setErrorSnackbar] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    phone: '',
    link: '',
    logo: null,
    coverPhoto: null,
    documentSRL: null,
    cif: '',
    contract: '',
  })

  const [errors, setErrors] = useState({
    name: false,
    description: false,
    address: false,
    phone: false,
    link: false,
    logo: false,
    coverPhoto: false,
    documentSRL: false,
    cif: false,
    contract: false,
  })

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getUserById(userId)
      .then((response) => {
        setEmail(response.email)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [userId])

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true)
    setTimeout(() => {
      setOpenSnackBar(false)
    }, 3000)
  }

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleFileUpload = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.files[0] })
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
  }

  const validateLink = (link) => {
    const linkRegex = /^(http|https):\/\/[^ "]+$/
    return linkRegex.test(link)
  }

  const handleLogInSubmit = async () => {
    let newErrors = {
      name: !formData.name,
      description: !formData.description,
      address: !formData.address,
      phone: !formData.phone,
      link: !formData.link,
      logo: !formData.logo,
      coverPhoto: !formData.coverPhoto,
      documentSRL: !formData.documentSRL,
      cif: !formData.cif,
      contract: !formData.contract,
    }
    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((error) => error)
    if (hasErrors) {
      setErrorSnackbar('Please fill out all fields correctly.')
      handleOpenSnackBar()
      return
    } else if (!validatePhone(formData.phone)) {
      setErrorSnackbar('Please enter a valid phone number.')
      handleOpenSnackBar()
      return
    } else if (!validateLink(formData.link)) {
      setErrorSnackbar('Please enter a valid link.')
      handleOpenSnackBar()
      return
    }

    const form = new FormData()
    form.append('name', formData.name)
    form.append('description', formData.description)
    form.append('address', formData.address)
    form.append('phone', formData.phone)
    form.append('link', formData.link)
    form.append('logo', formData.logo)
    form.append('coverPhoto', formData.coverPhoto)
    form.append('document', formData.documentSRL)
    form.append('cif', formData.cif)
    form.append('contract', formData.contract)
    form.append('user_id', userId)
    try {
      const response = await registerUser(form)
      if (response === 200) {
        setErrorSnackbar('Registration successful.')
        handleOpenSnackBar()
        nav('/login')
      }
    } catch (error) {
      setErrorSnackbar(
        'An error occurred during registration. Please try again.'
      )
      handleOpenSnackBar()
    }
  }

  const textFieldInputs = (label, field, error) => (
    <>
      <Typography sx={classes.labelR}>{label}</Typography>
      <TextField
        variant="outlined"
        color="secondary"
        onChange={handleChange(field)}
        value={formData[field]}
        error={error}
        InputProps={{
          sx: {
            height: '2rem',
            borderColor: PersianPink,
          },
        }}
        sx={{
          ...classes.textFieldsProp,
          ...FormField.field,
        }}
      />
    </>
  )

  const renderFileUpload = (label, field, file) => (
    <Box>
      <Typography sx={classes.labelR}>{label}:</Typography>
      <Box component="label" sx={classes.regBox4}>
        {file ? (
          <Box
            component="img"
            src={URL.createObjectURL(file)}
            alt={label}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <>
            <UploadIcon width={'20px'} height={'20px'} color={Wenge} />
            <Typography sx={{ color: Wenge, marginLeft: '5px' }}>
              Click to upload
            </Typography>
          </>
        )}
        <input type="file" hidden onChange={handleFileUpload(field)} />
      </Box>
    </Box>
  )

  const renderDocumentUpload = (label, field, file) => (
    <Box>
      <Typography sx={classes.labelR}>{label}:</Typography>
      <label
        htmlFor={`upload-${field}-input`}
        style={{
          display: 'inline-block',
          width: '50%',
          height: '10px',
        }}
      >
        <div style={classes.regBox6}>
          <UploadIcon width={'20px'} height={'20px'} />
          <span
            style={{
              fontSize: '20px',
              lineHeight: '24px',
              marginLeft: '10px',
            }}
          >
            Upload PDF
          </span>
        </div>
      </label>
      <input
        id={`upload-${field}-input`}
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload(field)}
        style={{ display: 'none' }}
      />
      {file && (
        <div
          style={{
            display: 'flex',
            marginLeft: '50px',
            marginTop: '20px',
          }}
        >
          <Typography>{file.name}</Typography>
          <CancelIcon
            width={'20px'}
            height={'20px'}
            cursor={'pointer'}
            sx={{ marginLeft: '30px' }}
            onClick={() => setFormData({ ...formData, [field]: null })}
          />
        </div>
      )}
    </Box>
  )

  return (
    <WrapperPage>
      <form>
        <Box sx={classes.regBox}>
          <Box sx={classes.regBox1}>
            <Box sx={classes.regBox2}>
              <Typography sx={classes.regTitle}>
                Profile Informations
              </Typography>
              {textFieldInputs('Name:', 'name', errors.name)}
              <Typography sx={classes.labelR}>Description:</Typography>
              <TextField
                multiline
                rows={4}
                variant="outlined"
                color="secondary"
                onChange={handleChange('description')}
                value={formData.description}
                error={errors.description}
                sx={{
                  ...classes.textFieldsProp,
                  ...FormField.field,
                }}
              />
              {textFieldInputs('Address:', 'address', errors.address)}
              {textFieldInputs('Phone:', 'phone', errors.phone)}
              {textFieldInputs('Link to your website:', 'link', errors.link)}
            </Box>

            <Box sx={classes.regBox3}>
              {renderFileUpload('Logo', 'logo', formData.logo)}
              {renderFileUpload(
                'Cover Photo',
                'coverPhoto',
                formData.coverPhoto
              )}
            </Box>

            <Divider
              orientation="horizontal"
              sx={{
                position: 'absolute',
                left: '36%',
                top: '60%',
                width: '63%',
                borderColor: Black100,
                [theme.breakpoints.down('md')]: {
                  display: 'none',
                },
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                position: 'absolute',
                left: '35%',
                top: '2%',
                height: '95%',
                borderColor: Black100,
                [theme.breakpoints.down('md')]: {
                  display: 'none',
                },
              }}
            />
            <Box sx={classes.regBox5}>
              <Box sx={{ width: '70%' }}>
                {renderDocumentUpload(
                  'Document confirming the organisation as SRL',
                  'documentSRL',
                  formData.documentSRL
                )}
                {textFieldInputs('CIF:', 'cif', errors.cif)}
                <Typography sx={classes.labelR}>Contract</Typography>
                <MainButton
                  buttonText="Sign Contract"
                  onClick={handleOpenModal}
                  width={'55%'}
                  height={'36px'}
                  fontSize={18}
                  lineHeight={24}
                  margin={'20px 20px 10px 20px'}
                  borderRadius={'13px'}
                  backgroundColor={PersianPink}
                  backgroundColorHover={PersianPink}
                  textColor={White400}
                  mobileStyles={{ height: '20px', marginTop: '15px' }}
                  mobileStylesText={{ fontSize: 12 }}
                />
              </Box>
              <Box sx={{ marginTop: '20px' }}>
                <CurbeIcon />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <MainButton
            buttonText="Complete Registration"
            onClick={handleLogInSubmit}
            width={'15%'}
            height={'35px'}
            fontSize={14}
            lineHeight={24}
            margin={'20px 70px 0px 0px'}
            borderRadius={'7px'}
            backgroundColor={PersianPink}
            backgroundColorHover={PersianPink}
            textColor={White400}
            mobileStyles={{ height: '20px', marginTop: '15px' }}
            mobileStylesText={{ fontSize: 12 }}
          />
        </Box>
      </form>

      <ContractModal open={openModal} handleClose={handleCloseModal} onComplete={(data) => setFormData({ ...formData, contract: data.download_url })} email={email}/>

      {errorSnackbar && (
        <CustomizedSnackbars
          openSnackBar={openSnackBar}
          setOpenSnackBar={handleOpenSnackBar}
          message={errorSnackbar}
          severity="error"
        />
      )}
    </WrapperPage>
  )
}

export default RegistrationInfo
