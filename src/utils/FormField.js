import { PersianPink, White100 } from '../constants/colors'

export const FormField = {
  field: {
    borderColor: PersianPink,
    backgroundColor: White100,
    borderRadius: '10px',
    '& .MuiOutlinedInput-root': {
      borderColor: PersianPink,
      borderRadius: '10px',
      '&:hover fieldset': {
        borderColor: PersianPink,
        borderRadius: '10px',
      },
      '&.Mui-focused fieldset': {
        borderColor: PersianPink,
        borderRadius: '10px',
      },
    },
    '& label.Mui-focused': {
      color: PersianPink,
      borderRadius: '10px',
    },
  },
}
