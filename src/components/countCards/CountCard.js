import React from 'react'
import { Card, Typography, Box } from '@mui/material'
import CountUp from 'react-countup'
import { useTheme } from '@mui/material/styles'
import CountCardStyles from './CountCardStyles'

const CountCard = ({ title, bgColor, icon, number }) => {
  const theme = useTheme()
  const classes = CountCardStyles(theme)
  return (
    <Card
      sx={{
        ...classes.countCard,
        backgroundColor: bgColor,
      }}
    >
      <Typography sx={classes.title}>{title}</Typography>
      <Typography sx={classes.number}>
        <CountUp end={number} duration={3} separator=" " />{' '}
        {title === 'Humans Impacted'
          ? 'm'
          : title === 'Saved Food Waste'
          ? 't'
          : ''}
      </Typography>
      <Box sx={classes.icon}>{icon}</Box>
    </Card>
  )
}

export default CountCard
