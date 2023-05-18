import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


const api = 'http://localhost:8000/api/register'

const RegistroUsuarios = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const register = async (e)=> {
      e.preventDefault()
      await axios.post(api, {username: username, password: password})
      navigate('/login')
  }
  return (
    <div className='container border border-secondary mt-3 rounded col-xl-4 col-lg-4 col-md-6 col-sm-8 mt-5'>
        <h3>Registrarse</h3>
        <form onSubmit={register}>
            <div className='m-4'>
                <input
                  placeholder='Nombre de usuario'
                  value={username}
                  onChange={ (e)=> setUsername(e.target.value)}
                  type='text'
                  className='form-control text-center'
                />
            </div>
            <div className=' m-4 '>
                <input
                  placeholder='Password'
                  value={password}
                  onChange={ (e)=> setPassword(e.target.value)}
                  type='password'
                  className='form-control text-center'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Registrar</button>
            <div className="text-center">
              <p className='mt-4'>
                ¿Ya estás registrado? 
              </p>
              <Link to="/login" className='btn btn-link'>Login!</Link>
            </div>
        </form>
    </div>
  )
}

export default RegistroUsuarios