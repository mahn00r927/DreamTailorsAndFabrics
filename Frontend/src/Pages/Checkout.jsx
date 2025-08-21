import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200">
        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          {["Address", "Payment", "Review"].map((label, index) => (
            <div key={index} className="flex-1 text-center">
              <div
                className={`h-12 w-12 mx-auto flex items-center justify-center rounded-full text-white font-bold shadow-md transition-all duration-300 ${
                  step === index + 1
                    ? "bg-gray-800 scale-110"
                    : step > index + 1
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                {step > index + 1 ? <CheckCircle size={22} /> : index + 1}
              </div>
              <p className="text-sm mt-2 text-gray-800 font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 text-gray-700">
              <h2 className="font-semibold text-xl text-indigo-700">Review Order</h2>
              <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Address:</strong> {formData.address}, {formData.city}</p>
                <p><strong>Payment:</strong> **** **** **** {formData.cardNumber.slice(-4)}</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 border px-5 py-2.5 rounded-lg hover:bg-gray-100 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="ml-auto flex items-center gap-2 bg-gray-800 text-white px-6 py-2.5 rounded-lg hover:bg-gray-700 shadow-md transition"
            >
              Next <ArrowRight size={18} />
            </button>
          ) : (
            <button className="ml-auto bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 shadow-md transition">
              Confirm Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
