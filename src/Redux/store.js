import { configureStore } from '@reduxjs/toolkit'

//Slices
import switchCurrencyReducer from './features/switchCurrencySlice'
import productCartReducer from './features/productCartSlice'


export const store = configureStore({
  reducer: {
    currency:switchCurrencyReducer,
    product:productCartReducer
  },
})