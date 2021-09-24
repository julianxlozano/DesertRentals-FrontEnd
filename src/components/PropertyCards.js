import React from 'react';
import {Link} from 'react-router-dom'
import PropertyCard from './PropertyCard';

export default class PropertyCards extends React.Component{

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
            <div className="all-property-cards container col d-flex justify-content-center">
                      <div className="row row-cols-1 row-cols-md-3 g-4">
                          {console.log(this.state.properties)}
                         {this.state.properties.map(property => <PropertyCard property={property} />)}
                      </div>
            </div>
        )
    }
};

