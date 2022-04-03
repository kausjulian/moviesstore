import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../../store/MoviesContext'
import './MovieDetail.css'

const MovieDetail = () => {
  
    const {id} = useParams()
    const {detail,getDetail} = useContext(MoviesContext)
  
    useEffect(() => {
        getDetail(id);
      }, []);

      const {poster_path,release_date,title,vote_average,overview} = detail
     
    
      return (

    <div className='row d-flex justify-content-evenly align-items-center mb-4'>
            <h3 className='titulo mt-5'>{title}</h3>
        <div className=' col-sm-12 col-md-5'>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} className='ms-2 mt-5 imgdetail' alt="Ups, No Image."/>
        </div>
        <div className=' col-sm-12 col-md-7'>
            <ul>
                <p className='mt-4'> Release date: {release_date}</p>
                <p className='mt-3'>Vote Average: {vote_average}</p>
                <p className='mt-3'>Overview:</p>
                <p className=' me-3'>{overview}</p>
            </ul>

        </div>




    </div>




  )
}

export default MovieDetail