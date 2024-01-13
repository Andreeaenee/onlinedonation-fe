import { Black100, Black400, White100 } from '../../constants/colors'

const NestedModalStyles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagesBox: {
    width: '700px',
    backgroundColor: White100,
    alignItems: 'center',
    borderRadius: '10px',
    transition: 'height 0.3s ease',
  },
  title: {
    fontWeight: 500,
    color: Black400,
    fontSize: '24px',
    textAlign: 'left',
    padding: '30px',
    transition: 'color 0.3s ease',
  },
  description: {
    fontWeight: 300,
    color: Black100,
    fontSize: '16px',
    textAlign: 'left',
    padding: '20px',
    transition: 'color 0.3s ease',
  },
  date: {
    fontWeight: 600,
    color: Black400,
    fontSize: '16px',
    marginTop: 'auto',
    textAlign: 'left',
    padding: '15px',
    transition: 'color 0.3s ease',
  },
  interval: {
    fontWeight: 500,
    color: Black400,
    fontSize: '18px',
    marginTop: 'auto',
    textAlign: 'left',
    padding: '15px',
    transition: 'color 0.3s ease',
  },
  avatar: {
    width: '100%',
    height: '350px',
    borderRadius: '10px',
    marginLeft: 'auto',
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  fieldTypo: {
    fontWeight: 500,
    color: Black400,
    fontSize: '16px',
    textAlign: 'left',
    padding: '20px',
    transition: 'color 0.3s ease',
  },
})

export default NestedModalStyles
