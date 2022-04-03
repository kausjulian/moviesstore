import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Card/Card';
import { MoviesContext} from '../../store/MoviesContext';


const Landpage = () => {

  const {getTop,getLatest,top,latest} = useContext(MoviesContext)
     

  useEffect(() => {
    getTop()
    getLatest()
    
    
  }, [])


  console.log(top)



  return (
    
    <div className='d-flex justify-content-center'>
       <div className=''></div>
       {/* // {data.map(d=>(
    <Card {...d} />
))} */}



    </div>
  )
}

export default Landpage

// {data.map(d=>(
//     <Card {...d} />
// ))}