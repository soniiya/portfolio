import React,{useState,useEffect} from 'react';
import {Toolbar,AppBar,Typography,Grid,Tabs,Tab} from '@mui/material';
//import {Instagram,Twitter,LinkedIn} from '@mui/icons-material';
import {Link,useNavigate} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {useStyles} from '../style';

function Navbar(){
//const classes=useStyles();
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
    <div>
    <ThemeProvider theme={theme}>
    <AppBar sx={{bgcolor:'#0a1929'}}>   
    <Toolbar>
    <Grid container>

       {/* Main Content  */}
      <Grid item xs={5} sm={3} marginTop='5px' sx={{ display: 'flex', alignItems: 'center', justifyContent:'flex-start' }}>
        <Typography variant="h6">
          <Link to='/'>My Portfolio</Link>
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
           <Tab label="Arts" to='/Arts' component={Link} />
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
      
      {/* Render additional tabs when toggle is open  */}
      {(isToggleOpen && isSmallDevice) && (
        <Grid item xs={12} sx={{ marginTop: '10px' }}>
          <Tabs value={tab} onChange={(e, val) => setTab(val)} orientation="vertical"
            textColor="inherit"
            indicatorColor="secondary"
            variant="standard"
            sx={{ marginBottom: '5px'}}>
            <Tab label="Home" to='/' component={Link} />
            <Tab label="Projects" to='/projects' component={Link} />
            <Tab label="Hire ME" to='/hireme' component={Link} />
            <Tab label="Arts" to='/Arts' component={Link} />
          </Tabs>
        </Grid>
      )} 
    </Grid>
    </Toolbar>
    </AppBar>
    </ThemeProvider>

    </div>
    )
}

export default Navbar;

