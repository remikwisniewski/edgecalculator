import React, {Component} from 'react';
import Header from './Components/Header.jsx';
import VolatilityLong from './Components/VolatilityLong.jsx';
import VolatilityShort from './Components/VolatilityShort.jsx';

class App extends Component {
  render() { return (
    <div className="App">
      <Header/>

      <div class='parent'>
        <div class='child inline-block-child'> <VolatilityLong/> </div>
        <div class='child inline-block-child'> <VolatilityShort/> </div>
      </div>

    </div>
  );
  }
}

export default App;
