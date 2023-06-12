import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Nav from './Nav'

const api = 'http://localhost:8000/api/rutina/'
const apiexc = 'http://localhost:8000/api/exercises'


const EditRutinas = () => {

    
    const [routineName, setRoutineName] = useState('');
    const [selectedExercises, setSelectedExercises] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [newExercise, setNewExercise] = useState('');


    const navigate = useNavigate()
    const {id}= useParams()
    useEffect(() => {
      fetchRoutine();
      fetchExercises();
    }, []);
  
    const fetchRoutine = async () => {
      try {
        const response = await axios.get(`${api}${id}`);
  
        setRoutineName(response.data.dia);
        setSelectedExercises(response.data.exercises);
      } catch (error) {
        console.error(error);
      }
    };
  
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`${apiexc}`);
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleExerciseChange = (exerciseId, index) => {
      const selectedExercise = exercises.find((exercise) => exercise.id === exerciseId);
  
      setSelectedExercises((prevExercises) => {
        const updatedExercises = [...prevExercises];
        updatedExercises[index] = selectedExercise;
        return updatedExercises;
      });
    };

     // Agregar un ejercicio seleccionado a la rutina
  const addExercise = () => {
    const exercise = exercises.find((exercise) => exercise.id === parseInt(newExercise));
    setSelectedExercises([...selectedExercises, exercise]);
    setNewExercise('');
  };

  // Eliminar un ejercicio seleccionado de la rutina
  const removeExercise = (exerciseId) => {
    const updatedExercises = selectedExercises.filter((exercise) => exercise.id !== exerciseId);
    setSelectedExercises(updatedExercises);
  };
  
    const handleSubmit = async () => {
      try {
        const response = await axios.put(`${api}${id}`, {
          dia: routineName,
          exercises: selectedExercises.map((exercise) => exercise.id),
        });
  
        console.log('Rutina actualizada:', response.data);
      } catch (error) {
        console.error(error);
      }
      navigate(`/show/${id}`)
    };
  
    return (
        <div>
            {Nav()}  
            <div className='container mt-3 border'>
            <h2 className='mt-2'>Editar Rutina</h2>
            <div className='m-3'>
            <h5 htmlFor="name">Nombre de la Rutina:</h5>
            <div>
            <input
                type="text"
                id="name"
                value={routineName}
                onChange={ (e)=> setRoutineName(e.target.value)}
            />
            </div>
            </div>
            
            <div className='m-2'>
            <h5 htmlFor="exercises">Ejercicios:</h5>
            <div>
                <select
                    id="exercises"
                    value={newExercise}
                    onChange={(e) => setNewExercise(e.target.value)}
                >
                    <option value="">Seleccionar Ejercicio</option>
                    {exercises.map((exercise) => (
                    <option key={exercise.id} value={exercise.id}>
                        {exercise.name}
                    </option>
                    ))}
                </select>
                <button className='btn btn-dark m-2 text-white' onClick={addExercise}>+</button>
                <h5>Ejercicios Seleccionados:</h5>
                <ul>
                {selectedExercises.map((exercise) => (
                    <p key={exercise.id}>
                    {exercise.name}
                        <button className='btn btn-danger m-1 text-white' onClick={() => removeExercise(exercise.id)}>-</button>
                    </p>
                ))}
                </ul>
            </div>
           
            </div>
            
            
            
            
            <button className='btn btn-danger m-2 text-white' onClick={handleSubmit}>Guardar</button>
        
            <Link to ={`/show/${id}`} className='btn btn-primary m-2 text-white'>Cancelar</Link>
            </div>
        </div>
        
    );
   
    
    
    
    
    
    
    
}

export default EditRutinas