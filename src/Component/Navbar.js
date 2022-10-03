import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='n-warpper'>
    <div className='n-left'>
    <div className='n-name'>HONEST</div>
    <span>toggle</span>
    </div>

    <div className='n-right'>
    <div className='n-list'>
        <ul style={{listStyleType:'none'}}>
            <li>home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
             
        </ul>
    </div>
    <div className='btn'>
     <button className='button'>CONTACT</button>
     </div>
    </div>

        
      
    </div>
  )
}

export default Navbar
