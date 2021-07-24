import React from 'react';
import Welcome from './components/Welome/Welcome'
import Header from './components/Header/Header'
import './App.css'

const App = ():JSX.Element => {
  return (
    <div style={{ backgroundImage: 'url(/background.jpg)' }}
      className="App">
      <Header/>
      <Welcome/>
    </div>  
  );
}

export default App;
