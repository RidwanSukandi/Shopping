import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../Features/productSlice'

export default configureStore({
  reducer: {
  
     product:productSlice
  
  }
})