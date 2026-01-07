import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/slice/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const product = item.productId;

  return (
    <div className="grid grid-cols-[100px_1fr] gap-4 bg-[#020617] border border-gray-800 rounded-xl p-4">
      {/* Image */}
      <div className="flex items-center justify-center border border-gray-800 rounded-lg p-2">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-20 object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold">{product.title}</h3>

        <p className="text-xs text-gray-400">
          Category: {product.category || "General"}
        </p>

        <p className="text-yellow-400 font-bold">₹{product.price}</p>

        <div className="flex justify-between items-center mt-2 flex-wrap gap-2">
          {/* Quantity */}
          <div className="flex items-center border border-gray-700 rounded-full overflow-hidden">
            <button
              onClick={() => dispatch(removeFromCart(product._id))}
              className="px-3 py-1"
            >
              −
            </button>

            <span className="px-3 text-sm border-x border-gray-700">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(addToCart(product._id))}
              className="px-3 py-1"
            >
              +
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={() => dispatch(removeFromCart(product._id))}
            className="text-xs text-red-400 border border-red-400 px-3 py-1 rounded-full"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
