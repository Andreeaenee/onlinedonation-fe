import React from 'react'
import { Card, Typography, Box } from '@mui/material'
import CountUp from 'react-countup'
import { useTheme } from '@mui/material/styles'
import CountCardStyles from './CountCardStyles'
import { useTranslation } from 'react-i18next'

const CountCard = ({ title, bgColor, icon, number }) => {
  const theme = useTheme()
  const classes = CountCardStyles(theme)
  const { t } = useTranslation();

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
        {title === t('humanImpacted')
          ? 'm'
          : title === t('savedFoodWaste')
          ? 't'
          : ''}
      </Typography>
      <Box sx={classes.icon}>{icon}</Box>
    </Card>
  )
}

export default CountCard
