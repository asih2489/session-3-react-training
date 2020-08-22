import React from "react";
import './index.css';
import HomePage from './pages/home';
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Router> 
        <ul style={{border: '1px solid red'}}>
          <li> <Link to="/">Home</Link> </li>
        </ul>
        {/* <div style={{backgroundColor: 'yellow'}}> */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch> 
        {/* </div> */}
      </Router>
    </>
  )
} 

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
