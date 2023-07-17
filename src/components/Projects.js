import React,{useState,useEffect} from 'react';
import {Link,Typography,Card,CardActions,CardContent,CardMedia,cardGrid,Grid,Container,Button} from '@mui/material';
import projectimg from './projectimg';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {useStyles} from '../style';


function Projects() {
  const classes = useStyles();
  const [photos,setPhotos] = useState([]);
  

  // useEffect(()=>{
  //   const accessKey = "-zTgzz2PYP3lUn5_Zg800vNumfHQvrigmJ-Z9RBf5oM";
  //   const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=3`;
  
  //   // fetch(url)
  //   // .then(res => res.json())
  //   // .then(data => {
  //   //   const photoUrls= data.map(photo => photo.urls.regular);
  //   //   setPhotos(photoUrls);
  //   // })
  //   // .catch(error => {
  //   //   console.log(error);
  //   // });

  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       const photoUrls= data.map(photo => photo.urls.regular);
  //       setPhotos(photoUrls);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
    
  //   fetchData();
  // },[])


return (
<div>

<ThemeProvider theme={theme}>

<Container className={classes.cardGrid} maxWidth="md"> 
<h4 className={classes.heading}>My Projects</h4>
  
  <Grid container spacing={4}>
    {projectimg.map((img, index) => {
      const { heading, discription, live, github }= img;
      return (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.projectcardMedia} component='img' image={img.image} sx={{height:'326px'}} />
            <CardContent className={classes.cardcontent}>
              <Typography variant='h5' sx={{marginBottom:'5px'}}>
                {heading}
              </Typography>
              <Typography style={{fontFamily: 'var(--font-alt)'}}>
                {discription}
              </Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent:'space-between'}} >
              <div>
              <a href={live}>
                <Button>Live preview</Button>
              </a>
              </div>
              <div>
              <a href={github}>
                <Button>GitHub</Button>
              </a>
              </div>
              {/* <a href={link}>
                <Button>Live preview</Button>
              </a>
              <a href={link}>
                <Button>GitHub</Button>
              </a> */}
            </CardActions>
          </Card>
        </Grid>
      );
    })}
  </Grid>
</Container>
</ThemeProvider>



      {/* <Container className={classes.cardGrid} maxWidth="md"> 
        <Grid container spacing={4}>


          {photos.map((img,id) => {
                return (
                <>
              {
                projectimg.map((ele,id) => {
                  if(id<3){
                  return (
                    <>
                 <Grid item key={ele.id} xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                
                <CardMedia className={classes.cardMedia} key={id} component='img' image={img} sx={{height:'326px'}} />

                   /* <CardContent className={classes.cardcontent}>
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
              )}

              else{
                
              }
             })} 
           </>
       )})} 

        </Grid>
      </Container> */}

    </div> 
  )
}

export default Projects