import React, { useContext, useRef } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import './Register.css'

const Register = () => {
  const{users,setUsers} = useContext(MoviesContext)
  
  const inputclean = document.querySelector('input');

  
  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log('formulario')
      console.log(inputclean.value)
      inputclean.value = ""

  }
  const {name,lastname,email,password} = users

  
  const handleInputChange= ({target})=>{

    setUsers({
        ...users,
            [target.name]:[target.value],
            [target.lastname]:[target.value],
            [target.email]:[target.value],
            [target.password]:[target.value],
        
})
  }
  console.log(name,lastname,email,password)


    return (
        <div className=''>
            <h3 className='m-5'>Register</h3>
                <form className=' row d-flex justify-content-center formstyle' id='myForm' onSubmit={handleSubmit}>
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50 " id="floatingInput" placeholder="Name" name='name' value={name} onChange={handleInputChange}/>
                   
                    </div>
                    <div class=" row d-flex justify-content-center mb-3">
                        <input type="text" className="form-control w-50" id="floatingInput2" placeholder="Lastname"name='lastname' value={lastname}  onChange={handleInputChange}/>
                     
                    </div>
                    
                    
                    <div class=" row d-flex justify-content-center mb-3">
                        <input type="email" className="form-control w-50" id="floatingInput3" placeholder="name@example.com" name='email' value={email}  onChange={handleInputChange}/>
                       
                    </div>
                    <div className=" row d-flex justify-content-center mb-3">
                        <input type="password" className="form-control w-50" id="floatingPassword1" placeholder="Password" name='password' value={password}  onChange={handleInputChange}/>
                    </div>
                    
                    <div className="row d-flex justify-content-center mb-3">
                        <input type="password" className="form-control w-50" id="floatingPassword2" placeholder="Password"/>
                    </div>
                         <button type="submit" class="btn btn-outline-success submitbuton w-25">Submit</button>
                    
    
                </form>
    </div>
  )
}

export default Register