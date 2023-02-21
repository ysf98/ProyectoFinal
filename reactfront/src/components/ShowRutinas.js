import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Nav from './Nav'

const api = 'http://localhost:8000/api'
const ShowRutinas = () => {

  const [userId, setUserId] = useState()

  useEffect(()=> {
    const userdata = window.localStorage.getItem('loggedUser')
    if (userdata) {
      const user = JSON.parse(userdata)
      
      setUserId(user.id)
      
    }
  }, [])
  const [rutinas , setRutinas] = useState([])

  const getUserRutinas = async () =>{
    const response = await axios.get(`${api}/rutinasuser/${userId}`)
    setRutinas(response.data)
    
  }

  useEffect (()=>{
    
    getUserRutinas()
    
  }, [userId])


  const deleteRutinas = async (id) =>{
    await axios.delete(`${api}/rutina/${id}`)
    getUserRutinas()
  }

  return (
    <div> 
      {Nav()}
      <div className='container mt-3'>
        <h3>Mis Rutinas</h3>  
        <table className='table table-striped'>
          <thead className='bg-dark text-white'>
              <tr>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
            { rutinas.map( (rutina) => (
              <tr key={rutina.id}>
                <td> {rutina.dia} </td>
                <td> 
                  <Link to={`/show/${rutina.id}`} className='btn btn-warning m-1'>Ver rutina entera</Link>
                  <button onClick={()=>deleteRutinas(rutina.id)} className='btn btn-danger'>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/create" className='btn btn-danger m-2 text-white'>Crear</Link>
        <Link to="/inicio" className='btn btn-primary m-2 text-white'>Inicio</Link>
      </div>
    </div>
    
  )
}

export default ShowRutinas