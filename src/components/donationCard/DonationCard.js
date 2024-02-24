import { Card, Typography, Box, Avatar, ButtonBase } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import DonationCardStyles from './DonationCardStyle'
import { useState } from 'react'
import ClaimDonationModal from '../nestedModalDonation/ClaimDonationModal'
import RestaurantLogo from '../../assets/photos/cardPhoto/restaurantLogo.png'
import Meal from '../../assets/photos/cardPhoto/meal.png'
import { fetchDonationsData } from '../../api/getDonations'

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return `${description.substring(0, maxLength)}...`
  }
  return description
}

const DonationCard = ({ donation }) => {
  const theme = useTheme()
  const classes = DonationCardStyles(theme)
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <>
      <ButtonBase onClick={handleClick}>
        <Card sx={classes.card}>
          <Box sx={classes.imagesBox}>
            <Avatar src={RestaurantLogo} sx={classes.icon} />
            <Typography sx={classes.name}>Restaurant Name</Typography>
            <Avatar src={Meal} sx={classes.photo} />
          </Box>
          <Typography sx={classes.title}>{donation.name}</Typography>
          <Typography sx={classes.description}>
            {truncateDescription(donation.description, 100)}
          </Typography>
          <Typography sx={classes.date}>
            Date: <span style={{ fontWeight: 300 }}>{donation.date}</span>
          </Typography>
        </Card>
      </ButtonBase>
      {openModal && (
        <ClaimDonationModal
          donation={donation}
          open={openModal}
          onClose={() => {
            setOpenModal(false)
          }}
        />
      )}
    </>
  )
}

export default DonationCard