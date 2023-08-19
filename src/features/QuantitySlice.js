import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 1,data:[] }
export const QuantitySlice = createSlice({
    name: "Quantity",
    initialState,
    reducers: {
        Increment: (state, action) => {
            const [productId, operation] = action.payload;
        console.log(productId,operation)
            const existingProductIndex = state.data.findIndex(product => product.id === productId);
         
            if (existingProductIndex !== -1) {
                
                const existingProduct = state.data[existingProductIndex];
                console.log(existingProduct,"true")
                if (operation === "Increment" && state.value < 10) {
                   state.value+=1
                } else if (operation === "Decrement" && state.value > 1) {
                    state.value-=1
                }
            } else {
                state.value=1
            }
        },
        AddItem: (state, action) => {
           
            const existingProduct = state.data.find(product => product.id === action.payload.id);
      
            if (!existingProduct) {
              const newProduct = { ...action.payload, CountProduct: 1 };
      
              state.data.push(newProduct);
              state.value=1
              
            } else {
              return
            }
          },

    }
})
export const { Increment,AddItem} = QuantitySlice.actions
export default QuantitySlice.reducer