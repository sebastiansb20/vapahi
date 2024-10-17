
import React from 'react';
import { CardMedia, Typography, Box, ListItem, List } from '@mui/material';

const style = {
  itemLista: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderBottom: '1px solid lightgray'
  },
  itemTexto: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  }
};

const ListaArticulos = ({ articulos, verDetalles }) => {
  console.log(articulos);
  
  return (
    <Box sx={{ width: '98%', mx:'auto', marginTop:2}}>
      <List>
        {articulos.map((articulo) => {

          const imagenUrl = articulo.imagenes ? articulo.imagenes : 'url_de_imagen_por_defecto';

          return (
            <ListItem
              key={articulo.id}
              button
              style={style.itemLista}
              onClick={() => verDetalles(articulo)}
            >
              <CardMedia
                component="img"
                image={imagenUrl} 
                alt={articulo.nombre}
                sx={{ width: '150px', height: '150px', marginRight: 2 }}
              />

              <Box style={style.itemTexto}>
                <Typography gutterBottom variant="h6" component="div">
                  {articulo.nombre}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  ${articulo.precio}
                </Typography>

                <Typography gutterBottom variant="body2" color="text.secondary">
                  {articulo.descripcion}
                </Typography>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ListaArticulos;
