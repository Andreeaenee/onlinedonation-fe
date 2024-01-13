import { PersianPink, White100 } from "../constants/colors";

 export const FormField = {
  field: {
    backgroundColor: White100,
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: PersianPink,
      },
      '&.Mui-focused fieldset': {
        borderColor: PersianPink,
      },
    },
    '& label.Mui-focused': {
      color: PersianPink,
    },
  },
}
