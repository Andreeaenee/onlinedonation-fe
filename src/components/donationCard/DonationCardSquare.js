import { Card, Typography, Box, Avatar, ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DonationCardStyles from './DonationCardStyle';
import { useEffect, useState } from 'react';
import ClaimDonationModal from '../nestedModalDonation/ClaimDonationModal';
import RestaurantLogo from '../../assets/photos/cardPhoto/restaurantLogo.png';
import dayjs from 'dayjs';
import { truncateString } from '../../utils/StringUtils';
import { getUserById } from '../../api/getUsers';

const DonationCard = ({ donation }) => {
  const theme = useTheme();
  const classes = DonationCardStyles(theme);
  const [openModal, setOpenModal] = useState(false);
  const date = dayjs(donation.date).format('DD.MM.YYYY');
  const [restaurantData, setRestaurantData] = useState({});

  useEffect(() => {
    getUserById(donation.restaurant_id)
      .then((response) => {
        setRestaurantData(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [donation]);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <ButtonBase onClick={handleClick}>
        <Card sx={classes.card}>
          <Box sx={classes.imagesBox}>
            <Avatar src={restaurantData.logoUrl || RestaurantLogo} sx={classes.icon} />
            <Typography sx={{ ...classes.name, flexGrow: 1, textAlign: 'left' }}>{restaurantData.name}</Typography>
            <Avatar
              src={donation.imageUrl}
              sx={classes.photo}
            />
          </Box>
          <Typography sx={classes.title}>{donation.name}</Typography>
          <Typography sx={classes.description}>
            {truncateString(donation.description, 100)}
          </Typography>
          <Typography sx={classes.date}>
            Date: <span style={{ fontWeight: 300 }}>{date}</span>
          </Typography>
        </Card>
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

export default DonationCard;
