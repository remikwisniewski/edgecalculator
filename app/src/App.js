import React, {Component} from 'react';
import Header from './Components/Header.jsx';
import VolatilityLong from './Components/VolatilityLong.jsx';
import VolatilityShort from './Components/VolatilityShort.jsx';

class App extends Component {
  render() { return (
    <div className="App">
      <Header/>
      <VolatilityLong/>
      <VolatilityShort/>

    </div>
  );
  }
}

export default App;
