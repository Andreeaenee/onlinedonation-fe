import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button } from '@mui/material'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language)

  const handleLanguageChange = (lng) => {
    setSelectedLanguage(lng)
    i18n.changeLanguage(lng)
  }

  const buttonStyle = {
    textTransform: 'none',
    fontSize: '12px',
    padding: '4px 8px',
    minWidth: 'auto',
    cursor: 'pointer',
  }

  return (
    <Box display="flex" alignItems="center" marginTop={'5%'}>
      <Button
        disableRipple
        disableFocusRipple
        disableElevation
        onClick={() => handleLanguageChange('en')}
        sx={{
          fontWeight: selectedLanguage === 'en' ? 'bold' : 'normal',
          color: selectedLanguage === 'en' ? 'primary.main' : 'grey.500',
          ...buttonStyle,
        }}
      >
        EN
      </Button>
      <Button
        disableRipple
        disableFocusRipple
        disableElevation
        onClick={() => handleLanguageChange('ro')}
        sx={{
          fontWeight: selectedLanguage === 'ro' ? 'bold' : 'normal',
          color: selectedLanguage === 'ro' ? 'primary.main' : 'grey.500',
          ...buttonStyle,
        }}
      >
        RO
      </Button>
    </Box>
  )
}

export default LanguageSwitcher
