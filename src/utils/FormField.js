import { PersianPink, White100 } from '../constants/colors'

export const FormField = {
  field: {
    backgroundColor: White100,
    borderRadius: '15px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '15px',
      '&:hover fieldset': {
        borderColor: PersianPink,
        borderRadius: '15px',
      },
      '&.Mui-focused fieldset': {
        borderColor: PersianPink,
        borderRadius: '15px',
      },
    },
    '& label.Mui-focused': {
      color: PersianPink,
      borderRadius: '15px',
    },
  },
}


