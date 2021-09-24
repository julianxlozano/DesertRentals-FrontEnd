import React, { Component } from 'react';
import { useLocation } from 'react-router';
import Calendar from './Calendar';

const PropertyPage = (props) =>{
    const location = useLocation();

        return (
            <div className="all-property-cards col d-flex justify-content-center">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col align-item-center">
                        <div className="card mb-3">
                            <h3 className="card-header">{location.state.property.name}</h3>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle text-muted"></h6>
                            </div>
                            <img src="/Placeholder.jpg"/>
                            <div className="card-body">
                                <p className="card-text"></p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Winter Price: </li>
                                <li className="list-group-item">Spring Price: </li>
                                <li className="list-group-item">Fall Price: </li>
                                <li className="list-group-item">Summer Price: </li>
                            </ul>
                            <div className= "btn-group">
                            </div>
                        </div>
                 </div>
                 <div className="col align-item-center">
                        <div className="card mb-3">
                            <h3 className="card-header">Things</h3>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle text-muted"></h6>
                            </div>
                       
                            <div className="card-body">
                                <p className="card-text"></p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Winter Price: </li>
                                <li className="list-group-item">Spring Price: </li>
                                <li className="list-group-item">Fall Price: </li>
                                <li className="list-group-item">Summer Price: </li>
                            </ul>
                            <div className= "btn-group">
                            </div>
                        </div>
                 </div>
            </div>
        </div>
 
        );
   
}

export default PropertyPage;