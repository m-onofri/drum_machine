import React from 'react';
import DrumPad from './components/DrumPad.js';
import PADS from './components/pads.js';
import './App.css';

class App extends React.Component {
  
  state = {
    pad: "Let's play!"
  }

  displaySound = (padId) => {
    this.setState({
      pad: padId
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display" className="box">{this.state.pad}</div>
        <div id="columns pads">
          {PADS.map(pad => <DrumPad drumPad={pad} displaySound={this.displaySound} /> )} 
        </div>
      </div>
    );
  }
}

export default App;
