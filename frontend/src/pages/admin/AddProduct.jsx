import { useState } from "react";
import API from "../../api/api";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/products", {
        name,
        price,
        description,
      });
      alert("Product added successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">
        Add New Product
      </h1>

      <div className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="w-full border px-4 py-2 rounded"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold"
      >
        Add Product
      </button>
    </div>
  );
}
