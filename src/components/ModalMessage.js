import React from 'react'
import { useState } from "react";
import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ModalMessage = (props) => {
console.log(props)
  const [show, setShow] = useState(true);



 
 

  return (
    <>
      <Modal
         show={show}
         animation={false}>
          <Modal.Header >
            <Modal.Title>Thank you!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>We'll be in touch with you soon to confirm your booking!</p>
          </Modal.Body>

        < Modal.Footer>
            <Link className="btn btn-secondary" to="/">Okay!</Link>
          </Modal.Footer>
      </Modal>
  
    </>
  )
}

export default ModalMessage