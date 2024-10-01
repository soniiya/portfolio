import React from 'react';
import profile from './profile/profile.jpg';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {useStyles} from '../style';
import './profile.css';

function Profile() {
const classes = useStyles();

return (
<div>
<ThemeProvider theme={theme}>
<div className='app__wrapper section__padding'>
<div className='app__wrapper_info section__padding'>
  <h2 className=''>Hi, I'm</h2>
  <h1 className='gradient-text'>SONIYA JAISWAL</h1>
  <p>Software developer</p>

<a href="https://drive.google.com/uc?export=download&id=1OWrWFGwaHxlsnoh0GrCydzfgq6amt4HA" target="_blank" rel="noopener noreferrer" download>
  <button className='profile_btn'>Download Resume</button>
</a>
</div>

{/* https://www.dropbox.com/scl/fi/yvynlbequt68bokdgjyhs/Soniya_resume2.pdf?dl=1 */}
{/* https://www.dropbox.com/scl/fi/8eubbh6knounxdd19uwo4/Soniya_resume.pdf?dl=1 */}

<div className='app__wrapper_img'>
<img src={profile} />

{/* <div className='gradient-circle'></div> */}

<div className='gradient-ring'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="350" height="350">
  <circle cx="100" cy="100" r="95" stroke="url(#gradient)" strokeWidth="1" fill="none" />
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#ff00cc" />
      <stop offset="100%" stopColor="#3333ff" />
    </linearGradient>
  </defs>
</svg>
</div>
</div>

</div> 
</ThemeProvider>

</div>
)
}

export default Profile

{/* <Grid container spacing={4} className={classes.app__wrapper}>

<Grid item xs={12} md={3}>
 <Typography className={classes.app__wrapper_info} variant="h4" gutterBottom> Hi, I'm</Typography>
 <Typography className={classes.app__wrapper_info} variant='h2' style={{alignContent:'center',marginBottom:'20px'}}> SONIA JAISWAL</Typography>
   <Typography className={classes.app__wrapper_info} variant="h7" paragraph>
    Software developer 
  </Typography>
  <Button className=''>Download Resume</Button>
</Grid>

</Grid> */}