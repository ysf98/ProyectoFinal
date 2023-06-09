import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const apirutina = 'http://localhost:8000/api/rutina'
const apiexc = 'http://localhost:8000/api/exercises'


const CreateRutinas = () => {
  const [ dia, setDia] = useState('')
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [user_id,setUser_id] = useState('')

  const navigate = useNavigate()

  useEffect(()=> {
    const userdata = window.localStorage.getItem('loggedUser')
    if (userdata) {
      const user = JSON.parse(userdata)
      
      setUser_id(user.id)

    }
  }, [])

   // Obtener la lista de ejercicios disponibles al cargar el componente
    useEffect(() => {
      axios.get(apiexc)
        .then(response => {
          setExercises(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los ejercicios:', error);
        });
    }, []);


    const handleExerciseChange = event => {
      const exerciseId = parseInt(event.target.value);
      setSelectedExercises([...selectedExercises, exerciseId]);
    };
  
    const handleRemoveExercise = exerciseId => {
      setSelectedExercises(selectedExercises.filter(id => id !== exerciseId));
    };

    const store = async (e)=> {
        e.preventDefault()
        // Obtener los IDs de los ejercicios seleccionados
        const exercise_id = selectedExercises.map(exercise => exercise.id);
        console.log(selectedExercises)

        await axios.post(apirutina, {
          dia: dia,
          exercise_id: selectedExercises,
          user_id: user_id,}).then(response => {
            console.log('Rutina creada:', response.data);
            // Reiniciar el formulario
            setDia('');
            setSelectedExercises([]);
          })
          .catch(error => {
            console.error('Error al crear la rutina:', error);
          });
        navigate('/show')
    }
  return (
    <div>
      {Nav()}   
      <div>
      <h2>Crear Rutina</h2>
      <form onSubmit={store}>
        <div>
          <label htmlFor="routine-name">Nombre de la Rutina:</label>
          <input
            type="text"
            id="routine-name"
            value={dia}
            onChange={event => setDia(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="exercise-select">Ejercicios:</label>
          <select
            id="exercise-select"
            value=""
            onChange={handleExerciseChange}
          >
            <option value="" disabled>Selecciona un ejercicio</option>
            {exercises.map(exercise => (
              <option key={exercise.id} value={exercise.id}>
                {exercise.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Ejercicios seleccionados: {selectedExercises.length}</p>
          <ul>
            {selectedExercises.map(exerciseId => {
              const exercise = exercises.find(ex => ex.id === exerciseId);
              return (
                <li key={exerciseId}>
                  {exercise.name}
                  <button type="button" onClick={() => handleRemoveExercise(exerciseId)}>
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <button type="submit">Guardar Rutina</button>
      </form>
    </div>
    </div>    
  )
}

export default CreateRutinas