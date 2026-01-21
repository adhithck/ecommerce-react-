import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const fetchProducts = createAsyncThunk(
  "adminProducts/fetch",
  async () => (await API.get("/products")).data
);

export const deleteProduct = createAsyncThunk(
  "adminProducts/delete",
  async (id) => {
    await API.delete(`/products/${id}`);
    return id;
  }
);

const slice = createSlice({
  name: "adminProducts",
  initialState: { products: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (s, a) => {
        s.products = a.payload;
      })
      .addCase(deleteProduct.fulfilled, (s, a) => {
        s.products = s.products.filter(p => p._id !== a.payload);
      });
  },
});

export default slice.reducer;
