import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Slider from './Components/Slider';
import MoviesProvider from './store/MoviesContext';
import Grid from './Components/GridLatest';
import GridTop from './Components/GridTop';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import MovieDetail from './Components/MovieDetail';
import GridAll from './Components/GridAll';
// import Register from './Register';
import Login from './Components/Login/Login';
import Favs from './Components/Favs/Favs';
import { Toaster } from 'react-hot-toast';
import {useAuth0} from '@auth0/auth0-react'
import Profile from './Components/Profile/Profile';




function App() {

  const{isAuthenticated} = useAuth0();

 

  return (
    <div className="App container-fluid">
      <Toaster/>
      <MoviesProvider>
        <Router>
          <Header/>
          {/* <Login/> */}
          {/* <Register/> */}
            <Routes>
              <Route path ='/' element={<Slider/>}/>
              <Route path ='/Latest' element={<Grid/>}/> 
              <Route path ='/Top' element={<GridTop/>}/> 
              <Route path ='/Favs' element={<Favs/>}/> 
              <Route path ='/:id' element={<MovieDetail/>}/> 
               <Route path ='/Profile' element={isAuthenticated == false ? <Login/> : <Profile/>}/> 
            </Routes>
        </Router>
      </MoviesProvider>
    </div>
  );
}

export default App;
