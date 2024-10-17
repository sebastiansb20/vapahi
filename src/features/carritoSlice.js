import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    total:0,
}

export const carritoSlice = createSlice({
    name:'carrito',
    initialState,
    reducers:{
        agregarAlCarrito: (state,action) =>{
            state.items.push(action.payload);
            state.total = state.total + action.payload.precio;
        },

        eliminarDelCarrito: (state, action) =>{
            const itemIndex = action.payload;
            const item = state.items[itemIndex];
            state.total = state.total - item.precio;
            state.items.splice(itemIndex,1);
        },
        
        limpiarCarrito: (state, action) =>{
            state.items = [];
            state.precio = 0
        }
    }
})

export const {agregarAlCarrito, eliminarDelCarrito, limpiarCarrito} = carritoSlice.actions;

export default carritoSlice.reducer;