import React from 'react';
import profile from './profile/profile.jpg';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {useStyles} from '../style';
import './profile.css';


const downloadFile = () => {
  const fileUrl = 'https://www.dropbox.com/s/z6s0g7936niuvc7/My-resume.pdf?dl=1';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'myresume.pdf';
  link.click();
};

function Profile() {
const classes=useStyles();

return (
<>
<ThemeProvider theme={theme}>
<div className='app__wrapper section__padding'>
<div className='app__wrapper_info section__padding'>
  <h2 className=''>Hi, I'm</h2>
  <h1 className='gradient-text'>SONIYA JAISWAL</h1>
  <p>A young web developer</p>

<a href="https://www.dropbox.com/s/z6s0g7936niuvc7/My-resume.pdf?dl=1" download='resume.pdf'>
<button className='profile_btn' onClick={downloadFile}>Download Resume</button>
</a>

</div>

<div className='app__wrapper_img'>
<img src={profile} />

<div className='gradient-circle'></div>

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

</>
)
}

export default Profile

{/* <Grid container spacing={4} className={classes.app__wrapper}>

<Grid item xs={12} md={3}>
 <Typography className={classes.app__wrapper_info} variant="h4" gutterBottom> Hi, I'm</Typography>
 <Typography className={classes.app__wrapper_info} variant='h2' style={{alignContent:'center',marginBottom:'20px'}}> SONIA JAISWAL</Typography>
   <Typography className={classes.app__wrapper_info} variant="h7" paragraph>
    A young web developer. 
  </Typography>
  <Button className=''>Download Resume</Button>
</Grid>

</Grid> */}