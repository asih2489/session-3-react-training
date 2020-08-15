import React from "react";
import './index.css';
import FunctionVsClass from './components/FunctionVsClass';
import OrderSimpleNested from './components/OrderSimpleNested';
import OrderByUrlParam from './components/OrderByUrlParam';
import OrderByQueryParam from './components/OrderByQueryParam';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Router> 
        <ul style={{border: '1px solid red'}}>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/FunctionVsClass">FunctionVsClass</Link> </li>
          <li> <Link to="/OrderSimpleNested">OrderSimpleNested</Link> </li>
          <li> <Link to="/OrderByUrlParam">OrderByUrlParam</Link> </li>
          <li> <Link to="/OrderByQueryParam">OrderByQueryParam</Link> </li>
        </ul>
        {/* <div style={{backgroundColor: 'yellow'}}> */}
          <Switch>
            <Route exact path="/">
              <> Home </>
            </Route>
            <Route path="/FunctionVsClass">
              <FunctionVsClass />
            </Route>
            <Route path="/OrderSimpleNested">
              <OrderSimpleNested />
            </Route>
            <Route path="/OrderByUrlParam">
              <OrderByUrlParam />
            </Route>
            <Route path="/OrderByQueryParam">
              <OrderByQueryParam />
            </Route>
          </Switch> 
        {/* </div> */}
      </Router>
    </>
  )
} 

function App() {
  return (
    <>
      {/* tes */}
      {/* <FunctionVsClass /> */}
      <Navigation />
    </>
  );
}

export default App;
