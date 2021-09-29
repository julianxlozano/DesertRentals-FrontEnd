import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const Carosel = (props) => {

        return (
                    <Carousel>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/1.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/2.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/3.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/4.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/5.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/6.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/7.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/8.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/9.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/10.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/11.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/12.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/13.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src={`/property${props.propId}/14.jpg`}alt="First slide"/>
                                    </Carousel.Item>
                    </Carousel>

          
        );

}

export default Carosel;