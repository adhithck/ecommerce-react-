import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/product/productSlice";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/productCard";

export default function Home() {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <p className="text-white p-6">Loading products...</p>;
  }

  return (
    <>
      <Navbar />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#020617] min-h-screen">
        {list.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </main>
    </>
  );
}
