import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/productCard";

export default function Home() {
  const products = useSelector((state) => state.product.list);

  return (
    <>
      <Navbar />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#020617] min-h-screen">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main>
    </>
  );
}
