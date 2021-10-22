import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/journal/bootstrap.css';
import MyNav from './components/MyNav';
import PropertyPage from './components/PropertyPage';
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isLoggedIn: false,
      user:{}
    };
  }



componentDidMount(){
    this.getProperties();
}

 getProperties (){
    fetch(`http://localhost:3000/properties`,{
        method:'GET',
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }})
    .then(resp=>{
        return resp.json()
    })
    .then(properties=>{
        this.setState({properties:properties})}) 
}


handleLogin = (data) => {
  //debugger   
    this.setState({
      isLoggedIn: true,
      user: data.user

    })
  }

handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }


  render(){
  return (
    <div className="App" style={{
          backgroundImage:`url(/KingMountainBG.jpeg)`,
          height: "1423px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}}>
      <MyNav loggedInStatus={this.state.isLoggedIn}/>
      <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} properties={this.state.properties} />
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/property/:id' 
              render={props => (
              <PropertyPage {...props} />
              )}
            />
             <Route 
              exact path='/admin' 
              render={props => (
              <Admin {...props} loggedInStatus={this.state.isLoggedIn} properties={this.state.properties}/>
              )}
            />
          </Switch>
        </BrowserRouter>
    </div>
  )}
}

export default App;
