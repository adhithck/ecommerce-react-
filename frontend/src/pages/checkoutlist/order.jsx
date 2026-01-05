import Navbar from "../../components/Navbar";
import API from "../../api/api";
import { useSelector } from "react-redux";

export default function Order() {
  const cart = useSelector((state) => state.cart.items);

  const placeOrder = async () => {
    try {
      await API.post("/orders", {
        items: cart.map((i) => ({
          product: i.productId._id,
          qty: i.quantity,
          price: i.productId.price,
        })),
        total: cart.reduce(
          (sum, i) => sum + i.quantity * i.productId.price,
          0
        ),
        paymentMethod: "COD",
      });

      alert("Order placed successfully");
    } catch (err) {
      alert("Order failed");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#020617] min-h-screen text-gray-200 max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4">Checkout</h1>

        <button
          onClick={placeOrder}
          className="w-full bg-yellow-400 text-black py-2 rounded-full"
        >
          Place Order
        </button>
      </div>
    </>
  );
}
