import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currencyType: 'NGN', 
};

export const switchCurrencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currencyType = action.payload; 
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeCurrency} = switchCurrencySlice.actions

export default switchCurrencySlice.reducer
