import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/journal/bootstrap.css';
import MyNav from './components/MyNav';
import PropertyPage from './components/PropertyPage';
import Home from './components/Home';
import Login from './components/Login';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: []
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


  render(){
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
              <Home {...props} properties={this.state.properties} />
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} />
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
  )}
}

export default App;
