import React,{useState,useRef} from 'react'
import {useStyles} from '../style';
import {Card,CardContent,Container,TextField,Button,Typography} from '@mui/material';
import emailjs from '@emailjs/browser';

function Hireme() {
  const form = useRef();
const classes = useStyles();
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [phone,setPhone] = useState(0);
const [details,setDetails] = useState('');
const [num,setNum] = useState(0);

// const sendEmail = (e) =>{
// e.preventDefault();

// emailjs.sendForm('gmail','template_7gv9cnt', e.current, 'MQqSMdMLf0SMzttXq' )
//   .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });
//   e.target.reset();
// }

  return (
    <> 
    <div>
        <Container className={classes.cardGrid}>
          <Card className={classes.card}>
            <CardContent className={classes.cardcontent}>
              
              <form ref={form} noValidate autoComplete='off'
               action="https://formspree.io/f/xwkdjlln" method="post">
                <TextField onChange={(e) => setName(e.target.value)} sx={{marginBottom:'10px'}} name='from_name' label='Name' type='text' variant='outlined' color='secondary' fullWidth required />
                <TextField onChange={(e) => setEmail(e.target.value)} sx={{marginBottom:'10px'}} name='email' label='Email' type='email' variant='outlined' color='secondary' fullWidth required />
                <TextField onChange={(e) => setPhone(e.target.value)} sx={{marginBottom:'10px'}} name='phonenum' label='Phone number' type='number' variant='outlined' color='secondary' fullWidth required />
                <TextField onChange={(e) => setNum(e.target.value)} sx={{marginBottom:'10px'}} name='budget' label='Budget(Per Month)' type='number' variant='outlined' color='secondary' fullWidth />
                <TextField onChange={(e) => setDetails(e.target.value)} label='Please detail your requirements' name='massage' type='text' variant='outlined' color='secondary'
                multiline rows={4} fullWidth />

                <Button type="submit" size='medium' color='secondary' variant='contained' sx={{marginTop:'10px'}} >Submit</Button>
              </form>
            </CardContent>
          </Card>
        </Container>
    </div>
    </>
  )
}

export default Hireme