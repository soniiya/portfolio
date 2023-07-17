import React,{useState} from 'react';
import {Modal, Typography,Card,CardActions,CardContent,CardMedia,Grid,Container,Button} from '@mui/material';
import imagemenu from './imagemenu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {useStyles} from '../style';

function Arts() {
const classes = useStyles();
const [activeCard, setActiveCard] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleViewButtonClick = () => {
  setIsModalOpen(true);
  
};

const handleModalClose = () => {
  setIsModalOpen(false);
};

const handleCardClick = (cardId) => {
  setActiveCard(cardId);
};

  return (
<ThemeProvider theme={theme}>

  <Container className={classes.cardGrid} maxWidth="md"> 
    <h4 className={classes.heading}>My Paintings</h4>
        <Grid container spacing={4}>

        {imagemenu.map((ele)=>{
            const {id,image,name} = ele;

                return (
                <>
                 <Grid item key={ele.id} xs={12} sm={6} md={4}>
        <Card className={`${classes.card} ${activeCard === ele.id ? classes.active : ''}`}
       onClick={()=>
          handleCardClick(ele.id)  
        }>

              <CardMedia className={classes.cardMedia} component='img' image={ele.image} sx={{height:'326px'}} />
              <CardContent className={classes.cardcontent}>
                <Typography variant='h5'>
                    Heading
                  </Typography>
                  <Typography sx={{fontFamily: 'var(--font-alt)'}}>
                    {ele.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' sx={{textAlign:'center'}} color='primary'>View</Button>
                </CardActions>

                </Card>
             </Grid>
           </>
       )})} 
  </Grid>
  </Container>
</ThemeProvider>
  )
}

export default Arts
