import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import useStyles from './style';
import Hireme from './components/Hireme';
import {BrowserRouter  as Router,Routes,Route,Link} from 'react-router-dom';

const cards = [1,2,3,4,5,6,7,8,9]
const linkArray=['Home','Projects','Hire Me'];

function App() {
  
 const classes=useStyles();

  return (
  <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<About />} />
          <Route path="/hireme" element={<Hireme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>

      <Footer />
  </>
  );
}

export default App;
