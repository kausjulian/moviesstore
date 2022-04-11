import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../store/MoviesContext'
import './GridLatest.css'
import GridCard from './GridCard'
import { ToastContainer } from 'react-toastify'

const Grid = () => {
  
const {getLatest,latest,setLatest,search,setSearch,handleSearch} = useContext(MoviesContext)
     
//handle search
// useEffect(() => {
//   handleSearch()
  
  
// }, [search])

///peticion api
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
            <input className="form-control  mt-5 w-25 bg-black search" onChange={handleSearch} type="text" placeholder="Search" aria-label="default input example"/>
              <h3 className='m-5'>Latest</h3>
              {latest.filter(l=>{
                if(search==''){
                return latest
              }
              else if (l.title.toLowerCase().includes(search.toLowerCase())){
                return l
              }
              
              
              }).map(d=>(
                <GridCard key={d.id} d={d} {...d} />

              ))}
        </div>
      }
      </>            
  )
}

export default Grid


{/* <h3 className='m-5'>Latest</h3>
{latest.map(d=>(
        <GridCard key={d.id} d={d} {...d} />
        
    ))} */}