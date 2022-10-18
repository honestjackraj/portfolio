import React from 'react'
import "../container/cirtificate.css"
import fullstack from "../asset/cirtificate/fullstack.png"
import html from "../asset/cirtificate/html.png"
import css from "../asset/cirtificate/css.png"
import bootstrap from "../asset/cirtificate/bootstrap.png"
import javascript from "../asset/cirtificate/javascript.png"
import ds from "../asset/cirtificate/ds.png"
import react from "../asset/cirtificate/react.png"
import mysql from "../asset/cirtificate/mysql.png"
import mongodp from "../asset/cirtificate/mongodp.png"
import nodejs from "../asset/cirtificate/nodejs.png"
import aws from "../asset/cirtificate/aws.png"


const cirtificate = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className='cirtificate-ful'>


                            <div className='cirtificate-sz'>
                            <h1 className='cirt-name'>Certificate</h1>


                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active crti-sz">
                                            <img src={fullstack} className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={html} className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={css} className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={bootstrap} className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={javascript } className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={ds} className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={ react} className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={ mysql} className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={ mongodp } className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={nodejs } className="d-block w-100" alt="" />
                                        </div>
                                        <div className="carousel-item crti-sz">
                                            <img src={ aws} className="d-block w-100" alt="" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>






                            </div>






                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cirtificate
