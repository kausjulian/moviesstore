import React from 'react'
import './Landpage.css'

const Landpage = () => {
  return (
    
        <>
        <div className='row landpage d-flex align-content-center animate__animated animate__slideInUp '>
            <div className=" col-xs-12 col-sm-4">
                <h4 className='stepsnumber'>🔑</h4>
                {/* <h4 className='stepsnumber'>1</h4> */}
                <h5 className='steps'>Sign up</h5>
            </div>
            <div className=" col-xs-12 col-sm-4">
            <h4 className='stepsnumber'>💚</h4>
            {/* <h4 className='stepsnumber'>2</h4> */}
                <h5 className='steps'>Choose your favorite movie</h5>

            </div>
            <div className="col-xs-12 col-sm-4">
            <h4 className='stepsnumber'>🖥</h4>
            {/* <h4 className='stepsnumber'>3</h4> */}
                <h5 className='steps'>Download and enjoy!</h5>

            </div>


        </div>
        </>
  )
}

export default Landpage