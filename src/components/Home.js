import React from 'react';
import {Link} from 'react-router-dom'
import PropertyCards from './PropertyCards';

class Home extends React.Component {

        constructor(props) {
                super(props);
                this.state = {
                  properties: []
                };
              }
        
            componentDidMount(){
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
                       <PropertyCards properties={this.state.properties}/>
                )}
};

export default Home;