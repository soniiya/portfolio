import {makeStyles} from '@mui/styles';
import background from './components/profile/background.png';
const useStyles = makeStyles({

    "@global": {
      body: {
        backgroundColor: "#0a1929",
      }
    },

    background_wrapper:{
      width:'100%',
      height:'98vh',
      background:`url(${background})`
    },

    app__wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    
    app__wrapper_info: {
      flex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      color:'white'
    },
    
    app__wrapper_img: {
      flex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '2rem'
    },

    app__wrapper_footer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign:'center'
    },

  cardGrid:{
    padding:'100px 0',
    marginBottom:'20px'
  },
  card:{
    width:'100%',
    height:'100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia:{
    paddingTop: '45.25%', //16:9
    maxHeight:'50%'
  },
  cardcontent:{
    flexGrow: 1,
    marginTop:'20px',
  },
 
})

export default useStyles