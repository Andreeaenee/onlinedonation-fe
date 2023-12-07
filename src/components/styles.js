import { AshGrey, White100 } from "../constants/colors";

export const Styles = {
    // TopBar
    topBarContainer: {
        width: '100%',
        height: '50px',
        backgroundColor: AshGrey,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    topBarType: {
        fontFamily: 'montserrat',
        color: White100,
        textAlign: 'center',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '32px',
        letterSpacing: '-0.84px',
    },
};

// Add mobile styles
const mobileStyles = {
    topBarContainer: {
        height: '70px', // Adjust the height for mobile
    },
    topBarType: {
        fontSize: '18px', // Adjust the font size for mobile
        lineHeight: '24px', // Adjust the line height for mobile
    },
};

// Merge the styles based on the screen width
const mergedStyles = {
    ...Styles,
    topBarContainer: {
        ...Styles.topBarContainer,
        ...mobileStyles.topBarContainer,
    },
    topBarType: {
        ...Styles.topBarType,
        ...mobileStyles.topBarType,
    },
};

export default mergedStyles;
