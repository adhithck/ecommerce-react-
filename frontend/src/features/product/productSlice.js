import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

/* ===== FETCH PRODUCTS ===== */
export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async () => {
    const res = await API.get("/products");
    return res.data;
  }
);

/* ===== FETCH SINGLE PRODUCT ===== */
export const fetchProductById = createAsyncThunk(
  "product/fetchOne",
  async (id) => {
    const res = await API.get(`/products/${id}`);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export default productSlice.reducer;
