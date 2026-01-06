import { useEffect, useState } from "react";
import API from "../../api/api";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products"); // 🔁 backend endpoint
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Manage Products
      </h1>

      <div className="bg-white rounded shadow">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b font-semibold">
          <span>Product</span>
          <span>Price</span>
          <span>Edit</span>
          <span>Delete</span>
        </div>

        {/* Rows */}
        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-4 gap-4 p-4 border-b items-center"
          >
            <span>{product.name}</span>
            <span>₹{product.price}</span>

            <a
              href={`/admin/edit/${product._id}`}
              className="text-blue-600 hover:underline"
            >
              Edit
            </a>

            <button
              onClick={() => alert("Delete API later")}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
