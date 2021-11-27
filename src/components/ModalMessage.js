import React from 'react'
import { useState } from "react";
import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ModalMessage = (props) => {

  const [show, setShow] = useState(true);



 
 

  return (
    <>
      <Modal
         show={show}
         animation={false}>
          <Modal.Header >
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{props.msg}</p>
          </Modal.Body>

        < Modal.Footer>
            {props.title === "All Set!" ? <Button onClick={()=>setShow(false)}>Okay!</Button> :<Link className="btn btn-secondary" to="/">Okay!</Link>}
          </Modal.Footer>
      </Modal>
  
    </>
  )
}

export default ModalMessage