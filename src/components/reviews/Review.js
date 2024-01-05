import React from 'react'
import { Avatar, Typography, Box, Grid } from '@mui/material'
import ReviewStyles from './ReviewStyle'
import { useTheme } from '@mui/material/styles'

const Review = ({ avatar, name, review, date }) => {
  const theme = useTheme()
  const classes = ReviewStyles(theme)
  return (
    <Box sx={classes.horHr}>
      <Grid
        container
        alignItems="center"
        spacing={2}
        justifyContent="flex-start"
        sx={{ width: '100%', marginTop: '25px', marginLeft: '20px' }}
      >
        <Grid item xs={2}>
          <Avatar sx={classes.avatar} src={avatar} />
        </Grid>
        <Grid item xs={4}>
          <Typography sx={classes.name}>{name}</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sm={6}
          textAlign="right"
        >
          <Typography sx={classes.date}>Date: {date}</Typography>
        </Grid>
      </Grid>
      <Typography sx={classes.review}>{review}</Typography>
      <Box sx={classes.horHr} />
    </Box>
  )
}

export default Review
