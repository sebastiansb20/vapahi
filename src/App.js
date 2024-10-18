import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Articulos from './pages/Articulos'
import ListaArticulos from './components/ListaArticulos';
import ArticuloDetalles from './components/ArticuloDetalles';
import Menu from './components/Menu'
import ArticuloNuevo from './components/ArticuloNuevo';
import NuevoArticulo from './pages/NuevoArticulo';
import Carrito from './pages/Carrito';
function App() {

  

  return (  
    <Router>
      <Menu />
      <Routes>
      
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/articulo/{id}' element={<ArticuloDetalles />} />
        <Route path='/nuevoarticulo' element={<NuevoArticulo />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </Router>
    
  );
}

export default App;
