import {configureStore} from '@reduxjs/toolkit'
import Products from '../features/productsSlice';
import ItemsSlice from '../features/ItemsSlice';
export const store= configureStore({
    reducer:{
        data:Products,
      Items:ItemsSlice
    },
})