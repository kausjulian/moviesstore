import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../store/MoviesContext'
import './GridLatest.css'
import GridCard from './GridCard'
import { ToastContainer } from 'react-toastify'

const Grid = () => {
  
const {getLatest,latest,setLatest} = useContext(MoviesContext)
     

  useEffect(() => {
    getLatest()
    
    
  }, [])

  
  return (
    <>  
    {latest.lenght ==0  ?
        <div className="spinner-grow text-light pt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>  :
        <div className='row d-flex justify-content-evenly pt-5'>
              <h3 className='m-5'>Latest</h3>
              {latest.map(d=>(
                      <GridCard key={d.id} d={d} {...d} />
                      
                  ))}
        </div>
      }
      </>            
  )
}

export default Grid