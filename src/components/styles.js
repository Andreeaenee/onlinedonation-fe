import { AshGrey, White100 } from "../constants/colors";

export const Styles = {
    //TopBar
    topBarContainer:{
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
        fontSyle: 'normal',
        fontWeight: '600',
        lineHeight: '32px',
        letterSpacing: '-0.84px',
    }
}
export default Styles;