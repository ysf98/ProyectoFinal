import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import Nav from './Nav'

const api = 'http://localhost:8000/api/rutina/'
const ShowRutinaCompleta = () => {

    const {id}= useParams()
    const [rutinas , setRutinas] = useState([])

  useEffect (()=>{
    getRutina()
  }, [])

  const getRutina = async () =>{
    const response = await axios.get(`${api}${id}`)
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
                <th scope="row">1º Ejercicio</th>
                <td>{rutinas.Ejercicio_1}</td>
            </tr>
            <tr>
                <th scope="row">2º Ejercicio</th>
                <td>{rutinas.Ejercicio_2}</td>
            </tr>
            <tr>
                <th scope="row">3º Ejercicio</th>
                <td>{rutinas.Ejercicio_3}</td>
            </tr>
            <tr>
                <th scope="row">4º Ejercicio</th>
                <td>{rutinas.Ejercicio_4}</td>
            </tr>
            <tr>
                <th scope="row">5º Ejercicio</th>
                <td>{rutinas.Ejercicio_5}</td>
            </tr>
            <tr>
                <th scope="row">6º Ejercicio</th>
                <td>{rutinas.Ejercicio_6}</td>
            </tr>
            <tr>
                <th scope="row">7º Ejercicio</th>
                <td>{rutinas.Ejercicio_7}</td>
            </tr>
            <tr>
                <th scope="row">8º Ejercicio</th>
                <td>{rutinas.Ejercicio_8}</td>
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