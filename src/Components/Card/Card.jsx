import React from 'react'
import './Card.css'

const Card = ({asset_contract:{name,description},collection:{image_url}}) => {
  
  // console.log(image_preview_url)
return (
   
   <div className='d-flex '>
        {/* <h1>{name}</h1> */}
        <img src={image_url} />
        <p>{description}</p>
       
    </div>
  )
}

export default Card