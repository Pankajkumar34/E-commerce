import {configureStore} from '@reduxjs/toolkit'
import Products from '../features/productsSlice'
export const store= configureStore({
    reducer:{
        data:Products,
       
    },
})