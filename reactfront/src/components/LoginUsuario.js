import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const api = 'http://localhost:8000/api/login'

const LoginUsuario = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const login = async (e)=> {
      e.preventDefault()
        const response = await axios.post(api, {username: username, password: password})
        window.localStorage.setItem('loggedUser', JSON.stringify(response.data))
     
      navigate('/inicio')
<<<<<<< HEAD
      
=======
>>>>>>> 18ed80641eb8a679eba3934b08dfbb271d137021

    }
  return (
    <div className='container border border-secondary mt-3 rounded col-xl-4 col-lg-4 col-md-6 col-sm-8 mt-5'>
        <h3>Login</h3>
        <form onSubmit={login}>
            <div className='m-4'>
                <input
                    placeholder='Nombre de usuario'
                    value={username}
                    onChange={ (e)=> setUsername(e.target.value)}
                    type='text'
                    className='form-control text-center'
                />
            </div>
            <div className='m-4'>
                
                <input
                    placeholder='Password'
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value)}
                    type='password'
                    className='form-control text-center'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Acceder</button>
            <div className="text-center">
              <p className='mt-4'>
                ¿Aún no estás registrado? 
              </p>
              <Link to="/" className='btn btn-link'>Registrate!</Link>
            </div>
        </form>
    </div>
  )
}

export default LoginUsuario