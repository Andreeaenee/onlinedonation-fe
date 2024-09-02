import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Box, useMediaQuery } from '@mui/material'
import { CheckCircleIcon } from '../../../assets/icons'
import MainButton from '../../../components/MainButton'
import { useTheme } from '@mui/material/styles'
import LoginStyles from '../LoginStyles'
import { useTranslation } from 'react-i18next'

const VerifyEmailPage = () => {
  const { t } = useTranslation()
  const { userId } = useParams()
  const theme = useTheme()
  const classes = LoginStyles(theme)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [verificationStatus, setVerificationStatus] = useState('pending')

  useEffect(() => {
    setVerificationStatus('verified')
  }, [userId])

  return (
    <Box sx={classes.boxCenterPage}>
      <Typography sx={classes.typoFont20}>{t('emailVerification')}</Typography>
      <Typography sx={classes.typoFont16ColorBlack400}>
        {t('emailVerSuccess')}
      </Typography>
      <CheckCircleIcon width={'100px'} height={'100px'} />
      {!isMobile && (
        <Box sx={{ alignSelf: 'flex-end', marginTop: '50px' }}>
          <MainButton
            buttonText={t('continue')}
            width={'200px'}
            height={'40px'}
            fontSize={18}
            margin={'50px'}
            to={'/login/register/complete-registration/' + userId}
          />
        </Box>
      )}

      {/* Conditional rendering for expired verification */}
      {verificationStatus === 'expired' && (
        <Box sx={classes.boxCenterPage}>
          <Typography sx={classes.typoFont20}>{t('emailVerification')}</Typography>
          <Typography sx={classes.typoFont16ColorBlack400}>
            Email verification link has expired. Please try to register again.
          </Typography>
          {!isMobile && (
            <Box sx={{ alignSelf: 'flex-end' }}>
              <MainButton
                buttonText={'Go to registration'}
                width={'200px'}
                height={'40px'}
                fontSize={18}
                margin={'50px'}
                to={'/login/register'}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}

export default VerifyEmailPage
