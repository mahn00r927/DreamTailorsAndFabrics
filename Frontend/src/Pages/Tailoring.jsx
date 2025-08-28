import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 add this
import kurta from "../assets/Pic/kurta.jpg";
import suit from "../assets/Pic/suit.jpg";
import trouser from "../assets/Pic/trouser.jpg";
import blazer from "../assets/Pic/blazer.jpg";
import shirt from "../assets/Pic/shirt.jpg";
import bandcollor from "../assets/Pic/band collor.jpg";
import roundcollor from "../assets/Pic/round collor.jpg";
import straightcuffs from "../assets/Pic/straight cuffs.jpg";
import embroideredcuffs from "../assets/Pic/embroidered cuffs.jpg";
import notchlapel from "../assets/Pic/notch lapel.jpg";
import peaklapel from "../assets/Pic/peak lapel.jpg";
import doublebreasted from "../assets/Pic/double breasted.jpg";
import slimfit from "../assets/Pic/slim fit.jpg";
import cuffed from "../assets/Pic/cuffed.jpg";
import pleated from "../assets/Pic/pleated.jpg";
import straightfit from "../assets/Pic/straight fit.jpg";
import singlebreasted from "../assets/Pic/single breasted.jpg";
import patchpockets from "../assets/Pic/patch pockets.jpg";
import classicfit from "../assets/Pic/classic fit.jpg";
import buttondowncollar from "../assets/Pic/button down.jpg";
import spreadcollar from "../assets/Pic/spread collor.jpg";
import frenchcuffs from "../assets/Pic/french cuffs.jpg";
import casualfit from "../assets/Pic/casual fit.jpg";

const garmentImages = {
  Kurta: kurta,
  Suit: suit,
  Trouser: trouser,
  Blazer: blazer,
  Shirt: shirt,
};

const styleImages = {
  "Band Collar": bandcollor,
  "Round Collar": roundcollor,
  "Straight Cuffs": straightcuffs,
  "Embroidered Cuffs": embroideredcuffs,
  "Notch Lapel": notchlapel,
  "Peak Lapel": peaklapel,
  "Double Breasted": doublebreasted,
  "Slim Fit": slimfit,
  Cuffed: cuffed,
  Pleated: pleated,
  "Straight Fit": straightfit,
  "Single Breasted": singlebreasted,
  "Patch Pockets": patchpockets,
  "Classic Fit": classicfit,
  "Button Down Collar": buttondowncollar,
  "Spread Collar": spreadcollar,
  "French Cuffs": frenchcuffs,
  "Casual Fit": casualfit,
};

const garments = {
  Kurta: {
    description: "Traditional and elegant wear for every occasion.",
    styles: [
      "Band Collar",
      "Round Collar",
      "Straight Cuffs",
      "Embroidered Cuffs",
    ],
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
    styles: [
      "Single Breasted",
      "Double Breasted",
      "Patch Pockets",
      "Classic Fit",
    ],
  },
  Shirt: {
    description: "Essential wardrobe piece for daily wear.",
    styles: [
      "Button Down Collar",
      "Spread Collar",
      "French Cuffs",
      "Casual Fit",
    ],
  },
};

export default function StitchingPage() {
  const [selectedGarment, setSelectedGarment] = useState(null);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const navigate = useNavigate(); // 👈 for navigation

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {Object.keys(garments).map((garment) => (
          <div
            key={garment}
            onClick={() => {
              setSelectedGarment(garment);
              setSelectedStyles([]);
            }}
            className={`p-6 rounded-2xl shadow-md cursor-pointer transition transform hover:scale-105 ${
              selectedGarment === garment
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <img
              src={garmentImages[garment]}
              alt={garment}
              className="w-60 h-50 object-cover rounded-xl mb-4"
            />

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
                {styleImages[style] && (
                  <img
                    src={styleImages[style]}
                    alt={style}
                    className="w-80 h-30 object-cover rounded-lg mb-2"
                  />
                )}
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

              {/* Add Measurement Button */}
              <button
                onClick={() => navigate("/measurement")} 
                className="mt-4 px-6 py-2 bg-orange-700 text-white font-semibold rounded-lg shadow hover:bg-orange-800 transition"
              >
                Add Measurement
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
