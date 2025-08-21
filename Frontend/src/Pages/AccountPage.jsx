import { useState } from "react";
import { User, Lock, ShoppingBag, Settings, Ruler } from "lucide-react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [unit, setUnit] = useState("cm"); // cm/in toggle
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Default Profile",
      length: 170,
      chest: 90,
      waist: 70,
      shoulder: 40,
      sleeve: 60,
    },
  ]);
  const [newProfile, setNewProfile] = useState({
    length: "",
    chest: "",
    shoulder: "",
    sleeve: "",
    waist: "",
    name: "",
  });

  const handleAddProfile = (e) => {
    e.preventDefault();
    if (!newProfile.name) return;

    setProfiles([
      ...profiles,
      {
        id: Date.now(),
        name: newProfile.name,
        height: newProfile.length,
        chest: newProfile.chest,
        waist: newProfile.waist,
        sleeve: newProfile.sleeve,
      },
    ]);
    setNewProfile({
      name: "",
      height: "",
      chest: "",
      waist: "",
      shoulder: "",
      sleeve: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      {/* Profile Header */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-800"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800">Mahnoor</h2>
          <p className="text-gray-500">mahnoor@example.com</p>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition">
          Edit Profile
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="w-full max-w-4xl mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "overview"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <User size={18} /> Overview
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "orders"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <ShoppingBag size={18} /> Orders
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "settings"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <Settings size={18} /> Settings
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "security"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <Lock size={18} /> Security
        </button>
        <button
          onClick={() => setActiveTab("measurements")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
            activeTab === "measurements"
              ? "bg-orange-500 text-white"
              : "bg-white shadow hover:bg-gray-100"
          }`}
        >
          <Ruler size={18} /> Measurements
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl mt-6 bg-white shadow-md rounded-2xl p-6">
        {activeTab === "overview" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Account Overview
            </h3>
            <p className="text-gray-600">
              Welcome back, Here you can check your account details, order
              history, and update your settings.
            </p>
          </div>
        )}
        {activeTab === "orders" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              My Orders
            </h3>

            {/* Example Orders */}
            {[
              {
                id: "12345",
                product: "Kurta (Blue Cotton)",
                date: "Aug 15, 2025",
                status: "Shipped",
                timeline: [
                  "Order Placed",
                  "Processing",
                  "Shipped",
                  "Out for Delivery",
                ],
                currentStep: 2,
              },
              {
                id: "12346",
                product: "Blazer (Black Wool)",
                date: "Aug 10, 2025",
                status: "Delivered",
                timeline: [
                  "Order Placed",
                  "Processing",
                  "Shipped",
                  "Delivered",
                ],
                currentStep: 3,
              },
            ].map((order) => (
              <div
                key={order.id}
                className="mb-6 p-4 border rounded-md hover:shadow bg-gray-50"
              >
                {/* Order Header */}
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-800">
                    Order #{order.id} – {order.product}
                  </h4>
                  <span className="text-sm text-gray-500">{order.date}</span>
                </div>

                <p className="text-sm mb-4">
                  Status:{" "}
                  <span className="font-medium text-orange-600">
                    {order.status}
                  </span>
                </p>

                {/* Timeline */}
                <div className="flex items-center justify-between">
                  {order.timeline.map((step, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${
                          index <= order.currentStep
                            ? "bg-gray-800 text-white"
                            : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <p
                        className={`mt-2 text-xs text-center ${
                          index <= order.currentStep
                            ? "text-gray-500"
                            : "text-gray-500"
                        }`}
                      >
                        {step}
                      </p>
                      {index < order.timeline.length - 1 && (
                        <div
                          className={`h-1 w-full ${
                            index < order.currentStep
                              ? "bg-gray-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Account Settings
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <textarea
                placeholder="Address"
                rows="3"
                className="w-full p-3 border rounded-md resize-none focus:ring-2 focus:ring-orange-400 focus:outline-none md:col-span-2"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md w-full md:col-span-2">
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Security Settings
            </h3>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
              Change Password
            </button>
          </div>
        )}

        {activeTab === "measurements" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Measurement Profiles
            </h3>

            {/* Unit Toggle */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-medium text-gray-700">Unit:</span>
              <button
                type="button"
                onClick={() => setUnit("cm")}
                className={`px-3 py-1 rounded-md ${
                  unit === "cm"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                cm
              </button>
              <button
                type="button"
                onClick={() => setUnit("in")}
                className={`px-3 py-1 rounded-md ${
                  unit === "in"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                inches
              </button>
            </div>

            {/* Profiles List */}
            <ul className="space-y-3 mb-6">
              {profiles.map((profile) => (
                <li
                  key={profile.id}
                  className="p-4 border rounded-md flex justify-between items-center hover:shadow"
                >
                  <div>
                    <p className="font-medium">{profile.name}</p>
                    <p className="text-sm text-gray-600">
                      Chest: {profile.chest}
                      {unit}, Waist: {profile.waist}
                      {unit}, Length: {profile.length}
                      {unit}, Shoulder: {profile.shoulder}
                      {unit}, Sleeve: {profile.sleeve}
                      {unit} {/* 👈 added */}
                    </p>
                  </div>
                  <button className="text-orange-600 hover:underline">
                    Edit
                  </button>
                </li>
              ))}
            </ul>

            {/* Add New Profile */}
            <form
              onSubmit={handleAddProfile}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                placeholder="Profile Name"
                value={newProfile.name || ""}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, name: e.target.value })
                }
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
              <input
                type="number"
                placeholder={`Chest (${unit})`}
                value={newProfile.chest || ""}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, chest: e.target.value })
                }
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <input
                type="number"
                placeholder={`Waist (${unit})`}
                value={newProfile.waist || ""}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, waist: e.target.value })
                }
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <input
                type="number"
                placeholder={`Length (${unit})`}
                value={newProfile.length || ""}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, length: e.target.value })
                }
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <input
                type="number"
                placeholder={`Shoulder (${unit})`}
                value={newProfile.shoulder || ""}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, shoulder: e.target.value })
                }
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <input
                type="number"
                placeholder={`Sleeve (${unit})`}
                value={newProfile.sleeve || ""}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, sleeve: e.target.value })
                }
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md w-full md:col-span-2">
                Add Profile
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
