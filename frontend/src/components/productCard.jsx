import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const lowStock = product.countInStock <= 3;

  return (
    <div className="relative bg-[#020617] border border-gray-800 rounded-xl p-4 shadow-lg">
      {/* Badge */}
      <span className="absolute top-3 left-3 text-[10px] px-2 py-0.5 rounded-full border border-gray-600 text-gray-300">
        Featured
      </span>

      {/* Image */}
      <div className="h-36 flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-200 line-clamp-2">
        {product.title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 text-xs text-yellow-400 mt-1">
        {"★★★★★".slice(0, product.rating || 4)}
        <span className="text-gray-400">
          ({product.numReviews || 0})
        </span>
      </div>

      {/* Price */}
      <div className="mt-2 text-yellow-400 font-bold text-lg">
        ₹{product.price}
      </div>

      {/* Stock */}
      <div
        className={`text-xs mt-1 ${
          lowStock ? "text-red-400" : "text-green-400"
        }`}
      >
        {lowStock ? "Low stock" : "In stock"}
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => dispatch(addToCart(product._id))}
          className="flex-1 bg-yellow-400 text-black text-xs py-2 rounded-full font-semibold"
        >
          Add to Cart
        </button>

        <Link
          to={`/product/${product._id}`}
          className="flex-1 text-center text-xs py-2 rounded-full border border-gray-700 text-gray-300"
        >
          View
        </Link>
      </div>
    </div>
  );
}
