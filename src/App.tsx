import React from 'react';
import Welcome from './components/Welome/Welcome'
import Header from './components/Header/Header'
import Page from './components/Page/Page'
import Skills from './components/Skills/Skills'
import Interests from './components/Interests/Interests'
import {Switch, Route} from "react-router-dom";
import './App.css'

const TextAboutMe = 'My name is Taras. I`m 35 years old. I have a passion for IT and coding since childhood. For almost a year I have taught myself programming in Java and Web development. Seeking to use proven skills in JavaScript and Java to meet business plans of your company' 


const App = ():JSX.Element => {
  return (
    <div style={{ backgroundImage: 'url(/background.jpg)' }}
      className='App'>
      <Header/>
      <Switch>
          <Route path='/about'>
            <Page title='About Me' text={TextAboutMe}/>
          </Route>
          <Route path='/skills'>
            <Page title='My Skills' text='I have experience with the following tools and technologies:'>
              <Skills/>
            </Page>
          </Route>
          <Route path='/interests'>
            <Page title='My Interests' text='I have a folowing hobbies and interests:'>
              <Interests/>
            </Page>
          </Route>
          <Route path='/'>
            <Welcome/>
          </Route>
      </Switch>
    </div>  
  );
}

export default App;
