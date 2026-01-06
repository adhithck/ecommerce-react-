export default function ManageOrders() {
  const orders = [
    {
      id: "ORD001",
      customer: "Rahul",
      total: 119997,
      status: "Pending",
    },
    {
      id: "ORD002",
      customer: "Anita",
      total: 79999,
      status: "Shipped",
    },
    {
      id: "ORD003",
      customer: "Kiran",
      total: 19999,
      status: "Delivered",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Manage Orders
      </h1>

      <div className="bg-white rounded shadow">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b font-semibold">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Total</span>
          <span>Status</span>
        </div>

        {/* Rows */}
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-4 gap-4 p-4 border-b items-center"
          >
            <span>{order.id}</span>
            <span>{order.customer}</span>
            <span>₹{order.total}</span>

            <select
              defaultValue={order.status}
              className="border rounded px-2 py-1"
            >
              <option>Pending</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
