import React from 'react'
import { TextField, InputAdornment, styled, useMediaQuery } from '@mui/material'
import { MountbattenPink } from '../constants/colors'
import { SearchIcon } from '../assets/icons'
import { useTheme } from '@mui/material/styles'

const StyledTextField = styled(TextField)(
  ({ theme, isDonationsDashboard }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: MountbattenPink,
        borderRadius: '10px',
        width: '300px',
        height: isDonationsDashboard ? '42px' : '52px',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      },
      '&:hover fieldset': {
        borderColor: MountbattenPink,
      },
      '&.Mui-focused fieldset': {
        borderColor: MountbattenPink,
      },
      '& input': {
        padding:  isDonationsDashboard ? '6px 0 0px' : '15px 0 0px',
      },
    },
  })
)

const SearchField = ({ isDonationsDashboard }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <StyledTextField
      variant="outlined"
      placeholder="Search..."
      sx={{
        marginTop: isMobile || isDonationsDashboard ? '30px' : '50px',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{
              marginBottom: isMobile
                ? '2px'
                : isDonationsDashboard
                ? '-5px'
                : '-15px',
              padding: '8px',
            }}
          >
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      isDonationsDashboard={isDonationsDashboard} // Pass the prop to styled component
    />
  )
}

export default SearchField
