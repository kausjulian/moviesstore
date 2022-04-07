import React from 'react'
import { Link } from 'react-router-dom'
import './Slider.css'

const Slider = () => {
  return (
    
    <>
         <div className=' imgcontainer row d-flex justify-content-center align-items-center pt-5'>
        {/* <div className='col-6'> */}
         <img src={require('../../img/peliculas1.jpeg')} className='img' alt='imghelado' />
         {/* </div> */}
         {/* <div className='col-6'> */}
         <h1 className='text-center slidertitle'>Movies Store</h1>
         <Link className="btn btn-outline-success boton  align-self-end shadow-lg mb-3" to="/Latest">Enter</Link>
         
         {/* </div> */}
         </div>
    </>
  )
}

export default Slider