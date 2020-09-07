import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home.js'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header></Header>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
