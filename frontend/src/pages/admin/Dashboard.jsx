export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-gray-500 text-sm">
            Total Products
          </h2>
          <p className="text-3xl font-bold mt-2">
            24
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-gray-500 text-sm">
            Total Orders
          </h2>
          <p className="text-3xl font-bold mt-2">
            18
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-gray-500 text-sm">
            Revenue
          </h2>
          <p className="text-3xl font-bold mt-2">
            ₹1,24,500
          </p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="flex gap-4">
          <a
            href="/admin/add-product"
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded font-semibold"
          >
            Add Product
          </a>

          <a
            href="/admin/products"
            className="bg-gray-900 text-white px-6 py-3 rounded font-semibold"
          >
            Manage Products
          </a>
        </div>
      </div>
    </div>
  );
}
