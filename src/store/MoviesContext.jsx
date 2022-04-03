import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const MoviesContext = createContext(null)

const MoviesProvider = ({children}) =>{
    //estado con datos completos
    const[data, setLatest] = useState([])
    const[top,setTop] = useState([])
    const[detail,setDetail] = useState([])

// peticion de la API
    const getLatest = async()=>{
      const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=187c14bac41dd1ecc5b6d97678c71d29&language=en-US&page=1')
    
    //   console.log(res.data)
      setLatest(res.data.results)
     }

     ///peticion de la api 2

     const getTop = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=187c14bac41dd1ecc5b6d97678c71d29&language=es-US&"
      );
      console.log(res.data.results)
      setTop(res.data.results)
    };

    //peticion 3 (moviedetails)

    const getDetail = async (id) => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=187c14bac41dd1ecc5b6d97678c71d29&language=es-ES`
      );
      setDetail(res.data);
    };

  
    // useEffect(() => {
    //   getTop();
    // }, []);

    

  
  


  return(
        <MoviesContext.Provider  value={{getLatest,setLatest,getTop,setTop,top,getDetail,setDetail,detail}} >
            {children}
        </MoviesContext.Provider>


  );




    
}
export default MoviesProvider


// https://api.opensea.io/api/v1/assets?format=json


// ('https://advanced-movie-search.p.rapidapi.com/search/movie', {params: {query: 'kong', page: '1'},
//       headers: {
//         'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
//         'X-RapidAPI-Key': 'f509032b9bmshf5243d9fe29a5cep1a6063jsnb8735487ff15'
//       }}