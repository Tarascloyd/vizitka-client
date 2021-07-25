import React from 'react';
import Welcome from './components/Welome/Welcome'
import Header from './components/Header/Header'
import Page from './components/Page/Page'
import Skills from './components/Skills/Skills'
import './App.css'

const App = ():JSX.Element => {
  return (
    <div style={{ backgroundImage: 'url(/background.jpg)' }}
      className="App">
      <Header/>
      {/* <Welcome/> */}
      <Page title="Skills" text="I have experience with the following tools and technologies:">
        <Skills/>
      </Page>
      <Page title="About Me" text="I have experience with the following tools and technologies:">
        
      </Page>
      
    </div>  
  );
}

export default App;
