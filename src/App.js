import './App.css';
import NavBarGEO from './components/NavBar';
import Listcontainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';



function App() {
  return (
    
    <div className="App">
      <>
      <NavBarGEO title={"Geo Capacitación"}/>
      <Listcontainer greeting={"Oferta de cursos y capacitaciones de GEO"}/>
    </>
        
    </div>
  );
}

export default App;
