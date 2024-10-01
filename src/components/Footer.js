import React from 'react';
import {Grid,Box,Container, Typography,Link} from '@mui/material';
import {LinkedIn,GitHub} from '@mui/icons-material';
import {useStyles} from '../style';
import './Footer.css'

function Footer() {
  const classes = useStyles();

  return (
     <>
    <Box bgcolor='white'>
    <footer className="footer">
      <div className='container'>
        <div className={classes.footerContainer}>
          <div className={classes.content}>
            <h5>Contact Me</h5>
            <ul className="list-unstyled">
              <li>Email: jaiswalsoniya127@gmail.com</li>
              <li>Phone: 9399850049</li>
              <li>
                Social Media:
                
                <Link href='https://www.github.com/soniiya'>
                    <GitHub />
                </Link>

                <Link href='https://www.linkedin.com/in/soniya-jaiswal-28a143204/'>
                    <LinkedIn />
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.content}>
            <h5>Site Map</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/Arts">Arts</a></li>
              <li><a href="/hireme">Hire me</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p text-align='center' className="text-muted">Copyright &copy; 2023 Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
    </Box>

      {/* <Box bgcolor='white'>
          <Container className={classes.app__wrapper_footer}>

             <Typography variant='h6'>Contact Me</Typography>
                <Link href='http://www.faebook.com'>
                    <Facebook />
                </Link>

                <Link href='https://www.instagram.com'>
                    <Instagram />
                </Link>

                <Link href='https://www.twitter.com'>
                    <Twitter /> 
                </Link>

                <Link href='https://www.linkedin.com'>
                    <LinkedIn />
                </Link>
                
          </Container>
      </Box> */}
     </> 
  )
}

export default Footer