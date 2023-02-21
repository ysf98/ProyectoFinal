import React , {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const [user, setUser] = useState()
   const navigate = useNavigate()

  useEffect(()=> {
    const userdata = window.localStorage.getItem('loggedUser')
    if (userdata) {
      const user = JSON.parse(userdata)
      setUser(user)

    }else{

      navigate('/login')
    }
  }, [])

  const logout = () =>{
    setUser(null)
    window.localStorage.removeItem('loggedUser')
  }
  return (
   
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand">
                <img src="https://i.pinimg.com/564x/f0/ee/cf/f0eecff8f557c63bca90b7b738c3df73.jpg" alt="" width="60" height="60" className="d-inline-block align-text-top border rounded"/>
            </a>
            <a className="navbar-brand text-white">Gym Routines</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            {
                user
                ? (
                (<ul className="navbar-nav mt-3 ">
                    <li className="nav-item">
                        <p className="nav-link active text-white" aria-current="page">Bienvenid@ {user.username}!</p>
                    </li>
                    <li className="nav-item">
                        <Link to="/inicio" className='nav-link active text-white'>Inicio</Link>
                    </li>                
                    <li className="nav-item">
                        <a onClick={logout} className="nav-link active text-white" aria-current="page" href="/login">Logout</a>
                    </li>
                </ul>)
                )
                :
                ((<div className='text-white'>Usuario no encontrado</div>))
            }
            </div>
        </div>
    </nav>
    
  )
}

export default Nav