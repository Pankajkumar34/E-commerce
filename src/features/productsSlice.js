import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
// import getAllProduct from '../Components/axiosHit'

export const Products = createSlice({
  name: "Products",
  initialState: {
    dataProducts: [],
    value: [],
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
 
      const AddProduct = { ...action.payload, CountProduct: 1 };
      console.log("===", AddProduct);
      state.dataProducts.push(AddProduct);
      state.cartCont += 1;
    },
    deleteProduct: (state, action) => {
      console.log(action.payload)
      const deleteData=state.dataProducts.filter((item)=>{
        return item.id !== action.payload
      })
state.dataProducts=deleteData
    },
  },
});

export const { AddProduct, deleteProduct } = Products.actions;
export default Products.reducer;
