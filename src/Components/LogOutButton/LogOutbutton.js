import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import './LogOutButton.css'

const LogOutbutton = () => {
 const {logout} = useAuth0();
 
 
    return (
   <>
    <button className="btn btn-outline-success logoutbuton w-25" onClick={()=>logout({returnTo:window.location.origin})}>Logout</button>
   
   </>
  ) 
}

export default LogOutbutton