import react from 'react';
import { Box, ListItemText, Typography, Drawer, List, ListItem, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const style={
    divMenu:{
        display:'flex',
        flexWrap:'wrap'
    }
}


const Menu = ({open,onClose}) =>{

    const navigate = useNavigate();

    const handleNavigation = (path) =>{
        navigate(path);
        onClose();
    }

    return(
        <Drawer anchor="left"
            open={open}
            onClose={onClose}
            sx={{"& .MuiDrawer-paper": {width:"100%"}}}
        >
            <Box
                sx={{
                    width:"100%",
                    display:'flex',
                    padding:2,
                    alignItems:'center',
                    textAlign:"center"
                }}
                role="presentation"
                onClick={onClose}
            >
                    <ArrowBackIcon />
                    <Typography variant="h6">Menú</Typography>
                
            </Box>
            <Box sx={{display:'flex', alignItems:'center',textAlign:'center', flexDirection:'column'}}>
                <List>
                <ListItem button onClick={()=>handleNavigation('/inicio')}>
                    <ListItemText primary="Inicio" />
                </ListItem>
                <ListItem button onClick={() => handleNavigation('/articulos')}>
                    <ListItemText primary="Articulos" />
                </ListItem>
                <ListItem button onClick={()=> handleNavigation('/nuevoarticulo')}>
                    <ListItemText primary="Agregar articulo" />
                </ListItem>
                <ListItem button onClick={() => handleNavigation('/mensajes')}>
                    <ListItemText primary="Mensajes" />
                </ListItem>
                <ListItem button onClick={() => handleNavigation('/carrito')}>
                    <ListItemText primary="Carrito" />
                </ListItem>
                <ListItem button onClick={()=> handleNavigation('/cuenta')}>
                    <ListItemText primary="Mi usuario" />
                </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export default Menu;