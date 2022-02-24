import logo from './logo.svg';
import React from 'react';
import './App.css';
import OpenMap from './Components/OpenMap'
import PPOB from './Components/PPOB'

class App extends React.Component {
  render(){
    return (
    <div className="App">
      <div id='header'>
        <h3 id='judul'>Portal Pembayaran PKB <br></br> Samsat Nganjuk</h3>
      </div>
      <PPOB />
      <OpenMap />
    </div>
  );
    }
}

export default App;
