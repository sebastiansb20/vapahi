import React , {useState, useEffect} from 'react';

import { AppBar, IconButton, Typography, Toolbar, FormControl, InputLabel, MenuItem, Box, Select } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu'
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListaArticulos from '../components/ListaArticulos';
import ArticuloDetalles from '../components/ArticuloDetalles';
import Header from '../components/Header';

function Inicio() {
    
    const [categoria, setCategoria] = useState('');
    

    
    

    const categories = ['Tecnología', 'Ropa', 'Electrodomésticos', 'Hogar'];






    

    
    
    const styles = {
        formCategoria:{
            height:'40px',
            marginTop:'1em',
            marginBottom:'2em'
        }
    }

    return(
        <div>
            
            <Header />
            <Box sx={{minWidth:200}}>
            <FormControl style={styles.formCategoria} fullWidth>
                <InputLabel id="category-label">Categoría</InputLabel>
                <Select
                labelId="category-label"
                value={categoria}
                label="Categoría"
                >
                {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                    {cat}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            </Box>

            {/* <div>
                {
                    articuloSeleccionado === null ? (
                        <ListaArticulos articulos={articulos} verDetalles={handleArticuloDetalle} />
                    ) : (
                        <div>
                            <ArticuloDetalles articulo={articuloSeleccionado} />
                            
                            <ArrowBackIcon onClick={handleBackArticuloDetalle}/>
                        </div>
                    )
                }
            
            </div> */}
        </div>
        


    )
}
export default Inicio;