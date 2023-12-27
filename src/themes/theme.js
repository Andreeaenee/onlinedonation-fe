import { createMuiTheme } from '@material-ui/core/styles'
import { Wenge, PersianPink } from '../constants/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Wenge,
    },
    secondary: {
      main: PersianPink,
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
})

export default theme
