import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../store/MoviesContext';
import Card2 from './Card2';
import './GridTop.css'


const GridTop = () => {
  
  const {getTop,top,setTop} = useContext(MoviesContext)
  
  
  useEffect(() => {
    getTop();
  }, []);

  
  
 return (
   <>
   
        {top.lenght ==0  ?
        <div className="spinner-grow text-light pt-5" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:
    <div className='row d-flex justify-content-evenly pt-5'>
       <h3 className='m-5'>Top Rated</h3>
       {top.map(t=>(
         <Card2 key={t.id} {...t} t={t}  />

       ))}

    </div>
}
    </>


  )
}

export default GridTop