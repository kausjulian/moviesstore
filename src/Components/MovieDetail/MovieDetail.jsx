import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../../store/MoviesContext'
import './MovieDetail.css'

const MovieDetail = () => {
  
    const {id} = useParams()
    const {detail,getDetail,addFav} = useContext(MoviesContext)
  
    useEffect(() => {
        getDetail(id);
      }, []);

      const {poster_path,release_date,title,vote_average,overview} = detail

  //     const handleclick =()=>{
  //       console.log('cllick')
  //       addFav(detail)
  //        }
  //  console.log(detail)

    
      return (

    <div className='row d-flex justify-content-evenly align-items-center pt-5 mb-4'>
        <div className=' col-sm-12 col-md-5'>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} className='ms-2 mt-5 imgdetail' alt="Ups, No Image."/>
        </div>
        <div className=' col-sm-12 col-md-7'>
        <h3 className='titulo mt-5'>{title}</h3>
            <ul>
                <p className='mt-4'> Release date: {release_date}</p>
                <p className='mt-3'>Vote Average: {vote_average}</p>
                <p className='mt-3'>Overview:</p>
                <p className=' me-3'>{overview}</p>
                {/* <svg xmlns="http://www.w3.org/2000/svg" onclick={handleclick} width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg> */}
                  <button className='btn btn-primary botoncard' onClick={()=>window.history.back()}>Back</button>
            </ul>

        </div>




    </div>




  )
}

export default MovieDetail