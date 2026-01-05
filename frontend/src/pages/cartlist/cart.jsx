import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import { removeFromCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchCart());
}, []);


  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#020617] min-h-screen text-gray-200">
        <h1 className="text-xl font-bold mb-4">Your Cart</h1>

        {cart.length === 0 && (
          <p className="text-gray-400">Cart is empty</p>
        )}

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between bg-black p-4 mb-3 rounded"
          >
            <span>{item.name}</span>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-400"
            >
              Remove
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <Link
            to="/checkout"
            className="inline-block mt-4 bg-yellow-400 text-black px-6 py-2 rounded-full"
          >
            Checkout
          </Link>
        )}
      </div>
    </>
  );
}
