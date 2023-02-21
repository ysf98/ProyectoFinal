import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Nav from './Nav'

const api = 'http://localhost:8000/api/rutina/'

const EditRutinas = () => {

    
    const [dia, setDia] = useState('')
    const [ Ejercicio_1, setEj1] = useState('')
    const [ Ejercicio_2, setEj2] = useState('')
    const [ Ejercicio_3, setEj3] = useState('')
    const [ Ejercicio_4, setEj4] = useState('')
    const [ Ejercicio_5, setEj5] = useState('')
    const [ Ejercicio_6, setEj6] = useState('')
    const [ Ejercicio_7, setEj7] = useState('')
    const [ Ejercicio_8, setEj8] = useState('')
    const navigate = useNavigate()
    const {id}= useParams()


    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${api}${id}` , {
            dia: dia,
            Ejercicio_1: Ejercicio_1,
            Ejercicio_2: Ejercicio_2,
            Ejercicio_3: Ejercicio_3,
            Ejercicio_4: Ejercicio_4,
            Ejercicio_5: Ejercicio_5,
            Ejercicio_6: Ejercicio_6,
            Ejercicio_7: Ejercicio_7,
            Ejercicio_8: Ejercicio_8,
        });
        navigate(`/show/${id}`)
    }

    useEffect( ()=>{
        const getRutinasById = async () => {
            const response = await axios.get(`${api}${id}`)
            setDia(response.data.dia)
            setEj1(response.data.Ejercicio_1)
            setEj2(response.data.Ejercicio_2)
            setEj3(response.data.Ejercicio_3)
            setEj4(response.data.Ejercicio_4)
            setEj5(response.data.Ejercicio_5)
            setEj6(response.data.Ejercicio_6)
            setEj7(response.data.Ejercicio_7)
            setEj8(response.data.Ejercicio_8)
        }
        getRutinasById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

  return (
    <div>
        {Nav()}
        <div className='container col-4 mt-2'>
            <h3>Editar Rutina</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'><strong>Día/Nombre</strong></label>
                    <input 
                        value={dia}
                        onChange={ (e)=> setDia(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                    </input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'><strong>1º Ejercicio</strong></label>
                    <select 
                        value={Ejercicio_1}
                        onChange={ (e)=> setEj1(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                        <option disabled>-----CARDIO-----</option>
                        <option>SPINNIG 15 min</option>
                        <option>CINTA 15 min</option>
                        <option>SALTO A LA COMBA</option>
                        <option disabled>-----PECHO-----</option>
                        <option>PRESS DE BANCA</option>
                        <option>PRESS CON MANCUERNAS</option>
                        <option>PRESS DE BANCA INCLINADO</option>
                        <option>FLEXIONES CON PESO</option>
                        <option>CRUCES EN POLEA</option>
                        <option disabled>-----ESPALDA-----</option>
                        <option>DOMINADAS</option>
                        <option>REMO CON BARRA</option>
                        <option>REMO EN POLEA BAJA</option>
                        <option>PESO MUERTO</option>
                        <option>JALÓN AL PECHO</option>
                        <option disabled>-----PIERNA-----</option>                    
                        <option>SENTADILLA CON BARRA</option>
                        <option>PRENSA</option>
                        <option>PESO MUERTO RUMANO</option>
                        <option>CURL FEMORAL</option>
                        <option>EXTENSIÓN DE CUÁDRICEPS</option>
                        <option>ELEVACIONES DE GEMELOS</option>
                        <option disabled>-----HOMBRO-----</option>
                        <option>ELEVACIONES LATERALES DE MANCUERNAS</option>
                        <option>ELEVACIONES FRONTALES DE MANCUERNAS</option>
                        <option>PRESS MILITAR</option>
                        <option>PRESS ARNOLD</option>
                        <option>--DESCANSO--</option>
                        <option>--DIA LIBRE--</option>
                    </select>  
                </div>
                <div className='mb-3'>
                    <label className='form-label'><strong>2º Ejercicio</strong></label>
                    <select 
                        value={Ejercicio_2}
                        onChange={ (e)=> setEj2(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                        <option disabled>-----CARDIO-----</option>
                        <option>SPINNIG 15 min</option>
                        <option>CINTA 15 min</option>
                        <option>SALTO A LA COMBA</option>
                        <option disabled>-----PECHO-----</option>
                        <option>PRESS DE BANCA</option>
                        <option>PRESS CON MANCUERNAS</option>
                        <option>PRESS DE BANCA INCLINADO</option>
                        <option>FLEXIONES CON PESO</option>
                        <option>CRUCES EN POLEA</option>
                        <option disabled>-----ESPALDA-----</option>
                        <option>DOMINADAS</option>
                        <option>REMO CON BARRA</option>
                        <option>REMO EN POLEA BAJA</option>
                        <option>PESO MUERTO</option>
                        <option>JALÓN AL PECHO</option>
                        <option disabled>-----PIERNA-----</option>                    
                        <option>SENTADILLA CON BARRA</option>
                        <option>PRENSA</option>
                        <option>PESO MUERTO RUMANO</option>
                        <option>CURL FEMORAL</option>
                        <option>EXTENSIÓN DE CUÁDRICEPS</option>
                        <option>ELEVACIONES DE GEMELOS</option>
                        <option disabled>-----HOMBRO-----</option>
                        <option>ELEVACIONES LATERALES DE MANCUERNAS</option>
                        <option>ELEVACIONES FRONTALES DE MANCUERNAS</option>
                        <option>PRESS MILITAR</option>
                        <option>PRESS ARNOLD</option>
                        <option>--DESCANSO--</option>
                        <option>--DIA LIBRE--</option>
                    </select>  
                </div>
                <div className='mb-3'>
                    <label className='form-label'><strong>3º Ejercicio</strong></label>
                    <select 
                        value={Ejercicio_3}
                        onChange={ (e)=> setEj3(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                        <option disabled>-----CARDIO-----</option>
                        <option>SPINNIG 15 min</option>
                        <option>CINTA 15 min</option>
                        <option>SALTO A LA COMBA</option>
                        <option disabled>-----PECHO-----</option>
                        <option>PRESS DE BANCA</option>
                        <option>PRESS CON MANCUERNAS</option>
                        <option>PRESS DE BANCA INCLINADO</option>
                        <option>FLEXIONES CON PESO</option>
                        <option>CRUCES EN POLEA</option>
                        <option disabled>-----ESPALDA-----</option>
                        <option>DOMINADAS</option>
                        <option>REMO CON BARRA</option>
                        <option>REMO EN POLEA BAJA</option>
                        <option>PESO MUERTO</option>
                        <option>JALÓN AL PECHO</option>
                        <option disabled>-----PIERNA-----</option>                    
                        <option>SENTADILLA CON BARRA</option>
                        <option>PRENSA</option>
                        <option>PESO MUERTO RUMANO</option>
                        <option>CURL FEMORAL</option>
                        <option>EXTENSIÓN DE CUÁDRICEPS</option>
                        <option>ELEVACIONES DE GEMELOS</option>
                        <option disabled>-----HOMBRO-----</option>
                        <option>ELEVACIONES LATERALES DE MANCUERNAS</option>
                        <option>ELEVACIONES FRONTALES DE MANCUERNAS</option>
                        <option>PRESS MILITAR</option>
                        <option>PRESS ARNOLD</option>
                        <option>--DESCANSO--</option>
                        <option>--DIA LIBRE--</option>
                    </select>  
                </div>
                <div className='mb-3'>
                    <label className='form-label'><strong>4º Ejercicio</strong></label>
                    <select 
                        value={Ejercicio_4}
                        onChange={ (e)=> setEj4(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                        <option disabled>-----CARDIO-----</option>
                        <option>SPINNIG 15 min</option>
                        <option>CINTA 15 min</option>
                        <option>SALTO A LA COMBA</option>
                        <option disabled>-----PECHO-----</option>
                        <option>PRESS DE BANCA</option>
                        <option>PRESS CON MANCUERNAS</option>
                        <option>PRESS DE BANCA INCLINADO</option>
                        <option>FLEXIONES CON PESO</option>
                        <option>CRUCES EN POLEA</option>
                        <option disabled>-----ESPALDA-----</option>
                        <option>DOMINADAS</option>
                        <option>REMO CON BARRA</option>
                        <option>REMO EN POLEA BAJA</option>
                        <option>PESO MUERTO</option>
                        <option>JALÓN AL PECHO</option>
                        <option disabled>-----PIERNA-----</option>                    
                        <option>SENTADILLA CON BARRA</option>
                        <option>PRENSA</option>
                        <option>PESO MUERTO RUMANO</option>
                        <option>CURL FEMORAL</option>
                        <option>EXTENSIÓN DE CUÁDRICEPS</option>
                        <option>ELEVACIONES DE GEMELOS</option>
                        <option disabled>-----HOMBRO-----</option>
                        <option>ELEVACIONES LATERALES DE MANCUERNAS</option>
                        <option>ELEVACIONES FRONTALES DE MANCUERNAS</option>
                        <option>PRESS MILITAR</option>
                        <option>PRESS ARNOLD</option>
                        <option>--DESCANSO--</option>
                        <option>--DIA LIBRE--</option>
                    </select>  
                </div>
                <div className='mb-3'>
                    <label className='form-label'><strong>5º Ejercicio</strong></label>
                    <select 
                        value={Ejercicio_5}
                        onChange={ (e)=> setEj5(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                        <option disabled>-----CARDIO-----</option>
                        <option>SPINNIG 15 min</option>
                        <option>CINTA 15 min</option>
                        <option>SALTO A LA COMBA</option>
                        <option disabled>-----BICEPS-----</option>
                        <option>CURL DE BICEPS CON BARRA OLÍMPICA</option>
                        <option>CURL CONCENTRADO</option>
                        <option>CURL EN BARRA Z</option>
                        <option>CURL MARTILLO</option>
                        <option>FLEXIONES DE BICEPS EN POLEA</option>
                        <option disabled>-----TRICEPS-----</option>
                        <option>FLEXIONES CON MANOS JUNTAS</option>
                        <option>EXTENSIONES EN TRX</option>
                        <option>EXTENSIONES CON MANCUERNA EN BANCO</option>
                        <option>PRESS FRANCÉS</option>
                        <option>BARRAS PARALELAS</option>
                        <option disabled>-----ABDOMINALES-----</option>                    
                        <option>SIT UP</option>
                        <option>ELEVACION DE PIERNAS</option>
                        <option>PLANCHA ISOMÉTRICA</option>
                        <option>MOUNTAIN CLIMBERS</option>
                        <option>CABLE CRUNCH</option>
                        <option>--DESCANSO--</option>
                        <option>--DIA LIBRE--</option>
                    </select>  
                </div>
                <div className='mb-3'>
                    <label className='form-label'><strong>6º Ejercicio</strong></label>
                    <select 
                        value={Ejercicio_6}
                        onChange={ (e)=> setEj6(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                        <option disabled>-----CARDIO-----</option>
                        <option>SPINNIG 15 min</option>
                        <option>CINTA 15 min</option>
                        <option>SALTO A LA COMBA</option>
                        <option disabled>-----BICEPS-----</option>
                        <option>CURL DE BICEPS CON BARRA OLÍMPICA</option>
                        <option>CURL CONCENTRADO</option>
                        <option>CURL EN BARRA Z</option>
                        <option>CURL MARTILLO</option>
                        <option>FLEXIONES DE BICEPS EN POLEA</option>
                        <option disabled>-----TRICEPS-----</option>
                        <option>FLEXIONES CON MANOS JUNTAS</option>
                        <option>EXTENSIONES EN TRX</option>
                        <option>EXTENSIONES CON MANCUERNA EN BANCO</option>
                        <option>PRESS FRANCÉS</option>
                        <option>BARRAS PARALELAS</option>
                        <option disabled>-----ABDOMINALES-----</option>                    
                        <option>SIT UP</option>
                        <option>ELEVACION DE PIERNAS</option>
                        <option>PLANCHA ISOMÉTRICA</option>
                        <option>MOUNTAIN CLIMBERS</option>
                        <option>CABLE CRUNCH</option>
                        <option>--DESCANSO--</option>
                        <option>--DIA LIBRE--</option>
                    </select>  
                </div>
                <div className='mb-3'>
                    <label className='form-label'><strong>7º Ejercicio</strong></label>
                    <select 
                        value={Ejercicio_7}
                        onChange={ (e)=> setEj7(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                        <option disabled>-----CARDIO-----</option>
                        <option>SPINNIG 15 min</option>
                        <option>CINTA 15 min</option>
                        <option>SALTO A LA COMBA</option>
                        <option disabled>-----BICEPS-----</option>
                        <option>CURL DE BICEPS CON BARRA OLÍMPICA</option>
                        <option>CURL CONCENTRADO</option>
                        <option>CURL EN BARRA Z</option>
                        <option>CURL MARTILLO</option>
                        <option>FLEXIONES DE BICEPS EN POLEA</option>
                        <option disabled>-----TRICEPS-----</option>
                        <option>FLEXIONES CON MANOS JUNTAS</option>
                        <option>EXTENSIONES EN TRX</option>
                        <option>EXTENSIONES CON MANCUERNA EN BANCO</option>
                        <option>PRESS FRANCÉS</option>
                        <option>BARRAS PARALELAS</option>
                        <option disabled>-----ABDOMINALES-----</option>                    
                        <option>SIT UP</option>
                        <option>ELEVACION DE PIERNAS</option>
                        <option>PLANCHA ISOMÉTRICA</option>
                        <option>MOUNTAIN CLIMBERS</option>
                        <option>CABLE CRUNCH</option>
                        <option>--DESCANSO--</option>
                        <option>--DIA LIBRE--</option>
                    </select>  
                </div>
                <div className='mb-3'>
                    <label className='form-label'><strong>8º Ejercicio</strong></label>
                    <select 
                        value={Ejercicio_8}
                        onChange={ (e)=> setEj8(e.target.value)}
                        type='text'
                        className='form-control text-center'>
                        <option disabled>-----CARDIO-----</option>
                        <option>SPINNIG 15 min</option>
                        <option>CINTA 15 min</option>
                        <option>SALTO A LA COMBA</option>
                        <option disabled>-----BICEPS-----</option>
                        <option>CURL DE BICEPS CON BARRA OLÍMPICA</option>
                        <option>CURL CONCENTRADO</option>
                        <option>CURL EN BARRA Z</option>
                        <option>CURL MARTILLO</option>
                        <option>FLEXIONES DE BICEPS EN POLEA</option>
                        <option disabled>-----TRICEPS-----</option>
                        <option>FLEXIONES CON MANOS JUNTAS</option>
                        <option>EXTENSIONES EN TRX</option>
                        <option>EXTENSIONES CON MANCUERNA EN BANCO</option>
                        <option>PRESS FRANCÉS</option>
                        <option>BARRAS PARALELAS</option>
                        <option disabled>-----ABDOMINALES-----</option>                    
                        <option>SIT UP</option>
                        <option>ELEVACION DE PIERNAS</option>
                        <option>PLANCHA ISOMÉTRICA</option>
                        <option>MOUNTAIN CLIMBERS</option>
                        <option>CABLE CRUNCH</option>
                        <option>--DESCANSO--</option>
                        <option>--DIA LIBRE--</option>
                    </select>  
                </div>
                <button type='submit' className='btn btn-info m-2 mt-1'>Modificar</button>
                <Link to ={`/show/${id}`} className='btn btn-danger m-2 mt-1'>Cancelar</Link>
            </form>
        </div>
    </div>
  )
}

export default EditRutinas