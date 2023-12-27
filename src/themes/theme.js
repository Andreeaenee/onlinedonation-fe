import { createTheme } from '@mui/material/styles'
import { Wenge, PersianPink } from '../constants/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: Wenge,
    },
    secondary: {
      main: PersianPink,
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
})

export default theme
