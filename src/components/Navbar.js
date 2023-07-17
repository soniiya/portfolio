import React,{useState,useEffect} from 'react';
import {Toolbar,AppBar,Typography,Grid,Tabs,Tab,Box,Button,BottomNavigation,BottomNavigationAction} from '@mui/material';
import {Instagram,Twitter,LinkedIn} from '@mui/icons-material';
import {Link,useNavigate} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {useStyles} from '../style';

function Navbar(){
const classes=useStyles();
const navigate=useNavigate();
const [tab,setTab]=useState(0);

const [isToggleOpen, setIsToggleOpen] = useState(false);
const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 600);

const handleToggle = () => {
  setIsToggleOpen((prevState) => !prevState);
};

const handelclick = () => {
  navigate('/Arts');
} 

useEffect(() => {
  const handleResize = () => {
    setIsSmallDevice(window.innerWidth <= 600);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


    return(
    <>
    <ThemeProvider theme={theme}>

    <AppBar sx={{bgcolor:'#0a1929'}}>   
    <Toolbar>
    <Grid container>
      {/* Main Content */}
      <Grid item xs={5} sm={3} marginTop='5px' sx={{ display: 'flex', alignItems: 'center', justifyContent:'flex-start' }}>
        <Typography variant="h6">
          MY PORTFOLIO
        </Typography>
      </Grid>

      {!isSmallDevice && (
        <>
         <Grid item sm={6} md={7} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
         <Tabs
           textColor="inherit"
           indicatorColor="secondary"
           value={tab}
           onChange={(e, val) => setTab(val)}
           variant="standard"
           sx={{ marginBottom: '5px'}}
         >
           <Tab label="Home" to="/" component={Link} />
           <Tab label="Projects" to="/projects" component={Link} />
           <Tab label="Hire ME" to="/hireme" component={Link} />
         </Tabs>
       </Grid>

       </>
      )}

     {isSmallDevice && (
       <Grid item xs={7} sm={3} marginTop='5px' sx={{ display: 'flex', alignItems: 'center',justifyContent: 'flex-end' }} >
       <button onClick={handleToggle}  style={{ backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
      }}>
        {isToggleOpen ? <MdOutlineRestaurantMenu size={24} style={{ color: 'white' }} /> 
        : <GiHamburgerMenu size={24} style={{ color: 'white' }} />}
        </button>
       </Grid>
     )} 
      
      {/* Render additional tabs when toggle is open */}
      {(isToggleOpen && isSmallDevice) && (
        <Grid item xs={12} sx={{ marginTop: '10px' }}>
          <Tabs value={tab} onChange={(e, val) => setTab(val)} orientation="vertical">
            <Tab label="Home" to='/' component={Link} />
            <Tab label="Projects" to='/projects' component={Link} />
            <Tab label="Hire ME" to='/hireme' component={Link} />
          </Tabs>
        </Grid>
      )} 

    </Grid>

      {/* <Grid container alignItems='center' justifyContent='flex-end'>

        <Grid item xs={2} sm={3} marginTop='5px' sx={{ display: 'flex', alignItems: 'center' }} >
         <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          MY PORTFOLIO
        </Typography>
        </Grid>

        <Grid item xs={10} sm={6} md={7} sx={{marginLeft:'auto'}}>

          <Tabs textColor='inherit' indicatorColor='secondary' value={tab}
          onChange={(e,val) =>
            setTab(val)
          }>
         
          <Tab label="Home" to='/' component={Link} />
          <Tab label="Projects" to='/projects' component={Link} />
          <Tab label="Hire ME" to='/hireme' component={Link} />

          </Tabs>
        </Grid>

      <Grid item xs={12} sx={{ display: { sm: 'none' } }}>
        <button onClick={handleToggle}>
          {isToggleOpen ? <MdOutlineRestaurantMenu size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </Grid>
      
   
      {isToggleOpen && (
        <Grid item xs={12} sx={{ marginTop: '10px' }}>
          <Tabs value={tab} onChange={(e, val) => setTab(val)}>
            <Tab label="Home" to='/' component={Link} />
            <Tab label="Projects" to='/projects' component={Link} />
            <Tab label="Hire ME" to='/hireme' component={Link} />
          </Tabs>
        </Grid>
      )} */}



        

        {/* <Grid item  xs={1} sm={3} md={2} >
            <Box>
              <Button sx={{ display:{xs:'block'}, marginTop:'5px',padding: '4px 8px', // Adjust the padding as per your preference
     }} variant='contained'
              onClick={ handelclick}
              >My Art Gallery</Button>
            </Box>
        </Grid> */}

      {/* </Grid> */}

      </Toolbar>
    </AppBar>
    </ThemeProvider>
    </>
    )
}

export default Navbar;

