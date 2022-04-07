import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import LogOutbutton from '../LogOutButton/LogOutbutton';
import './Profile.css'

const Profile = () => {
  
  const{user,isAuthenticated,isLoading} = useAuth0();
  
return (
    <>
    {isAuthenticated &&
      <div className='row d-flex justify-content-center- align-content-center profile pt-5'>
          {/* <h3 className='m-5 text-center'>Profile</h3> */}
        <img className='userimage' src={user.picture} alt={user.name}/>
        <p className='mt-5'>{user.name}</p>
        <p className='mt-'>{user.email}</p>
        <div className='mt-3'>
        <LogOutbutton/>
        </div>
    
      </div>
    }
    </>
  )
}

export default Profile