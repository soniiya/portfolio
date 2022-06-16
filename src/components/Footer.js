import React from 'react';
import {Grid,Box,Container, Typography,Link} from '@mui/material';
import {Facebook,Instagram,Twitter,LinkedIn} from '@mui/icons-material';
import useStyles from '../style';

function Footer() {
  const classes = useStyles();

  return (
     <>
      <Box bgcolor='white'>
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
      </Box>
     </> 
  )
}

export default Footer