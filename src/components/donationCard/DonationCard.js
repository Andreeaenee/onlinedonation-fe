import { Card, Typography, Box, Avatar, ButtonBase } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import DonationCardStyles from './DonationCardStyle'

const DonationCard = ({ icon, title, photo, name, description, date }) => {
  const theme = useTheme()
  const classes = DonationCardStyles(theme)

  const handleClick = () => {
    // handle click event here
  }

  return (
    <ButtonBase onClick={handleClick}>
      <Card sx={classes.card}>
        <Box sx={classes.imagesBox}>
          <Avatar src={icon} sx={classes.icon} />
          <Typography sx={classes.name}>{name}</Typography>
          <Avatar src={photo} sx={classes.photo} />
        </Box>
        <Typography sx={classes.title}>{title}</Typography>
        <Typography sx={classes.description}>{description}</Typography>
        <Typography sx={classes.date}>
          Date: <span>{date}</span>
        </Typography>
      </Card>
    </ButtonBase>
  )
}

export default DonationCard
