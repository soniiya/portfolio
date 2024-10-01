import React,{useEffect,useState} from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Arts from './components/Arts';
import Hireme from './components/Hireme';
import {BrowserRouter  as Router,Routes,Route,Link} from 'react-router-dom';
import Viewimage from './components/Viewimage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return(
      <div>
        Loading....
      </div>
    )
  }

  return (
  <>
  <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hireme" element={<Hireme />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path="/Arts" element={<Arts />} />
          <Route path='/view/:id' element={<Viewimage />} />
        </Routes>    
  </Router>
  </>
  );
}


export default App;
