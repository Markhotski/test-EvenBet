import React from 'react';
import Block from './components/Block';
import Button from './components/Button';
import Ball from './components/Ball';

function App() {
  return (
    <div className="container">
      <Block value='1' id='first' animated />
      <Block value='2' id='second'/>
      <Button />
      <Ball />
    </div>
  );
}

export default App;
