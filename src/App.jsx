import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Presentation from './Components/Presentation';
import Sliders from './Components/Sliders';
import Video from './Components/Video';
import Decoration from './Components/Decoration';
import BombArea from './Components/BombArea';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Presentation />
     <Sliders />
     <Video />
     <Decoration />
     <BombArea />
     <Blog />
     <Footer />
    </>
  )
}

export default App;