import { Typography, Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MOBILE_BREAKPOINT } from '../constants/constants'

const MainButton = ({
  icon,
  buttonText,
  width,
  height,
  fontSize,
  lineHeight,
  margin,
  marginLeft,
  marginTop,
  onClick,
  to,
  disabled,
  backgroundColor,
  backgroundColorHover,
  borderColor,
  textColor,
  mobileStyles,
  mobileStylesText,
}) => {
  const nav = useNavigate()
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)
  return (
    <Button
      onClick={(event) => {
        event.preventDefault()
        if (!disabled) {
          if (to) {
            nav(to)
          }
          if (onClick) {
            onClick(event)
          }
        }
      }}
      variant="contained"
      startIcon={icon}
      sx={{
        backgroundColor: backgroundColor,
        padding: '12px 24px',
        borderRadius: '12px',
        gap: '8px',
        '&:hover': {
          backgroundColor: backgroundColorHover,
        },
        width,
        height,
        margin,
        marginLeft,
        marginTop,
        border: `2px solid ${borderColor}`,
        ...(isMobile && mobileStyles),
      }}
      disabled={disabled}
    >
      <Typography
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: 500,
          lineHeight: `${lineHeight}px`,
          letterSpacing: '-0.005em',
          textAlign: 'left',
          textTransform: 'none',
          color: textColor,
          whiteSpace: 'nowrap',
          ...(isMobile && mobileStylesText),
        }}
      >
        {buttonText}
      </Typography>
    </Button>
  )
}

export default MainButton
