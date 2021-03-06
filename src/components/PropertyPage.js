import React, { Component } from 'react';
import { useLocation} from 'react-router';
import { useState, useEffect } from 'react';
import Calendar from './Calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalMessage from './ModalMessage';
import Carosel from './Carosel';
import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns'

const PropertyPage = (props) =>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const location = useLocation();
    const property = location.state.property


    const [email,setEmail] = useState();
    const [name,setName] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [details,setDetails] = useState();
    const [booked,setBooked] = useState(false);
    const [excludedDates,setExcludedDates] = useState([])

    const [showAreaText,setShowAreaText] = useState(false);

    const handleSumbit = (e) =>{
        e.preventDefault();
        fetch(`https://immense-lake-22245.herokuapp.com/properties/${property.id}/bookings`,{
     //   fetch(`http://localhost:3000/properties/${property.id}/bookings`,{
        method:'POST',
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify({
            booking:{
            email: email,
            name: name,
            phone_number: phoneNumber,
            details: details,
            booked: false,
            property_id: property.id,
            start_date: startDate,
            end_date: endDate
        }
        })
    })
    .then(resp=>{
        setBooked(true)
    })
    }

    const getDates = (newStartDate, newEndDate) => {
        const datesToExclude = [];
        let currentDate = newStartDate;
        while (currentDate <= newEndDate) {
            datesToExclude.push(currentDate);
            currentDate = addDays(currentDate, 1);
        }
        return datesToExclude
    };

    const flatten = arr => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]));
          } else {
            newArr.push(arr[i]);
          }
        }
        return newArr;
      };

    useEffect(()=>{
        
        async function fetchBookings() {
              const response = await fetch(`https://immense-lake-22245.herokuapp.com/properties/${property.id}}/bookings`)
        // const response = await fetch(`http://localhost:3000/properties/${property.id}}/bookings`)
              const fetchedBookings = await response.json(response)
           
              const allBookedBookings = fetchedBookings.filter(booking=>booking.booked === true)
      

            const exDates = allBookedBookings.map(booking=>{
                const newStartDate = new Date(booking.start_date)
                const newEndDate = new Date(booking.end_date);
                return getDates(newStartDate,newEndDate)
            })
    
             setExcludedDates(flatten(exDates))
          }
        
          fetchBookings();
      },[props])


        return (
            <div className="indv-property-cards container col d-flex justify-content-center">
                {booked? <ModalMessage msg="We'll be in touch with you soon to confirm your booking!" title="Thank You!" setBooked={setBooked}/>:null}
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col align-item-center">
                        <div className="card mb-3">
                            <h3 className="card-header">{property.name}</h3>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle text-muted"></h6>
                            </div>
                            {property.region === 'desert' && <button className="btn btn-primary" onClick={()=> setShowAreaText(!showAreaText)}>Click here to learn more about the area!</button>}
                            {showAreaText && <div className="card-body">
                                <p className="card-text">The roads are wide for cycling and there are several local clubs you can join for group rides. Wear bright colors??? this is a retirement community!
Green Valley Recreation Center is available for small fee. Check them out here: <a href='www.gvrec.org'>www.gvrec.org</a>. <br></br>
West Center, the recreation facility closest to the rentals, has a 25 yard pool with back stroke flags.. What a treat to swim outside!!! <br></br>
Wisdoms Cafe in Amado, south of Tubac. Great food and wonderful margaritas.. there is usually a 2 for 1 either Tuesday or Thursday.. check before you go! <a href='www.wisdomscafe.com'>www.wisdomscafe.com</a>. <br></br> 
Tubac is nearby a quaint artist fill town, restaurants, shopping, and exihibits history of the area. <a href='www.tubacaz.com'>www.tubacaz.com</a>. <br></br>  
Green Valley has 5 golf courses with near by Quail Creek having a few private courses.<br></br>
A fresh Farmers Market is held in the El Rodeo parking lot just off Espreanza. For information regarding days and times visit: <a href='www.heirloomfm.org'>www.heirloomfm.org</a>. <br></br></p>
                            </div>}


                            <Carosel propId={property.id}/>
                            <div className="prop-desc card-body overflow-auto">
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
                                Start Date
                                <DatePicker
                                    wrapperClassName="datepicker"
                                    selected={startDate}
                                    selectsStart
                                    onChange={date => setStartDate(date)}
                                    excludeDates={excludedDates}
                                    />
                                    End Date
                                    <DatePicker
                                    wrapperClassName="datepicker"
                                    selected={endDate}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    excludeDates={excludedDates}
                                    onChange={date => setEndDate(date)}
                                    />
                            </div>
                            <form className="booking-form"> 
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input onChange={e=>setName(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jane Doe"></input>
                                    <label for="exampleFormControlInput1">Phone Number</label>
                                    <input onChange={e=>setPhoneNumber(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="(xxx)xxx-xxxx"></input>
                                    <label for="exampleFormControlInput1">Please send me an email with the details of your stay.</label>
                                    <textarea onChange={e=>setDetails(e.target.value)} className="form-control" id="exampleFormControlInput1" rows="10"></textarea>
                                </div>
                                <div className="btn-group">
                                 <input onClick={handleSumbit} type="submit" className="btn btn-success email-btn" id="exampleFormControlInput1" placeholder="(xxx)xxx-xxxx"></input>
                                </div>

                            </form>
                           
                        </div>
                 </div>
            </div>
        </div>
 
        );
   
}

export default PropertyPage;