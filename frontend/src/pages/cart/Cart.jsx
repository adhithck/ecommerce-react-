import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");
      setCart(res.data.items);
    } catch {
      navigate("/login");
    }
  };

  const removeItem = async (id) => {
    await API.delete("/cart/remove", {
      data: { productId: id },
    });
    fetchCart();
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

          {cart.map((item) => (
            <div
              key={item.productId._id}
              className="flex justify-between border-b py-4"
            >
              <span>{item.productId.name}</span>
              <span>₹{item.productId.price}</span>

              <button
                onClick={() => removeItem(item.productId._id)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {cart.length > 0 && (
            <button
              onClick={() => navigate("/order")}
              className="mt-6 bg-yellow-400 px-6 py-3 rounded font-semibold"
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </>
  );
}
