import React from 'react';
import {Typography} from '@mui/material';
import { frontend,backend } from './Techno';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {useStyles} from '../style';
import './Technologies.css';

function Technologies() {
  const classes=useStyles();

  return (
    <>
    <ThemeProvider theme={theme}>
    <div className='app_container flex__center section__padding'>
    <h4 className={classes.heading}>Technologies</h4>
      <div className='app_menu'>
        <div className='app_items'>
        <Typography sx={{fontFamily: 'var(--font-para)'}} color='white' variant='h5' marginBottom='1rem'>Frontend</Typography>
          {
          frontend.map((item,id) => (
          <div key={id}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography sx={{fontFamily: 'var(--font-alt)'}} key={id} variant='h6' color='white'>{item.tech}</Typography>
            <Typography sx={{fontFamily: 'var(--font-diff)' }} variant='h8' color='white'>{item.level}</Typography>
            </div>
        
            <div className='progress-bar'>
            <div className='progress' style={{ width: `${item.per}%` }}></div>
           </div>
          </div>
          ))
        } 
        </div>

        <div className='app_items'>
        <Typography sx={{fontFamily: 'var(--font-para)'}} color='white' variant='h5' marginBottom='1rem'>Backend</Typography>
        {
          backend.map((item,id) => (
          <div key={id}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography sx={{fontFamily: 'var(--font-alt)'}} key={id} variant='h6' color='white'>{item.tech}</Typography>
            <Typography sx={{fontFamily: 'var(--font-diff)' }} variant='h8' color='white'>{item.level}</Typography>
            </div>
            
            <div className='progress-bar'>
            <div className='progress' style={{ width: `${item.per}%` }}>

            </div>
           </div>
          </div>
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