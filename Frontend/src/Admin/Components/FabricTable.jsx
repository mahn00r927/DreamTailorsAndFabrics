import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function FabricManager() {
  const [fabrics, setFabrics] = useState([
    {
      id: 1,
      name: "Cotton",
      price: "Rs.10,000",
      material: "100% Cotton",
      brand: "GulAhmed",
      image: "https://via.placeholder.com/80", 
    },
    {
      id: 2,
      name: "Silk",
      price: "Rs.2500",
      material: "Pure Silk",
      brand: "Khaadi",
      image: "https://via.placeholder.com/80",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFabric, setEditingFabric] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    material: "",
    brand: "",
    image: "",
  });

  const handleDelete = (id) => {
    setFabrics(fabrics.filter((fabric) => fabric.id !== id));
  };

  const handleAdd = () => {
    setEditingFabric(null);
    setFormData({
      name: "",
      price: "",
      material: "",
      brand: "",
      image: "",
    });
    setIsModalOpen(true);
  };

  const handleEdit = (fabric) => {
    setEditingFabric(fabric);
    setFormData(fabric);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingFabric) {
      // Update
      setFabrics((prev) =>
        prev.map((f) => (f.id === editingFabric.id ? { ...formData, id: f.id } : f))
      );
    } else {
      // Add new
      setFabrics((prev) => [
        ...prev,
        { ...formData, id: Date.now(), image: formData.image || "https://via.placeholder.com/80" },
      ]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Fabric Management</h1>
        <button
          onClick={handleAdd}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Fabric
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Material</th>
            <th className="p-3">Brand</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fabrics.map((fabric) => (
            <tr
              key={fabric.id}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="p-3">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="p-3">{fabric.name}</td>
              <td className="p-3">{fabric.price}</td>
              <td className="p-3">{fabric.material}</td>
              <td className="p-3">{fabric.brand}</td>
              <td className="p-3 flex justify-center gap-2">
                <button
                  onClick={() => handleEdit(fabric)}
                  className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(fabric.id)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white shadow-2xl rounded-xl w-96 p-6 relative">
            <h2 className="text-lg font-semibold mb-4">
              {editingFabric ? "Update Fabric" : "Add Fabric"}
            </h2>

            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Material"
              value={formData.material}
              onChange={(e) => setFormData({ ...formData, material: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Brand"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />
            {/* Later it can replace with upload image or pic */}
            <input
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
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
