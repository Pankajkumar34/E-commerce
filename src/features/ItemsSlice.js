import { createSlice } from "@reduxjs/toolkit";

export const ItemsSlice = createSlice({
  name: "product",
  initialState: {
    Search_items: [],
    toggle: "false",
  },
  reducers: {
    AddSearchItems: (state, action) => {
      
      state.Search_items = action.payload 
      state.toggle="true"
    },
  },
});

export const {AddSearchItems}=ItemsSlice.actions
export default ItemsSlice.reducer;
