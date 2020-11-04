import React from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Count from './components/Count';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Count
        question='Berikan nilai 10 untuk teh'
        modal='Selamat! Anda penikmat teh!'
      />
       <Count
        question='Berikan nilai 10 untuk kopi'
        modal='Selamat! Anda penikmat kopi!'
      />
    </div>
  );
}

export default App;
