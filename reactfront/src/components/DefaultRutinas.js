import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'

const DefaultRutinas = () => {
  

  return (
    <div>
      
      {Nav()}   
      <div className=' container d-flex col-10'>
        <div className='container col-6 justify-content-start align-self-center'>
          <header className='mb-5'>
            <h1>Elige la rutina que mejor se adapte a tus objetivos 🚀</h1>
          </header> 
          <div>
            <section name="bajarpeso">
              <h4>Perder peso:</h4>
              <p> Rutina basada en una mayor parte de ejercicios de cardio y una parte de ejercicios de musculación a altas repeticiones con poco peso. </p>
            </section>
            <section name="augmentarmusc">
              <h4>Augmentar músculo:</h4>
              <p> Rutina basada en una mayor parte de ejercicios de musculación a bajas repeticiones con peso más elevado. </p>      
            </section>
            </div>     
        </div>      
        <div className='container col-4 mt-3 justify-content-end'>
          <div className='m-2'>  
            <div className="card col m-3" >
              <img src="https://www.healthifyme.com/blog/wp-content/uploads/2022/09/shutterstock_1028109844-1.jpg" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Perder Peso</h5>
                <a href="/bajarpeso" className="stretched-link"></a>
              </div>
            </div>
            <div className="card col m-3" >
              <img src="https://okdiario.com/img/vida-sana/2015/08/hipertrofia.jpg" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Augmentar Músculo</h5>
                <a href="/augmentarpeso" className="stretched-link"></a>
              </div>
            </div>          
          </div> 
        </div> 
      </div>
      <Link to="/inicio" className='btn btn-primary m-2 text-white'>Inicio</Link>
    </div>
  )
}

export default DefaultRutinas