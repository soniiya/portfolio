import {makeStyles} from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import { createTheme } from '@mui/material/styles';
import Viewimage from './components/Viewimage.js';


const useStyles = makeStyles((theme) => ({

    // "@global": {
    //   body: {
    //     backgroundColor: "#0a1929",
    //     // backgroundImage:`url(${background})`,
    //     // backgroundRepeat:'no-repeat',
    //     // backgroundSize:'cover'
    //   }
    // },


    // modal: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // modalContent: {
    //   backgroundColor: newtheme.palette.background.paper,
    //   boxShadow: newtheme.shadows[5],
    //   padding: newtheme.spacing(2, 4, 3),
    //   outline: 'none',
    //   maxWidth: '80vw',
    //   maxHeight: '80vh',
    // },

    
  heading: {
    fontFamily: 'var(--font-base)',
    color:'white',
     textAlign: 'center',
     textDecoration: '2px underline linear-gradient(to right, #ff00cc, #3333ff)',
      margin: '4rem 0rem' 
    }, 

  cardGrid:{
    padding:'30px 0',
    margin:'2rem 0'
  },
  card:{
    marginTop: '2rem',
    width:'100%',
    height:'100%',
    display: 'flex',
    flexDirection: 'column',
    // transition: 'transform 11s ease',
    // backgroundColor: '#f0f0f0',
    // boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    // filter: 'blur(0)',
    //   transform: 'scale(1)', // Add the initial scale transformation

    '&:hover': {
      transform: 'scale(1.025)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },

    '&.active': {
      width: '250px',
      height: '250px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      filter: 'blur(4px)',
    },
  },

  projectcardMedia:{
    //paddingTop: '45.25%', //16:9
    maxHeight:'50%'
  },

  cardcontent:{
    flexGrow: 1,
    marginTop:'20px',
  },

  container:{
    display: 'flex'
  },

  footerContainer: {
    display: 'flex',
    '@media (max-width: 280px)': {
      flexDirection: 'column',
    }
  },
  
  content: {
    width: '100%',
    maxWidth: '1140px',
    margin: '1rem 1rem',  
  },

  viewimage_container: {
    width: '300px',
    height: '200px',

  '&.img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out'
  }
}
 
}));

export {useStyles}