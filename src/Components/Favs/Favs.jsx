import React, { useContext } from 'react'
import { MoviesContext } from '../../store/MoviesContext'
import './Favs.css'
import FavsCard from './FavsCard'
import {useAuth0} from '@auth0/auth0-react'

const Favs = () => {
  
    const{favs} = useContext(MoviesContext)
    const{isAuthenticated} = useAuth0(); 
  
   if(isAuthenticated==false){
     return(
        <div className='row d-flex justify-content-evenly pt-5'>
          <h4 className='nomovies'>Please Login to see your favorites</h4>


        </div>


     )
   }
   else{
   
   
    return (
        <div>
             {favs.length !==0 ?
              <div className='row d-flex justify-content-evenly pt-5'>
                <h3 className='m-5'>Favorites</h3>
                {favs.map(f=>(
                    <FavsCard key={f.id} {...f} />
                ))}
                <div>
                <button className='btn btn-primary mb-4 botonfavs' onClick={()=>window.history.back()}>Back</button> 
                </div>
              </div>
                :
                <div className='row d-flex align-content-center justify-content-evenly'>
                    <h4 className='nomovies'>No Movies added</h4>
                    <button className='btn btn-primary mt-5 botonfavs' onClick={()=>window.history.back()}>Back</button>      
                </div>
            

            }
        </div>
  )
}

}

export default Favs