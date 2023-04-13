import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    id: "",
    counter: 1,
    price: 0,
    image: "",
    title: "",
  },
  reducers: {
    update: (state, action) => {
      state.id = action.payload.id;
      state.counter = action.payload.counter;
      state.price = action.payload.price;
      state.image = action.payload.image;
      state.title = action.payload.title;
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
