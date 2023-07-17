import React from 'react';
import {Typography} from '@mui/material';
import { frontend,backend } from './Techno';
import './Technologies.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {useStyles} from '../style';

function Technologies() {

  const classes=useStyles();

  return (

    <>
    <ThemeProvider theme={theme}>
    <div className='app_container tech__padding flex__center'>
      <h4 className={classes.heading}>Technologies</h4>
     
      <div className='app_menu tech__padding'>
        <div className='app_items'>
        <Typography sx={{fontFamily: 'var(--font-para)'}} color='white' variant='h5' marginBottom='1rem'>Frontend</Typography>
          {
          frontend.map((item,id) => (
            <Typography sx={{fontFamily: 'var(--font-alt)'}} key={id} variant='h6' color='white'>{item.tech}</Typography>
          ))
        } 
        </div>

        <div className='app_items'>
        <Typography sx={{fontFamily: 'var(--font-para)'}} color='white' variant='h5' marginBottom='1rem'>Backend</Typography>
        { 
         backend.map((item,id) => (
            <Typography sx={{fontFamily: 'var(--font-alt)'}} key={id} variant='h6' color='white'>{item.tech}</Typography>
          ))
        }
        </div>
      </div>

    </div>
    </ThemeProvider>
    </>
  
  )
}

export default Technologies