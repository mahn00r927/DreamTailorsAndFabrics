import { useState } from "react";
import { Trash2 } from "lucide-react";

import dress2 from "../assets/Pic/dress2.png";
import dress3 from "../assets/Pic/dress3.png";
import dress4 from "../assets/Pic/dress4.png";
import dress5 from "../assets/Pic/dress5.jpg";
import dress6 from "../assets/Pic/dress6.jpg";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      fabric: "Cotton Premium",
      style: "Kurta with Collar",
      measurements: "Chest: 38, Length: 42, Sleeves: 24",
      price: 4500,
      image: dress2,
    },
    {
      id: 2,
      fabric: "Silk Classic",
      style: "Blazer Fit",
      measurements: "Chest: 40, Length: 30, Sleeves: 25",
      price: 8500,
      image: dress3,
    },
    {
      id: 3,
      fabric: "Linen Comfort",
      style: "Casual Shirt",
      measurements: "Chest: 39, Length: 29, Sleeves: 23",
      price: 3200,
      image: dress4,
    },
    {
      id: 4,
      fabric: "Terry Cotton",
      style: "Formal Trouser",
      measurements: "Waist: 32, Length: 40",
      price: 2800,
      image: dress5,
    },
    {
      id: 5,
      fabric: "Velvet Royal",
      style: "3-Piece Suit",
      measurements: "Chest: 42, Shoulder: 18, Sleeve: 25",
      price: 12500,
      image: dress6,
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          🛒 My Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-gray-50"
              >
                {/* Left side with image + details */}
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.style}
                    className="w-28 h-28 rounded-xl object-cover shadow-md"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {item.fabric}
                    </h2>
                    <p className="text-sm text-gray-600">{item.style}</p>
                    <p className="text-sm text-gray-500 italic">
                      {item.measurements}
                    </p>
                  </div>
                </div>

                {/* Right side with price + delete */}
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                  <p className="text-xl font-semibold text-gray-800">
                    Rs. {item.price}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 rounded-full hover:bg-red-100 text-red-500 transition"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              </div>
            ))}

            {/* Summary Section */}
            <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold text-gray-800">
                Total:{" "}
                <span className="text-orange-600 text-2xl">Rs. {total}</span>
              </h2>

              <button className="px-8 py-3 bg-orange-600 text-white rounded-xl shadow-md hover:bg-orange-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
