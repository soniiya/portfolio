import React,{useState} from 'react';
import {Toolbar,AppBar,Typography,Grid,Tabs,Tab,Box,Button,BottomNavigation,BottomNavigationAction} from '@mui/material';
import useStyles from '../style';
import {Link,useNavigate} from 'react-router-dom';

//const path=["/","/projects","/hireme"];

function Navbar(){
const classes=useStyles();
const navigate=useNavigate();
const [tab,setTab]=useState(0);

const handelclick = () => {
  navigate('/skills');
} 

    return(
    <>
    <AppBar sx={{bgcolor:'#0a1929'}}>   
    <Toolbar>
   
      <Grid container>

        <Grid item xs={2} sm={3} sx={{marginTop:'5px'}}>
         <Typography variant="h6">
          MY PORTFOLIO
        </Typography>
        </Grid>

        <Grid item xs={5} sm={6} md={7}>

          <Tabs textColor='inherit' indicatorColor='secondary' value={tab}
          onChange={(e,val) =>
            setTab(val)
          }>
         
          <Tab label="Home" to='/' component={Link} />
          <Tab label="Projects" to='/projects' component={Link} />
          <Tab label="Hire ME" to='/hireme' component={Link} />

          </Tabs>
        </Grid>

        <Grid item xs={1} sm={3} md={2}>
            <Box>
              <Button sx={{marginTop:'5px'}} variant='contained'
              onClick={ handelclick}
              >My Art Gallery</Button>
            </Box>
        </Grid>

      </Grid>

      </Toolbar>
    </AppBar>
    </>
    )
}

export default Navbar;

