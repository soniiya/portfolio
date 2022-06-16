import React,{useState} from 'react';
import {Link,Typography,Card,CardActions,CardContent,CardMedia,cardGrid,Grid,Container,Button} from '@mui/material';
import useStyles from '../style';
import projectimg from './projectimg';

const cards=[1,2,3,4,5,6,7,8,9]

function Projects() {
  const classes = useStyles();
  const [items,setItems] = useState(projectimg)

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
                  <Typography variant='h5' sx={{marginBottom:'5px'}}>
                    {ele.heading}
                  </Typography>
                  <Typography>
                    {ele.discription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <a href={ele.link}>
                    <button>View</button>
                  </a>
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

export default Projects