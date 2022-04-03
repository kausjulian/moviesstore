import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../store/MoviesContext';
import Card2 from './Card2';
import './GridTop.css'

const GridTop = () => {
  
  const {getTop,top,setTop} = useContext(MoviesContext)
  
  
  useEffect(() => {
    getTop();
  }, []);

  console.log(top[1])
  
 return (
   <>
        {top.lenght ==0  ?
        <div className="spinner-grow text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:
    <div className='row d-flex justify-content-evenly'>
       <h3 className='m-5'>Top Rated</h3>
       {top.map(t=>(
         <Card2 key={t.id} {...t}  />

       ))}

    </div>
}
    </>


  )
}

export default GridTop