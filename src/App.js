import './App.css';
import { useEffect, useState} from 'react';
import NavBarGEO from './components/NavBar';
import Listcontainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// IMPORTAR PAGES
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import CategoryDetail from './pages/CategoryDetail/CategoryDetail';

function App() {


  
  return (
    
    <Router>
      <div className="App">
      <>
      <NavBarGEO title={"Geo Capacitación"}/>
      
      
       
      <Routes>
      <Route path='/' element={<Listcontainer greeting={"Geo Educación"} subtitle={"Catálogo de Cursos Disponibles"}/>} />                                                                                                       
      <Route path='/item/:id' element={<ProductDetail/>} /> 
      <Route path='/category/:id' element={<CategoryDetail/>} /> 
      
                                                                                                           
      
      </Routes>
        
    </>
        
    </div>
    </Router>
    
  );
}

export default App;
