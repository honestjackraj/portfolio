import React from 'react'
// import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='n-warpper'>
    <div className='n-left'>
    {/* <div className='n-name'>HONEST</div> */}
    <span>
    {/* <div class="nav__btns">
                    
                    <i class="uil uil-moon change-theme" id="theme-button"></i>

                    <div class="nav__toggle" id="nav-toggle">
                        <i class="uil uil-apps"></i>
                    </div>
                </div> */}
    </span>
    </div>

    <div className='n-right'>
    <div className='n-list'>
        <ul style={{listStyleType:'none'}}>
            <li className='nav-cont-cen'> <a href='#intro'>Home </a></li>
            <li className='nav-cont-cen'> <a href='#about'>About </a></li>
            <li className='nav-cont-cen'><a href='#skills'>Skills </a></li>
            <li className='nav-cont-cen'> <a href='#projrct'>Portfolio </a></li>
             
        </ul>
    </div>
    <div className='nav-cont-cen' >
     <button className='glow-on-hover'> <a  href='#contact'>CONTACT </a></button>
     </div>
    </div>

        
      
    </div>
  )
}

export default Navbar
