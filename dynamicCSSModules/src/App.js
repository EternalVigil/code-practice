import React, { Component } from 'react';
import logo from './logo.svg';
import layoutStyles from './AppLayout.css';
import lightStyles from './AppLightMode.css';
import darkStyles from './AppDarkMode.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      mode: "light"
    }

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState((state) => {
      console.log(state.mode);
      if (state.mode === "light") {
        console.log('Dark Mode Activate');
        this.setState({
          mode: "dark"
        });
        import ('./AppDarkMode.css');
        console.log(state.mode);
      }
      else {
        console.log('Light Mode Activate');
        this.setState({
          mode: "light"
        });
        import ('./AppLightMode.css');
        console.log(state.mode);
      }
    })
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <header className={[layoutStyles.AppHeader,darkStyles.AppHeader].join(' ')}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className='displayModes'>
        <button onClick={this.toggleMode}>Toggle Mode</button>
        </div>
      </div>
    );
  }
}

export default App;