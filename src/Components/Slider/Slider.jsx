import React from 'react'
import './Slider.css'

const Slider = () => {
  return (
    
    <>
         <div className='imgcontainer row d-flex justify-content-center align-items-center'>
        {/* <div className='col-6'> */}
         <img src={require('../../img/peliculas1.jpeg')} className='img' alt='imghelado' />
         {/* </div> */}
         {/* <div className='col-6'> */}
         <h1 className='text-center'>Movies Store</h1>
         <button type="button" className="btn btn-outline-success boton  align-self-end mb-3">Enter</button>
         
         {/* </div> */}
         </div>
    </>
  )
}

export default Slider