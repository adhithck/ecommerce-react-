import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";
import { useNavigate, Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((s) => s.auth);

  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    dispatch(addToCart(product._id));
  };

  return (
    <div className="bg-black border border-gray-800 rounded-xl p-4 text-gray-200">
      {/* Image */}
      {product.image && (
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain mb-3"
          />
        </Link>
      )}

      {/* Title */}
      <h3 className="font-semibold text-sm mb-1">{product.title}</h3>

      {/* Price */}
      <p className="text-yellow-400 font-bold mb-3">₹{product.price}</p>

      {/* Button */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="w-full bg-yellow-400 text-black py-2 rounded-full text-sm font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}
