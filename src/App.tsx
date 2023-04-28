import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import {Welcome} from './components/Welcome'
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
      </Routes>


    </div>
  );
}

export default App;
