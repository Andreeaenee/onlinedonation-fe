import React from 'react'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import DonationCardStyles from './DonationCardStyle'
import DonationCard from './DonationCard'

const ListDonationCard = ({ donations }) => {
  const theme = useTheme()
  const classes = DonationCardStyles(theme)
  if (!donations || !Array.isArray(donations)) {
    return <p>No donations available</p>
  }
  return (
    <Box sx={classes.cardList}>
      {donations.map((donation) => (
        <DonationCard
          donation={donation}
        />
      ))}
    </Box>
  )
}

export default ListDonationCard
