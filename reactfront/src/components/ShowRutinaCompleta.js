import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import Nav from './Nav'

const api = 'http://localhost:8000/api/rutina'
const ShowRutinaCompleta = () => {

    const {rutinaId}= useParams()
    const [rutinas , setRutinas] = useState([])
    const [userId,setUserId] = useState('')


  useEffect (()=>{
    getRutina()
  }, [])

  useEffect(()=> {
    const userdata = window.localStorage.getItem('loggedUser')
    if (userdata) {
      const user = JSON.parse(userdata)
      
      setUserId(user.id)

    }
  }, [])

  const getRutina = async () =>{
    const response = await axios.get(`${api}/${userId}${rutinaId}`)
    setRutinas(response.data)
    console.log(response.data) 
  }

  return (
    <div>
        {Nav()}
        <div className='container mt-3 border'>
        <h2 className='mt-2'>Rutina completa '{rutinas.dia}'</h2>
        <table className='table table-striped'>
            <thead className=' text-white'>
            <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Nombre</th>
                <td>{rutinas.dia}</td>
            </tr>
            <tr>
                <th scope="row">Ejercicios</th>
                <td></td>
            </tr>
            
            </tbody>
        </table>
        <Link to={`/edit/${rutinas.id}`} className='btn btn-warning m-1'>Editar</Link>
        <Link to={`/show`} className='btn btn-primary m-1'>Volver</Link>
        </div>    
    </div>
  )
}

export default ShowRutinaCompleta