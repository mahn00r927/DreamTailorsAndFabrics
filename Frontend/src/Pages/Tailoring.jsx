import { useState } from "react";
import MeasurementForm from "../Components/MeasurementForm";
const garments = {
  Kurta: {
    description: "Traditional and elegant wear for every occasion.",
    styles: ["Band Collar", "Round Collar", "Straight Cuffs", "Embroidered Cuffs"],
  },
  Suit: {
    description: "Formal attire for business and events.",
    styles: ["Notch Lapel", "Peak Lapel", "Double Breasted", "Slim Fit"],
  },
  Trouser: {
    description: "Comfortable and stylish bottom wear.",
    styles: ["Straight Fit", "Slim Fit", "Pleated", "Cuffed"],
  },
  Blazer: {
    description: "Smart-casual jacket for semi-formal wear.",
    styles: ["Single Breasted", "Double Breasted", "Patch Pockets", "Classic Fit"],
  },
  Shirt: {
    description: "Essential wardrobe piece for daily wear.",
    styles: ["Button Down Collar", "Spread Collar", "French Cuffs", "Casual Fit"],
  },
};

export default function StitchingPage() {
  const [selectedGarment, setSelectedGarment] = useState(null);
  const [selectedStyles, setSelectedStyles] = useState([]);

  // Toggle selection (add/remove style)
  const handleStyleClick = (style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Design & Templates – Tailoring
      </h1>

      {/* Garment Templates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.keys(garments).map((garment) => (
          <div
            key={garment}
            onClick={() => {
              setSelectedGarment(garment);
              setSelectedStyles([]); // reset styles when garment changes
            }}
            className={`p-6 rounded-2xl shadow-md cursor-pointer transition transform hover:scale-105 ${
              selectedGarment === garment
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2">{garment}</h2>
            <p className="text-sm">{garments[garment].description}</p>
          </div>
        ))}
      </div>

      {/* Design Styles */}
      {selectedGarment && (
        <div className="mt-10 max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedGarment} Styles
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {garments[selectedGarment].styles.map((style) => (
              <div
                key={style}
                onClick={() => handleStyleClick(style)}
                className={`p-4 rounded-xl shadow cursor-pointer text-center font-medium transition ${
                  selectedStyles.includes(style)
                    ? "bg-gray-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-indigo-100"
                }`}
              >
                {style}
              </div>
            ))}
          </div>

          {/* Selected Output */}
          {selectedStyles.length > 0 && (
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-center">
              <p className="text-lg text-gray-700">
                You selected:{" "}
                <span className="font-semibold text-gray-800">
                  {selectedGarment} – {selectedStyles.join(", ")}
                </span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
