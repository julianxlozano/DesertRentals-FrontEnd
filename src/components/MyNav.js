import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import axios from 'axios'

 const MyNav = (props) =>{

  const handleClick = () => {
    axios.delete('https://immense-lake-22245.herokuapp.com/logout')
    .then(response => {
    props.handleLogout()
    props.history.push('/')
    })
    .catch(error => console.log(error))
}


    return(
            <Navbar  expand="lg" className="navbarTop">
              <Nav>
                <Navbar.Brand href="/">
                <img src={'/KingMountainPreview.png'} style={{width:222, marginTop: -7, marginLeft: 10}} alt="Desert Rentals"/>
              
                </Navbar.Brand>
             </Nav>
             <Nav className="justify-content-end flex-grow-1 pe-3">
                {props.loggedInStatus ? <Nav.Link href='/' onClick={handleClick}>Log Out</Nav.Link>
                : <Nav.Link href='/login'className="adminlink">Admin Login</Nav.Link>}

                <img
                        src="/Gay_Pride_Flagwelcome.png"
                        width="100"
                        height="55"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                      />
          </Nav>
                        
            </Navbar> 
          )
}



export default MyNav