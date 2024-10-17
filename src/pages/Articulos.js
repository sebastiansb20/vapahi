import React, {useState, useEffect} from 'react';
import ArticuloNuevo from '../components/ArticuloNuevo';
import { AppBar, IconButton, Typography, Toolbar, FormControl, InputLabel, MenuItem, Box, Select } from '@mui/material';
import ListaArticulos from '../components/ListaArticulos';
import Header from '../components/Header'
import ArticuloDetalles from '../components/ArticuloDetalles'
import { db, storage } from '../firebase'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function Articulos () {

    const[articulos, setArticulos] = useState([]);
    const [loading, setLoading] = useState(true);
    const artCollRef = collection(db, "articulos");
    const[articuloSeleccionado, setArticuloSeleccionado] = useState(null);
    

    const handleArticuloDetalle = (articulo) =>{
        
        console.log('detalles: ' + articulo)
        setArticuloSeleccionado(articulo);
       
    }

    const handleBackArticuloDetalle = () =>{
        setArticuloSeleccionado(null);
    }

    const fetchArticulos = async() =>{
        try{
            const data = await getDocs(artCollRef);
            setArticulos(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            setLoading(false);
        }catch(error){
            console.log('el error: ' + error);
            setLoading(false);
        }

    }

    const verDetalles = (articulo) => {
        console.log('detalles: ' + articulo)
    }

    useEffect( ()=>{
        fetchArticulos();
        setArticuloSeleccionado(null)
    },[]);

    useEffect( ()=>{
        setArticuloSeleccionado(articuloSeleccionado)
        console.log(articuloSeleccionado)
    },[articuloSeleccionado]);

    const renderContent = () =>{
        if(loading){
            return(
            <Box>
            <Typography variant="h6" textAlign="center">
                Cargando artículos...
            </Typography>
            </Box>
            )
        }

        if(articuloSeleccionado){
            return(
                <Box>
                    
                    <ArticuloDetalles  articulo={articuloSeleccionado} onBack={handleBackArticuloDetalle} />
                </Box>
            )
        }else{
            return(
                <Box>
                    <ListaArticulos articulos={articulos} verDetalles={handleArticuloDetalle} />
                </Box>
            )
        }
    }


    return(
        <div>
        <Header vistaDetalle={!!articuloSeleccionado} onBack={handleBackArticuloDetalle}/>
        {renderContent()}
        </div>
    )
}

export default Articulos;