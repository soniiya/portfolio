import React,{useState} from 'react';
import {Typography,Card,CardActions,CardContent,CardMedia,Grid,Container,Button} from '@mui/material';
import useStyles from '../style';
import imagemenu from './imagemenu';

//const cards=[1,2,3,4,5,6,7,8,9]
//const skillimage=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img7.jpg','img8.jpg','img9.jpg'];

function Skills() {
  const classes = useStyles();
  const [items,setItems] = useState(imagemenu)

  return (
    <div>
      
      <Container className={classes.cardGrid} maxWidth="md"> 
        <Grid container spacing={4}>

        {items.map((ele)=>{
            const {id,image,name} = ele;

                return (
                <>
                 <Grid item key={ele.id} xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                
                {/* <img key={ele.id} src={ele.image} /> */}

                <CardMedia className={classes.cardMedia} key={ele.id} component='img' image={ele.image} sx={{height:'326px'}} />

                <CardContent className={classes.cardcontent}>
                  <Typography variant='h5'>
                    Heading
                  </Typography>
                  <Typography>
                    {ele.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>View</Button>
                  <Button size='small' color='primary'>Edit</Button>
                </CardActions>

                </Card>
             </Grid>
           </>
       )})} 

        </Grid>
      </Container>
    
    </div>
  )
}

export default Skills
