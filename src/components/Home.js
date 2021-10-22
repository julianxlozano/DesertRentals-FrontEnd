import React, { useState, useEffect } from 'react';
import PropertyCards from './PropertyCards';

const Home = (props) => {

   const [propRegion,setPropRegion] = useState('desert')
  const [selectedProperties, setSelectedProperties] = useState([])

    useEffect(()=>{
        const filteredProperties = props.properties.filter(property=> property.region === propRegion)
        setSelectedProperties(filteredProperties)
    },[propRegion])

               return (
                       <>
                       <div className="container radio-btns">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input onClick={()=>setPropRegion('desert')} type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked=""/>
                                        <label className="btn btn-outline-primary" for="btnradio1">Desert Rentals</label>
                                        <input onClick={()=>setPropRegion('mountain')} type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked=""/>
                                        <label className="btn btn-outline-primary" for="btnradio2">Mountain Rentals</label>
                                </div>
                        </div>
        
                        
                                <PropertyCards properties={selectedProperties}/>
                        </>
                )
};

export default Home;