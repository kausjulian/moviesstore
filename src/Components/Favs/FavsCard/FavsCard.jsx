import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MoviesContext } from '../../../store/MoviesContext'
import './FavsCard.css'

const GridCard = ({poster_path,title,overview,release_date,popularity,id,d}) => {
 
  const {addFav,favs,delFav} = useContext(MoviesContext)

 

   
  
  return (
        
        <>
        <div className="card shadow-lg m-2 mt-3" >
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} className="card-img-top mt-1  imgcard" alt="Ups, No Image."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <p className="card-text">{` Release Date: ${release_date}`}</p>
                            <Link to={`/${id}`} className="btn btn-primary botoncard"> View Movie</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={()=>delFav(id)} className="bi bi-trash2 ms-5" viewBox="0 0 16 16">
                                    <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"/>
                                </svg>
                                <p className=' download mt-4'>Download Movie</p>
                </div>
        </div>
        
        </>




  )
}

export default GridCard