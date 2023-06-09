import React from 'react'
import Nav from './Nav'

const Inicio = () => {

  return (
    
    <div>
      {Nav()}
      <div className='container-fluid mt-3 '>
        <div className='row m-2 justify-content-center'>  
          <h3>Página de inicio</h3>  
          <div className="card m-3 col-xs-10  col-md-6 col-lg-6 col-xl-3" >
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltc3xlbnwwfHwwfHw%3D&w=1000&q=80" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Crea tu rutina</h5>
              <p className="card-text">Aquí podrás crear tu propia rutina con una serie de ejercicios ya establecidos</p>
              <a href="/create" className="stretched-link"></a>
            </div>
          </div>
          <div className="card m-3 col-xs-10  col-md-6 col-lg-6 col-xl-3" >
            <img src="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Ver rutinas predeterminadas</h5>
              <p className="card-text">Aquí podrás ver unas rutinas populares</p>
              <a href="/defaultroutins" className="stretched-link"></a>
            </div>
          </div>
          <div className="card m-3 col-xs-10  col-md-6 col-lg-6 col-xl-3" >
            <img src="https://img.freepik.com/fotos-premium/varios-jovenes-amigos-haciendo-ejercicio-duro-pesas-gimnasio-enfoque-selectivo-centrarse-gyoung-womanl-primer-plano_360066-451.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Ver mis rutinas</h5>
              <p className="card-text">Aquí podrás ver tus rutinas ya creadas y podrás modificarlas</p>
              <a href="/show" className="stretched-link"></a>
            </div>
          </div>
          
        </div> 
      </div>
    </div>
  )
}

export default Inicio