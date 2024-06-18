import React from 'react'
import { Box, Modal, Button } from '@mui/material'
import { DocusealForm } from '@docuseal/react'

const ContractModal = ({ open, handleClose }) => {
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
          src="http://85.120.206.58/d/TYL5z11XAnqk6o"
          email="andreaaene.12@gmail.com"
          logo="http://localhost:3001/logo.png"
          onComplete={(data) => console.log(data)}
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ContractModal
