
import { White100 } from '../../constants/colors'

const ListCardStyles = (theme) => ({
    cardsBox:{
        backgroundColor: White100,
        borderRadius: '10px',
        marginLeft: '285px',
        marginRight: '320px',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: '0px',
            marginRight: '0px',
            padding: '10px',
        },
    },
    card:{
        width: '25%',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        },
    }
})


export default ListCardStyles