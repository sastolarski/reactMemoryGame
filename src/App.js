import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './Components/Wrapper';
import Homepage from './Pages/Homepage';
import Jumbotron from './Components/Jumbotron';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Route exact path='/' component={Homepage} />
          </Wrapper>
  
        </div>
      </Router>
    );
  }
}

export default App;
