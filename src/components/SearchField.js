import React from 'react'
import { TextField, InputAdornment, styled, useMediaQuery } from '@mui/material'
import { MountbattenPink } from '../constants/colors'
import { SearchIcon } from '../assets/icons'
import { useTheme } from '@mui/material/styles'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: MountbattenPink,
      borderRadius: '10px',
      width: '300px',
      height: '52px',
      [theme.breakpoints.down('sm')]: {
        width: '100%', // Adjust width for mobile
      },
    },
    '&:hover fieldset': {
      borderColor: MountbattenPink,
    },
    '&.Mui-focused fieldset': {
      borderColor: MountbattenPink,
    },
  },
}))

const SearchField = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <StyledTextField
      variant="outlined"
      placeholder="Search..."
      sx={{
        marginTop: isMobile ? '20px' : '50px', // Adjust marginTop for mobile
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{ marginBottom: isMobile ? '2px' : '5px', padding: '8px' }}
          >
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchField
