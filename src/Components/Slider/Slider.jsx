import React from 'react'
import { Link } from 'react-router-dom'
import Landpage from '../Landpage/Landpage'
import './Slider.css'

const Slider = () => {
  return (
    
    <>
         <div className=' imgcontainer row d-flex justify-content-center align-items-center pt-5 animate__animated animate__zoomIn'>
        {/* <div className='col-6'> */}
         <img src={require('../../img/peliculas1.jpeg')} className='img' alt='imghelado' />
         {/* </div> */}
         {/* <div className='col-6'> */}
         <h1 className='text-center slidertitle animate__animated animate__zoomIn'>Movies Store</h1>
         <Link className="btn btn-outline-success boton  align-self-end shadow-lg mb-3" to="/Latest">Enter</Link>
         
         {/* </div> */}
         </div>
         <Landpage/>
    </>
  )
}

export default Slider