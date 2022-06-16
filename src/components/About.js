import React from 'react'
import {Container, Typography,Card,CardContent,CardAction,Button,Grid} from '@mui/material';
import profile from './profile/profile.jpg';
import useStyle from '../style';

function About() {
const classes=useStyle(); 

  return (
 
<div className={classes.background_wrapper}>
<Grid container spacing={4} className={classes.app__wrapper}>

<Grid item xs={12} md={3}>
 <Typography className={classes.app__wrapper_info} variant="h4" gutterBottom> Hi, I'm</Typography>
 <Typography className={classes.app__wrapper_info} variant='h2' style={{color:'crimson',alignContent:'center',marginBottom:'20px'}}> SONIA JAISWAL</Typography>
   <Typography className={classes.app__wrapper_info} variant="h7" paragraph>
    A young web developer. 
  </Typography>
</Grid>

<Grid item md={1} />

 <Grid item xs={12} md={4} className={classes.app__wrapper_img}>
  <img src={profile} alt="image" style={{borderRadius:'50%'}} width='430px' height='430px' />
 </Grid>

</Grid>
   </div> 

  )
}

export default About