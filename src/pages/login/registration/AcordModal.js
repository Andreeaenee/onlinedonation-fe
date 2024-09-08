import React, { useState } from 'react'
import { Box, Modal, Button, Typography, Checkbox } from '@mui/material'
import { t } from 'i18next'

const AcordModal = ({ open, handleClose, onComplete }) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="sign-acord-modal"
      aria-describedby="sign-acord-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: 800,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <Typography sx={{fontSize: '16px', padding: '20px'}}>
          {t('acordModal')}
        </Typography>
        <Box display="flex" alignItems="center" mt={2}>
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
          <Typography>{t('agreeTerms')}</Typography>
        </Box>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button
            onClick={onComplete}
            color="primary"
            disabled={!checked} // Disable if not checked
          >
            {t('confirm')}
          </Button>
          <Button onClick={handleClose} color="secondary">
            {t('close')}
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default AcordModal
