import {React, useState, useEffect} from 'react';
import CarritoC from '../components/CarritoC'
import Header from '../components/Header';
import { useSelector } from 'react-redux';


function Carrito () {

    const itemsCarrito = useSelector(state => state.carrito.items);
    const total = useSelector(state => state.carrito.total);

    
    const formadePago = null;
    const subtotal = 0;
    const [formaPago, setFormaPago] = useState(null);
    const [precioFinal, setPrecioFinal] = useState(0);
    const [costoEnvio, setCostoEnvio] = useState(0);
    const imagenUrl = null;

    const articulosCarriten = itemsCarrito;


    console.log('articulosCarriten')
    console.log(articulosCarriten)

    return(
        <div>
            <Header />
            <CarritoC articulosCarriten={itemsCarrito}/>
        </div>
        
    )
}

export default Carrito;