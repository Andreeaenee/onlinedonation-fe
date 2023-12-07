import { Black400, Black800, White100, Black100 } from '../../constants/colors';

export const NavbarStyles = {
    appBar: {
        backgroundColor: White100,
    },
    logo: {
        display: { xs: 'none', md: 'flex' },
        mr: 1,
    },
    pagesBox: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageButton: {
        mx: 2,
        color: Black800,
        display: 'block',
        fontFamily: 'montserrat',
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '32px',
    },
    arrowButton: {
        position: 'absolute',
        bottom: '10px',
        left: '105%',
        transform: 'translateX(-50%)',
    },
    loginBox: {
        flexGrow: 0,
    },
    buttonTitle: {
        color: Black400,
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 500,
    },
    buttonDescription: {
        color: Black100,
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 300,
    },
    menuItemBox: {
        display: 'flex',
        width: "258px",
        border: "0.5px solid #2A9A0E",
        backgroundColor: White100,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        height: "46px",
        flexShrink: 0,
        alignItems: 'center',
        padding: '7px',
    },
};

// Add responsive styles
const responsiveStyles = {
    '@media (max-width: 600px)': {
        pagesBox: {
            justifyContent: 'flex-start', // Adjust the alignment for small screens
        },
        pageButton: {
            mx: 1, // Adjust the margin for small screens
            fontSize: '14px', // Adjust the font size for small screens
        },
        loginBox: {
            display: 'none', // Hide the login box for small screens
        },
        arrowButton: {
            display: 'none', // Hide the arrow button for small screens
        },
    },
};

// Merge the styles with responsive styles
const mergedStyles = {
    ...NavbarStyles,
    ...responsiveStyles,
};

export default mergedStyles;
