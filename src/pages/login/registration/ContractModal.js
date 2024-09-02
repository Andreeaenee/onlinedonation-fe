import React from 'react'
import { Box, Modal, Button } from '@mui/material'
import { DocusealForm } from '@docuseal/react'
import { t } from 'i18next'

const ContractModal = ({ open, handleClose, onComplete, email }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="sign-contract-modal"
      aria-describedby="sign-contract-modal-description"
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
        <DocusealForm
          src="http://85.120.206.58/d/tLzheb3mxuvfMk"
          email={email}
          logo={process.env.REACT_APP_API_PORT_FE + 'logo-nameless.png'}
          onComplete={(data) => {
            onComplete(data)
            handleClose()
          }}
          allowToResubmit="true"
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={handleClose} color="primary">
            {t('close')}
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ContractModal
