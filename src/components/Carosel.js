import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const Carosel = (props) => {

        return (
                    <Carousel>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/1.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/2.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/3.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/4.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/5.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/6.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/7.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/8.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/9.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/10.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/11.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/12.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/13.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/14.jpg`} onerror={`this.onerror=null;this.src='/property${props.propId}/1.jpg';`} alt="First slide"/>
                                    </Carousel.Item>
                    </Carousel>

          
        );

}

export default Carosel;