import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const api = 'http://localhost:8000/api/rutinaBp/'

const ShowRutinaBajar = () => {
  
    const [rutina, setRutina] = useState([])
    const {id}= useParams()

    useEffect( ()=>{
        const getRutina = async () => {
            const response = await axios.get(`${api}${id}`)
            setRutina(response.data)
        }
        getRutina()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

  return (
    <div>
        {Nav()}
        <div className='container mt-3 border'>
            <h2 className='mt-2'>Rutina completa '{rutina.nombre}'</h2>
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
                    <td>{rutina.nombre}</td>
                </tr>
                <tr>
                    <th scope="row">1º Ejercicio</th>
                    <td>{rutina.Ejercicio_1}</td>
                </tr>
                <tr>
                    <th scope="row">2º Ejercicio</th>
                    <td>{rutina.Ejercicio_2}</td>
                </tr>
                <tr>
                    <th scope="row">3º Ejercicio</th>
                    <td>{rutina.Ejercicio_3}</td>
                </tr>
                <tr>
                    <th scope="row">4º Ejercicio</th>
                    <td>{rutina.Ejercicio_4}</td>
                </tr>
                <tr>
                    <th scope="row">5º Ejercicio</th>
                    <td>{rutina.Ejercicio_5}</td>
                </tr>
                <tr>
                    <th scope="row">6º Ejercicio</th>
                    <td>{rutina.Ejercicio_6}</td>
                </tr>
                <tr>
                    <th scope="row">7º Ejercicio</th>
                    <td>{rutina.Ejercicio_7}</td>
                </tr>
                <tr>
                    <th scope="row">8º Ejercicio</th>
                    <td>{rutina.Ejercicio_8}</td>
                </tr>
    
                </tbody>
            </table>
            <Link to={`/bajarpeso`} className='btn btn-primary m-1'>Volver</Link>
        </div>   
    </div>
  )
}

export default ShowRutinaBajar