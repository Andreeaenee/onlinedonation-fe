import React from 'react'
import { Box } from '@mui/material'
import MainCard from '../card/MainCard'
import { useTheme } from '@mui/material/styles'
import ListCardStyles from './ListCardStyles'
import { useTranslation } from 'react-i18next'

const ListCards = ({ cards, page }) => {
  const theme = useTheme()
  const classes = ListCardStyles(theme)
  const { t } = useTranslation()

  return (
    <Box
      sx={
        page === t('platformPage') ? classes.cardsBoxPlatform : classes.cardsBox
      }
    >
      {cards.length !== 0 &&
        cards.map((card) => (
          <Box
            key={card.id}
            sx={
              page === t('platformPage') ? classes.cardPlatform : classes.card
            }
          >
            <MainCard
              page={page}
              title={card.name}
              avatar={card.logoUrl}
              image={card.coverPhotoUrl}
              link={card.link}
            />
          </Box>
        ))}
    </Box>
  )
}

export default ListCards
