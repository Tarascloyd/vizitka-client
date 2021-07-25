import React, { useEffect, useState } from 'react';
import Welcome from './components/Welome/Welcome'
import Header from './components/Header/Header'
import Page from './components/Page/Page'
import Skills from './components/Skills/Skills'
import Interests from './components/Interests/Interests'
import {Switch, Route} from "react-router-dom";
import './App.css'

const TextAboutMe = 'My name is Taras. I`m 35 years old. I`m both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I have a passion for IT and coding since childhood. For almost a year I have taught myself programming in Java and Web development. Seeking to use proven skills in JavaScript and Java to meet business plans of your company' 

interface portfolioInt {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  homeCity: string;
};


const App = ():JSX.Element => {
  
  const [portfolio, setPortfolio] = useState<portfolioInt>();
  
  useEffect(() => {
    const apiUrl = 'http://localhost:8080/api/portfolios/1';
    fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setPortfolio(data));
  }, []);
  
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
              <Skills id = {portfolio && portfolio.id}/>
            </Page>
          </Route>
          <Route path='/interests'>
            <Page title='My Interests' text='I have a folowing hobbies and interests:'>
              <Interests id = {portfolio && portfolio.id}/>
            </Page>
          </Route>
          <Route path='/'>
            <Welcome portfolio = {portfolio}/>
          </Route>
      </Switch>
    </div>  
  );
}

export default App;
