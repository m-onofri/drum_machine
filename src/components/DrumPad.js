import React from 'react';
import PADS from './pads.js';

class DrumPad extends React.Component {
  
    componentDidMount() {
        document.addEventListener('keydown', this.handlePress);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlePress);
    }
    
    handlePress = (e) => {
        const padCode = e.keyCode;
        if (padCode === this.props.drumPad.keyCode) {
            this.makeSound();
            this.props.displaySound(this.props.drumPad.id);
        }
    }
    
    handleClick = (e) => {
        const padId = e.target.id;
        const soundId = PADS.filter(pad => pad.id === padId)[0].button;
        const sound = document.getElementById(soundId);
        this.makeSound(sound);
        this.props.displaySound(padId);
    }
    
    makeSound = (e) => {
        const sound = document.getElementById(this.props.drumPad.button);
        sound.currentTime = 0;
        sound.play();
    }
    
    render() {
        return (
            <button id={this.props.drumPad.id} className="is-primary button drum-pad" onClick={(e) =>this.handleClick(e)} >
                <audio class="clip" id={this.props.drumPad.button} src={this.props.drumPad.src}></audio>
                {this.props.drumPad.button}
            </button>
        );
    }
}

export default DrumPad;