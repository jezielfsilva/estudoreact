import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/estudo';
import Cont from './components/estudodois';
import Timer from './components/estudotres';

function App() {
  return (
    <div className="App">
      <Container/>
      <Cont/>
      <Timer/>
    </div>
  );
}

export default App;
