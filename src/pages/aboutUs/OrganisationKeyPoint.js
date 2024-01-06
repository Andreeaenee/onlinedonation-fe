import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import styles from './styles'

const OrganisationKeyPoint = ({ title, icon, text1, text2, text3 }) => {
    const theme = useTheme()
    const classes = styles(theme)
    return (
      <Grid item xs={4} sm={4}>
        <Box sx={classes.gridBox}>
          {icon}
          <Typography sx={classes.gridTitle}>{title}</Typography>
        </Box>
        <Typography sx={classes.gridText}>{text1}</Typography> <br />
        <Typography sx={classes.gridText}>{text2}</Typography>
        <br />
        <Typography sx={classes.gridText}>{text3}</Typography>
      </Grid>
    )
  }

  export default OrganisationKeyPoint