import React, { Component } from 'react';
import Routes from './routes'
import './style.css'
import Header from './Components/Header';
import Main from './Pages/Main'


const App = () => 
      <div className="App"> 
          <Header />
          <Routes />
      </div>
;


export default App;
