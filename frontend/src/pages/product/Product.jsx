import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import API from "../../api/api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async () => {
    try {
      await API.post("/cart/add", { productId: id });
      alert("Added to cart");
    } catch (err) {
      alert("Login required");
    }
  };

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow grid md:grid-cols-2 gap-8">
          <div className="h-80 bg-gray-200 flex items-center justify-center">
            Image
          </div>

          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-3xl text-yellow-500 mt-2">
              ₹{product.price}
            </p>
            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <button
              onClick={addToCart}
              className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
