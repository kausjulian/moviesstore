import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../store/MoviesContext';
import Card2 from './Card2';
import './GridTop.css'


const GridTop = () => {
  
  const {getTop,top,setTop,search,handleSearch} = useContext(MoviesContext)
  
  
  useEffect(() => {
    getTop();
  }, []);

  
 return (
   <>
    {top.lenght ==0  ?
        <div className="spinner-grow text-light pt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>  :
        <div className='row d-flex justify-content-evenly pt-5'>
            <input className="form-control w-25 mt-5 bg-black search" onChange={handleSearch} type="text" placeholder="Search" aria-label="default input example"/>
              <h3 className='m-5'>Top Rated</h3>
              {top.filter(t=>{
                if(search==''){
                return top
              }
              else if (t.title.toLowerCase().includes(search.toLowerCase())){
                return t
              }
              }).map(t=>(
                <Card2 key={t.id} t={t} {...t} />

              ))}
        </div>
      }
    </>


  )
}

export default GridTop