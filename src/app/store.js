import {configureStore} from '@reduxjs/toolkit'
import Products from '../features/productsSlice';
import QuantitySlice  from '../features/QuantitySlice';
export const store= configureStore({
    reducer:{
        data:Products,
       itemsqty:QuantitySlice,
    },
})