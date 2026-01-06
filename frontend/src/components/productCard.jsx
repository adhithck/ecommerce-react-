import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      {/* Image */}
      <div className="h-40 bg-gray-200 mb-3 flex items-center justify-center rounded">
        Image
      </div>

      {/* Name */}
      <h3 className="font-medium text-sm mb-1">
        {product.name}
      </h3>

      {/* Price */}
      <p className="text-lg font-bold text-yellow-500">
        ₹{product.price}
      </p>

      {/* Navigate using backend _id */}
      <Link
        to={`/product/${product._id}`}
        className="block mt-3 bg-yellow-400 hover:bg-yellow-500 text-center py-2 rounded font-semibold"
      >
        View Product
      </Link>
    </div>
  );
}
