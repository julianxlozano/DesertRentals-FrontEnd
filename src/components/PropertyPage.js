import React, { Component } from 'react';
import { useLocation } from 'react-router';
import Calendar from './Calendar';

const PropertyPage = (props) =>{
    const location = useLocation();
    const property = location.state.property

        return (
            <div className="indv-property-cards container col d-flex justify-content-center">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col align-item-center">
                        <div className="card mb-3">
                            <h3 className="card-header">{property.name}</h3>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle text-muted"></h6>
                            </div>
                            <img src="/Placeholder.jpg"/>
                            <div className="card-body">
                                <p className="card-text">{property.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Winter Price: {property.pricing_winter} </li>
                                <li className="list-group-item">Spring Price: {property.pricing_spring} </li>
                                <li className="list-group-item">Fall Price:   {property.pricing_fall} </li>
                                <li className="list-group-item">Summer Price: {property.pricing_summer} </li>
                            </ul>
                            <div className= "btn-group">
                            </div>
                        </div>
                 </div>
                 <div className="col align-item-center">
                        <div className="card mb-3">
                            <h3 className="card-header">Book Now!</h3>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle text-muted">Check our availability below</h6>
                            </div>
                       
                            <div className="card-body">
                                <p className="card-text"></p>
                                <Calendar/>
                            </div>
                            <form className="booking-form"> 
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jane Doe"></input>
                                    <label for="exampleFormControlInput1">Phone Number</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="(xxx)xxx-xxxx"></input>
                                    <label for="exampleFormControlInput1">Please send me an email with the details of your stay.</label>
                                    <textarea className="form-control" id="exampleFormControlInput1" rows="10"></textarea>
                                </div>
                                <div className="btn-group">
                                 <input type="submit" className="btn btn-success email-btn" id="exampleFormControlInput1" placeholder="(xxx)xxx-xxxx"></input>
                                </div>

                            </form>
                           
                        </div>
                 </div>
            </div>
        </div>
 
        );
   
}

export default PropertyPage;