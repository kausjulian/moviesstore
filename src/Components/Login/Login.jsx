import React, { useContext } from 'react'
import { MoviesContext } from '../../store/MoviesContext'
import Loginbutton from '../LoginButton/LoginButton'
import './Login.css'

const Login = () => {
    const{users,setUsers} = useContext(MoviesContext)
    
    const {email,password} = users

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('formulario')
        
    }

    const handleInputChange = ({target})=>{
        console.log(target.value)
        // [target.email]:[target.value],
        //     [target.password]:[target.value],
    }
  
  
  return (

    <>
         <div className=" row d-flex justify-content-center loginstyle">
            <h3 className='m-5'>Login</h3>
                <Loginbutton/>
        </div>
       
       
                {/* <form className=' row d-flex justify-content-center formstyle' onClick={handleSubmit}>
                    <div class=" row d-flex justify-content-center mb-3">
                        <input type="email" className="form-control w-50" id="floatingInput3" placeholder="name@example.com" name='email' value={email}  onChange={handleInputChange}/>
                    </div>
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="password" className="form-control w-50" id="floatingPassword1" placeholder="Password" name='password' value={password}  onChange={handleInputChange}/>
                    </div>
                    <button type="button" class="btn btn-outline-success loginbuton w-25">Submit</button>
                </form> */}

    </>
  )
}

export default Login