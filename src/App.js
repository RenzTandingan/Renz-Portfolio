import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Education from './components/Education';



function App() {
  return (
    <div>
      <Navbar  />
      <Home />
      <Education/>
      <Work />
    
    </div>
  );
}

export default App;
