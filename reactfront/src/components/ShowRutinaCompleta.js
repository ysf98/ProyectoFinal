import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import Nav from './Nav'

const api = 'http://localhost:8000/api/rutina/'
const ShowRutinaCompleta = () => {

    const {id}= useParams()
    const [rutinas , setRutinas] = useState([])


  useEffect (()=>{
    const getRutina = async () =>{
      const response = await axios.get(`${api}${id}`)
      setRutinas(response.data)
      console.log(response.data) 
    }
    getRutina()
  },[id])

  if (!rutinas) {
    return <div>Cargando rutina...</div>;
  }
  

  return (
    <div>
        {Nav()}
        <div className='container mt-3 border'>
        <h2 className='mt-2'>Rutina completa '{rutinas.dia}'</h2>
        <table className='table table-striped'>
            <thead className='bg-dark text-white'>
            <tr>
              <th scope='col'>Ejercicio</th>
              <th scope='col'>Video</th>
            </tr>
            </thead>
            <tbody>
            {rutinas.exercises?.map((exercise) => (
            <tr key={exercise.id}>
              <td className=''>{exercise.name}</td>
              <td>
                {exercise.video_url && (
                  <a href={exercise.video_url} target="_blank" rel="noopener noreferrer">
                    Ver video
                  </a>
                )}
              </td>
            </tr>
          ))}
            
            </tbody>
        </table>
        <Link to={`/edit/${rutinas.id}`} className='btn btn-warning m-1'>Editar</Link>
        <Link to={`/show`} className='btn btn-primary m-1'>Volver</Link>
        </div>    
    </div>
  )
}

export default ShowRutinaCompleta