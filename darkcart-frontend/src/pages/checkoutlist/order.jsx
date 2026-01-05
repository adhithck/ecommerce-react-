import Navbar from "../../components/Navbar";

export default function Order() {
  return (
    <>
      <Navbar />
      <div className="p-6 bg-[#020617] min-h-screen text-gray-200 max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4">Checkout</h1>

        <input
          className="w-full p-2 mb-3 bg-black border border-gray-700 rounded"
          placeholder="Full Name"
        />

        <input
          className="w-full p-2 mb-3 bg-black border border-gray-700 rounded"
          placeholder="Address"
        />

        <button className="w-full bg-yellow-400 text-black py-2 rounded-full">
          Place Order
        </button>
      </div>
    </>
  );
}
