import Navbar from "../../components/Navbar";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const navigate = useNavigate();

  const placeOrder = async () => {
    try {
      await API.post("/orders");
      alert("Order placed successfully");
      navigate("/");
    } catch {
      alert("Order failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-6">
            Confirm Order
          </h1>

          <button
            onClick={placeOrder}
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded font-semibold"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}
