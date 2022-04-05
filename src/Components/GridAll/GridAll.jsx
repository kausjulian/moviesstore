import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../store/MoviesContext';
import Card3 from './Card3';
import Card2 from './Card3';
import './GridAll.css'

const GridAll = () => {
  
  const {getAll,getLatest,all} = useContext(MoviesContext)
  
  
  useEffect(() => {
    getAll();
    
  }, []);
  
 

  console.log(all)
  
 return (
   <>
        {all.lenght ===0  ?
        <div className="spinner-grow text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:
    <div className='row d-flex justify-content-evenly'>
       <h3 className='m-5'>All Movies</h3>
       {all.map(t=>(
         <Card3 key={t.id} {...t}  />

       ))}

    </div>
}
    </>


  )
}

export default GridAll