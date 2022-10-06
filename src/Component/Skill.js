import React from 'react'
import "./Skill.css"
import react from "../asset/react.png"
import express from "../asset/expressjs.png"
import JavaScript from "../asset/javascript.svg"
import bootstrap from "../asset/bootstrap.svg"
import mongodb from "../asset/mongodb.svg"
import nodejs from "../asset/nodejs.svg"
import github from "../asset/github.svg"
import git from "../asset/git.svg"
import Material from "../asset/Material.svg"
import redux from "../asset/redux.svg"
import AWS from "../asset/AWS-logo-2.jpg"
import html5 from "../asset/html5-display.png"
import Postman from "../asset/Postman.jpg"
import netlify from "../asset/netlify.png"
import css from "../asset/css.png"
import Heroku from "../asset/Heroku.png"

const Skill = () => {
    return (
        <div id='skills'>
        <div className='container Skil-head-all'>
            <h2 className='Skill-title1'>My Tech Stack </h2>
            <h2 className='Skill-ski2'>Skills </h2>
            <div className='row'>

                <div className='col'>
                <img class="skill-gif" src="https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif"
            alt="no image"/>



                </div>
                <div className='col'>
                    <div class="container px-4 text-center">
                        <div class="row gx-5">
                           
                            <div class="col">
                                <div class="p-3">
                                    <img src={react} alt='loading' className='skill-icons' />
                                    <h6>react</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={express} alt='loading' className='skill-icons' />
                                    <h6>express</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={JavaScript} alt='loading' className='skill-icons' />
                                    <h6>JavaScript</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={bootstrap} alt='loading' className='skill-icons' />
                                    <h6>bootstrap</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={mongodb} alt='loading' className='skill-icons' />
                                    <h6>mongodb</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={nodejs} alt='loading' className='skill-icons' />
                                    <h6>nodejs</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={github} alt='loading' className='skill-icons' />
                                    <h6>Github</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={git} alt='loading' className='skill-icons' />
                                    <h6>Git</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={Material} alt='loading' className='skill-icons' />
                                    <h6>Materialui</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={redux} alt='loading' className='skill-icons' />
                                    <h6>Redux</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={Heroku} alt='loading' className='skill-icons' />
                                    <h6>Heroku</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={AWS} alt='loading' className='skill-icons' />
                                    <h6>AWS</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={Postman} alt='loading' className='skill-icons' />
                                    <h6>Postman</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={netlify} alt='loading' className='skill-icons' />
                                    <h6>Netlify</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={css} alt='loading' className='skill-icons' />
                                    <h6>CSS</h6>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3">
                                    <img src={html5} alt='loading' className='skill-icons' />
                                    <h6>Html5</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                  

                </div>



            </div>

        </div>
        </div>
      





    )
}

export default Skill
