import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export default function CartItems({ items }) {
  const dispatch = useDispatch();

  if (!items || items.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-6">
        Your cart is empty
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-black border border-gray-800 rounded-xl p-4"
        >
          <div>
            <h3 className="font-semibold text-white">
              {item.name}
            </h3>

            <p className="text-yellow-400 text-sm">
              ₹{item.price} × {item.qty}
            </p>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-400 text-sm hover:text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
