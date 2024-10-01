import React from 'react'
import {useParams} from 'react-router-dom';
import imagemenu from './imagemenu';
import './Viewimage.css';
import { useStyles } from '../style';

function Viewimage() {
  const {id} = useParams();  
  const classes = useStyles();

  const selectedImage = imagemenu.find((img) => img.id=== parseInt(id));
  //console.log(selectedImage)
  
  return (
    <div key={selectedImage.id} className='viewimage-container'>
        <img src={selectedImage.image} alt={selectedImage.name} />
    </div>
  )
}

export default Viewimage