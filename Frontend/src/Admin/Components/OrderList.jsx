import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([
    { id: 1, customer: "Ali", status: "New", style: "Kurta", fabric: "Cotton" },
    {
      id: 2,
      customer: "Sara",
      status: "Cutting",
      style: "Shalwar Kameez",
      fabric: "Lawn",
    },
    {
      id: 3,
      customer: "Ahmed",
      status: "Stitching",
      style: "Sherwani",
      fabric: "Silk",
    },
    { id: 4, customer: "Hina", status: "QC", style: "Maxi", fabric: "Chiffon" },
    {
      id: 5,
      customer: "Usman",
      status: "Ready",
      style: "Waistcoat",
      fabric: "Terrycot",
    },
    {
      id: 6,
      customer: "Zara",
      status: "Shipped",
      style: "Gown",
      fabric: "Velvet",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 6;

  // --- Filtering, searching, and pagination (same as your code) ---
  const filtered = orders
    .filter((o) => statusFilter === "All" || o.status === statusFilter)
    .filter((o) => {
      const q = search.trim().toLowerCase();
      if (!q) return true;
      return (
        o.customer.toLowerCase().includes(q) ||
        o.style.toLowerCase().includes(q) ||
        o.fabric.toLowerCase().includes(q) ||
        String(o.id).includes(q)
      );
    })
    .sort((a, b) => b.id - a.id);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  // Replace original list with paginated (to reuse JSX loop)
  if (
    paginated.length !== orders.length ||
    !paginated.every((v, i) => v === orders[i])
  ) {
    orders.splice(0, orders.length, ...paginated);
  }

  // --- Handlers ---
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders((prev) => prev.filter((o) => o.id !== id));
      setSelectedOrder(null);
    }
  };

  const handleUpdate = (id) => {
    alert(
      `Update functionality for Order ID ${id} can go here (e.g. open modal form).`
    );
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Order List */}
      <div className="col-span-1 bg-white shadow p-4 rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Orders</h1>
        <ul className="space-y-3">
          {orders.map((order) => (
            <li
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className={`p-3 rounded-lg cursor-pointer border ${
                selectedOrder?.id === order.id
                  ? "bg-indigo-100 border-indigo-400"
                  : "hover:bg-gray-100"
              }`}
            >
              <p className="font-bold">{order.customer}</p>
              <p className="text-sm text-gray-600">{order.status}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Order Details */}
      <div className="col-span-2 bg-white shadow p-6  h-97 rounded-lg flex flex-col justify-between">
        {selectedOrder ? (
          <>
            <div>
              <h1 className="text-2xl font-semibold mb-4">Order Details</h1>
              <p>
                <strong>Customer:</strong> {selectedOrder.customer}
              </p>
              <p>
                <strong>Status:</strong> {selectedOrder.status}
              </p>
              <p>
                <strong>Style:</strong> {selectedOrder.style}
              </p>
              <p>
                <strong>Fabric:</strong> {selectedOrder.fabric}
              </p>

              <h3 className="mt-4 font-semibold">Measurements</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Chest: 38"</li>
                <li>Waist: 32"</li>
                <li>Length: 42"</li>
              </ul>
            </div>

            {/* Actions */}
           <div className="mt-1 flex gap-3">
  <button
    onClick={() => handleUpdate(selectedOrder.id)}
    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
  >
    <Pencil className="w-5 h-5 text-white cursor-pointer" />
    Update
  </button>
  <button
    onClick={() => handleDelete(selectedOrder.id)}
    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
  >
    <Trash2 className="w-5 h-5 text-white cursor-pointer" />
    Delete
  </button>
</div>

          </>
        ) : (
          <p className="text-gray-600">Select an order to view details.</p>
        )}
      </div>
    </div>
  );
}
