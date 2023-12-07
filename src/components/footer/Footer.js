import React from 'react';
import { Box, Typography, Checkbox } from '@mui/material';
import { Ellipse, Logo } from '../../assets/icons';
import { Facebook, Instagram, Linkedin, Pinterest, Twitter } from '../../assets/icons/socialMedia';


const Footer =() => {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '75vh', flexDirection: 'column', alignItems: 'flex-start', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', left: 0, top: '-17px', width: '100%', height: '817px', flexDirection: 'column', alignItems: 'flex-start', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', left: 0, top: '207px', width: '100%', height: '610px', flexDirection: 'column', alignItems: 'flex-start', backgroundColor: '#a8b4a5', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', left: '850px', top: '73px', width: '278px', height: '356px', flexDirection: 'column', alignItems: 'flex-start', overflow: 'hidden' }}>
                <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '22px', width: '177px', height: '26px' }}>Online Donation</Typography>
                <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '65px', width: '177px', height: '26px' }}>Donor Management</Typography>
                <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '110px', width: '266px', height: 'min-content' }}>Organisation Management</Typography>
                <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '151px', width: '177px', height: '26px' }}>Events</Typography>
                <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '194px', width: '177px', height: '26px' }}>NGO’s</Typography>
                <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '237px', width: '177px', height: '26px' }}>Payments</Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'absolute', left: '0', top: '66px', width: '100%', height: '281px', overflow: 'visible' }}>
              <Ellipse />
            </Box>
          </Box>
          <Typography sx={{ color: '#353535', fontSize: '28px', lineHeight: '32px', fontWeight: 600, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '850px', top: '239px', width: '224px', height: '37px', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>PLATFORM</Typography>
          <Box sx={{ position: 'absolute', left: '1298px', top: '226px', width: '320px', height: '375px', flexDirection: 'column', alignItems: 'flex-start', overflow: 'hidden' }}>
            <Typography sx={{ color: '#353535', fontSize: '28px', lineHeight: '32px', fontWeight: 600, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '33px', top: '17px', width: '224px', height: '50px', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>SOCIAL MEDIA</Typography>
            <Typography sx={{ color: '#353535', fontSize: '28px', lineHeight: '32px', fontWeight: 600, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '33px', top: '17px', width: '224px', height: '50px', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>SOCIAL MEDIA</Typography>
            <Box sx={{ position: 'absolute', left: '3px', top: '68px', width: '207px', height: '263px', flexDirection: 'column', alignItems: 'flex-start', overflow: 'hidden' }}>
              <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '22px', width: '177px', height: '26px' }}>Instagram</Typography>
              <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '65px', width: '177px', height: '26px' }}>Facebook</Typography>
              <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '108px', width: '177px', height: '26px' }}>Pinterest</Typography>
              <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '151px', width: '177px', height: '26px' }}>Twitter</Typography>
              <Typography sx={{ color: '#353535', fontSize: '16px', lineHeight: '32px', fontWeight: 500, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '30px', top: '194px', width: '177px', height: '26px' }}>Linkedln</Typography>
            </Box>
            <Box sx={{ position: 'absolute', left: '210px', top: '135px', width: '24px', height: '24px' }}>
              <Facebook />
            </Box>
            <Box sx={{ position: 'absolute', left: '210px', top: '92px', width: '24px', height: '24px' }}>
              <Instagram />
            </Box>
            <Box sx={{ position: 'absolute', left: '210px', top: '184px', width: '24px', height: '24px' }}>
              <Pinterest />
            </Box>
            <Box sx={{ position: 'absolute', left: '207px', top: '258px', width: '26px', height: '26px' }}>
              <Linkedin />
            </Box>
            <Box sx={{ position: 'absolute', left: '210px', top: '221px', width: '24px', height: '24px' }}>
                <Twitter />
            </Box>
          </Box>
          <Box sx={{ position: 'absolute', left: '149px', top: '226px', width: '508px', height: '425px', flexDirection: 'column', alignItems: 'flex-start', overflow: 'hidden' }}>
            <Typography sx={{ color: '#f9f9f9', fontSize: '28px', lineHeight: '32px', fontWeight: 600, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '238px', top: '74px', width: '199px', height: '50px', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>SUBSCRIBE</Typography>
            <Box sx={{ position: 'absolute', left: '78px', top: '179px', width: '16px', height: '16px', overflow: 'visible' }}>
              <Checkbox  />
            </Box>
            <Typography sx={{ color: '#585858', fontSize: '16px', lineHeight: '32px', fontWeight: 600, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '110px', top: '165px', width: '319px', height: '99px', flexDirection: 'column' }}>Sign up for exclusive offers, original stories, events and more.</Typography>
            <Box sx={{ position: 'absolute', left: '71px', top: '19px', width: '137px', height: '80px' }}>
              <Logo />
            </Box>
            <Box sx={{ position: 'absolute', left: '102px', top: '276px', width: '307px', height: '36px', outline: 'solid 1px #9d6a89', outlineOffset: '-1px', borderRadius: '15px', backgroundColor: '#f9f9f9' }}></Box>
            <Typography sx={{ color: '#9d6a89', fontSize: '20px', lineHeight: '32px', fontWeight: 600, fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', letterSpacing: '0.03em', position: 'absolute', left: '155px', top: '281px', width: '199px', height: '50px', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>SUBSCRIBE</Typography>
          </Box>
        </Box>
    );
}

export default Footer;
