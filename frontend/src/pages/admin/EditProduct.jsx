import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/api";

export default function EditProduct() {
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
      console.error("Failed to fetch product", err);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">
        Edit Product
      </h1>

      <div className="space-y-4">
        <input
          type="text"
          defaultValue={product.name}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="number"
          defaultValue={product.price}
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          defaultValue={product.description}
          rows="3"
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold">
        Update Product
      </button>
    </div>
  );
}
