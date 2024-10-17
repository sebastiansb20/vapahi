import {React, useState} from 'react';
import { Divider, Button, ListItemText, ListItem, List, Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importa Swiper desde swiper/react
import 'swiper/css'; // Importa los estilos base
import 'swiper/css/navigation'; // Importa los estilos de navegación
import 'swiper/css/pagination'; // Importa los estilos de paginación
import 'swiper/css/scrollbar'; // Opcional: si quieres agregar barra de scroll
import { useDispatch, useSelector } from 'react-redux';
import { agregarAlCarrito } from '../features/carritoSlice';

const style = {
  articuloContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginTop:'10px',
    
  },
  containerDatos: {
    borderRadius:'12px',
    backgroundColor:'#cadbf5',
    marginTop:'20px'
  },
  divider:{
    marginTop:'12px',
    marginBottom:'12px'
  },
  botonCarrito : {
    fontSize:'12px',
    maxHeight:'32px'
  },
  containerbotones : {
    display:'flex',
    flexDirection:'row',
    gap:1,

  },
  itemlistatransf :{
    maxHeight:'34px'
  }
};

const opciones = [
  { text: 'Mesa ratona' },
  { text: 'Mesa' },
  { text: 'Borradores' },
];

const ArticuloDetalles = ({ articulo }) => {
  const imagenes = articulo.imagenes || ['default_image.jpg']; 
  const [swiperIndex, setSwiperIndex] = useState(0); 

  const dispatch = useDispatch();

  const addArticuloCarrito = () =>{
    console.log('art detalle');
    console.log(articulo);

    console.log('carrito');
    dispatch(agregarAlCarrito(articulo));
  }












  return (
    <Box sx={style.articuloContainer}>
      <Card style={style.cardArticulo}>
        
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)} 
        >
          {imagenes.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Imagen ${index}`} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            Imagen {swiperIndex + 1} de {imagenes.length}
          </Typography>
        </Box>
        <Divider sx={style.divider}/>

        <CardContent sx={style.containerDatos}>
          <Typography gutterBottom variant="h5" component="div">
            {articulo.nombre}
          </Typography>

          <Typography gutterBottom variant="h7" component="div">
            {articulo.descripcion}
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
            Precio: ${articulo.precio}
          </Typography>

          <Divider sx={style.divider}/>


          <Box>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Condición: {articulo.condicion}
            </Typography>

            <Typography gutterBottom variant="body2" color="text.secondary">
              Marca: {articulo.marca ? articulo.marca : 'Sin marca'}
            </Typography>

            <Typography gutterBottom variant="body2" color="text.secondary">
              Material: {articulo.material ? articulo.material : 'No definido'}
            </Typography>
          </Box>

          <Divider sx={style.divider}/>
          
          <Box sx={style.containerbotones}>
          <Button sx={style.botonCarrito} variant="contained" color="primary" onClick={addArticuloCarrito}>
                AGREGAR AL CARRITO
            </Button>
            <Button sx={style.botonCarrito} variant="contained" color="primary">
                CONSULTAR
            </Button>
          </Box>
         

            <Divider sx={style.divider}/>
            
          <Typography gutterBottom variant="h8" component="div">
            Posibles transformaciones:
          </Typography>

          <List >
            {opciones.map((opcion, index) => (
              <ListItem sx={style.itemlistatransf} key={index}>
                <ListItemText primary={opcion.text} />
                <IconButton edge="end" aria-label="editar" onClick={() => console.log('Editar', opcion.text)}>
                  <SmsIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ArticuloDetalles;
