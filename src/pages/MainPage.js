import React, { useState, useEffect } from "react";
import TopBar from "../components/topBar";
import NavBar from "../components/navbar/navbar.js";
import { MainPageStyles } from "./MainPageStyles.js";
import { Typography, Box } from "@mui/material";
import NgoList from "../components/ngoList/NgoList.js";
import { AllDevices, ArrowRight } from "../assets/icons/index.js";
import { Paper, Button } from "@mui/material";
import { BeInTouch, Calendar, SecurePayments, ImpactScaleDemo, People } from "../assets/icons/index.js";
import Footer from "../components/footer/Footer.js";

const MainPage = () => {
  const [isPaperVisible, setIsPaperVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 800; 

      setIsPaperVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <TopBar />
      <NavBar />
      <Box sx={MainPageStyles.mainBox}>
      <Typography
        variant="h2"
        sx={{
            ...MainPageStyles.mainTypo,
            top: '30%',
            left: '55%',
          }}
      >
        GET CLOSE TO THE CAUSE
      </Typography>
      <Typography
        variant="h2"
        sx={{
          ...MainPageStyles.mainTypo,
          top: '37%',
          left: '55%',
        }}
      >
        THAT YOU ARE SUPPORTING !
      </Typography>
      <Box
      sx={{...MainPageStyles.boxMainSubBox,
            top: '45%',
            left: '55%',      
        }}
    >
      <Typography
        variant="body1"
        sx={MainPageStyles.mainDescription}
      >
        Learn more about their favorite NGOs, <br />submit donations, participate in volunteer <br />opportunities, and engage in other
        activities <br />with a simple click from their phone or <br /> laptop.
      </Typography>
    </Box>
    </Box>
      <Box sx={MainPageStyles.ongListBox}>
        <Typography sx={MainPageStyles.componentTitle}>NGOs</Typography>
        <NgoList />
        <Box
          sx={MainPageStyles.paginationBox}
        >
          <Typography sx={MainPageStyles.paginationTypo}>Next</Typography>
          <ArrowRight width={'22px'} height={'22px'}/>
        </Box>
      </Box>
      <Paper
        className={isPaperVisible ? "visible" : ""}
        sx={{
            ...MainPageStyles.paper,
            backgroundColor: isPaperVisible ? '#9d6a89' : 'transparent',
            opacity: isPaperVisible ? 1 : 0,
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <Box
          sx={{
            ...MainPageStyles.iconBox,
            left: '1183px',
            top: '119px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <AllDevices sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Typography
          sx={{
            ...MainPageStyles.iconTypo,
            left: '1335px',
            top: '151px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          Access on all devices
        </Typography>
        <Typography
          sx={{
            ...MainPageStyles.iconTypo,
            left: '1335px',
            top: '333px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          Demonstrate impact
        </Typography>
        <Typography
          sx={{
            ...MainPageStyles.iconTypo,
            left: '1335px',
            top: '510px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          Secure Payments
        </Typography>
        <Typography
          sx={{
            ...MainPageStyles.iconTypo,
            left: '379px',
            top: '137px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          Be in touch with the Nonprofits
        </Typography>
        <Typography
          sx={{
            ...MainPageStyles.iconTypo,
            left: '379px',
            top: '321px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          Empower volunteers to contribute
        </Typography>
        <Typography
          sx={{
            ...MainPageStyles.iconTypo,
            left: '379px',
            top: '498px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          Encourage Recurring Giving
        </Typography>
        <Box
          sx={{
            ...MainPageStyles.iconBox,
            left: '245px',
            top: '127px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <BeInTouch sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Box
          sx={MainPageStyles.lineBox}
        >
          <Box
            sx={MainPageStyles.line}
          ></Box>
        </Box>
        <Box
          sx={{
            ...MainPageStyles.iconBox,
            left: '244px',
            top: '316px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <People sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Box
          sx={{
            ...MainPageStyles.iconBox,
            left: '1197px',
            top: '307px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <ImpactScaleDemo sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Box
          sx={{
            ...MainPageStyles.iconBox,
            left: '1197px',
            top: '495px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          
          <SecurePayments  sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Box
          sx={{
            ...MainPageStyles.iconBox,
            left: '239px',
            top: '488px',
            transform: isPaperVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <Calendar sx={{ width: '100%', height: '100%' }} />
        </Box>
      </Paper>
      <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '40vh',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={MainPageStyles.reasonsBox}></Box>
      <Button
        sx={MainPageStyles.reasonButton}
      >
          SEE MORE SUPPORTED STORIES
        </Button>
      
      <Typography
        sx={MainPageStyles.reasonTypo}
      >
        Reasons why we Love HOPESHARE
      </Typography>
    </Box>
    <Footer />
    </>
  );
};

export default MainPage;
