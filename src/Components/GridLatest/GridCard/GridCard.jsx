import React from 'react'
import { Link } from 'react-router-dom'
import './GridCard.css'

const GridCard = ({poster_path,title,overview,release_date,popularity,id}) => {
  
//   console.log(backdrop_path,title,overview,release_date,popularity)
  
  
  return (
        
        <>
        <div className="card shadow-lg m-2 mt-3" >
  <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} className="card-img-top mt-1  imgcard" alt="Ups, No Image."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{` Release Date: ${release_date}`}</p>
    <Link to={`/${id}`} className="btn btn-primary botoncard"> View Movie</Link>
  </div>
</div>
        
        </>




  )
}

export default GridCard