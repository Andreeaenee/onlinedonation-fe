import React from "react";
import { Box, Typography } from "@mui/material";
import Styles from "./styles";

export const TopBar = () => {
    return (
        <Box sx={Styles.topBarContainer}>
            <Typography sx={Styles.topBarType}>
                Inspiring a New generation by Dreaming and Achieving!!!
            </Typography>
        </Box>
    );
};

export default TopBar;
