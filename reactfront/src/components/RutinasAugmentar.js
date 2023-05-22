import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const api = 'http://localhost:8000/api'


const RutinasAugmentar = () => {

    const [rutinas, setRutinas] = useState([])

    useEffect ( () => {
        getAllRutinasAm()
    }, [])

    const getAllRutinasAm = async () =>{
        const response = await axios.get(`${api}/rutinasAm`)
        setRutinas(response.data)
        
    }

  return (
    <div>
        {Nav()}
        <div className='container-fluid mt-3'>
            <h3>Rutinas para aumentar músculo</h3>  
            <table className='table table-striped'>
                <thead className='bg-dark text-white'>
                    <tr>
                    <th>Nombre</th>
                    <th>Ver Rutina</th>
                    </tr>
                </thead>
                <tbody>
                { rutinas.map( (rutina) => (
                    <tr key={rutina.id}>
                    <td> {rutina.nombre} </td>
                    <td> 
                    <Link to={`/augmentarpeso/${rutina.id}`} className='btn btn-warning m-1'>Ver rutina entera</Link>

                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/inicio" className='btn btn-primary m-2 text-white'>Inicio</Link>
            <Link to="/defaultroutins" className='btn btn-primary m-2 text-white'>Volver</Link>

        </div>   
    </div>
  )
}

export default RutinasAugmentar