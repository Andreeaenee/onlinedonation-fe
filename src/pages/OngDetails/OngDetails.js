import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/navbar";
import TopBar from "../../components/topBar";
import { Box, Typography, CssBaseline } from '@mui/material';
import HeaderImage1 from '../../assets/photos/headerImage.png';
import DonateImage from '../../assets/photos/donateImage.png';

const OngDetails = ({ ngoslist }) => {
  return (
    <>
      <CssBaseline />
      <TopBar />
      <NavBar />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '45vh',
          flexDirection: 'column',
          alignItems: 'flex-start',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 1,
            width: '100%',
            height: '307px',
            backgroundImage: `url(${HeaderImage1})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        ></Box>
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 1,
            width: '100%',
            height: '307px',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(6, 7, 7, 0.6)',
            },
          }}
        ></Box>
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontSize: '48px',
            lineHeight: '32px',
            fontWeight: 600,
            fontFamily: 'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
            letterSpacing: '-0.03em',
            position: 'absolute',
            left: '50%',
            top: '98px',
            transform: 'translateX(-50%)',
          }}
        >
          Ora lui Robert
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: '#fff',
            fontSize: '20px',
            lineHeight: '32px',
            fontFamily: 'Poor Story, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
            letterSpacing: '-0.03em',
            position: 'absolute',
            left: '50%',
            top: '155px',
            transform: 'translateX(-50%)',
          }}
        >
          Home / Ora lui Robert
        </Typography>
      </Box>
      
      <Box
      sx={{
        position: 'relative',
        width: '80%',
        height: '100vh',
        overflow: 'hidden',
        marginLeft: '10%',
        

        
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '39px',
          top: '38px',
          width: '116px',
          height: '124px',
          backgroundImage: `url(https://placehold.co/116x124)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          left: '159px',
          top: '76px',
          width: '423px',
          height: '292px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#585858',
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            fontFamily: 'Poppins, sans-serif',
            position: 'absolute',
            left: '30px',
            top: '10px',
            width: '181px',
            height: '43px',
          }}
        >
          Cine suntem?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#585858',
            fontSize: '18px',
            lineHeight: '32px',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            fontFamily: 'Poppins, sans-serif',
            position: 'absolute',
            left: '17px',
            top: '86px',
            width: '387px',
            height: '229px',
          }}
        >
          lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '175px',
          top: '406px',
          width: '396px',
          height: '261px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#585858',
            fontSize: '18px',
            lineHeight: '32px',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            fontFamily: 'Poppins, sans-serif',
            position: 'absolute',
            left: '-1px',
            top: '55px',
            width: '387px',
            height: '229px',
          }}
        >
          lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#585858',
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            fontFamily: 'Poppins, sans-serif',
            position: 'absolute',
            left: '1px',
            top: '-2px',
            width: '293px',
            height: '43px',
          }}
        >
          Obiectivele organizatiei
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '1129px',
          top: '428px',
          width: '425px',
          height: '492px',
          borderRadius: '15px',
          backgroundImage: `url(https://placehold.co/425x492)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          left: '1028px',
          top: '0',
          width: '425px',
          height: '492px',
          borderRadius: '15px',
          backgroundImage: `url(https://placehold.co/425x492)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          left: '675px',
          top: '222px',
          width: '425px',
          height: '492px',
          borderRadius: '15px',
          backgroundImage: `url(https://placehold.co/425x492)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></Box>
    </Box>


    <Box
      sx={{
        opacity: 0.7,
        position: 'relative',
        width: '100%',
        height: '412px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        backgroundColor: '#060707',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '1960px',
          height: '412px',
          backgroundImage: `url(${DonateImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          left: '1606px',
          top: '188px',
          width: '173px',
          height: '36px',
          borderRadius: '15px',
          backgroundColor: '#ee92c2',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          left: '1606px',
          top: '272px',
          width: '173px',
          height: '36px',
          borderRadius: '15px',
          backgroundColor: '#725d68',
        }}
      ></Box>
      <Typography
        variant="body1"
        sx={{
          color: '#f9f9f9',
          fontSize: '20px',
          lineHeight: '32px',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif',
          position: 'absolute',
          left: '1663px',
          top: '188px',
          width: '82px',
          height: '32px',
        }}
      >
        Donate
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#f9f9f9',
          fontSize: '20px',
          lineHeight: '32px',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif',
          position: 'absolute',
          left: '1656px',
          top: '274px',
          width: '82px',
          height: '32px',
        }}
      >
        Join Us
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          left: '1347px',
          top: '38px',
          width: '644px',
          height: '99px',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#f9f9f9',
            fontSize: '50px',
            lineHeight: '40px',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          You Can Help The Poor
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: '#f9f9f9',
            fontSize: '50px',
            lineHeight: '40px',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          With Us
        </Typography>
      </Box>
    </Box>
    
    
    <Box
  sx={{
    position: 'relative',
    width: '424px',
    height: '192px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    mx: 'auto', // Center horizontally
    my: 'auto', // Center vertically
  }}
>
  <Typography
    variant="h4"
    sx={{
      color: '#585858',
      fontSize: '22px',
      lineHeight: '32px',
      fontWeight: 600,
      fontFamily: 'Poppins, sans-serif',
      letterSpacing: '-0.03em',
      position: 'absolute',
      left: '162px',
      top: '15px',
      width: '137px',
      height: '24px',
    }}
  >
    CONTACT
  </Typography>
  <Box
    sx={{
      position: 'absolute',
      right: '-10px',
      top: '74px',
      width: '347px',
      height: '87px',
      flexDirection: 'column',
    }}
  >
    <Typography
      variant="body1"
      sx={{
        color: '#000',
        fontSize: '18px',
        lineHeight: '32px',
        fontWeight: 500,
        fontFamily: 'Poppins, sans-serif',
        letterSpacing: '-0.03em',
      }}
    >
      Email: contact@oraluirobert.com
    </Typography>
    <Typography
      variant="body1"
      sx={{
        marginTop: 0,
        color: '#000',
        fontSize: '18px',
        lineHeight: '32px',
        fontWeight: 500,
        fontFamily: 'Poppins, sans-serif',
        letterSpacing: '-0.03em',
      }}
    >
      Telefon: +40762765603
    </Typography>
  </Box>
</Box>

      <Footer />
    </>
  );
}

export default OngDetails;
