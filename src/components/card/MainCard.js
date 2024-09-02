import React from 'react'
import { Avatar, Card, Box, Typography } from '@mui/material'
import MainButton from '../MainButton'
import { useTheme } from '@mui/material/styles'
import MainCardStyles from './MainCardStyle'
import { MountbattenPink, PersianPink } from '../../constants/colors'
import { useTranslation } from 'react-i18next'

const MainCard = ({ title, avatar, image, link, page }) => {
  const theme = useTheme()
  const classes = MainCardStyles(theme)
  const { t } = useTranslation();

  return (
    <Card sx={classes.card}>
      <Avatar src={avatar} sx={classes.avatar}></Avatar>
      <Box
        sx={{
          ...classes.imageBox,
          backgroundImage: `url(${image})`,
        }}
      ></Box>
      <Typography sx={classes.title}>{title}</Typography>
      <MainButton
        buttonText={page === t('platformPage') ? t('details') : t('donateNow')}
        width={'150px'}
        height={'35px'}
        onClick={() => window.open(link, '/')}
        backgroundColor={MountbattenPink}
        backgroundColorHover={PersianPink}
        mobileStyles={{ width: '125px', height: '20px' }}
        mobileStylesText={{ fontSize: '12px' }}
      ></MainButton>
    </Card>
  )
}

export default MainCard
