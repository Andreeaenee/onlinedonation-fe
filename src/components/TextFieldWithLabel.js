import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { FormField } from '../utils/FormField'

const TextFieldWithLabel = ({
  label,
  textValue,
  onChangeAction,
  helperText,
  error,
  classes,
  isMobile,
  checked,
}) => {
  let textFieldStyles = { ...classes.textFieldContainer } // Default styles

  // Applying additional styles specifically for 'Contact Number' based on isMobile and checked
  if (label === 'Contact Number' && !isMobile && !checked) {
    textFieldStyles = {
      ...textFieldStyles,
      marginTop: '75px', // Adjust based on your requirement
      transition: 'marginTop 0.3s ease',
    }
  }
  return (
    <Box sx={textFieldStyles}>
      <Typography sx={classes.fieldTypo}>{label}:</Typography>
      <TextField
        type="text"
        name={label}
        variant="outlined"
        color="secondary"
        label={'Type ' + label}
        onChange={onChangeAction}
        value={textValue}
        fullWidth
        required
        error={error}
        placeholder=""
        sx={{ mb: 2, marginLeft: '50px', width: '80%', ...FormField.field }}
        helperText={helperText}
      />
    </Box>
  )
}

export default TextFieldWithLabel
