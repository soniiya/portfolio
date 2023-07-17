import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Arts from './components/Arts';
import Hireme from './components/Hireme';
import {BrowserRouter  as Router,Routes,Route,Link} from 'react-router-dom';

function App() {

  return (
  <>
  <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hireme" element={<Hireme />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/Arts" element={<Arts />} />
        </Routes>    
  </Router>
  </>
  );
}


export default App;
