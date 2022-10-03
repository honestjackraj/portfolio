import React from 'react'

 const Floatingdiv = ({image, txt1,txt2}) => {
  return (
    <div className='Floatingdiv'>
   <img src={image} alt/>
    <span>
        {txt1}
        <br/>
        {txt2}
    </span>
    </div>
  )
}



export default Floatingdiv
