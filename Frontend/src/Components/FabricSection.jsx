import React, { useState } from "react";
import { Search } from "lucide-react"; 
import dress2 from "../assets/Pic/dress2.png";
import dress3 from "../assets/Pic/dress3.png";
import dress4 from "../assets/Pic/dress4.png";
import dress5 from "../assets/Pic/dress5.jpg";
import dress6 from "../assets/Pic/dress6.jpg";
import dress7 from "../assets/Pic/dress7.jpg";
import dress8 from "../assets/Pic/dress8.jpg";
import dress9 from "../assets/Pic/dress9.jpg";
import dress10 from "../assets/Pic/dress10.jpg";
import dress11 from "../assets/Pic/dress11.jpg";
import dress12 from "../assets/Pic/dress12.jpg";
import FabricOptionsModal from "./OptionsModal";

const images = [
  dress2, dress3, dress4, dress5, dress6,
  dress7, dress8, dress9, dress10, dress11, dress12
];

const products = Array.from({ length: 25 }, (_, i) => {
  const id = i + 1;
  const names = [
    "Cotton Fabric", "Wash & Wear", "Khaddar Fabric", "Linen Fabric",
    "Boski Fabric", "Latha Fabric", "Blended Fabric", "Suiting Fabric",
  ];
  const brands = [
    "GulAhmed", "Khaadi", "Sapphire", "Alkaram",
    "Ideas", "Bonanza", "Nishat", "So Kamal",
    "Junaid Jamshed", "Limelight", "Beechtree", "Generation"
  ];
  const types = [
    "Casual & Summer", "Wash & Wear (Easy Care)", "Winter Wear",
    "Linen", "Premium Men’s Fabric", "Shalwar Kameez", "Blended",
    "Suiting Fabrics", "Silk (Formal)", "Karandi (Warm)", "Twill",
  ];
  const prices = [
    "₨ 1,500 ", "₨ 2,200 ", "₨ 1,800", "₨ 2,800 ",
    "₨ 6,000 ", "₨ 2,000 ", "₨ 1,400 ", "₨ 3,500 ",
    "₨ 4,500 ", "₨ 2,600 ", "₨ 3,000", "₨ 7,000 "
  ];

  return {
    id,
    name: names[i % names.length],
    price: prices[i % prices.length],
    brand: brands[i % brands.length],
    type: types[i % types.length],
    image: images[i % images.length],
    color: ["Black", "White", "Blue", "Gray", "Brown"][i % 5],
    material: names[i % names.length].split(" ")[0],
  };
});

export function FabricSection() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [filters, setFilters] = useState({
    color: "",
    material: "",
    price: "",
  });

  // Filtering logic
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesColor = filters.color ? p.color === filters.color : true;
    const matchesMaterial = filters.material
      ? p.material === filters.material
      : true;
    const matchesPrice = filters.price
      ? p.price.includes(filters.price)
      : true;

    return matchesSearch && matchesColor && matchesMaterial && matchesPrice;
  });

  return (
    <section className="py-12 px-6 bg-gray-50 font-[Montserrat]" id="fabric">
      {/* Heading  */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0 text-center">
          Browse Our Fabrics
        </h2>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 w-full md:w-1/2 lg:w-1/3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 text-black w-5 h-5" />
            <input
              type="text"
              placeholder="Search fabrics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
        <select
          value={filters.material}
          onChange={(e) => setFilters({ ...filters, material: e.target.value })}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="">Filter by Material</option>
          <option value="Cotton">Cotton</option>
          <option value="Linen">Linen</option>
          <option value="Khaddar">Khaddar</option>
          <option value="Boski">Boski</option>
          <option value="Blended">Blended</option>
        </select>

        <select
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="">Filter by Price</option>
          <option value="₨ 1,500">₨ 1,500</option>
          <option value="₨ 2,000">₨ 2,000</option>
          <option value="₨ 3,000">₨ 3,000</option>
          <option value="₨ 4,000">₨ 4,000+</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center group cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover mb-4 transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-500">{product.brand}</p>
            <p className="text-gray-600">{product.type}</p>
            <p className="text-gray-800 font-bold mt-2">{product.price}</p>
            <button
              onClick={() => {
                setSelectedFabric(product);
                setModalOpen(true);
              }}
              className="mt-4 px-4 py-2 bg-[#ff9800] text-white rounded-lg hover:bg-orange-600 transition-all duration-300 w-25 font-semibold transform hover:scale-105 hover:shadow-md"
            >
              Select
            </button>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredProducts.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2 text-white font-medium rounded-lg bg-orange-700 hover:bg-orange-800 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
          >
            Show More
          </button>
        </div>
      )}

      {/* Options Modal */}
      <FabricOptionsModal
  isOpen={isModalOpen}
  onClose={() => setModalOpen(false)}
  fabric={selectedFabric}
  onAddToCart={(fabric) => {
    console.log("Fabric added to cart:", fabric);
  }}
/>

    </section>
  );
}
