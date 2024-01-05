import React from 'react'
import { Box } from '@mui/material'
import MainCard from '../card/MainCard'
import { useTheme } from '@mui/material/styles'
import ListCardStyles from './ListCardStyles'

const ListCards = ({ cards }) => {
  const theme = useTheme()
  const classes = ListCardStyles(theme)

  return (
    <Box sx={classes.cardsBox}>
      {cards.map((card) => (
        <Box sx={classes.card}>
          <MainCard
            title={card.title}
            avatar={card.avatar}
            image={card.image}
            link={card.link}
          />
        </Box>
      ))}
    </Box>
  )
}

export default ListCards
