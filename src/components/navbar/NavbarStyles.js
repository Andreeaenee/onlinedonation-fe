import { Black800, White100 } from '../../constants/colors';

export const NavbarStyles = {
    appBar:{
        backgroundColor: White100,
    },
    logo:{
        display: { xs: 'none', md: 'flex' }, 
        mr: 1, 
    },
    pagesBox:{
        flexGrow: 1, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageButton:{
        mx: 2, 
        color: Black800, 
        display: 'block', 
        fontFamily: 'montserrat', 
        textTransform: 'capitalize', 
        fontSize:'16px', 
        fontWeight: 400, 
        lineHeight: '32px', 
    },
    arrowButton:{
        position: 'absolute', 
        bottom: '10px', 
        left: '105%', 
        transform: 'translateX(-50%)',
    },
    loginBox:{
        flexGrow: 0,
    },
}
export default NavbarStyles;