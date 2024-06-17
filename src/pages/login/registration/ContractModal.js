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
          maxHeight: '90vh', // Set maximum height for the modal
          overflowY: 'auto', // Enable vertical scrolling
        }}
      >
        <DocusealForm
          src="https://docuseal.co/d/LEVGR9rhZYf86M"
          email="ionut.blidaru02@e-uvt.ro"
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
