import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((s) => s.auth);
  const cartStatus = useSelector((s) => s.cart.status);

  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    setAdded(false);

    const res = await dispatch(addToCart(product._id));

    if (res.meta.requestStatus === "fulfilled") {
      setAdded(true);

      // reset visual after 1.2s
      setTimeout(() => setAdded(false), 1200);
    }
  };

  return (
    <div className="bg-black border border-gray-800 rounded-xl p-4 text-gray-200 hover:border-yellow-400 transition">
      
      {/* Image */}
      {product.image && (
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain mb-3 transition-transform hover:scale-105"
          />
        </Link>
      )}

      {/* Title */}
      <h3 className="font-semibold text-sm mb-1 line-clamp-2">
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-yellow-400 font-bold mb-3">
        ₹{product.price}
      </p>

      {/* Add to Cart Button */}
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={cartStatus === "loading"}
        className={`
          w-full py-2 rounded-full text-sm font-semibold
          transition-all duration-300
          ${
            added
              ? "bg-green-500 text-black scale-105"
              : "bg-yellow-400 text-black hover:brightness-110 active:scale-95"
          }
          disabled:opacity-60 disabled:cursor-not-allowed
        `}
      >
        {added
          ? "✔ Added to Cart"
          : cartStatus === "loading"
          ? "Adding..."
          : "Add to Cart"}
      </button>
    </div>
  );
}
