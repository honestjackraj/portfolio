import React from 'react'
import "../container/nav.css"
import { Button, Link } from 'react-scroll' 


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container">
      <div className='my-name-nav'>
      <Link className="navbar-brand" to="/"> <h2 className='na-log-name'>&#60;HONEST/&#62; </h2></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>

      </button>
      </div>
    <div className='my-name-nav-lst'>
      <div className=" navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item  na-nm">
            <Link className="nav-link active " aria-current="page" to="int" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
        
          <li className="nav-item na-nm">
          <Link className="nav-link active " aria-current="page" to="abt" spy={true} smooth={true} offset={-100} duration={500}>ABOUT</Link>
          </li>
          <li className="nav-item na-nm">
          <Link className="nav-link active" aria-current="page" to="sk" spy={true} smooth={true} offset={-100} duration={500}>SKILL</Link>
          </li>
          <li className="nav-item na-nm">
          <Link className="nav-link active" aria-current="page" to="pjt" spy={true} smooth={true} offset={-100} duration={500}>PROJECT</Link>
          </li>
          <li className="nav-item na-nm-bmw">
          <Link className="nav-link active " aria-current="page" to="cont" spy={true} smooth={true} offset={-100} duration={500}><button className='button glow-on-hover'>CONTACT ME </button></Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>


  )
}

export default Nav
