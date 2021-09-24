import React from 'react';
import {Link} from 'react-router-dom'
import PropertyCard from './PropertyCard';

export default class PropertyCards extends React.Component{

 
    render(){
        return (
            <div className="all-property-cards container col d-flex justify-content-center">
                      <div className="row row-cols-1 row-cols-md-3 g-4">
                          {console.log(this.props.properties)}
                         {this.props.properties.map(property => <PropertyCard property={property} />)}
                      </div>
            </div>
        )
    }
};

