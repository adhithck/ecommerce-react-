import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";

export default function Product() {
  const { id } = useParams();

  const product = useSelector((state) =>
    state.product.list.find((p) => p._id === id)
  );

  if (!product)
    return <div className="text-white p-6">Product not found</div>;

  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#020617] min-h-screen text-gray-200">
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p className="text-yellow-400 text-2xl mt-2">
          ₹{product.price}
        </p>
      </div>
    </>
  );
}
