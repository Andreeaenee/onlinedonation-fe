import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export default function CustomizedSnackbars({
  openSnackBar,
  setOpenSnackBar,
  message,
  severity,
}) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackBar(false)
  }

  return (
    <div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={severity ? severity : 'success'}
          variant="filled"
          sx={{ width: '150%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}
