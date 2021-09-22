import React from 'react';
import {Link} from 'react-router-dom'
import PropertyCard from './PropertyCard';
import Calendar from './Calendar';
const PropertyCards = (props) => {

   
        return (
            <div className="all-property-cards container col d-flex justify-content-center">
                      <div className="row row-cols-1 row-cols-md-3 g-4">
                          <PropertyCard/>
                          <PropertyCard/>
                          <PropertyCard/>
                      </div>
            </div>
        )
};

export default PropertyCards;