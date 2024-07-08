import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import DonationCardStyles from './DonationCardStyle'
import DonationCard from './DonationCardSquare'
import DonationCardRow from './DonationCardRows'

const ListDonationCard = ({ donations, page }) => {
  const theme = useTheme()
  const classes = DonationCardStyles(theme)
  if (!donations || !Array.isArray(donations)) {
    return (
      <Typography sx={classes.mainText}>
        No donations posted yet. Be the first to donate!
      </Typography>
    )
  }

  return page === 'donations-admin' ? (
    <Box sx={{ ...classes.cardList, gap: '0px' }}>
      {donations
        .slice()
        .reverse()
        .map((donation) => (
          <DonationCardRow donation={donation} />
        ))}
    </Box>
  ) : (
    <Box sx={classes.cardList}>
      {donations
        .slice()
        .reverse()
        .map((donation) => (
          <DonationCard donation={donation} />
        ))}
    </Box>
  )
}

export default ListDonationCard
