import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/product/productSlice";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ProductGrid from "../../components/ProductGrid";

export default function Home() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main className="p-6 bg-[#020617] min-h-screen">
        <Hero />

        {status === "loading" && (
          <p className="text-gray-400 mt-6">Loading products from backend…</p>
        )}

        {status === "succeeded" && <ProductGrid products={list} />}
      </main>
    </>
  );
}
