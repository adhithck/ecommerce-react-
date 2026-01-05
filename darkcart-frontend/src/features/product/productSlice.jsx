import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [
      { id: 1, name: "Product 1", price: 500 },
      { id: 2, name: "Product 2", price: 1000 },
    ],
  },
  reducers: {},
});

export default productSlice.reducer;
