import React, { Component } from 'react';

const Carosel = (props) => {

        return (
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={`/property${props.propId}/1.jpg`} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/2.jpg`} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/3.jpg`} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/4.jpg`} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/5.jpg`} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/6.jpg`} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/7.jpg`} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/8.jpg`} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/9.jpg`} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/10.jpg`} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/11.jpg`} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/12.jpg`} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/13.jpg`} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={`/property${props.propId}/14.jpg`} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );

}

export default Carosel;