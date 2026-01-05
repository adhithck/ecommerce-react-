import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-black border border-gray-800 rounded-xl p-4">
      <div className="h-40 bg-gray-900 rounded mb-3" />

      <h3 className="font-semibold text-sm text-gray-200">
        {product.name}
      </h3>

      <p className="text-yellow-400 font-bold mt-1">
        ₹{product.price}
      </p>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full mt-3 bg-yellow-400 text-black py-2 rounded-full text-sm"
      >
        Add to Cart
      </button>

      <Link
        to={`/product/${product.id}`}
        className="block text-center text-sm mt-2 text-yellow-400"
      >
        View
      </Link>
    </div>
  );
}
