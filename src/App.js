import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/journal/bootstrap.css';
import MyNav from './components/MyNav';
import PropertyPage from './components/PropertyPage';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';


const App = () => {
  return (
    <div className="App" style={{
          backgroundImage:`url(/BGPreview.jpeg)`,
          height: "1000px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}}>
      <MyNav/>
      <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props}  />
              )}
            />
            <Route 
              exact path='/adminlogin' 
              render={props => (
              <AdminLogin {...props} />
              )}
            />
            <Route 
              exact path='/property/:id' 
              render={props => (
              <PropertyPage {...props} />
              )}
            />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
