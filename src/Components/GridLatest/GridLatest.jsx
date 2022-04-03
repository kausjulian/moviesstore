import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../store/MoviesContext'
import './GridLatest.css'
import GridCard from './GridCard'

const Grid = () => {
  
const {getLatest,data: latest,setLatest} = useContext(MoviesContext)
     

  useEffect(() => {
    getLatest()
    
    
  }, [])
console.log(latest)
  
  return (
    <>  
    {latest.lenght ==0  ?
        <div className="spinner-grow text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:
        <div className='row d-flex justify-content-evenly'>
            <h3 className='m-5'>Latest</h3>
            {latest.map(d=>(
                    <GridCard key={d.id} {...d} />
                    
                ))}
        </div>
      }
      </>            
  )
}

export default Grid