import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, ButtonBase } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dayjs from 'dayjs';
import ClaimDonationModal from '../nestedModalDonation/ClaimDonationModal';
import { truncateString } from '../../utils/StringUtils';

const DonationCardRow = ({ donation }) => {
  const [openModal, setOpenModal] = useState(false);
  const date = dayjs(donation.post_date).format('DD.MM.YYYY');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'orange';
      case 'Completed':
        return 'green';
      case 'Failed':
        return 'red';
      default:
        return 'gray';
    }
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <ButtonBase onClick={handleClick} sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 24px',
            borderBottom: '1px solid #e0e0e0',
            width: '100%',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            marginBottom: '16px',
            '&:hover': {
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={2}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>
               {donation.restaurant_name || 'Restaurant Name'}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                {date}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                {donation.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                {donation.description}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  backgroundColor: getStatusColor(donation.donation_id),
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                <Typography variant="body2" sx={{ color: 'white' }}>
                  {donation.donation_id}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </ButtonBase>
      {openModal && (
        <ClaimDonationModal
          donation={donation}
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
    </>
  );
};

export default DonationCardRow;
