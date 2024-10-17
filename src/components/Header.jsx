import {React, useState, useEffect} from 'react';
import { AppBar, IconButton, Typography, Toolbar } from '@mui/material';
import Menu from '../components/Menu'
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Header( {vistaDetalle, onBack}) {


    const[abrirMenu, setAbrirMenu] = useState(false);

    const handleMenuOpen = () => {
    setAbrirMenu(true);
    };

    const handleMenuClose = () => {
    setAbrirMenu(false);
    };
    


    return(
        <div>
        <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr:2}} onClick={vistaDetalle ? onBack :null}>
                    {vistaDetalle ? <ArrowBackIcon /> : <MenuIcon onClick={handleMenuOpen} />}
                </IconButton>
                    
                    <Typography sx={{ flexGrow: 1 }} variant="h5" color="inherit" component="div">
                        Vapahí
                    </Typography>
                    <InfoIcon edge="end" />
                </Toolbar>
            </AppBar>
            <Menu open={abrirMenu} onClose={handleMenuClose}></Menu>
        </div>
    )
}

export default Header;