import React from "react";
import {useAuth0} from '@auth0/auth0-react'
import './Loginbutton.css'

const Loginbutton = ()=>{
    const {loginWithRedirect} = useAuth0();

    return (
        <>
        <button className="btn btn-outline-success loginbuton2" onClick={()=>loginWithRedirect()}>Login</button>
        </>
    )
}

export default Loginbutton