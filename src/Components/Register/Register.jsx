import React, { useContext, useRef, useState } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import './Register.css'

const Register = () => {
  const{users,setUsers} = useContext(MoviesContext)
  const {name,lastname,email,password,password2} = users
  //estados para validaciones de inputs
  const [passmatch, setPassmatch] = useState(false)

//   useState(()=>{
//     console.log('2323')
//     console.log(password2)
//   },[password])

  
  const inputclean = document.getElementById('floatingInput');
  
  //funcion submit formulario
  const handleSubmit = (e)=>{
      e.preventDefault()
     if(name == '' || lastname =='' || email==='' || password=='' ||password2=='') 
    return alert('campos vacios')
    console.log('formulario enviado')


  }
  ///datos de usuario del context

  //funcion para procesar inputs
  const handleInputChange= ({target})=>{

    setUsers({
        ...users,
            [target.name]:[target.value],
            [target.lastname]:[target.value],
            [target.email]:[target.value],
            [target.password]:[target.value],
            [target.password2]:[target.value],
})
  }
//   console.log(name,lastname,email,password,password2)


    return (
        <div className=''>
            <h3 className='m-5'>Sign in</h3>
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
                        <input type="password" className="form-control w-50" id="floatingPassword2" placeholder="Password" name='password2' value={password2} onChange={handleInputChange}/>
                    </div>
                    <p className={passmatch == true ? 'text-danger':'d-none'}>Passwords Don't Match!</p>
                         <button type="submit" class="btn btn-outline-success submitbuton w-25">Submit</button>
                    
    
                </form>
    </div>
  )
}

export default Register