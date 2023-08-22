import { createSlice } from "@reduxjs/toolkit";


export const Products = createSlice({
  name: "Products",
  initialState: {
    dataProducts: [],
    toggle: [('false')],
    cartCont: 0,
    loading: false,
    error: null,
  },


  // extrareducers
  // extraReducers:{
  //   [getAllProduct.pending]:(state)=>{
  //       state.loading=true;
  //   },
  //   [getAllProduct.fulfilled]:(state,action)=>{
  //       state.loading=false;
  //       state.dataProducts=action.payload;
  //   },
  //   [getAllProduct.rejected]:(state,action)=>{
  //       state.loading=false;
  //       state.error=action.payload;
  //   },

  // },
  reducers: {
    AddProduct: (state, action) => {
      const existingProduct = state.dataProducts.find(product => product.id === action.payload.id);

      if (!existingProduct) {
        const newProduct = { ...action.payload, Quantity: 1 };

        state.dataProducts.push(newProduct);
        state.cartCont += 1; // Fixed typo: cartCont should be cartCount
      } else {
        return
      }
    },

    deleteProduct: (state, action) => {

      const deleteData = state.dataProducts.filter((item) => {
        return item.id !== action.payload
      })
      state.cartCont -= 1;
      state.dataProducts = deleteData
    },
    toggleDropDown: (state, action) => {
      state.toggle = action.payload
    },
    QutyIncrement: (state, action) => {
      let [id, operator] = action.payload

      let QuantityCount = state?.dataProducts?.map((currentitem) => {
        if (currentitem.id === id && operator === "Increment" && currentitem.Quantity < 10) {
          return { ...currentitem, Quantity: currentitem.Quantity + 1 }
          // ,Quantity:currentitem.Quantity+1}

        } else if (currentitem.id === id && operator === "Decrement" && currentitem.Quantity > 1) {
          return { ...currentitem, Quantity: currentitem.Quantity - 1 }
          // ,Quantity:currentitem.Quantity-1
        }
        return currentitem

      })

      return { ...state, dataProducts: QuantityCount }
    }
  },
  clearCart: (state,action) => {
   return {...state,dataProducts:[]}
  }


});

export const { AddProduct, deleteProduct, toggleDropDown, QutyIncrement ,clearCart} = Products.actions;
export default Products.reducer;
