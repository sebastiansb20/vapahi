import { useState } from 'react';
import { TextField,  Box, FormControlLabel, Typography, Button, Checkbox } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase'; // Asegúrate de tener esta configuración

const styles = {
  headingNuevo: {
    fontSize:'18px',
    textAlign:'center',
    marginTop:'4px',
  
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    margin: '0 auto',
    padding:1
  },
};

const ArticuloNuevo = () => {

  const [mostrarTransf, setMostrarTransf] = useState(false);

  const [formValues, setFormValues] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    condicion: '',
    marca:'',
    material:'',
    imagenes: [],
    nombreTransformacion :'',
    estimacion: '',
    precioEstimado: 0,
  });

  const artCollRef = collection(db, 'articulos');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormValues({
      ...formValues,
      imagenes: Array.from(e.target.files), // Almacenar el archivo de imagen en el estado
    });
  };

  const crearArticulo = async () => {
    if (!formValues.imagenes || formValues.imagenes.length === 0) {
      alert('Por favor seleccionar imagen');
      return;
    }

    try {
      const urlsImagenes = await subirImagenes(formValues.imagenes);
      const articulo = {
        nombre: formValues.nombre,
        descripcion: formValues.descripcion,
        precio: parseFloat(formValues.precio),
        condicion: formValues.condicion,
        imagenes: urlsImagenes,
        marca: formValues.marca,
        material: formValues.material,
        ...(mostrarTransf && {
          transformacion: {
            nombreTransformacion:formValues.nombreTransformacion,
            estimacion: formValues.estimacion,
            precioEstimado: formValues.precioEstimado
          }
        })
      };

      console.log('Artículo creado:', articulo);
      await addDoc(artCollRef, articulo);

      alert('Artículo agregado correctamente');
    } catch (e) {
      console.error(e);
      alert('Error al agregar el artículo');
    }
  };

  const subirImagenes = async (imagenes) => {
    const urls = [];
    for(const imagen of imagenes){
      const nombreUnico = `${Date.now()}-${imagen.name}`;
      const imagenRef = ref(storage, `imagenes/${nombreUnico}`);
  
      await uploadBytes(imagenRef, imagen);
      const url = await getDownloadURL(imagenRef);
      urls.push(url);
    }
    
    return urls;
  };

  return (
    <Box sx={styles.formContainer}>
      <Typography sx={styles.headingNuevo} component="div">
        Cargar Nuevo Artículo
      </Typography>

      <TextField
        label="Nombre"
        variant="outlined"
        name="nombre"
        value={formValues.nombre}
        onChange={handleChange}
        required
      />

      <TextField
        label="Precio"
        variant="outlined"
        name="precio"
        type="number"
        value={formValues.precio}
        onChange={handleChange}
        required
      />

      <TextField
        label="Descripción"
        variant="outlined"
        name="descripcion"
        value={formValues.descripcion}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />

      <TextField
        label="Condición"
        placeholder="excelente, muy buena, buena, desgastado, mala"
        variant="outlined"
        name="condicion"
        value={formValues.condicion}
        onChange={handleChange}
        required
      />

      <TextField
        label="Marca"
        variant="outlined"
        name="marca"
        value={formValues.marca}
        onChange={handleChange}
        
      />

      <TextField
          label="Material"
          placeholder='madera, plástico, pvc'
          variant="outlined"
          name="material"
          value={formValues.material}
          onChange={handleChange}
          
      />
      <FormControlLabel control={
        <Checkbox checked={mostrarTransf} onChange={(e) => setMostrarTransf(e.target.checked)}/>} 
      
      label="¿Agregar transformación?" />

      {mostrarTransf && (
        <>
        <TextField
        label="Nombre transformación"
        variant="outlined"
        name="nombreTransformacion"
        value={formValues.nombreTransformacion}
        onChange={handleChange}
        
      />

      <TextField
        label="Estimación tiempo"
        variant="outlined"
        name="estimacion"
        value={formValues.estimacion}
        onChange={handleChange}
        
      />

      <TextField
        label="Precio estimado"
        variant="outlined"
        name="precioEstimado"
        value={formValues.precioEstimado}
        onChange={handleChange}
        required
      />
      </>
      )}
      


      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        required
      />

      <Button variant="contained" color="primary" onClick={crearArticulo}>
        Cargar Artículo
      </Button>
    </Box>
  );
};

export default ArticuloNuevo;
