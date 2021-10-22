import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import axios from 'axios'

 const MyNav = (props) =>{

  const handleClick = () => {
    axios.delete('http://localhost:3001/logout')
    .then(response => {
    props.handleLogout()
    props.history.push('/')
    })
    .catch(error => console.log(error))
}


    return(
            <Navbar  expand="lg" className="navbarTop">
                <Navbar.Brand href="/">
                <img src={'/KingMountainPreview.png'} style={{width:222, marginTop: -7, marginLeft: 10}} alt="Desert Rentals"/>
              
                </Navbar.Brand>
             
              
                {props.loggedInStatus ? <Nav.Link href='/' onClick={handleClick}>Log Out</Nav.Link>
                : <Nav.Link href='/login'className="adminlink">Admin</Nav.Link>}

                        
            </Navbar> 
          )
}



export default MyNav