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

  const handleDelete = (id) => {
    setFabrics(fabrics.filter((fabric) => fabric.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Fabric Management</h1>
        <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
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
                <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
    </div>
  );
}
