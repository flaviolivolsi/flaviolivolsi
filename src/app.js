import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Commands from './commands.js';
import config from './config.js';
import './styles/app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      commands: [],
      outputs: [],
      currentDirectory: config.homeDir
    };
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    
    let commands = this.state.commands;
    let outputs = this.state.outputs;

    commands.push(evt.target[0].value);

    outputs.push(
      Commands.exec(evt.target[0].value, this.state, (state) => this.setState(state))
    );

    this.setState({
      commands,
      outputs
    });
    this.terminalInput.value = '';
    
    const that = this;
    setTimeout(function() {
      ReactDOM.findDOMNode(that.terminalEnd).scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
  
  handleExternalClick = () => {
    if (!this.terminalInput) { return; }
    
    this.terminalInput.focus();
  }
  
  componentDidMount() {
    this.terminalInput.focus();
    
    const that = this;
    document.body.addEventListener('click', function() {
      that.handleExternalClick();
    });
  }
  
  render() {    
    return (
      <div className="App terminal">
        <p>Welcome to {config.fullName}'s website!</p>

        <div>
          <p>Available commands:</p>

          <ul className="help">
            {Commands.list.map((command, key) =>
              <li key={key}>{command}</li>
            )}
          </ul>
        </div>

        {this.state.commands.map((command, key) =>
          <div key={key}>
            <p className="prompt">{config.user}@{config.host}:~$ {command}</p>
            <div className="output">
              {this.state.outputs[key]}
            </div>
          </div>
        )}

        <form onSubmit={evt => this.handleSubmit(evt)}>
          <div className="prompt">
            <span>{config.user}@{config.host}:~$</span>
            <input
              className="terminal-bar"
              autoComplete="off"
              ref={(input) => { this.terminalInput = input; }}
            />
          </div>
          <div ref={(el) => { this.terminalEnd = el; }}></div>
        </form>
      </div>
    );
  }
}

export default App;
