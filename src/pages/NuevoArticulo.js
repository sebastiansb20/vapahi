import {React, useState, useEffect} from 'react';
import ArticuloNuevo from '../components/ArticuloNuevo';
import Header from '../components/Header';

function NuevoArticulo () {

    const[articuloSeleccionado, setArticuloSeleccionado] = useState(null);

    const handleBackArticuloDetalle = () =>{
        setArticuloSeleccionado(null);
    }


    return(
        <div>
        
        <Header vistaDetalle={null} onBack={handleBackArticuloDetalle}/>
        
        <ArticuloNuevo />
        
        
        </div>
    )
}

export default NuevoArticulo;