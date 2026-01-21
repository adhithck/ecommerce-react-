import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "./AdminLayout";
import { fetchProducts, deleteProduct } from "../../store/slice/adminProductSlice";

export default function AdminProducts() {
  const dispatch = useDispatch();
  const products = useSelector(s => s.adminProducts.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-xl font-bold mb-6">Products</h1>

      <table className="w-full text-sm border border-gray-800">
        <thead className="bg-black">
          <tr>
            <th className="p-3">Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id} className="border-t border-gray-800">
              <td className="p-3">{p.title}</td>
              <td>₹{p.price}</td>
              <td>{p.countInStock}</td>
              <td>
                <button
                  onClick={() => dispatch(deleteProduct(p._id))}
                  className="text-red-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
