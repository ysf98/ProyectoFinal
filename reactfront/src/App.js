import './App.css';
import ShowRutinas from './components/ShowRutinas';
import CreateRutinas from './components/CreateRutinas';
import EditRutinas from './components/EditRutinas';
import RegistroUsuarios from './components/RegistroUsuarios';
import LoginUsuario from './components/LoginUsuario';
import Inicio from './components/Inicio';
import ShowRutinaCompleta from './components/ShowRutinaCompleta';
import DefaultRutinas from './components/DefaultRutinas';
import RutinasBajar from './components/RutinasBajar';
import RutinasAugmentar from './components/RutinasAugmentar';
import ShowRutinaBajar from './components/ShowRutinaBajar';
import ShowRutinaAugmentar from './components/ShowRutinaAugmentar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <RegistroUsuarios/>}/>
            <Route path='/login' element={ <LoginUsuario/>}/>
            <Route path='/show' element={ <ShowRutinas/>}/>
            <Route path='/show/:id' element={ <ShowRutinaCompleta/>}/>
            <Route path='/bajarpeso/:id' element={ <ShowRutinaBajar/>}/>
            <Route path='/augmentarpeso/:id' element={ <ShowRutinaAugmentar/>}/>
            <Route path='/inicio' element={ <Inicio/>}/>
            <Route path='/bajarpeso' element={<RutinasBajar/>}/>
            <Route path='/augmentarpeso' element={<RutinasAugmentar/>}/>
            <Route path='/defaultroutins' element={ <DefaultRutinas/>}/>
            <Route path='/create' element={ <CreateRutinas/>}/>
            <Route path='/edit/:id' element={ <EditRutinas/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
