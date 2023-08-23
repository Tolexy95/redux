import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  price: 0,
};

export const productCartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value += 1;
    },

    updatePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updatePrice } = productCartSlice.actions;

export default productCartSlice.reducer;
