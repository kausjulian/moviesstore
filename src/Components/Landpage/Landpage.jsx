import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Card/Card';

const Landpage = () => {
  const[data, setData] = useState([])
  
    const getData = async()=>{
      const res = await axios.get('	https://api.opensea.io/api/v1/assets?format=json')
    
    //   console.log(res.data.assets)
      setData(res.data.assets)
     

  }
  console.log(data)
  useEffect(() => {
    getData()
  
    
  }, [])





  return (
    
    <div>
       <img src={require('../../img/candado.png')} className='img' alt='' />
    </div>
  )
}

export default Landpage

// {data.map(d=>(
//     <Card {...d} />
// ))}