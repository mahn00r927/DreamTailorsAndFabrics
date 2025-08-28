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

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    customer: "",
    status: "",
    style: "",
    fabric: "",
    chest: "",
    waist: "",
    length: "",
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders((prev) => prev.filter((o) => o.id !== id));
      setSelectedOrder(null);
    }
  };

  const handleUpdate = (id) => {
    const orderToEdit = orders.find((o) => o.id === id);
    setFormData({
      id: orderToEdit.id,
      status: orderToEdit.status,
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === formData.id ? { ...o, status: formData.status } : o
      )
    );
    setSelectedOrder((prev) =>
      prev ? { ...prev, status: formData.status } : prev
    );
    setIsEditing(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Order List */}
      <div className="bg-white shadow p-4 rounded-lg">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Orders
        </h1>
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
      <div className="md:col-span-2 bg-white shadow p-6 rounded-lg flex flex-col justify-between h-90">
        {selectedOrder ? (
          <>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-4">
                Order Details
              </h1>
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
                <li>Chest: 32</li>
                <li>Waist: 30</li>
                <li>Length: 42</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleUpdate(selectedOrder.id)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                <Pencil className="w-5 h-5" />
                Update
              </button>
              <button
                onClick={() => handleDelete(selectedOrder.id)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
              >
                <Trash2 className="w-5 h-5" />
                Delete
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600 text-center md:text-left">
            Select an order to view details.
          </p>
        )}
      </div>

      {/* Update Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Update Order Status</h2>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            >
              <option>New</option>
              <option>Cutting</option>
              <option>Stitching</option>
              <option>QC</option>
              <option>Ready</option>
              <option>Shipped</option>
            </select>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
