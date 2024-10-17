import {React, useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } from '../features/carritoSlice';

import { Divider, Button, ListItemText, ListItem, List, Box, Card, CardMedia, Typography, IconButton } from '@mui/material';


const style={
    imgItem:{
        border:'4px solid black'
    },
    headingCarrito: {
        textAlign:'center',
        fontSize:'24px',
        fontFamily:'montserrat'
    },
    boxCarritoHeader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    boxItem:{
        display:'grid',
        gridTemplateColumns:'auto 2fr'
    },
    itemNombre:{
        fontSize:'12px',
        fontFamily:'Montserrat',
        alignItems:'start'
    },
    itemPrecio:{
        fontSize:'12px',
        fontFamily:'Montserrat',
        fontStyle:'bold'
    },
    containerPrecio:{
    
    },
    botonesPagar:{

    },
    botonFormaPago:{

    }

}

const CarritoC = ({articulosCarriten}) =>{
    
    const dispatch = useDispatch();

    useEffect(() =>{
        console.log('agregar nuevo')
        console.log(articulosCarriten)
        console.log('articulosCarriten')
    console.log(articulosCarriten)
    },[])
    

    const formadePago = null;
    const subtotal = 0;
    const [formaPago, setFormaPago] = useState(null);
    const [precioFinal, setPrecioFinal] = useState(0);
    const [costoEnvio, setCostoEnvio] = useState(0);
    const handleFormaPago = () =>{
        
    }

    const handleVaciar = () =>{
        dispatch(limpiarCarrito)
    }

    
    return(
    <Box>
        <Typography sx={style.headingCarrito} variant="h4">
            Carrito
        </Typography>

        <Divider />
        <Box sx={style.boxCarritoHeader}>
            <Typography variant="h6">
                Tus artículos
            </Typography>
            <Typography variant="h8" onClick={handleVaciar}>
                Vaciar carrito
            </Typography>
        </Box>

        <Box>
            <List>
                {articulosCarriten.map((articulo) =>{
                    return(
                        <ListItem sx={style.boxItem}>
                            <Box>
                            <CardMedia 
                                component="img"
                                image={articulo.imagenes}
                                alt={articulo.nombre}
                                sx={{width:'45px', marginLeft:'4px', border:'1px solid black'}}
                                />
                            </Box>
                            <Box>
                                <Typography sx={style.itemNombre}>
                                {articulo.nombre} 
                                </Typography>
                                <Typography  sx={style.itemPrecio}>
                                    $ {articulo.precio}
                                </Typography>
                            </Box>

                            
                        </ListItem>
                    )
                })}
                
            </List>
        </Box>
        <Divider />

        <Box sx={style.containerPrecio}>
            <Box>
                <Typography>
                    Subtotal: ${subtotal}
                </Typography>
                <Typography>
                    Envío: ${costoEnvio}
                </Typography>
                <Typography>
                    Total: ${precioFinal}
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Forma de pago:
                </Typography>
                <Typography>
                    {formadePago}
                </Typography>
            </Box>
            
        </Box>

        <Divider />
        <Box sx={style.botonesPagar}>
            <Button sx={style.botonFormaPago} variant="contained" color="red" onClick={handleFormaPago}>
                    Elige una forma de pago
            </Button>
            <IconButton>
                
            </IconButton>

            <Button sx={style.botonComprar} variant="contained" color="red">
                    COMPRAR
            </Button>
        </Box>
        
        


    </Box>
    )
}


export default CarritoC;