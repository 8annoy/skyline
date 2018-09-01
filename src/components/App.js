import React from 'react';
import Skyline from './Skyline';
import calculateVolumes from '../algorithm';
import isValid from '../validations';
import '../styles/App.css';

class App extends React.Component {
  static INITIAL_HEIGHTS = [ 11, 22, 44, 31, 28, 55, 21, 4, 10, 0, 24, 15, 11, 22, 44, 31, 28, 55, 21, 4, 10, 0, 24, 15 ];
  static MIN_BUILDINGS_TO_DISPLAY = 20;
  
  state = {
    data: App.INITIAL_HEIGHTS,
    toFill: calculateVolumes(App.INITIAL_HEIGHTS),
    isValid: true
  };

  constructor() {
    super();
    this.generateCity = this.generateCity.bind(this);
  }

  generateCity = (event) => {
    event.preventDefault();
    let inputValues = this.padWithBlanks(this.refs.inputValues ? this.refs.inputValues.value.split(',').map(x => parseInt(x, 10)) : []);
    if (isValid(inputValues)) {
      this.setState({ data: inputValues, toFill: calculateVolumes(inputValues), isValid: true });  
    }
    else {
      this.setState(...this.state, {isValid: false});
    }
  }
  
  volumeFilled = () => {
    return this.state.toFill.reduce((x, y) => { return x + y }, 0);
  }

  padWithBlanks = (data) => {
    while (data.length < App.MIN_BUILDINGS_TO_DISPLAY) {
      data.unshift(0);
      data.push(0);
    }
    return data;
  }

  render() {
    const { data, toFill } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flooded City</h1>
          <p className="App-intro">
            Enter a comma-separated list of positive integers to generate a new city
          </p>
          <form onSubmit={this.generateCity} className="inputs">
            <div className='form-group'>
              <input className={`${this.state.isValid ? '' : 'invalid-input'}`} type="text" ref="inputValues" />
              <input type="submit" className="btn btn-primary" value="Generate" onClick={this.generateCity} />
            </div>
          </form>
        </header>
        <Skyline
          data={this.padWithBlanks(data)}
          width={650} height={270} x={0} y={0}
          toFill={toFill}
        />
      </div>
    );
  }
}

export default App;