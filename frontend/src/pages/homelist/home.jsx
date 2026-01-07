import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../../store/slice/productSlice";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ProductGrid from "../../components/ProductGrid";

export default function Home() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.product);

  // 🔍 read search query from URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // 🔥 filter products based on search
  const filteredProducts = list.filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  return (
    <>
      <Navbar />

      <main className="p-6 bg-[#020617] min-h-screen">
        <Hero />

        {status === "loading" && (
          <p className="text-gray-400 mt-6">
            Loading products from backend…
          </p>
        )}

        {status === "succeeded" && (
          <>
            {filteredProducts.length === 0 ? (
              <p className="text-gray-400 mt-6">
                No products found{query && ` for "${query}"`}
              </p>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </>
        )}
      </main>
    </>
  );
}
