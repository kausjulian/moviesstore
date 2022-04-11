import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';
import {useAuth0} from '@auth0/auth0-react'


export const MoviesContext = createContext(null)

const MoviesProvider = ({children}) =>{
    //estado con datos completos
    const[latest, setLatest] = useState([])
    const[top,setTop] = useState([])
    const[detail,setDetail] = useState([])
    // const [all, setAll] = useState('')
    const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('favoritos')) ?? [])
    const [search, setSearch] = useState('')
    const{isAuthenticated} = useAuth0();
    

// peticion all movies
// const getAll = async()=>{
//   const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=187c14bac41dd1ecc5b6d97678c71d29&language=en-US&page=6,7,8')
//   setAll([...all,res.data.results])
// }

// peticion de la API latest
    const getLatest = async()=>{
      const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=187c14bac41dd1ecc5b6d97678c71d29&language=en-US&page=1')
      setLatest(res.data.results)
    }
    ///peticion de la api 2
    const getTop = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=187c14bac41dd1ecc5b6d97678c71d29&language=en-US&"
      );
      setTop(res.data.results)
    };
    
    //peticion 3 (moviedetails)
    const getDetail = async (id) => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=187c14bac41dd1ecc5b6d97678c71d29&language=en-EN`
      );
      setDetail(res.data);
    };

   //userslist

   const [users, setUsers] = useState([{
     name:'',
     lastname:'',
     email:'',
     password:'',
     password2:''
   }])

   ///agregar a favs

   const addFav = (movie)=>{
    
    const already = favs.find(fav=>fav.id===movie.id)
    if(isAuthenticated==false) return   toast.error(`You must Login First`,
    {
        style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
    
    if(already) return   toast.error(`${movie.title} is already in your favorites`,
    {
        style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
    setFavs([...favs,movie])
    toast.success(`${movie.title} was added to your favorites!`,
  {
      style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
   }

   useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favs))
  },[favs])

  //borrar favoritos

  const delFav= (id) =>{
    setFavs(favs.filter(fav=>(fav.id!=id)))
    toast.success(`Deleted from your favorites!`,
    {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
    
  }

  //search engine

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
//download alert

const handleDownload = ()=>{
  toast.success(`Please Checkout your inbox and follow steps to download`,
  {
      style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
}


    return(
        <MoviesContext.Provider  
        value={{getLatest,latest,setLatest,getTop,setTop,top,getDetail,setDetail,detail,users,setUsers,addFav,favs,setFavs,delFav,setSearch,search,handleSearch,handleDownload}} >
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