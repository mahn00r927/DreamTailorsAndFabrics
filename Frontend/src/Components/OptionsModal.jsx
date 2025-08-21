import { useNavigate } from "react-router-dom";

export default function FabricOptionsModal({ isOpen, onClose, fabric, onAddToCart }) {
  const navigate = useNavigate();

  if (!isOpen || !fabric) return null;

  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(fabric);
    onClose();
  };

  const handleStitch = () => {
    navigate("/tailoring", { state: { fabric } });
    onClose();
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { fabric } });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-96 p-6 relative animate-fadeIn scale-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Fabric Image */}
        <div className="flex justify-center">
          <img
            src={fabric.image}
            alt={fabric.name}
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Fabric Info */}
        <h2 className="text-xl font-bold text-gray-800 text-center mt-3">
          {fabric.name}
        </h2>
        <p className="text-center text-gray-600">{fabric.brand}</p>
        <p className="text-center text-gray-700 mt-1 font-semibold">
          {fabric.price}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleStitch}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Choose Style For Stitch
          </button>
          <button
            onClick={handleCheckout}
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Direct Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
